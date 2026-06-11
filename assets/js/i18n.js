/* Simple TR/EN toggle.
   Content blocks use <div data-lang="tr"> / <div data-lang="en"> wrappers.
   UI chrome strings come from this dictionary keyed by data-i18n. */

(function () {
  const DICT = {
    tr: {
      'nav.home':       'Giriş',
      'nav.trilogy':    'Üçleme',
      'nav.philosophy': 'Felsefe',
      'nav.synthesis':  'Sentez',
      'nav.sources':    'Kaynakça',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'lang.aria.tr':   'Türkçe',
      'lang.aria.en':   'İngilizce',
      'footer.note':    'Bu site Agalloch ile bağlı resmî bir kaynak değildir. Şarkı sözleri, parça adları ve görsel malzemelerin hakları sahiplerine aittir. Yalnızca kısa, kaynaklı alıntılar kullanılır.',
      'footer.sources': 'Kaynakçaya git',
      'image.pending':  'GÖRSEL BEKLENİYOR',
      'music.warn':     'Bu kart, kullanıcı tıklayana kadar üçüncü taraf sunucuyla iletişim kurmaz. Tıklandığında resmî sayfanın oynatıcısı yüklenir.',
      'music.load':     'Resmî oynatıcıyı yükle',
      'music.ext':      'Resmî sayfada dinle ↗',
      'music.disabled': 'Resmî oynatıcı bağlantısı sahibin sağlayacağı resmî URL’den sonra etkinleşir.',
      'crumb.back':     '← Üçleme ana sayfasına dön',
      'crumb.back.phil':'← Felsefe ana sayfasına dön',
      'image.focus':    'Görseli netleştir',
      'image.blur':     'Görseli bulanıklaştır'
    },
    en: {
      'nav.home':       'Home',
      'nav.trilogy':    'Trilogy',
      'nav.philosophy': 'Philosophy',
      'nav.synthesis':  'Synthesis',
      'nav.sources':    'Sources',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'lang.aria.tr':   'Turkish',
      'lang.aria.en':   'English',
      'footer.note':    'This site is not affiliated with Agalloch. Rights to song lyrics, track titles, and visual material belong to their owners. Only short, cited excerpts are used.',
      'footer.sources': 'Go to sources',
      'image.pending':  'IMAGE PENDING',
      'music.warn':     'This card makes no third-party request until you click. Clicking loads the player from the official source.',
      'music.load':     'Load official player',
      'music.ext':      'Listen on official page ↗',
      'music.disabled': 'The official player link will activate once the owner supplies the official URL.',
      'crumb.back':     '← Back to trilogy',
      'crumb.back.phil':'← Back to philosophy',
      'image.focus':    'Sharpen image',
      'image.blur':     'Re-blur image'
    }
  };

  const STORAGE_KEY = 'fortress.lang';

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) { /* localStorage may be unavailable */ }
    const nav = (navigator.language || 'tr').toLowerCase();
    return nav.startsWith('tr') ? 'tr' : 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-lang]:not(button)').forEach(el => {
      const matches = el.getAttribute('data-lang') === lang;
      if (matches) el.removeAttribute('hidden');
      else el.setAttribute('hidden', '');
    });

    const dict = DICT[lang] || DICT.tr;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(p => {
        const [attr, key] = p.split(':').map(s => s && s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    document.dispatchEvent(new CustomEvent('lang:change', { detail: { lang } }));
  }

  function bind() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    applyLang(detectInitialLang());
  });

  window.FortressI18n = { applyLang, DICT };
})();
