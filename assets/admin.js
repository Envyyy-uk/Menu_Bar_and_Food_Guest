/* ==========================================================================
   Адмін-панель: години подачі та ручне закриття позицій.

   Зберігає чернетку в localStorage цього браузера й уміє зібрати готовий
   assets/overrides.js — саме він робить зміни видимими для гостей.
   ========================================================================== */

const ael = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};
const aesc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const PAGES = ['brunch', 'lunch', 'dinner', 'canapes', 'desserts', 'drinks', 'allergens'];

let LANG = getLang();
const dayNames = () => t('sched.days', LANG).split(',');

let draft = { updated: '', schedules: {}, rules: {} };
let filter = '';
let tab = 'items';

let fromDraft = false;               // чернетка з localStorage, а не з файлу

function load() {
  try {
    const raw = localStorage.getItem('sw-overrides');
    if (raw) { draft = JSON.parse(raw); fromDraft = true; return; }
  } catch (e) { /* приватний режим */ }
  const pub = publishedState();
  fromDraft = false;
  draft = {
    updated: pub.updated || '',
    schedules: JSON.parse(JSON.stringify(pub.schedules || {})),
    rules: JSON.parse(JSON.stringify(pub.rules || {}))
  };
}

function persist() {
  published = false;                 // будь-яка правка знову розходиться з репозиторієм
  draft.updated = new Date().toISOString().slice(0, 16);
  try { localStorage.setItem('sw-overrides', JSON.stringify(draft)); } catch (e) { /* ignore */ }
  render();
}

/* -------------------------------------------------------- дані панелі -- */
function everyItem() {
  return DISHES.concat(DRINKS).map(d => ({
    scope: 'dish', id: d.id, name: d.name,
    sub: d.t ? (d.t[LANG] || d.t.en) : '',
    group: t('sec.' + d.section, LANG)
  })).sort((a, b) => a.group.localeCompare(b.group, LANG) || a.name.localeCompare(b.name));
}

function everySection() {
  const keys = new Set(DISHES.concat(DRINKS).map(d => d.section).filter(Boolean));
  WINE_ORDER.concat(DESSERT_WINE_ORDER).forEach(k => keys.add(k));
  return [...keys].map(k => ({ scope: 'section', id: k, name: t('sec.' + k, LANG), sub: I18N['sec.' + k] ? I18N['sec.' + k].en : '' }))
    .sort((a, b) => a.name.localeCompare(b.name, LANG));
}

function everyPage() {
  return PAGES.map(p => ({ scope: 'page', id: p, name: t('nav.' + p, LANG), sub: p + '.html' }))
    .concat(['lunch', 'dinner', 'brunch'].map(p => ({
      scope: 'setmenu', id: p, name: t('adm.setmenu', LANG) + ' · ' + t('nav.' + p, LANG), sub: p + '.html'
    })));
}

const ruleKey = (scope, id) => scope + ':' + id;

function currentRule(scope, id) {
  return draft.rules[ruleKey(scope, id)]
    || (SCHEDULE_OF[scope] && SCHEDULE_OF[scope][id]
        ? { state: 'auto', schedule: SCHEDULE_OF[scope][id].key, mode: SCHEDULE_OF[scope][id].mode || 'dim', inherited: true }
        : { state: 'auto', schedule: '', mode: 'dim' });
}

function setRule(scope, id, patch) {
  const key = ruleKey(scope, id);
  const next = Object.assign({ state: 'auto', schedule: '', mode: 'dim' }, currentRule(scope, id), patch);
  delete next.inherited;
  if (next.state === 'auto' && !next.schedule) delete draft.rules[key];
  else draft.rules[key] = next;
  persist();
}

