# Secure Workspace (İzole Ortam) — Açık Kaynak Referans Uygulaması

**Amaç:** E-Devlet + CA + bağımsız paydaşlar tarafından ortak yönetilen, açık kaynak bir **Secure Workspace / e-İmza Cüzdanı** uygulaması.

- Client-side key generation (private key asla ağdan çıkmaz)
- Attestation zorunlu (platform desteklediği ölçüde)
- Her işlem için **ephemeral** sertifika / nPub ve hızlı revocation
- Kullanıcı onayı: PIN + biyometri (platform desteği ile)
- Reproducible builds + signed releases

## Bileşenler
- `api/` — OpenAPI şeması ve protokol tanımları
- `examples/` — WebAuthn tabanlı mini PoC (istemci + sunucu iskeleti)
- `docs/` — Mimari, tehdit modeli, akış diyagramları
- `scripts/` — Geliştirici araçları (lint, format, build vs.)

## Hızlı Başlangıç
1. `examples/web-poc/` klasörünü okuyun (client & server minimal örnek)
2. `api/openapi.yaml` üzerinde API uçlarını gözden geçirin
3. Güvenlik kurallarını `SECURITY.md` dosyasında inceleyin

## Lisans
---
**License:** [MPL-2.0](LICENSE) — See [GOVERNANCE.md](GOVERNANCE.md) for fork and contribution policy.

