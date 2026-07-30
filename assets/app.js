/* ==========================================================================
   Рендеринг сторінок, перемикачі мови й теми, фільтр за алергенами
   ========================================================================== */

let LANG = getLang();

const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* -------------------------------------------------------------------------
   Злиття офіційних даних із реконструйованими
   ------------------------------------------------------------------------- */
(function mergeOfficial() {
  DISHES.push(...DRESSINGS, ...CANAPES);
  DRINKS.push(...DESSERT_COCKTAILS);

  DISHES.concat(DRINKS).forEach(d => {
    const off = OFFICIAL[d.id];
    if (off) Object.assign(d, off);
    else if (COMPONENT_UPGRADES[d.id]) Object.assign(d, COMPONENT_UPGRADES[d.id]);
  });

  MENU_ORDER.lunch.splice(MENU_ORDER.lunch.indexOf('shellfish'), 0, 'dressings');
  MENU_ORDER.dinner.splice(MENU_ORDER.dinner.indexOf('shellfish'), 0, 'dressings');
  MENU_ORDER.brunch.splice(MENU_ORDER.brunch.indexOf('shellfish'), 0, 'dressings');
  DRINK_ORDER.splice(DRINK_ORDER.indexOf('virgin'), 0, 'dessertcocktails');
})();

/* ------------------------------------------------------- список складу -- */
function ingLine(item) {
  if (typeof item === 'string') return cap(ingName(item, LANG));
  const [head, subs] = item;
  const parts = subs.map(k => ingName(k, LANG)).join(', ');
  return head.startsWith('~')
    ? `${cap(ingName(head, LANG))} (${parts})`
    : `${cap(ingName(head, LANG))}: ${parts}`;
}

function ingSearchText(list) {
  const out = [];
  list.forEach(item => {
    const keys = typeof item === 'string' ? [item] : [item[0], ...item[1]];
    keys.forEach(k => LANGS.forEach(l => out.push(ingName(k, l.code))));
  });
  return out.join(' ');
}

/* ------------------------------------------------------------- мітки --- */
function tagList(d, keys, maybe) {
  const box = el('div', 'tags');
  keys.forEach(k => {
    if (!ALLERGENS[k]) return;
    const tag = el('span', 'tag' + (maybe ? ' maybe' : ''));
    // конкретний злак / горіх / вид, якщо його названо в офіційному листі
    let detail = '';
    if (k === 'gluten' && d.g && d.g.length) detail = d.g.map(g => ingName(g, LANG)).join(', ');
    if (d.n && d.n[k]) detail = ingName(d.n[k], LANG);
    const removable = !maybe && (d.r || []).includes(k);
    tag.title = aNote(k, LANG) + (removable ? ' · ' + t('alg.removable', LANG) : '');
    tag.innerHTML =
      `<span aria-hidden="true">${ALLERGENS[k].icon}</span>${esc(aName(k, LANG))}` +
      (detail ? `<span class="cereal">(${esc(detail)})</span>` : '') +
      (removable ? `<span class="rem" title="${esc(t('alg.removable', LANG))}">R</span>` : '');
    box.appendChild(tag);
  });
  return box;
}

/* --------------------------------------------------------- джерело --- */
function sourceBadge(d) {
  if (d.src && SOURCES[d.src]) {
    const s = SOURCES[d.src];
    const b = el('p', 'srcbadge',
      `<span class="dot" aria-hidden="true">●</span>${esc(t('src.official', LANG))} · ${esc(t('src.reviewed', LANG))} ${esc(s.date)}`);
    b.title = s.title + ' · ' + s.by + ' · ' + s.date;
    return b;
  }
  return el('p', 'srcbadge est',
    `<span class="dot" aria-hidden="true">○</span>${esc(t('src.reconstructed', LANG))}`);
}