/* ------------------------------------------------------------ рядок --- */
function itemRow(item) {
  const rule = currentRule(item.scope, item.id);
  const now = restaurantNow();
  const st = (function () {
    if (rule.state === 'off') return { open: false, manual: true };
    if (rule.state === 'on' || !rule.schedule) return { open: true };
    return { open: isServingNow(rule.schedule, now) };
  })();

  const row = ael('div', 'arow' + (st.open ? '' : ' closed'));
  row.appendChild(ael('div', 'aname',
    `${aesc(item.name)}<small>${aesc(item.sub || '')}${item.group ? ' · ' + aesc(item.group) : ''}</small>`));

  const states = ael('div', 'astates');
  ['auto', 'on', 'off'].forEach(val => {
    const b = ael('button', 'sbtn s-' + val + (rule.state === val ? ' on' : ''),
      aesc(t('adm.state.' + val, LANG)));
    b.type = 'button';
    b.addEventListener('click', () => setRule(item.scope, item.id, { state: val }));
    states.appendChild(b);
  });
  row.appendChild(states);

  const sel = ael('select', 'asel');
  sel.disabled = rule.state !== 'auto';
  const none = ael('option', null, aesc(t('adm.noSchedule', LANG)));
  none.value = '';
  sel.appendChild(none);
  Object.keys(allSchedules()).forEach(k => {
    const o = ael('option', null, aesc(k));
    o.value = k;
    if (rule.schedule === k) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', () => setRule(item.scope, item.id, { schedule: sel.value }));
  row.appendChild(sel);

  const mode = ael('button', 'mbtn', aesc(t(rule.mode === 'hide' ? 'adm.mode.hide' : 'adm.mode.dim', LANG)));
  mode.type = 'button';
  mode.title = t('adm.mode.title', LANG);
  mode.addEventListener('click', () =>
    setRule(item.scope, item.id, { mode: rule.mode === 'hide' ? 'dim' : 'hide' }));
  row.appendChild(mode);

  row.appendChild(ael('div', 'astatus', st.open
    ? `<span class="ok">${aesc(t('adm.status.open', LANG))}</span>`
    : `<span class="no">${aesc(t(st.manual ? 'adm.status.off' : 'adm.status.offhours', LANG))}</span>`));
  return row;
}

/* --------------------------------------------------------- розклади --- */
function scheduleEditor() {
  const box = ael('div', 'sched-editor');
  const schedules = allSchedules();

  Object.entries(schedules).forEach(([key, ranges]) => {
    const card = ael('div', 'scard');
    const builtIn = !!SCHEDULES[key] && !draft.schedules[key];
    card.appendChild(ael('h3', null,
      `${aesc(key)}${builtIn ? `<span class="tagline">${aesc(t('adm.builtIn', LANG))}</span>` : ''}`));

    ranges.forEach((r, i) => {
      const line = ael('div', 'sline');
      const days = ael('div', 'sdays');
      dayNames().forEach((dn, d) => {
        const b = ael('button', 'dbtn' + (r.days.includes(d) ? ' on' : ''), dn);
        b.type = 'button';
        b.addEventListener('click', () => {
          const copy = JSON.parse(JSON.stringify(schedules[key]));
          const set = new Set(copy[i].days);
          set.has(d) ? set.delete(d) : set.add(d);
          copy[i].days = [...set];
          draft.schedules[key] = copy;
          persist();
        });
        days.appendChild(b);
      });
      line.appendChild(days);

      ['from', 'to'].forEach(field => {
        const inp = ael('input', 'stime');
        inp.type = 'time';
        inp.value = r[field];
        inp.addEventListener('change', () => {
          const copy = JSON.parse(JSON.stringify(schedules[key]));
          copy[i][field] = inp.value;
          draft.schedules[key] = copy;
          persist();
        });
        line.appendChild(inp);
      });

      const del = ael('button', 'xbtn', '×');
      del.type = 'button';
      del.title = t('adm.removeRange', LANG);
      del.addEventListener('click', () => {
        const copy = JSON.parse(JSON.stringify(schedules[key])).filter((_, j) => j !== i);
        draft.schedules[key] = copy;
        persist();
      });
      line.appendChild(del);
      card.appendChild(line);
    });

    const add = ael('button', 'linkbtn', aesc(t('adm.addRange', LANG)));
    add.type = 'button';
    add.addEventListener('click', () => {
      const copy = JSON.parse(JSON.stringify(schedules[key]));
      copy.push({ days: [1, 2, 3, 4, 5], from: '12:00', to: '17:00' });
      draft.schedules[key] = copy;
      persist();
    });
    card.appendChild(add);
    card.appendChild(ael('p', 'shint', aesc(describeSchedule(key, LANG))));
    box.appendChild(card);
  });

  const create = ael('div', 'scard new');
  const inp = ael('input', 'sname');
  inp.placeholder = t('adm.newSchedulePh', LANG);
  const btn = ael('button', 'linkbtn', aesc(t('adm.newSchedule', LANG)));
  btn.type = 'button';
  btn.addEventListener('click', () => {
    const key = inp.value.trim();
    if (!key || allSchedules()[key]) return;
    draft.schedules[key] = [{ days: [1, 2, 3, 4, 5], from: '12:00', to: '17:00' }];
    persist();
  });
  create.append(inp, btn);
  box.appendChild(create);
  return box;
}

/* ------------------------------------------------------------ рендер -- */
function render() {
  const now = restaurantNow();
  document.getElementById('clock').textContent =
    `${dayNames()[now.day]} ${String(Math.floor(now.minutes / 60)).padStart(2, '0')}:` +
    `${String(now.minutes % 60).padStart(2, '0')} · ${RESTAURANT_TZ}`;

  document.querySelectorAll('.atab').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));

  // Головна пастка панелі: перемикач стоїть на Off, а гості бачать старе,
  // бо зміни ще не доїхали до репозиторію. Кажемо про це прямо.
  const flag = document.getElementById('unpub');
  if (flag) {
    flag.style.display = isUnpublished() ? '' : 'none';
    flag.textContent = t(ghReady() ? 'adm.unpublished' : 'adm.unpublished.manual', LANG);
  }

  const mount = document.getElementById('panel');
  mount.innerHTML = '';

  // пошук доречний лише у списках позицій
  document.getElementById('asearch').style.display = tab === 'schedules' ? 'none' : '';

  if (tab === 'schedules') { mount.appendChild(scheduleEditor()); return; }

  const source = tab === 'items' ? everyItem() : tab === 'sections' ? everySection() : everyPage();
  const q = filter.trim().toLowerCase();
  const rows = source.filter(x => !q ||
    (x.name + ' ' + (x.sub || '') + ' ' + (x.group || '')).toLowerCase().includes(q));

  const closedCount = source.filter(x => currentRule(x.scope, x.id).state === 'off').length;
  mount.appendChild(ael('p', 'acount',
    `${rows.length} ${aesc(t('adm.countOf', LANG))} ${source.length}` +
    (closedCount ? ` · ${aesc(t('adm.closedManually', LANG))}: ${closedCount}` : '')));

  const list = ael('div', 'alist');
  rows.forEach(x => list.appendChild(itemRow(x)));
  mount.appendChild(list);
}

