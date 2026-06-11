/* Music facade: no third-party request before user click.
   Markup contract:
   <div class="music-facade"
        data-embed-bandcamp="https://bandcamp.com/EmbeddedPlayer/track=...."
        data-embed-spotify="https://open.spotify.com/embed/track/..."
        data-external-url="https://agalloch.bandcamp.com/track/..." >
       <div class="row">
         <div class="title">…</div>
         <div class="meta">…</div>
       </div>
       <small class="warn" data-i18n="music.warn"></small>
       <button class="load" data-i18n="music.load"></button>
       <a class="ext-link" data-i18n="music.ext" target="_blank" rel="noopener noreferrer"></a>
       <div class="embed-slot"></div>
   </div>
*/

(function () {
  function init() {
    document.querySelectorAll('.music-facade').forEach(card => {
      const btn = card.querySelector('button.load');
      const slot = card.querySelector('.embed-slot');
      const ext = card.querySelector('a.ext-link');
      const externalUrl = card.dataset.externalUrl || '';

      if (ext) {
        if (externalUrl) ext.href = externalUrl;
        else { ext.removeAttribute('href'); ext.classList.add('disabled'); }
      }

      if (!btn || !slot) return;

      const embedUrl = card.dataset.embedBandcamp || card.dataset.embedSpotify || '';
      if (!embedUrl) {
        btn.disabled = true;
        btn.setAttribute('aria-disabled', 'true');
        btn.title = 'Embed URL not provided';
        return;
      }

      btn.addEventListener('click', () => {
        if (slot.querySelector('iframe')) return;
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.setAttribute('allow',
          'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        iframe.setAttribute('sandbox',
          'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms');
        iframe.setAttribute('title', card.querySelector('.title')?.textContent || 'Music player');
        iframe.style.height = (card.dataset.embedSpotify ? '152px' : '120px');
        slot.appendChild(iframe);
        btn.hidden = true;
        const warn = card.querySelector('.warn');
        if (warn) warn.hidden = true;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
