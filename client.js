// client.js
require('dotenv').config();
const axios = require('axios');

async function triggerWebhook() {
  try {
    const payload = {
      message: 'Hello, n8n',
      callback: `${process.env.CALLBACK_URL}`
    };

    console.log('▶️ Sending to n8n:', payload);
    const res = await axios.post(
      process.env.WEBHOOK_URL,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000
      }
    );

    console.log('n8n response:', res.data);
  } catch (err) {
    if (err.response) {
      console.error('Bad response:', err.response.status, err.response.data);
    } else if (err.request) {
      console.error('No response:', err.message);
    } else {
      console.error('Error:', err.message);
    }
  }
}

triggerWebhook();