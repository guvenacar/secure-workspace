# Secure Workspace – Open Source Reference Implementation

**Goal:** Provide a transparent, verifiable, and secure client application for
decentralized e-signature workflows. Maintained under the governance of
the Secure Workspace consortium (e-Government, CAs, independent reviewers).

## Key Features
- **Client-side key generation:** Private keys are generated on the user's device and never leave it.
- **Isolated workspace:** Signing operations run inside a secure environment (TEE/secure enclave).
- **Attestation:** Device attestation and session token binding for trusted key provisioning.
- **Ephemeral certificates:** Per-transaction certificates are issued and instantly revoked.
- **Reproducible builds:** Signed releases with verifiable checksums for full transparency.

## Components
- `api/` – OpenAPI schema and protocol definitions
- `examples/` – Minimal WebAuthn PoC (client + server)
- `docs/` – Architecture, diagrams, and threat models
- `scripts/` – Developer tools (lint, format, build, CI scripts)

## Quick Start
1. Review `examples/web-poc/` to see WebAuthn key generation in action.
2. Check `api/openapi.yaml` for API endpoints and payload format.
3. See `SECURITY.md` for the security and vulnerability disclosure policy.

## License
Licensed under [MPL-2.0](LICENSE).  
**Note:** See [GOVERNANCE.md](GOVERNANCE.md) for fork policy and contribution process.

