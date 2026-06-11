SELF-HOSTED FONTS
=================

Bu site harici font CDN'inden font yüklemez (Google Fonts dahil yasak).
Şu an varsayılan olarak sistem fontları kullanılıyor:

  Display (serif):  Georgia / Times New Roman
  Body    (sans):   system-ui / Segoe UI / Roboto
  Utility (mono):   ui-monospace / Consolas

Daha derin bir tasarım için kılavuzun önerdiği aileler:

  Display: EB Garamond     — https://fonts.google.com/specimen/EB+Garamond  (OFL)
  Body:    Inter           — https://github.com/rsms/inter                  (OFL)
  Mono:    JetBrains Mono  — https://github.com/JetBrains/JetBrainsMono     (OFL)

EKLEMEK İÇİN:
1. Lisansları indir ve `assets/fonts/LICENSES/` altına koy.
2. .woff2 dosyalarını bu klasöre koy.
3. `assets/css/tokens.css` içindeki @font-face tanımlarını aç:

   @font-face {
     font-family: "EB Garamond";
     src: url("../fonts/EBGaramond-Regular.woff2") format("woff2");
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
