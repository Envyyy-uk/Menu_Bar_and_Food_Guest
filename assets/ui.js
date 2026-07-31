/* ==========================================================================
   Дрібні елементи, потрібні і гостьовим сторінкам, і адмін-панелі.

   Панель не підключає app.js, тому спільне живе тут, а не там.
   ========================================================================== */

/* -------------------------------------------------------------------------
   Кнопка «нагору».

   Сторінки довгі — саме лише меню бранчу це 97 позицій, — а великим пальцем
   до шапки не догортаєш. Показуємо, лише коли вже є куди повертатися, щоб
   не закривала вміст на першому екрані.
   ------------------------------------------------------------------------- */
const TOP_BTN_AFTER = 600;           // px прокрутки, після яких кнопка потрібна

function buildTopButton() {
  if (document.querySelector('.topbtn')) return;

  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'topbtn';
  b.textContent = '↑';
  b.addEventListener('click', () => {
    // плавність — приємно, але не тим, хто просив її вимкнути
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
  document.body.appendChild(b);

  const toggle = () => b.classList.toggle('on', window.scrollY > TOP_BTN_AFTER);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

/** Підпис кнопки поточною мовою (сама вона — стрілка, підпис для читачів екрана) */
function labelTopButton(lang) {
  const b = document.querySelector('.topbtn');
  if (!b) return;
  const text = t('ui.top', lang);
  b.title = text;
  b.setAttribute('aria-label', text);
}