/* ------------------------------------------------------------ експорт -- */
function buildFile() {
  const clean = { updated: draft.updated, schedules: draft.schedules, rules: draft.rules };
  return `/* ==========================================================================
   ${t('adm.fileHeader', LANG)}
   ${clean.updated}
   ========================================================================== */

const OVERRIDES = ${JSON.stringify(clean, null, 2)};
`;
}

/* --------------------------------------------------- публікація ------- */

/** Чи відрізняється чернетка від того, що вже лежить у репозиторії */
let published = false;               // опубліковано в цьому сеансі

function isUnpublished() {
  if (published) return false;
  const pub = publishedState();
  const same = (a, b) => JSON.stringify(a || {}) === JSON.stringify(b || {});
  return !(same(draft.rules, pub.rules) && same(draft.schedules, pub.schedules));
}

const ghToken = () => {
  try { return localStorage.getItem('sw-gh-token') || ''; } catch (e) { return ''; }
};
const ghReady = () => !!(GITHUB && GITHUB.owner && ghToken());

/** btoa працює з байтами, тому спершу переганяємо UTF-8 у latin1 */
function b64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(b => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

const ghUrl = () =>
  `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/contents/${GITHUB.path}`;

const ghHeaders = () => ({
  Authorization: 'Bearer ' + ghToken(),
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28'
});

/** Записати overrides.js у репозиторій. Повертає текст помилки або ''. */
async function publishToGitHub() {
  // sha поточного файлу обовʼязковий, інакше GitHub вважає це створенням нового
  const head = await fetch(`${ghUrl()}?ref=${encodeURIComponent(GITHUB.branch)}`,
    { headers: ghHeaders(), cache: 'no-store' });
  if (!head.ok) return `HTTP ${head.status}`;
  const sha = (await head.json()).sha;

  const put = await fetch(ghUrl(), {
    method: 'PUT',
    headers: Object.assign({ 'Content-Type': 'application/json' }, ghHeaders()),
    body: JSON.stringify({
      message: `Update menu availability (${draft.updated})`,
      content: b64(buildFile()),
      sha,
      branch: GITHUB.branch
    })
  });
  if (!put.ok) {
    let detail = '';
    try { detail = (await put.json()).message || ''; } catch (e) { /* ignore */ }
    return `HTTP ${put.status}${detail ? ' · ' + detail : ''}`;
  }
  return '';
}

/* ---------------------------------------------------- мова панелі ------ */
function applyAdminI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(n => (n.innerHTML = t(n.dataset.i18n, LANG)));
  document.querySelectorAll('[data-i18n-ph]').forEach(n => (n.placeholder = t(n.dataset.i18nPh, LANG)));
  const exportBtn = document.getElementById('export');
  if (exportBtn) {
    exportBtn.textContent = API_BASE ? t('adm.publish', LANG)
      : ghReady() ? t('adm.gh.publish', LANG)
      : t('adm.export', LANG);
  }
  const tokenBtn = document.getElementById('ghtoken');
  if (tokenBtn) {
    tokenBtn.style.display = (!API_BASE && GITHUB && GITHUB.owner) ? '' : 'none';
    tokenBtn.textContent = t(ghReady() ? 'adm.gh.tokenSet' : 'adm.gh.token', LANG);
  }
  // localStorage привʼязаний до походження; на телефоні панель і меню легко
  // опинитись за різними адресами — тоді чернетка «не працює» без жодної помилки
  const origin = document.getElementById('aorigin');
  if (origin) origin.textContent = location.origin + location.pathname.replace(/[^/]*$/, '');
  labelTopButton(LANG);
  document.querySelectorAll('.langbtn').forEach(b => b.classList.toggle('on', b.dataset.lang === LANG));
}

