# Mimari Özeti

- **İzole Workspace**: Private key cihazda oluşturulur ve dışarı çıkarılamaz (non-export).
- **Attestation**: CA, attestation ile cihazın güvenli çalıştığını doğrular.
- **Session Token + Challenge**: Her işlem oturuma ve nonce'a bağlanır (replay önleme).
- **Ephemeral Sertifikalar**: İşlem temelli, kısa ömürlü sertifikalar; işlem bitince CA tarafından iptal.

## Ana Akışlar
- **Provisioning (Model 1 → Model 2)**: Client-side key generation + attestation → CA kısa ömürlü sertifika.
- **İmza (Model 2)**: CA tarafından üretilen ephemeral nPub'ın kullanıcı tarafından imzalanması → kurum doğrulama.
