/* ==========================================================================
   РОЗКЛАД ПОДАЧІ — показувати позиції, розділи чи сторінки лише в певні години

   Працює повністю в браузері, без сервера. Час беремо в часовому поясі
   ресторану, а не на пристрої гостя, тому літній/зимовий час і мандрівники
   з іншими налаштуваннями не ламають логіку.

   ВАЖЛИВО: це вітрина, а не захист. Гість може змінити годинник, відкрити
   код сторінки чи зайти прямим посиланням. Для меню цього достатньо; для
   чогось, що справді треба закрити, потрібен сервер.
   ========================================================================== */

const RESTAURANT_TZ = 'Europe/London';

/* -------------------------------------------------------------------------
   Місце для майбутнього бекенду.

   Поки порожньо — сайт живе на статичному overrides.js і нічого не запитує.
   Щойно зʼявиться сервер, достатньо вписати сюди базу — і стан почне
   приходити звідти, а адмін-панель буде зберігати туди ж. Більше нічого
   в проєкті міняти не треба.

   Контракт:
     GET  {API_BASE}/overrides  → 200 { updated, schedules, rules }
     PUT  {API_BASE}/overrides  → 204, тіло те саме, потрібна авторизація
   ------------------------------------------------------------------------- */
const API_BASE = '';                 // напр. 'https://menu.example.com/api'
const API_POLL_MS = 60000;           // як часто перепитувати стан

/* -------------------------------------------------------------------------
   Публікація без сервера.

   localStorage живе лише в одному браузері — а на iOS застосунок з
   домашнього екрана має ще й окреме сховище, тож чернетка панелі туди не
   потрапляє в принципі. Щоб зміни побачили всі, overrides.js мусить
   опинитися в репозиторії.

   Панель уміє записати його туди сама через GitHub API. Замість сервера —
   дрібнозернистий токен, який адмін вводить один раз на своєму телефоні.
   Токен лежить лише в localStorage цього пристрою й у репозиторій не
   потрапляє. Порожній owner вимикає режим — лишається експорт файлу.
   ------------------------------------------------------------------------- */
const GITHUB = {
  owner:  'Envyyy-uk',
  repo:   'Menu_Bar_and_Food_Guest',
  branch: 'claude/waiting-photo-task-4p3npi',
  path:   'assets/overrides.js'
};

let REMOTE_OVERRIDES = null;         // заповнюється, якщо сервер відповів

/* Дні: 0 = неділя … 6 = субота */
const SCHEDULES = {
  // Години, надруковані на самих меню:
  'set-main':   [{ days: [1, 0],          from: '12:00', to: '22:00' },
                 { days: [2, 3, 4, 5, 6], from: '12:00', to: '17:30' }],
  'set-brunch': [{ days: [6, 0],          from: '12:00', to: '16:30' }]

  // Свої розклади додавайте сюди, напр.:
  // 'breakfast': [{ days: [1,2,3,4,5], from: '07:00', to: '11:00' }],
  // 'late-bar':  [{ days: [4,5,6],     from: '22:00', to: '01:00' }]  // через північ — можна
};

/* --------------------------------------------------------------------------
   Що чим керується. mode: 'dim' — позиція лишається видимою й позначеною
   як недоступна зараз (для гостя зрозуміліше); 'hide' — зникає повністю.
   -------------------------------------------------------------------------- */
const SCHEDULE_OF = {
  setmenu: {                       // блоки сет-меню внизу сторінок
    lunch:  { key: 'set-main',   mode: 'dim' },
    dinner: { key: 'set-main',   mode: 'dim' },
    brunch: { key: 'set-brunch', mode: 'dim' }
  },
  page:    {},                     // напр.: brunch: { key: 'set-brunch', mode: 'dim' }
  section: {},                     // напр.: 'brunch': { key: 'set-brunch', mode: 'hide' }
  dish:    {}                      // напр.: 'sunday-roast': { key: 'sunday', mode: 'dim' }
};

/* -------------------------------------------------------------------------
   Поточний час у поясі ресторану. ?at=2026-08-01T13:30 підміняє його —
   зручно, щоб перевірити розклад, не чекаючи потрібної години.
   ------------------------------------------------------------------------- */
const DAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function restaurantNow() {
  const override = new URLSearchParams(location.search).get('at');
  if (override) {
    const d = new Date(override);
    if (!isNaN(d)) return { day: d.getDay(), minutes: d.getHours() * 60 + d.getMinutes(), preview: override };
  }
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: RESTAURANT_TZ, weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(new Date()).map(p => [p.type, p.value])
  );
  return { day: DAY_INDEX[parts.weekday], minutes: (+parts.hour) * 60 + (+parts.minute), preview: null };
}

const toMinutes = hhmm => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/* -------------------------------------------------------------------------
   Злиття: базові розклади + те, що зберегла адмін-панель.
   Чернетка в localStorage діє лише в браузері адміна; для гостей працює
   те, що лежить у overrides.js.
   ------------------------------------------------------------------------- */
