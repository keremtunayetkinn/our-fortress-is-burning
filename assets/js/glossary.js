/* Glossary tooltip system.
   Mark a term in HTML with: <button class="term" data-term="entropi">entropi</button>
   The button form is used so it is naturally keyboard-focusable. */

(function () {
  const TERMS = {
    tr: {
      'entropi':
        'Bir sistemin düzensizliğinin ölçüsü. Termodinamiğin İkinci Yasası’na göre kapalı bir sistemin entropisi zamanla artar; bu, geri döndürülemez bir akışı tanımlar.',
      'termodinamigin-ikinci-yasasi':
        'Isının kendiliğinden sıcaktan soğuğa aktığını ve kapalı bir sistemin entropisinin azalamayacağını söyleyen yasa. Zamanın tek yönlü oluşunun fiziksel temellerinden biridir.',
      'zamanin-oku':
        'Geçmişten geleceğe akan asimetrik zaman duygusunu fiziğin temel yasalarına bağlama girişimi. En yaygın aday entropinin artışıdır.',
      'isi-olumu':
        'Evrenin entropisinin azami değere ulaştığı ve hiçbir iş üretilemeyen termodinamik denge durumu için kullanılan terim. Fiziksel kesinliği tartışmalıdır; nüansları felsefe sayfasında açıklanır.',
      'ekpyrosis':
        'Stoacıların evrenin belirli aralıklarla ateşte yanıp yeniden doğduğu döngüsel kozmoloji öğretisi. Köklerini Herakleitos’un ateş kozmolojisinden alır.',
      'logos':
        'Herakleitos’ta evrenin akışını yöneten akıl-yasa ilkesi. Stoacılar bu kavramı doğanın rasyonel düzenini tarif etmek için devraldı.',
      'panteizm':
        'Tanrı ile evrenin (doğanın) bir ve aynı olduğunu öne süren görüş. Spinoza’nın "Tanrı veya Doğa" formülü en bilinen örnektir; ancak Spinoza’nın kesin olarak panteist olup olmadığı akademik tartışmadır.',
      'deus-sive-natura':
        'Latince "Tanrı veya Doğa". Spinoza’nın metafiziğinin omurgası: tek bir tözün hem zihin hem uzam olarak kavranabildiği bütün varlık.',
      'irade':
        'Schopenhauer’da (Wille) görünenin ardındaki kör, dinmek bilmez itki. Yaşamın acısının kaynağı olarak görür; sanat, özellikle müzik, ondan geçici kurtuluş sunar.',
      'amor-fati':
        'Latince "kaderi sevmek". Nietzsche’nin formülü: yaşananın hiçbirinin başka türlü olmasını dilememek; varlığa koşulsuz "evet" demek.',
      'bengi-donus':
        'Nietzsche’nin düşünce deneyi: ömrünün her ânını sonsuz kez aynen yeniden yaşamayı kabul edebilir misin? Cevap "evet" ise amor fati’ye ulaşmışsındır.',
      'nihilizm':
        'En yüksek değerlerin değersizleşmesi. Nietzsche için bir uçurum olduğu kadar aşılması gereken bir geçittir; pasif/aktif biçimleri vardır.',
      'kozmik-karamsarlik':
        'Varoluşun ya da insan bilincinin doğası gereği bir hata, bir fazlalık olduğunu öne süren felsefi tutum. Cioran ve Zapffe gibi yazarlarda izlenir.',
      'transandantalizm':
        'Doğayı ruhsal bir hakikatin görünümü olarak okuyan 19. yüzyıl Amerikan akımı (Emerson, Thoreau). Romantik etkilerle Agalloch’un lirik dilinde yankılanır.',
      'post-metal':
        'Atmosferik dokuları, uzun yapıları ve sözden çok hissi öne çıkaran çağdaş metal türü. Agalloch genellikle bu çatı altında anılır; ancak grup kendini tek bir etikete sıkıştırmaz.'
    },
    en: {
      'entropi':
        'A measure of disorder in a system. By the Second Law of Thermodynamics, a closed system’s entropy tends to increase over time, defining an irreversible flow.',
      'termodinamigin-ikinci-yasasi':
        'The law stating that heat flows spontaneously from hot to cold and that the entropy of a closed system never decreases. One physical anchor of time’s one-way direction.',
      'zamanin-oku':
        'The attempt to ground the felt asymmetry between past and future in physics. The leading candidate is the increase of entropy.',
      'isi-olumu':
        'Term used for a final thermodynamic equilibrium of the universe in which entropy is maximised and no work can be done. Its physical certainty is contested; nuances are spelled out on the philosophy page.',
      'ekpyrosis':
        'The Stoic doctrine that the cosmos periodically dissolves into fire and is reborn. Its roots lie in Heraclitus’ fire-cosmology.',
      'logos':
        'In Heraclitus, the rational law-principle that governs the cosmic flux. The Stoics inherited the term to describe the rational order of nature.',
      'panteizm':
        'The view that God and the universe (nature) are one and the same. Spinoza’s "God or Nature" is its most famous formula, though whether Spinoza is strictly a pantheist is an open scholarly question.',
      'deus-sive-natura':
        'Latin for "God or Nature." The spine of Spinoza’s metaphysics: a single substance that can be conceived as either thought or extension.',
      'irade':
        'In Schopenhauer (Wille), the blind, restless drive beneath appearances. He sees it as the root of suffering; art — especially music — offers temporary release.',
      'amor-fati':
        'Latin for "love of fate." Nietzsche’s formula: to wish none of what has been to be otherwise; to say an unconditional yes to existence.',
      'bengi-donus':
        'Nietzsche’s thought experiment: could you affirm reliving every moment of your life identically, forever? If yes, you have reached amor fati.',
      'nihilizm':
        'The devaluation of the highest values. For Nietzsche, both an abyss and a passage to be crossed; it has passive and active forms.',
      'kozmik-karamsarlik':
        'The philosophical stance that existence, or human consciousness itself, is a kind of error or surplus. Found in writers like Cioran and Zapffe.',
      'transandantalizm':
        'A 19th-century American current (Emerson, Thoreau) reading nature as the visible face of a spiritual truth. Its Romantic echoes resonate in Agalloch’s lyrical idiom.',
      'post-metal':
        'A contemporary metal idiom built on atmospheric textures, long forms, and feeling over text. Agalloch are often filed here; the band itself resists single-label boxes.'
    }
  };

  let currentLang = 'tr';
  let tooltipEl = null;
  let activeTerm = null;
  let hideTimer = null;

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'tooltip';
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.hidden = true;
    tooltipEl.id = 'fortress-tooltip';
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function positionTooltip(target) {
    const t = ensureTooltip();
    const r = target.getBoundingClientRect();
    const docX = window.scrollX;
    const docY = window.scrollY;
    t.style.left = Math.max(8, r.left + docX) + 'px';
    t.style.top  = (r.bottom + docY + 8) + 'px';
    const tw = t.getBoundingClientRect();
    if (r.left + tw.width > window.innerWidth - 8) {
      t.style.left = Math.max(8, window.innerWidth - tw.width - 8 + docX) + 'px';
    }
  }

  function showTip(target) {
    clearTimeout(hideTimer);
    const key = target.dataset.term;
    const dict = TERMS[currentLang] || TERMS.tr;
    const def = dict[key];
    if (!def) return;
    const t = ensureTooltip();
    t.innerHTML =
      `<div class="tooltip-term">${escapeHtml(key)}</div>` +
      `<div class="tooltip-def">${escapeHtml(def)}</div>`;
    t.hidden = false;
    positionTooltip(target);
    target.setAttribute('aria-describedby', 'fortress-tooltip');
    activeTerm = target;
  }

  function hideTip() {
    if (!tooltipEl) return;
    tooltipEl.hidden = true;
    if (activeTerm) activeTerm.removeAttribute('aria-describedby');
    activeTerm = null;
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideTip, 120);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function bind() {
    document.querySelectorAll('.term').forEach(el => {
      if (!el.hasAttribute('tabindex') && el.tagName !== 'BUTTON') el.tabIndex = 0;

      el.addEventListener('mouseenter', () => showTip(el));
      el.addEventListener('mouseleave', scheduleHide);
      el.addEventListener('focus', () => showTip(el));
      el.addEventListener('blur', scheduleHide);
      el.addEventListener('click', (e) => {
        if (tooltipEl && !tooltipEl.hidden && activeTerm === el) hideTip();
        else showTip(el);
        e.preventDefault();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hideTip();
    });
    window.addEventListener('scroll', hideTip, { passive: true });
    window.addEventListener('resize', hideTip);
  }

  document.addEventListener('lang:change', (e) => {
    currentLang = e.detail.lang;
    hideTip();
  });

  document.addEventListener('DOMContentLoaded', bind);
})();
