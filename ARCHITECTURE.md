# Architecture Overview

## Core Design
- **Isolated Workspace:** Private keys are generated on-device and cannot be exported.
- **Attestation:** CA verifies that the device is genuine and secure before issuing certificates.
- **Session Binding:** Every signing request is bound to a unique session token + challenge (replay protection).
- **Ephemeral Certificates:** Certificates are transaction-bound and immediately revoked after use.

## Primary Flows
- **Provisioning (Model 1 → Model 2):**
  1. Client-side key generation + attestation
  2. CA issues short-lived certificate
- **Signing (Model 2):**
  1. CA generates ephemeral nPub
  2. User signs with nPri inside isolated workspace
  3. Institution verifies signed nPub and completes the process
