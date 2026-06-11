// NOTE: Magic MCP unavailable, hand-written to token spec (guide §1.5).
// Toggles a .is-focused class on a .fortress-hero block to swap between
// blurred and sharpened image states. Re-applies the i18n binding so the
// button label flips between "Sharpen image" and "Re-blur image".

(function () {
  function getLang() {
    return document.documentElement.getAttribute('lang') || 'tr';
  }

  function init() {
    document.querySelectorAll('.fortress-hero').forEach(hero => {
      const btn = hero.querySelector('.fortress-hero__btn');
      if (!btn) return;
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', () => {
        const focused = hero.classList.toggle('is-focused');
        btn.setAttribute('aria-pressed', focused ? 'true' : 'false');
        const key = focused ? 'image.blur' : 'image.focus';
        btn.setAttribute('data-i18n', key);
        if (window.FortressI18n && typeof window.FortressI18n.applyLang === 'function') {
          window.FortressI18n.applyLang(getLang());
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
