# Governance Policy – Secure Workspace

This repository is the **single, official source** of the Secure Workspace project.

## 1. Official Source
- This project is maintained as **one canonical implementation** approved by the consortium (E-Government, CAs, and independent members).
- No alternative forks, parallel repositories, or divergent distributions are allowed.

## 2. Fork Policy
- **Fork creation is disabled.**
- Public mirror copies for read-only purposes are permitted, but must not diverge from this repository.

## 3. Contribution Workflow
- All contributions must go through the official Pull Request process.
- Contributors must follow the guidelines in `CONTRIBUTING.md`.
- Changes in critical areas (`crypto/`, `attestation/`, `keystore/`) require review and approval from designated code owners.

## 4. Release Process
- Official binaries are produced from the `release` branch only.
- Each release must pass:
  - Reproducible build verification
  - Multi-party review (M-of-N approval from consortium members)
  - Cryptographic signing (GPG + code-signing certificate)

## 5. Transparency
- All governance decisions are documented in this repository.
- Security audits and change logs are published for every major release.
- Users are encouraged to verify binary hashes against the published list before installation.

---

**Summary:**  
This project is intentionally designed to be a single, authoritative implementation. Forking is disabled to prevent fragmentation and preserve user trust. Contributions are welcome via the official PR workflow and are reviewed by multiple parties to ensure security and integrity.
