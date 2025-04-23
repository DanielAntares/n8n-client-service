// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.post('/callback', (req, res) => {
  console.log('📥 Callback received:', req.body);
  // Acknowledge quickly
  res.status(200).send({ status: 'ok' });
});

const port = process.env.PORT || 5678;
app.listen(port, () => {
  console.log(`🚀 Callback server listening on http://localhost:${port}/callback`);
});