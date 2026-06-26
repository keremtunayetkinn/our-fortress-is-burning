/* Multi-language toggle (tr · en · de · fr · es · ru · ja).
   Content blocks use <div data-lang="xx"> wrappers, one per language.
   UI chrome strings come from this dictionary keyed by data-i18n. */

(function () {
  const SUPPORTED = ['tr', 'en', 'de', 'fr', 'es', 'ru', 'ja'];

  const DICT = {
    tr: {
      'nav.lang.label': 'Dil',
      'nav.home':       'Giriş',
      'nav.trilogy':    'Üçleme',
      'nav.philosophy': 'Felsefe',
      'nav.synthesis':  'Sentez',
      'nav.sources':    'Kaynakça',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Türkçe',
      'lang.aria.en':   'İngilizce',
      'lang.aria.de':   'Almanca',
      'lang.aria.fr':   'Fransızca',
      'lang.aria.es':   'İspanyolca',
      'lang.aria.ru':   'Rusça',
      'lang.aria.ja':   'Japonca',
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
      'nav.lang.label': 'Language',
      'nav.home':       'Home',
      'nav.trilogy':    'Trilogy',
      'nav.philosophy': 'Philosophy',
      'nav.synthesis':  'Synthesis',
      'nav.sources':    'Sources',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Turkish',
      'lang.aria.en':   'English',
      'lang.aria.de':   'German',
      'lang.aria.fr':   'French',
      'lang.aria.es':   'Spanish',
      'lang.aria.ru':   'Russian',
      'lang.aria.ja':   'Japanese',
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
    },
    de: {
      'nav.lang.label': 'Sprache',
      'nav.home':       'Start',
      'nav.trilogy':    'Trilogie',
      'nav.philosophy': 'Philosophie',
      'nav.synthesis':  'Synthese',
      'nav.sources':    'Quellen',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Türkisch',
      'lang.aria.en':   'Englisch',
      'lang.aria.de':   'Deutsch',
      'lang.aria.fr':   'Französisch',
      'lang.aria.es':   'Spanisch',
      'lang.aria.ru':   'Russisch',
      'lang.aria.ja':   'Japanisch',
      'footer.note':    'Diese Seite steht in keiner offiziellen Verbindung zu Agalloch. Die Rechte an Songtexten, Tracktiteln und Bildmaterial liegen bei ihren jeweiligen Eigentümern. Es werden nur kurze, belegte Zitate verwendet.',
      'footer.sources': 'Zu den Quellen',
      'image.pending':  'BILD AUSSTEHEND',
      'music.warn':     'Diese Karte stellt keine Verbindung zu Drittanbietern her, bis du klickst. Beim Klick wird der Player aus der offiziellen Quelle geladen.',
      'music.load':     'Offiziellen Player laden',
      'music.ext':      'Auf der offiziellen Seite hören ↗',
      'music.disabled': 'Der Link zum offiziellen Player wird aktiv, sobald der Eigentümer die offizielle URL bereitstellt.',
      'crumb.back':     '← Zurück zur Trilogie',
      'crumb.back.phil':'← Zurück zur Philosophie',
      'image.focus':    'Bild schärfen',
      'image.blur':     'Bild erneut weichzeichnen'
    },
    fr: {
      'nav.lang.label': 'Langue',
      'nav.home':       'Accueil',
      'nav.trilogy':    'Trilogie',
      'nav.philosophy': 'Philosophie',
      'nav.synthesis':  'Synthèse',
      'nav.sources':    'Sources',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Turc',
      'lang.aria.en':   'Anglais',
      'lang.aria.de':   'Allemand',
      'lang.aria.fr':   'Français',
      'lang.aria.es':   'Espagnol',
      'lang.aria.ru':   'Russe',
      'lang.aria.ja':   'Japonais',
      'footer.note':    'Ce site n’est pas affilié à Agalloch. Les droits sur les paroles, les titres des morceaux et le matériel visuel appartiennent à leurs propriétaires. Seules de courtes citations sourcées sont utilisées.',
      'footer.sources': 'Aller aux sources',
      'image.pending':  'IMAGE EN ATTENTE',
      'music.warn':     'Cette carte ne contacte aucun serveur tiers tant que vous ne cliquez pas. Au clic, le lecteur est chargé depuis la source officielle.',
      'music.load':     'Charger le lecteur officiel',
      'music.ext':      'Écouter sur la page officielle ↗',
      'music.disabled': 'Le lien du lecteur officiel s’activera lorsque le propriétaire fournira l’URL officielle.',
      'crumb.back':     '← Retour à la trilogie',
      'crumb.back.phil':'← Retour à la philosophie',
      'image.focus':    'Affiner l’image',
      'image.blur':     'Rendre l’image floue'
    },
    es: {
      'nav.lang.label': 'Idioma',
      'nav.home':       'Inicio',
      'nav.trilogy':    'Trilogía',
      'nav.philosophy': 'Filosofía',
      'nav.synthesis':  'Síntesis',
      'nav.sources':    'Fuentes',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Turco',
      'lang.aria.en':   'Inglés',
      'lang.aria.de':   'Alemán',
      'lang.aria.fr':   'Francés',
      'lang.aria.es':   'Español',
      'lang.aria.ru':   'Ruso',
      'lang.aria.ja':   'Japonés',
      'footer.note':    'Este sitio no está afiliado a Agalloch. Los derechos de las letras, los títulos de las canciones y el material visual pertenecen a sus propietarios. Solo se utilizan citas breves y con fuente.',
      'footer.sources': 'Ir a las fuentes',
      'image.pending':  'IMAGEN PENDIENTE',
      'music.warn':     'Esta tarjeta no contacta con ningún servidor de terceros hasta que haces clic. Al hacer clic se carga el reproductor desde la fuente oficial.',
      'music.load':     'Cargar el reproductor oficial',
      'music.ext':      'Escuchar en la página oficial ↗',
      'music.disabled': 'El enlace al reproductor oficial se activará cuando el propietario facilite la URL oficial.',
      'crumb.back':     '← Volver a la trilogía',
      'crumb.back.phil':'← Volver a la filosofía',
      'image.focus':    'Enfocar la imagen',
      'image.blur':     'Volver a desenfocar la imagen'
    },
    ru: {
      'nav.lang.label': 'Язык',
      'nav.home':       'Главная',
      'nav.trilogy':    'Трилогия',
      'nav.philosophy': 'Философия',
      'nav.synthesis':  'Синтез',
      'nav.sources':    'Источники',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'Турецкий',
      'lang.aria.en':   'Английский',
      'lang.aria.de':   'Немецкий',
      'lang.aria.fr':   'Французский',
      'lang.aria.es':   'Испанский',
      'lang.aria.ru':   'Русский',
      'lang.aria.ja':   'Японский',
      'footer.note':    'Этот сайт официально не связан с Agalloch. Права на тексты песен, названия треков и визуальные материалы принадлежат их владельцам. Используются только короткие цитаты с указанием источника.',
      'footer.sources': 'Перейти к источникам',
      'image.pending':  'ИЗОБРАЖЕНИЕ ОЖИДАЕТСЯ',
      'music.warn':     'Эта карточка не обращается к сторонним серверам, пока вы не нажмёте. При нажатии плеер загружается из официального источника.',
      'music.load':     'Загрузить официальный плеер',
      'music.ext':      'Слушать на официальной странице ↗',
      'music.disabled': 'Ссылка на официальный плеер станет активной, когда владелец предоставит официальный URL.',
      'crumb.back':     '← Назад к трилогии',
      'crumb.back.phil':'← Назад к философии',
      'image.focus':    'Сделать изображение чётким',
      'image.blur':     'Снова размыть изображение'
    },
    ja: {
      'nav.lang.label': '言語',
      'nav.home':       'ホーム',
      'nav.trilogy':    '三部作',
      'nav.philosophy': '哲学',
      'nav.synthesis':  '統合',
      'nav.sources':    '出典',
      'nav.lang.tr':    'TR',
      'nav.lang.en':    'EN',
      'nav.lang.de':    'DE',
      'nav.lang.fr':    'FR',
      'nav.lang.es':    'ES',
      'nav.lang.ru':    'RU',
      'nav.lang.ja':    'JA',
      'lang.aria.tr':   'トルコ語',
      'lang.aria.en':   '英語',
      'lang.aria.de':   'ドイツ語',
      'lang.aria.fr':   'フランス語',
      'lang.aria.es':   'スペイン語',
      'lang.aria.ru':   'ロシア語',
      'lang.aria.ja':   '日本語',
      'footer.note':    '本サイトは Agalloch の公式サイトではありません。歌詞・曲名・画像の権利は各権利者に帰属します。出典を明記した短い引用のみを使用しています。',
      'footer.sources': '出典へ',
      'image.pending':  '画像準備中',
      'music.warn':     'このカードは、クリックするまで第三者のサーバーと通信しません。クリックすると公式ソースからプレーヤーが読み込まれます。',
      'music.load':     '公式プレーヤーを読み込む',
      'music.ext':      '公式ページで聴く ↗',
      'music.disabled': '公式プレーヤーのリンクは、権利者が公式 URL を提供した後に有効になります。',
      'crumb.back':     '← 三部作に戻る',
      'crumb.back.phil':'← 哲学に戻る',
      'image.focus':    '画像を鮮明にする',
      'image.blur':     '画像を再びぼかす'
    }
  };

  const STORAGE_KEY = 'fortress.lang';

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage may be unavailable */ }
    const nav = (navigator.language || 'en').toLowerCase();
    const code = nav.slice(0, 2);
    return SUPPORTED.indexOf(code) !== -1 ? code : 'en';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'tr';
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

    document.querySelectorAll('.lang-menu button[data-lang]').forEach(btn => {
      btn.setAttribute('aria-checked', btn.dataset.lang === lang ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    document.dispatchEvent(new CustomEvent('lang:change', { detail: { lang } }));
  }

  function closeAllMenus() {
    document.querySelectorAll('.lang-switch').forEach(sw => {
      const toggle = sw.querySelector('.lang-toggle');
      const menu = sw.querySelector('.lang-menu');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (menu) menu.setAttribute('hidden', '');
    });
  }

  function bind() {
    document.querySelectorAll('.lang-switch').forEach(sw => {
      const toggle = sw.querySelector('.lang-toggle');
      const menu = sw.querySelector('.lang-menu');
      if (!toggle || !menu) return;

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        closeAllMenus();
        if (!isOpen) {
          toggle.setAttribute('aria-expanded', 'true');
          menu.removeAttribute('hidden');
          const current = menu.querySelector('[aria-checked="true"]') || menu.querySelector('button');
          if (current) current.focus();
        }
      });

      menu.querySelectorAll('button[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
          applyLang(btn.dataset.lang);
          closeAllMenus();
          toggle.focus();
        });
      });

      menu.addEventListener('keydown', (e) => {
        const items = Array.from(menu.querySelectorAll('button[data-lang]'));
        const i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        else if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
        else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang-switch')) closeAllMenus();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const open = document.querySelector('.lang-toggle[aria-expanded="true"]');
      closeAllMenus();
      if (open) open.focus();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    applyLang(detectInitialLang());
  });

  window.FortressI18n = { applyLang, DICT, SUPPORTED };
})();
