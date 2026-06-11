# Our Fortress Is Burning — Site

Static, zero-dependency site about Agalloch's
*Our Fortress Is Burning… I / II – Bloodbirds / III – The Grain* trilogy and
its philosophical backbone (entropy, Heraclitus, Spinoza, Schopenhauer ↔
Nietzsche, cosmic pessimism). Bilingual: Türkçe and English.

## Açmak / Open

Tek bir derleme adımı yoktur. Dosyaları herhangi bir statik sunucuyla aç:

```
# A) Python ile
python -m http.server 8080

# B) Node ile
npx serve .

# C) Doğrudan
# index.html'i tarayıcıda aç (file:// üzerinden de çalışır)
```

## Dosya yapısı

```
fortress-site/
  index.html              Giriş / manifesto
  uclem.html              Üçleme genel bakış
  uclem-i.html            Bölüm I — Yangının Yaklaşışı
  uclem-ii.html           Bölüm II — Bloodbirds
  uclem-iii.html          Bölüm III — The Grain
  felsefe.html            Felsefe genel bakış
  felsefe-herakleitos.html
  felsefe-entropi.html
  felsefe-spinoza.html
  felsefe-gerilim.html    Schopenhauer ↔ Nietzsche
  felsefe-karanlik.html   Cioran & Zapffe
  sentez.html             Sentez (OWNER_REVIEW)
  kaynakca.html           Kaynakça
  404.html
  assets/
    css/tokens.css        Tasarım jetonları (Kül ve Gren)
    css/main.css          Site stilleri
    js/chrome.js          Header/footer enjeksiyonu
    js/i18n.js            TR/EN geçişi
    js/glossary.js        Felsefi terim tooltip sistemi
    js/music-facade.js    Tıkla-ve-yükle oynatıcı (üçüncü taraf isteğini geciktirir)
    js/grain.js           SVG feTurbulence gren katmanı
    fonts/                Self-host fontlar için (READ_ME.txt)
    images/               Yanan kale görselleri (sahip dolduracak)
    images/source/        Orijinal kaynak dosyalar (webp'ye dönüştürmeden önce)
```

## İçerik düzenleme

- HTML sayfaları doğrudan düzenleyin. Her sayfada iki dil bloğu vardır:
  `<section lang="tr" data-lang="tr">` ve `<section lang="en" data-lang="en" hidden>`.
- Yeni terim eklemek için `assets/js/glossary.js` içindeki `TERMS` nesnesine
  her iki dilde aynı anahtarla yeni bir madde ekleyin.
- Arayüz dizeleri (menü, footer, buton) `assets/js/i18n.js` içindeki `DICT`
  nesnesindedir.

## Görseller (IMAGES_PROVIDED_BY_OWNER)

`assets/images/` klasörü site sahibinin doldurması içindir. Şema:
`fortress-01.webp`, `fortress-02.webp` ... Sahip farklı format verirse
webp'ye dönüştürün, orijinali `assets/images/source/` altında saklayın. Bu
klasör boş kaldıkça sayfalardaki bantlar "GÖRSEL BEKLENİYOR / IMAGE PENDING"
etiketiyle yer tutucu olarak görünür.

Bir görseli sayfaya bağlamak için ilgili HTML'de:

```html
<div class="fortress-band has-image">
  <img src="assets/images/fortress-01.webp" alt="..." />
</div>
```

## Müzik oynatıcı (facade)

Sayfa ilk yüklendiğinde hiçbir üçüncü taraf isteği yapılmaz. Kullanıcı
"Resmî oynatıcıyı yükle" düğmesine tıkladığında embed iframe DOM'a eklenir.
URL'ler HTML'deki `data-` özelliklerine girilir:

```html
<div class="music-facade"
     data-embed-bandcamp="https://bandcamp.com/EmbeddedPlayer/...."
     data-external-url="https://agalloch.bandcamp.com/track/...">
  ...
</div>
```

`data-embed-bandcamp` ya da `data-embed-spotify` verilmediğinde düğme
devre dışıdır. Resmî link sahibin sağlamasıyla etkinleşir.

## İlkeler (özet)

- Sıfır analitik, sıfır tracker, sıfır üçüncü taraf font CDN'i.
- Yalnızca gri tonlama; renk yok.
- Tam şarkı sözü yayını yok; blok başına en fazla bir kısa dize alıntısı.
- Hiçbir telifli görsel kopyalanmaz.
- Hiçbir kişisel bilgi (isim, e-posta, sosyal medya, IP) HTML/JS/CSS içinde
  yer almaz.

## Sentez sayfası

`sentez.html` taslaktır; kaynak HTML'de `<!-- OWNER_REVIEW -->` notu vardır.
Site sahibi düzenleme istediğinde metin **kelimesi kelimesine** uygulanır;
sahibin onayına dek silinmez.

## Yayına alma

Dağıtım, statik dosya barındırma için doğrudan uygundur (Netlify, Cloudflare
Pages, GitHub Pages). Sahibinin manuel olarak yapacağı adımlar şu sırayla
işler:

1. Bir registrar'dan domain al (ödeme sahibe aittir).
2. `fortress-site/` klasörünü statik hosting hesabına yükle.
3. DNS kayıtlarını (A veya CNAME) hosting'in yönlendirmesine göre kur.
4. HTTPS / SSL'i hosting panelinden etkinleştir.
5. CSP başlığını sıkı tutmak için hosting panelinde tanımla
   (örn. `default-src 'self'; frame-src https://bandcamp.com https://*.spotify.com`).

Detaylı dağıtım dokümanı kılavuzun Faz 9'una göre hazırlanabilir.
