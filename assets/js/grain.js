/* Grain overlay — SVG feTurbulence, locally generated, no external assets. */
(function () {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
      <filter id="g">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#g)" opacity="0.85"/>
    </svg>
  `;
  const layer = document.createElement('div');
  layer.className = 'grain';
  layer.setAttribute('aria-hidden', 'true');
  layer.innerHTML = svg;
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(layer);
  });
})();
