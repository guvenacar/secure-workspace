// Minimal PoC server (Express.js). Attestation doğrulama için gerçek kütüphane ekleyin (örn. @simplewebauthn/server).
const express = require('express');
const app = express();
app.use(express.json({limit:'2mb'}));

app.post('/challenge', (req, res) => {
  // Basit demo: üretilecek gerçek challenge base64 ve session token üretimi
  const challenge = Buffer.from('demo-challenge').toString('base64');
  const sessionToken = 'demo-session-token';
  res.json({ sessionToken, challenge, ttlSeconds: 120 });
});

app.post('/register', (req, res) => {
  // TODO: attestation doğrula, publicKey çıkar, DB'ye kaydet, cert iste
  res.status(201).json({ ok:true, note:'attestation to be verified — this is a PoC skeleton' });
});

app.listen(8787, ()=>console.log('PoC running on http://localhost:8787'));