/* ------------------------------------------------------- картка страви -- */
function dishCard(d) {
  const card = el('article', 'dish');
  card.id = 'd-' + d.id;
  card.dataset.allergens = (d.a || []).join(' ');
  card.dataset.maybe = (d.m || []).join(' ');
  card.dataset.search = [
    d.name, d.desc || '',
    Object.values(d.t || {}).join(' '),
    ingSearchText(d.ing || [])
  ].join(' ').toLowerCase();

  const head = el('div', 'dish-head');
  head.appendChild(el('h3', null, esc(d.name) +
    (d.veg ? '<span class="badge-veg">veg</span>' : '') +
    (d.nonalc ? '<span class="badge-veg">0%</span>' : '')));
  if (d.price) head.appendChild(el('span', 'price', esc(d.price)));
  else if (d.price === null) head.appendChild(el('span', 'price na', esc(t('dish.noPrice', LANG))));
  card.appendChild(head);

  if (d.t) card.appendChild(el('p', 'ua', esc(d.t[LANG] || d.t.en)));
  if (d.meta) card.appendChild(el('p', 'meta', esc(d.meta)));
  if (d.desc) {
    const p = el('p', 'desc', esc(d.desc));
    p.title = t('note.menuText', LANG);
    card.appendChild(p);
  }

  if (d.ing && d.ing.length) {
    card.appendChild(el('p', 'ing-label', esc(t('dish.ingredients', LANG))));
    const ul = el('ul', 'ing');
    d.ing.forEach(i => ul.appendChild(el('li', null, esc(ingLine(i)))));
    card.appendChild(ul);
  }

  card.appendChild(el('p', 'alg-label', esc(t('dish.allergens', LANG))));
  if (d.a && d.a.length) {
    card.appendChild(tagList(d, d.a, false));
  } else {
    const box = el('div', 'tags');
    box.appendChild(el('span', 'tag none',
      esc(d.noAllergens ? '✓ ' + t('alg.none', LANG) : t('dish.none', LANG))));
    card.appendChild(box);
  }

  if (d.m && d.m.length) {
    card.appendChild(el('p', 'alg-label', esc(t('dish.may', LANG))));
    card.appendChild(tagList(d, d.m, true));
  }

  if ((d.r || []).length) card.appendChild(el('p', 'rem-note', esc(t('alg.removableFull', LANG))));

  card.appendChild(sourceBadge(d));
  (d.w || []).forEach(k => card.appendChild(el('p', 'warn', esc(t(k, LANG)))));
  return card;
}

/* ------------------------------------------------------------ розділ --- */
function sectionBlock(key, noteKey) {
  const sec = el('section', 'section');
  sec.id = 's-' + key;
  const en = I18N['sec.' + key] ? I18N['sec.' + key].en : key;
  const loc = t('sec.' + key, LANG);
  if (loc !== en) sec.appendChild(el('h2', null, esc(loc)));
  sec.appendChild(el('p', 'section-en', esc(en)));
  if (noteKey) sec.appendChild(el('p', 'section-note', esc(t(noteKey, LANG))));
  return sec;
}

const SECTION_HINTS = { dressings: 'note.dressings', dessertcocktails: 'note.dessertcocktails' };

/* -------------------------------------------------------- меню зі страв -- */
function renderMenu(menuKey, mount) {
  MENU_ORDER[menuKey].forEach(secKey => {
    const items = DISHES.filter(d => d.section === secKey && d.menus.includes(menuKey));
    if (!items.length) return;
    const sec = sectionBlock(secKey, SECTION_HINTS[secKey]);

    let grid = el('div', 'grid');
    let currentGroup = null;
    items.forEach(d => {
      if (d.group && d.group !== currentGroup) {
        currentGroup = d.group;
        sec.appendChild(grid);
        grid = el('div', 'grid');
        sec.appendChild(el('p', 'section-note', '— ' + esc(d.group) + ' —'));
      }
      grid.appendChild(dishCard(d));
    });
    sec.appendChild(grid);
    mount.appendChild(sec);
  });
}

/* ---------------------------------------------------------- канапе ------ */
function renderCanapes(mount) {
  const sec = sectionBlock('canapes');
  const grid = el('div', 'grid');
  DISHES.filter(d => d.section === 'canapes').forEach(d => grid.appendChild(dishCard(d)));
  sec.appendChild(grid);
  mount.appendChild(sec);
}

/* ------------------------------------------------------------- сет-меню -- */
function renderSetMenu(menuKey, mount) {
  const sm = SET_MENUS[menuKey];
  if (!sm) return;
  const box = el('div', 'setmenu');
  box.appendChild(el('h2', null, esc(t(sm.titleKey, LANG))));
  box.appendChild(el('p', 'price', esc(t('set.price', LANG))));
  box.appendChild(el('p', 'hours', esc(t(sm.hoursKey, LANG))));

  const courses = el('div', 'courses');
  sm.courses.forEach(c => {
    const col = el('div');
    col.appendChild(el('h3', null, esc(t(c.key, LANG))));
    const ul = el('ul');
    c.items.forEach(id => {
      const d = DISHES.find(x => x.id === id);
      if (!d) return;
      const page = document.getElementById('d-' + d.id) ? '' : d.menus[0] + '.html';
      ul.appendChild(el('li', null, `<a href="${page}#d-${d.id}">${esc(d.name)}</a>`));
    });
    col.appendChild(ul);
    if (c.extraKey) col.appendChild(el('p', 'extra', esc(t(c.extraKey, LANG))));
    courses.appendChild(col);
  });
  box.appendChild(courses);
  mount.appendChild(box);
}