function adminDraft() {
  try {
    const raw = localStorage.getItem('sw-overrides');
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

/* Пріоритет: статичний файл < сервер < локальна чернетка адміна */
function effectiveOverrides() {
  const base = typeof OVERRIDES === 'object' ? OVERRIDES : { schedules: {}, rules: {} };
  const layers = [base, REMOTE_OVERRIDES].filter(Boolean);
  const draft = adminDraft();
  if (draft) layers.push(draft);
  const merge = list => {
    const acc = { updated: '', schedules: {}, rules: {} };
    list.forEach(l => {
      acc.updated = l.updated || acc.updated;
      Object.assign(acc.schedules, l.schedules || {});
      Object.assign(acc.rules, l.rules || {});
    });
    return acc;
  };
  const pub = merge(layers.filter(l => l !== draft));
  const out = merge(layers);
  // «діє чернетка» має означати саме розбіжність: після публікації чернетка
  // збігається з опублікованим станом, і попереджати вже нема про що
  const same = (a, b) => JSON.stringify(a || {}) === JSON.stringify(b || {});
  out.local = !!draft && !(same(out.rules, pub.rules) && same(out.schedules, pub.schedules));
  return out;
}

/** Забрати стан із сервера. Без API_BASE — тиха заглушка. */
async function fetchOverrides() {
  if (!API_BASE) return false;
  try {
    const r = await fetch(API_BASE + '/overrides', { cache: 'no-store' });
    if (!r.ok) return false;
    const data = await r.json();
    if (!data || typeof data !== 'object') return false;
    REMOTE_OVERRIDES = data;
    return true;
  } catch (e) {
    return false;                    // сервер лежить — лишаємось на статиці
  }
}

/* -------------------------------------------------------------------------
   Свіжий стан без сервера.

   overrides.js підключений звичайним <script src>, тож його кешує браузер —
   а застосунок з домашнього екрана тримає таку копію особливо довго, бо
   кнопки «оновити» в нього немає. Через це щойно опубліковані зміни на
   сайті вже видно, а в PWA ще ні.

   Тому той самий файл перечитуємо запитом із міткою часу: інша адреса —
   кеш обходиться. Вміст після `const OVERRIDES =` — звичайний JSON, тож
   розбираємо його JSON.parse, без eval.
   ------------------------------------------------------------------------- */
async function refreshOverrides() {
  if (location.protocol === 'file:') return false;   // локальний файл — нема що оновлювати
  try {
    const r = await fetch('assets/overrides.js?ts=' + Date.now(), { cache: 'no-store' });
    if (!r.ok) return false;
    const txt = await r.text();
    const at = txt.indexOf('const OVERRIDES');
    const s = txt.indexOf('{', at), e = txt.lastIndexOf('}');
    if (at < 0 || s < 0 || e <= s) return false;
    const data = JSON.parse(txt.slice(s, e + 1));
    if (!data || typeof data !== 'object') return false;
    const changed = JSON.stringify(data) !== JSON.stringify(REMOTE_OVERRIDES);
    REMOTE_OVERRIDES = data;
    return changed;
  } catch (err) {
    return false;                    // офлайн — лишаємось на тому, що вже завантажено
  }
}

/** Те, що зараз опубліковано: свіже з мережі, інакше вбудоване у сторінку */
const publishedState = () => REMOTE_OVERRIDES || OVERRIDES;

/** Усі розклади: вбудовані + додані панеллю */
function allSchedules() {
  return Object.assign({}, SCHEDULES, effectiveOverrides().schedules);
}

/** Правило для конкретного елемента: 'dish:sunday-roast', 'page:brunch' … */
function ruleFor(scope, id) {
  const ov = effectiveOverrides().rules[scope + ':' + id];
  if (ov) return ov;
  const legacy = SCHEDULE_OF[scope] && SCHEDULE_OF[scope][id];
  if (legacy) return { state: 'auto', schedule: legacy.key, mode: legacy.mode || 'dim' };
  return null;
}

/** Чи діє розклад просто зараз */
function isServingNow(scheduleKey, now) {
  const ranges = allSchedules()[scheduleKey];
  if (!ranges) return true;                       // немає розкладу — доступно завжди
  return ranges.some(r => {
    const from = toMinutes(r.from), to = toMinutes(r.to);
    const wraps = to <= from;                     // діапазон через північ
    const dayNow = r.days.includes(now.day);
    if (!wraps) return dayNow && now.minutes >= from && now.minutes < to;
    const dayBefore = r.days.includes((now.day + 6) % 7);
    return (dayNow && now.minutes >= from) || (dayBefore && now.minutes < to);
  });
}

/** Людський опис розкладу обраною мовою: «Пн, Нд 12:00–22:00 · Вт–Сб 12:00–17:30» */
function describeSchedule(scheduleKey, lang) {
  const ranges = allSchedules()[scheduleKey];
  if (!ranges) return '';
  const names = t('sched.days', lang).split(',');
  return ranges.map(r => {
    // тиждень читаємо з понеділка, а не з неділі
    const weekPos = d => (d + 6) % 7;
    const sorted = [...r.days].sort((a, b) => weekPos(a) - weekPos(b));
    // послідовні дні стискаємо в діапазон
    const runs = [];
    sorted.forEach(d => {
      const last = runs[runs.length - 1];
      if (last && weekPos(d) === weekPos(last[last.length - 1]) + 1) last.push(d);
      else runs.push([d]);
    });
    const days = runs.map(run => run.length > 2
      ? `${names[run[0]]}–${names[run[run.length - 1]]}`
      : run.map(d => names[d]).join(', ')).join(', ');
    return `${days} ${r.from}–${r.to}`;
  }).join(' · ');
}

/* -------------------------------------------------------------------------
   Підсумковий стан елемента
   ------------------------------------------------------------------------- */
function statusOf(scope, id, now) {
  const rule = ruleFor(scope, id);
  if (!rule) return { open: true, rule: null };
  if (rule.state === 'off') return { open: false, closedManually: true, rule };
  if (rule.state === 'on') return { open: true, rule };
  if (!rule.schedule) return { open: true, rule };
  return { open: isServingNow(rule.schedule, now), rule };
}
