/* Site chrome: highlights the current nav link.
   The header and footer markup is now inlined directly in each HTML page
   to prevent the layout shift caused by JS-injected chrome. */

(function () {
  function highlightCurrent() {
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      const base = href.split('?')[0].split('#')[0];
      if (here === base || (here === '' && base === 'index.html')) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', highlightCurrent);
})();