/* --------------------------------------------------------------- напої -- */
function renderDrinks(mount) {
  DRINK_ORDER.forEach(secKey => {
    const items = DRINKS.filter(d => d.section === secKey);
    if (!items.length) return;
    const sec = sectionBlock(secKey, SECTION_NOTES[secKey] || SECTION_HINTS[secKey]);
    const grid = el('div', 'grid');
    items.forEach(d => grid.appendChild(dishCard(d)));
    sec.appendChild(grid);
    mount.appendChild(sec);
  });

  WINE_ORDER.forEach(secKey => {
    const items = WINES.filter(w => w.section === secKey);
    if (!items.length) return;
    const sec = el('section', 'section');
    sec.id = 's-' + secKey;
    sec.appendChild(el('h2', null, esc(t('sec.' + secKey, LANG))));
    sec.appendChild(el('p', 'section-en', `${esc(I18N['sec.' + secKey].en)} · ${WINE_SERVE[secKey]}`));
    sec.appendChild(el('p', 'section-note', esc(t('note.wines', LANG))));
    const ul = el('ul', 'winelist');
    items.forEach(w => {
      const li = el('li');
      li.dataset.allergens = 'sulphites';
      li.dataset.maybe = '';
      li.dataset.search = (w.name + ' ' + w.region).toLowerCase();
      const info = el('div');
      info.innerHTML = `<span class="wname">${esc(w.name)}</span><br>
        <span class="wregion">${esc(w.region)}</span>`;
      info.appendChild(tagList({}, ['sulphites'], false));
      li.appendChild(info);
      li.appendChild(el('span', 'wprice', esc(w.price)));
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    mount.appendChild(sec);
  });
}

/* ---------------------------------------------------- матриця алергенів -- */
function renderMatrix(mount) {
  const groups = [];
  MENU_ORDER.brunch.forEach(k => {
    const items = DISHES.filter(d => d.section === k);
    if (items.length) groups.push({ key: k, items });
  });
  ['canapes'].forEach(k => {
    const items = DISHES.filter(d => d.section === k);
    if (items.length) groups.push({ key: k, items });
  });
  DRINK_ORDER.forEach(k => {
    const items = DRINKS.filter(d => d.section === k);
    if (items.length) groups.push({ key: k, items });
  });

  const scroll = el('div', 'table-scroll');
  const table = el('table', 'matrix');

  const thead = el('thead');
  const hr = el('tr');
  hr.appendChild(el('th', 'name', esc(t('matrix.item', LANG))));
  ALLERGEN_KEYS.forEach(k => {
    const th = el('th', null, `${ALLERGENS[k].icon}<br>${esc(aShort(k, LANG))}`);
    th.title = aName(k, LANG);
    hr.appendChild(th);
  });
  thead.appendChild(hr);
  table.appendChild(thead);

  const tbody = el('tbody');
  groups.forEach(group => {
    const catRow = el('tr');
    const td = el('td', 'matrix-cat', esc(t('sec.' + group.key, LANG)));
    td.colSpan = ALLERGEN_KEYS.length + 1;
    catRow.appendChild(td);
    tbody.appendChild(catRow);

    group.items.forEach(d => {
      const tr = el('tr');
      tr.dataset.allergens = (d.a || []).join(' ');
      tr.dataset.maybe = (d.m || []).join(' ');
      const sub = d.t ? (d.t[LANG] || d.t.en) : '';
      tr.dataset.search = (d.name + ' ' + Object.values(d.t || {}).join(' ')).toLowerCase();
      const official = d.src ? ' <sup title="' + esc(t('src.official', LANG)) + '">✓</sup>' : '';
      tr.appendChild(el('td', 'name', `${esc(d.name)}${official}<small>${esc(sub)}</small>`));
      ALLERGEN_KEYS.forEach(k => {
        let mark = '', cls = '', title = '';
        if ((d.a || []).includes(k)) {
          mark = '●'; cls = 'mark-yes'; title = t('legend.contains', LANG);
          if ((d.r || []).includes(k)) { mark += '<sup>R</sup>'; title += ' · ' + t('legend.removable', LANG); }
        } else if ((d.m || []).includes(k)) {
          mark = '○'; cls = 'mark-maybe'; title = t('legend.may', LANG);
        }
        const cell = el('td', cls, mark);
        if (title) cell.title = aName(k, LANG) + ' — ' + title;
        tr.appendChild(cell);
      });
      tbody.appendChild(tr);
    });
  });
  table.appendChild(tbody);
  scroll.appendChild(table);
  mount.appendChild(scroll);
}

/* ------------------------------------------------------- легенда 14-ти -- */
function renderLegend(mount) {
  const all = DISHES.concat(DRINKS);
  const box = el('div', 'legend');
  ALLERGEN_KEYS.forEach(k => {
    const yes = all.filter(d => (d.a || []).includes(k)).length;
    const may = all.filter(d => (d.m || []).includes(k)).length;
    const item = el('div', 'item');
    item.innerHTML =
      `<span class="cnt">${yes} / ${may}</span>` +
      `<b>${ALLERGENS[k].icon} ${esc(aName(k, LANG))}</b>` +
      `<small>${esc(aNote(k, LANG))}</small>`;
    box.appendChild(item);
  });
  mount.appendChild(box);
}

/* ------------------------------------------------- панель пошуку/фільтра -- */
function buildToolbar(mount, opts) {
  const bar = el('div', 'toolbar');
  const wrap = el('div', 'wrap');

  const search = el('input', 'search');
  search.type = 'search';
  search.placeholder = t(opts.searchKey || 'tb.search', LANG);
  search.setAttribute('aria-label', t(opts.searchKey || 'tb.search', LANG));

  const toggle = el('button', 'filter-toggle', esc(t('tb.filter', LANG)));
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');

  const count = el('span', 'result-count');
  wrap.append(search, toggle, count);
  bar.appendChild(wrap);

  const filtersWrap = el('div', 'wrap');
  const filters = el('div', 'filters');
  filters.appendChild(el('p', 'hint', esc(t('tb.hint', LANG))));
  const chips = el('div', 'chips');
  ALLERGEN_KEYS.forEach(k => {
    const label = el('label', 'chip');
    label.title = aNote(k, LANG);
    label.innerHTML = `<input type="checkbox" value="${k}"><span aria-hidden="true">${ALLERGENS[k].icon}</span>${esc(aName(k, LANG))}`;
    chips.appendChild(label);
  });
  filters.appendChild(chips);
  const clear = el('button', 'clear-btn', esc(t('tb.clear', LANG)));
  clear.type = 'button';
  filters.appendChild(clear);
  filtersWrap.appendChild(filters);
  bar.appendChild(filtersWrap);
  mount.appendChild(bar);

  toggle.addEventListener('click', () => {
    const open = filters.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const apply = () => {
    const active = [...chips.querySelectorAll('input:checked')].map(i => i.value);
    chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.querySelector('input').checked));
    const q = search.value.trim().toLowerCase();
    let shown = 0, flagged = 0;

    document.querySelectorAll('.dish, .winelist li, table.matrix tbody tr[data-search]').forEach(node => {
      const has = (node.dataset.allergens || '').split(' ').filter(Boolean);
      const may = (node.dataset.maybe || '').split(' ').filter(Boolean);
      const hit = active.some(a => has.includes(a) || may.includes(a));
      const match = !q || (node.dataset.search || '').includes(q);
      node.style.display = match ? '' : 'none';
      node.classList.toggle('flagged', hit);
      if (match) { shown++; if (hit) flagged++; }
    });

    document.querySelectorAll('.section').forEach(sec => {
      const nodes = sec.querySelectorAll('.dish, .winelist li');
      if (!nodes.length) return;
      sec.style.display = [...nodes].some(n => n.style.display !== 'none') ? '' : 'none';
    });

    document.querySelectorAll('table.matrix tbody tr').forEach(tr => {
      if (tr.dataset.search) return;
      let any = false;
      for (let n = tr.nextElementSibling; n && n.dataset.search; n = n.nextElementSibling) {
        if (n.style.display !== 'none') { any = true; break; }
      }
      tr.style.display = any ? '' : 'none';
    });

    count.textContent = (active.length || q)
      ? `${shown} ${t('count.items', LANG)}${flagged ? ` · ${flagged} ${t('tb.flagged', LANG)}` : ''}`
      : '';
  };

  search.addEventListener('input', apply);
  chips.addEventListener('change', apply);
  clear.addEventListener('click', () => {
    chips.querySelectorAll('input').forEach(i => (i.checked = false));
    search.value = '';
    apply();
  });
}

/* ------------------------------------------------- статичні написи HTML -- */
function applyI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(n => {
    n.innerHTML = t(n.dataset.i18n, LANG);
  });
}

/* ---------------------------------------------------------- тема -------- */
const THEMES = ['auto', 'light', 'dark'];

function getTheme() {
  try {
    const saved = localStorage.getItem('sw-theme');
    if (THEMES.includes(saved)) return saved;
  } catch (e) { /* приватний режим */ }
  return 'auto';
}

function applyTheme(mode) {
  if (mode === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.dataset.theme = mode;
  try { localStorage.setItem('sw-theme', mode); } catch (e) { /* ігноруємо */ }
}

/* ---------------------------------------------- перемикачі у шапці ------ */
function buildSwitches() {
  const host = document.querySelector('.nav');
  if (!host) return;

  const langs = el('div', 'langswitch');
  langs.setAttribute('role', 'group');
  langs.setAttribute('aria-label', t('lang.label', LANG));
  LANGS.forEach(l => {
    const b = el('button', 'langbtn' + (l.code === LANG ? ' on' : ''), l.short);
    b.type = 'button';
    b.title = l.label;
    b.dataset.lang = l.code;
    b.addEventListener('click', () => {
      if (l.code === LANG) return;
      setLang(l.code);
      LANG = l.code;
      renderPage();
    });
    langs.appendChild(b);
  });
  host.after(langs);

  const themes = el('div', 'themeswitch');
  themes.setAttribute('role', 'group');
  themes.setAttribute('aria-label', t('theme.label', LANG));
  let current = getTheme();
  THEMES.forEach(mode => {
    const b = el('button', 'themebtn' + (mode === current ? ' on' : ''), t('theme.' + mode, LANG));
    b.type = 'button';
    b.dataset.theme = mode;
    b.addEventListener('click', () => {
      current = mode;
      applyTheme(mode);
      themes.querySelectorAll('.themebtn').forEach(x => x.classList.toggle('on', x.dataset.theme === mode));
    });
    themes.appendChild(b);
  });
  langs.after(themes);
}

/* ------------------------------------------------------------ сторінка -- */
let PAGE = null;

function renderPage() {
  applyI18n();
  document.querySelectorAll('.langbtn').forEach(b => b.classList.toggle('on', b.dataset.lang === LANG));
  document.querySelectorAll('.themebtn').forEach(b => (b.textContent = t('theme.' + b.dataset.theme, LANG)));

  ['menu', 'setmenu', 'drinks', 'matrix', 'legend', 'toolbar', 'canapes'].forEach(id => {
    const n = document.getElementById(id);
    if (n) n.innerHTML = '';
  });

  if (PAGE.kind === 'menu') {
    renderMenu(PAGE.menu, document.getElementById('menu'));
    renderSetMenu(PAGE.menu, document.getElementById('setmenu'));
    buildToolbar(document.getElementById('toolbar'), {});
  } else if (PAGE.kind === 'drinks') {
    renderDrinks(document.getElementById('drinks'));
    buildToolbar(document.getElementById('toolbar'), { searchKey: 'tb.searchDrinks' });
  } else if (PAGE.kind === 'canapes') {
    renderCanapes(document.getElementById('canapes'));
    buildToolbar(document.getElementById('toolbar'), {});
  } else if (PAGE.kind === 'allergens') {
    renderLegend(document.getElementById('legend'));
    renderMatrix(document.getElementById('matrix'));
    buildToolbar(document.getElementById('toolbar'), { searchKey: 'tb.searchTable' });
  } else if (PAGE.kind === 'home') {
    const n = d => DISHES.filter(x => x.menus && x.menus.includes(d)).length;
    const set = (k, v) => {
      const e = document.querySelector(`[data-count="${k}"]`);
      if (e) e.textContent = v;
    };
    set('brunch', `${n('brunch')} ${t('count.items', LANG)}`);
    set('lunch', `${n('lunch')} ${t('count.items', LANG)}`);
    set('dinner', `${n('dinner')} ${t('count.items', LANG)}`);
    set('drinks', `${DRINKS.length + WINES.length} ${t('count.items', LANG)}`);
    set('canapes', `${n('canapes')} ${t('count.items', LANG)}`);
    set('all', `${DISHES.length + DRINKS.length} ${t('count.inTable', LANG)}`);
  }
}

function initPage(config) {
  PAGE = config;
  applyTheme(getTheme());
  buildSwitches();
  renderPage();
}