function buildAdminLangSwitch() {
  const host = document.querySelector('.nav');
  if (!host) return;
  const box = ael('div', 'langswitch');
  box.setAttribute('role', 'group');
  box.setAttribute('aria-label', t('lang.label', LANG));
  LANGS.forEach(l => {
    const b = ael('button', 'langbtn' + (l.code === LANG ? ' on' : ''), l.short);
    b.type = 'button';
    b.title = l.label;
    b.dataset.lang = l.code;
    b.addEventListener('click', () => {
      if (l.code === LANG) return;
      setLang(l.code);
      LANG = l.code;
      applyAdminI18n();
      render();
    });
    box.appendChild(b);
  });
  host.after(box);
}

function initAdmin() {
  load();
  buildAdminLangSwitch();
  buildTopButton();
  applyAdminI18n();
  // панель теж могла завантажитись із кешу — звіряємось із опублікованим
  (API_BASE ? fetchOverrides() : refreshOverrides()).then(ok => {
    if (!ok) return;
    if (!fromDraft) load();          // своєї чернетки немає — беремо свіжий стан
    render();
  });

  document.querySelectorAll('.atab').forEach(b =>
    b.addEventListener('click', () => { tab = b.dataset.tab; render(); }));

  const search = document.getElementById('asearch');
  search.addEventListener('input', () => { filter = search.value; render(); });

  const exportBtn = document.getElementById('export');

  exportBtn.addEventListener('click', async () => {
    // GitHub — те саме «опублікувати», лише без власного сервера
    if (!API_BASE && ghReady()) {
      exportBtn.disabled = true;
      exportBtn.textContent = t('adm.gh.publishing', LANG);
      const err = await publishToGitHub();
      if (!err) {
        // OVERRIDES у памʼяті лишився старим до перезавантаження, тож про
        // збіг із репозиторієм пам'ятаємо окремо
        published = true;
        exportBtn.textContent = t('adm.gh.published', LANG);
        render();                    // попередження про неопубліковане знімаємо одразу
      } else {
        exportBtn.textContent = t('adm.gh.failed', LANG) + ' ' + err;
      }
      exportBtn.disabled = false;
      setTimeout(() => { applyAdminI18n(); render(); }, err ? 6000 : 3000);
      return;
    }
    // З бекендом — публікуємо одразу. Без нього — віддаємо файл на заміну.
    if (API_BASE) {
      exportBtn.disabled = true;
      try {
        const r = await fetch(API_BASE + '/overrides', {
          method: 'PUT',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ updated: draft.updated, schedules: draft.schedules, rules: draft.rules })
        });
        exportBtn.textContent = r.ok ? t('adm.published', LANG) : `HTTP ${r.status}`;
        if (r.ok) { try { localStorage.removeItem('sw-overrides'); } catch (e) { /* ignore */ } }
      } catch (e) {
        exportBtn.textContent = t('adm.offline', LANG);
      }
      exportBtn.disabled = false;
      setTimeout(() => (exportBtn.textContent = t('adm.publish', LANG)), 2500);
      return;
    }
    const blob = new Blob([buildFile()], { type: 'text/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'overrides.js';
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById('copy').addEventListener('click', async () => {
    const btn = document.getElementById('copy');
    try {
      await navigator.clipboard.writeText(buildFile());
      btn.textContent = t('adm.copied', LANG);
    } catch (e) {
      const ta = document.getElementById('dump');
      ta.value = buildFile();
      ta.style.display = 'block';
      ta.select();
      btn.textContent = t('adm.selected', LANG);
    }
    setTimeout(() => (btn.textContent = t('adm.copy', LANG)), 2500);
  });

  document.getElementById('ghtoken').addEventListener('click', () => {
    const now = ghToken();
    // порожній рядок стирає токен — вихід із чужого телефона має бути простим
    const next = prompt(t('adm.gh.tokenPrompt', LANG), now);
    if (next === null) return;
    try {
      if (next.trim()) localStorage.setItem('sw-gh-token', next.trim());
      else localStorage.removeItem('sw-gh-token');
    } catch (e) { /* приватний режим */ }
    applyAdminI18n();
    render();
  });

  document.getElementById('reset').addEventListener('click', () => {
    if (!confirm(t('adm.confirmReset', LANG))) return;
    try { localStorage.removeItem('sw-overrides'); } catch (e) { /* ignore */ }
    load();
    render();
  });

  render();
  setInterval(render, 30000);
}
