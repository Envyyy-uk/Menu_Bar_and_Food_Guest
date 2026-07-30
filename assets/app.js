/* ==========================================================================
   Рендеринг сторінок + фільтр за алергенами
   ========================================================================== */

const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ----------------------------------------------------------- складники -- */
function tagList(keys, maybe) {
  const box = el('div', 'tags');
  keys.forEach(k => {
    const a = ALLERGENS[k];
    if (!a) return;
    const t = el('span', 'tag' + (maybe ? ' maybe' : ''));
    t.title = a.en + ' — ' + a.note;
    t.innerHTML = `<span aria-hidden="true">${a.icon}</span>${esc(a.ua)}`;
    box.appendChild(t);
  });
  return box;
}

/* ------------------------------------------------------- картка страви -- */
function dishCard(d) {
  const card = el('article', 'dish');
  card.id = 'd-' + d.id;
  card.dataset.allergens = (d.a || []).join(' ');
  card.dataset.maybe = (d.m || []).join(' ');
  card.dataset.search = [d.name, d.ua, d.desc, (d.ing || []).join(' ')].join(' ').toLowerCase();

  const head = el('div', 'dish-head');
  head.appendChild(el('h3', null, esc(d.name) + (d.veg ? '<span class="badge-veg">veg</span>' : '')));
  if (d.price) {
    head.appendChild(el('span', 'price', esc(d.price)));
  } else if (d.priceNote) {
    head.appendChild(el('span', 'price na', esc(d.priceNote)));
  }
  card.appendChild(head);

  if (d.ua) card.appendChild(el('p', 'ua', esc(d.ua)));
  if (d.meta) card.appendChild(el('p', 'meta', esc(d.meta)));
  if (d.desc) card.appendChild(el('p', 'desc', esc(d.desc)));

  if (d.ing && d.ing.length) {
    card.appendChild(el('p', 'ing-label', 'Склад'));
    const ul = el('ul', 'ing');
    d.ing.forEach(i => ul.appendChild(el('li', null, esc(i))));
    card.appendChild(ul);
  }

  card.appendChild(el('p', 'alg-label', 'Алергени'));
  if (d.a && d.a.length) {
    card.appendChild(tagList(d.a, false));
  } else {
    const box = el('div', 'tags');
    box.appendChild(el('span', 'tag none', '✓ немає заявлених'));
    card.appendChild(box);
  }

  if (d.m && d.m.length) {
    card.appendChild(el('p', 'alg-label', 'Може містити'));
    card.appendChild(tagList(d.m, true));
  }

  if (d.warn) card.appendChild(el('p', 'warn', esc(d.warn)));
  return card;
}

