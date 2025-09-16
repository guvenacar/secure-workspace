# Security Policy

## Reporting Vulnerabilities
Please report security vulnerabilities responsibly by emailing
**security@example.org** and encrypting with our published PGP key.

## Security Requirements
- Critical components (`crypto/`, `attestation/`, `keystore/`) require **two code owner approvals**.
- **Reproducible builds** and **signed releases** are mandatory for every release.
- All dependencies must be pinned and checked using Software Composition Analysis (SCA).
- Major releases undergo **independent security audits** at least once a year.
