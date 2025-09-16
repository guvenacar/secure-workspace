# Web PoC (WebAuthn + Minimal Backend)

Bu dizin, WebAuthn ile client-side key generation ve attestation'ın nasıl toplanacağını gösteren minimal bir örnek için ayrılmıştır.

- `client.html`: WebAuthn `navigator.credentials.create()` akışı
- `server.js`: Basit bir Express.js iskeleti (attestation doğrulama için yer)