/* -------------------------------------------------------- меню зі страв -- */
function renderMenu(menuKey, mount) {
  const order = MENU_ORDER[menuKey];
  order.forEach(secKey => {
    const items = DISHES.filter(d => d.section === secKey && d.menus.includes(menuKey));
    if (!items.length) return;

    const sec = el('section', 'section');
    sec.id = 's-' + secKey;
    const meta = SECTIONS[secKey];
    sec.appendChild(el('h2', null, esc(meta.ua)));
    sec.appendChild(el('p', 'section-en', esc(meta.en)));

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

/* ------------------------------------------------------------- сет-меню -- */
function renderSetMenu(menuKey, mount) {
  const sm = SET_MENUS[menuKey];
  if (!sm) return;
  const box = el('div', 'setmenu');
  box.appendChild(el('h2', null, esc(sm.title)));
  box.appendChild(el('p', 'price', esc(sm.price)));
  box.appendChild(el('p', 'hours', sm.hours.map(esc).join(' · ')));

  const courses = el('div', 'courses');
  sm.courses.forEach(c => {
    const col = el('div');
    col.appendChild(el('h3', null, esc(c.name)));
    const ul = el('ul');
    c.items.forEach(id => {
      const d = DISHES.find(x => x.id === id);
      if (!d) return;
      // якщо страва є на цій сторінці — якір; якщо ні (позиція лише в сет-меню) —
      // ведемо на сторінку меню, де її картка існує
      const here = document.getElementById('d-' + d.id);
      const page = here ? '' : (d.menus[0] + '.html');
      ul.appendChild(el('li', null, `<a href="${page}#d-${d.id}">${esc(d.name)}</a>`));
    });
    col.appendChild(ul);
    if (c.extra) col.appendChild(el('p', 'extra', esc(c.extra)));
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
    const meta = DRINK_SECTIONS[secKey];
    const sec = el('section', 'section');
    sec.id = 's-' + secKey;
    sec.appendChild(el('h2', null, esc(meta.ua)));
    sec.appendChild(el('p', 'section-en', esc(meta.en)));
    if (meta.note) sec.appendChild(el('p', 'section-note', esc(meta.note)));
    const grid = el('div', 'grid');
    items.forEach(d => grid.appendChild(dishCard(d)));
    sec.appendChild(grid);
    mount.appendChild(sec);
  });

  WINE_ORDER.forEach(secKey => {
    const items = WINES.filter(w => w.section === secKey);
    if (!items.length) return;
    const meta = WINE_SECTIONS[secKey];
    const sec = el('section', 'section');
    sec.id = 's-' + secKey;
    sec.appendChild(el('h2', null, esc(meta.ua)));
    sec.appendChild(el('p', 'section-en', esc(meta.en) + ' · ' + esc(meta.serve)));
    const ul = el('ul', 'winelist');
    items.forEach(w => {
      const li = el('li');
      li.dataset.allergens = 'sulphites';
      li.dataset.maybe = '';
      li.dataset.search = (w.name + ' ' + w.region).toLowerCase();
      li.innerHTML = `<div><span class="wname">${esc(w.name)}</span><br>
        <span class="wregion">${esc(w.region)}</span></div>
        <span class="wprice">${esc(w.price)}</span>`;
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    mount.appendChild(sec);
  });
}

/* ------------------------------------------------- панель фільтрів ------ */
function buildToolbar(mount, opts) {
  const bar = el('div', 'toolbar');
  const wrap = el('div', 'wrap');

  const search = el('input', 'search');
  search.type = 'search';
  search.placeholder = opts.placeholder || 'Пошук за назвою або складником…';
  search.setAttribute('aria-label', 'Пошук');

  const toggle = el('button', 'filter-toggle', 'Фільтр алергенів');
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');

  const count = el('span', 'result-count');

  wrap.append(search, toggle, count);
  bar.appendChild(wrap);

  const filtersWrap = el('div', 'wrap');
  const filters = el('div', 'filters');
  filters.appendChild(el('p', 'hint',
    'Познач алергени, яких гість уникає — позиції з ними приглушаться. ' +
    'Пунктирні мітки «може містити» враховуються теж.'));
  const chips = el('div', 'chips');
  ALLERGEN_KEYS.forEach(k => {
    const a = ALLERGENS[k];
    const label = el('label', 'chip');
    label.title = a.en + ' — ' + a.note;
    label.innerHTML = `<input type="checkbox" value="${k}"><span aria-hidden="true">${a.icon}</span>${esc(a.ua)}`;
    chips.appendChild(label);
  });
  filters.appendChild(chips);
  const clear = el('button', 'clear-btn', 'Скинути фільтри');
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
    chips.querySelectorAll('.chip').forEach(c => {
      c.classList.toggle('on', c.querySelector('input').checked);
    });
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

    // Заголовки категорій у матриці ховаємо, якщо в них не лишилось рядків
    document.querySelectorAll('table.matrix tbody tr').forEach(tr => {
      if (tr.dataset.search) return;
      let any = false;
      for (let n = tr.nextElementSibling; n && n.dataset.search; n = n.nextElementSibling) {
        if (n.style.display !== 'none') { any = true; break; }
      }
      tr.style.display = any ? '' : 'none';
    });

    count.textContent = active.length || q
      ? `${shown} позицій${flagged ? ` · ${flagged} з відміченими алергенами` : ''}`
      : '';
  };

  search.addEventListener('input', apply);
  chips.addEventListener('change', apply);
  clear.addEventListener('click', () => {
    chips.querySelectorAll('input').forEach(i => (i.checked = false));
    search.value = '';
    apply();
  });

  return apply;
}

/* ---------------------------------------------------- матриця алергенів -- */
function renderMatrix(mount) {
  const rows = [];
  MENU_ORDER.brunch.forEach(secKey => {
    const items = DISHES.filter(d => d.section === secKey);
    if (items.length) rows.push({ cat: SECTIONS[secKey].ua, items });
  });
  DRINK_ORDER.forEach(secKey => {
    const items = DRINKS.filter(d => d.section === secKey);
    if (items.length) rows.push({ cat: DRINK_SECTIONS[secKey].ua, items });
  });

  const scroll = el('div', 'table-scroll');
  const table = el('table', 'matrix');

  const thead = el('thead');
  const hr = el('tr');
  hr.appendChild(el('th', 'name', 'Позиція'));
  ALLERGEN_KEYS.forEach(k => {
    const th = el('th', null, `${ALLERGENS[k].icon}<br>${esc(ALLERGENS[k].short)}`);
    th.title = ALLERGENS[k].ua + ' — ' + ALLERGENS[k].en;
    hr.appendChild(th);
  });
  thead.appendChild(hr);
  table.appendChild(thead);

  const tbody = el('tbody');
  rows.forEach(group => {
    const catRow = el('tr');
    const td = el('td', 'matrix-cat', esc(group.cat));
    td.colSpan = ALLERGEN_KEYS.length + 1;
    catRow.appendChild(td);
    tbody.appendChild(catRow);

    group.items.forEach(d => {
      const tr = el('tr');
      tr.dataset.allergens = (d.a || []).join(' ');
      tr.dataset.maybe = (d.m || []).join(' ');
      tr.dataset.search = (d.name + ' ' + (d.ua || '')).toLowerCase();
      tr.appendChild(el('td', 'name', `${esc(d.name)}<small>${esc(d.ua || '')}</small>`));
      ALLERGEN_KEYS.forEach(k => {
        let mark = '', cls = '', title = '';
        if ((d.a || []).includes(k)) { mark = '●'; cls = 'mark-yes'; title = 'містить'; }
        else if ((d.m || []).includes(k)) { mark = '○'; cls = 'mark-maybe'; title = 'може містити'; }
        const cell = el('td', cls, mark);
        if (title) cell.title = ALLERGENS[k].ua + ' — ' + title;
        tr.appendChild(cell);
      });
      tbody.appendChild(tr);
    });
  });
  table.appendChild(tbody);
  scroll.appendChild(table);
  mount.appendChild(scroll);
}

/* ------------------------------------------------------- легенда/рахунок -- */
function renderLegend(mount) {
  const all = DISHES.concat(DRINKS);
  const box = el('div', 'legend');
  ALLERGEN_KEYS.forEach(k => {
    const yes = all.filter(d => (d.a || []).includes(k)).length;
    const may = all.filter(d => (d.m || []).includes(k)).length;
    const item = el('div', 'item');
    item.innerHTML =
      `<span class="cnt">${yes} / ${may}</span>` +
      `<b>${ALLERGENS[k].icon} ${esc(ALLERGENS[k].ua)}</b>` +
      `<small>${esc(ALLERGENS[k].en)}<br>${esc(ALLERGENS[k].note)}</small>`;
    box.appendChild(item);
  });
  mount.appendChild(box);
}
