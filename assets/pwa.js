/* ==========================================================================
   Поведінка в режимі застосунку (PWA)

   Подвійний тап вимкнено скрізь через CSS `touch-action: manipulation` —
   він прибирає лише зум по подвійному тапу, а пінч і прокрутку лишає, тож
   у звичайному браузері нічого не втрачається.

   Пінч-зум блокуємо ТІЛЬКИ коли сайт відкрито як застосунок з домашнього
   екрана. У браузері його лишаємо навмисно: для когось це єдиний спосіб
   прочитати склад страви.
   ========================================================================== */

(function lockZoomInStandalone() {
  const standalone =
    (window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches ||
                           window.matchMedia('(display-mode: fullscreen)').matches ||
                           window.matchMedia('(display-mode: minimal-ui)').matches)) ||
    window.navigator.standalone === true;

  if (!standalone) return;

  document.documentElement.classList.add('pwa');

  const vp = document.querySelector('meta[name="viewport"]');
  if (vp) {
    vp.setAttribute('content',
      'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, ' +
      'user-scalable=no, viewport-fit=cover');
  }

  // Safari на iOS ігнорує user-scalable у частині версій — гасимо жести напряму
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(type =>
    document.addEventListener(type, e => e.preventDefault(), { passive: false }));

  // Свідомо без перехоплення touchend: він гасить не лише зум, а й другий
  // тап поспіль по сусідній кнопці. Подвійний тап уже знято через
  // touch-action: manipulation, і цього достатньо.

  // подвійний клік мишею у вікні застосунку теж не має нічого виділяти
  document.addEventListener('dblclick', e => e.preventDefault(), { passive: false });
})();
