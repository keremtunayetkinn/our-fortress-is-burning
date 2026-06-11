# Sunucu seviyesinde güvenlik başlıkları

HTML `<meta>` etiketleriyle ayarlanabilen güvenlik kontrolleri tüm sayfalara eklenmiştir (Content-Security-Policy, Referrer-Policy). Bazı başlıklar yalnızca HTTP yanıt başlığı olarak gönderildiğinde geçerlidir: HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy, COOP/CORP, ve `frame-ancestors` direktifi.

## Netlify / Cloudflare Pages

`_headers` dosyası repoda bulunur; her iki barındırıcı da bu dosyayı otomatik tanır.

## Nginx örneği

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://open.spotify.com https://*.bandcamp.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" always;
```

## GitHub Pages

GitHub Pages özel başlık ayarına izin vermez. HTML meta etiketleri çoğu kontrolü sağlar; ancak HSTS ve `frame-ancestors` (clickjacking) ek kontrolü için Cloudflare gibi bir CDN katmanı eklenmesi önerilir.

## Doğrulama

Yayına aldıktan sonra başlıkları doğrula:
- https://securityheaders.com  
- https://observatory.mozilla.org

Beklenen skor: A+ (yukarıdaki başlıkların hepsi sunulduğunda).
