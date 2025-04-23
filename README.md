# n8n Client Service

A simple Node.js client service that sends a POST request to an n8n webhook waits for and logs the response.

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/DanielAntares/n8n-client-service.git
cd n8n-client-service
```
### 2. Install dependencies
```bash
npm install express axios dotenv
npm install --save-dev nodemon
```
### 3. Install & Start ngrok
Install ngrok on your system and expose your local port to the internet:
```bash
ngrok http 5678
```
You will see a public URL (`https://xxxx.ngrok.io`) forwarding to `localhost:5678`.

### 4. Environment Variables

Edit .env and fill in:
```dotenv
PORT=5678
WEBHOOK_URL=https://n8n.avataralabs.ai/webhook/test-webhook
CALLBACK_URL=https://<your-callback-tunnel>.ngrok-free.app/webhook/test-webhook
```
### 5. Run the callback server
This starts an Express server that listens for n8n callbacks:
```bash
node server.js
```
You should see:
```
🚀 Callback server listening on http://localhost:5678/callback
```

### 6. Trigger the webhook client
In another terminal, run:
```
node client.js
```
You should see logs:
```
▶️ Sending to n8n: { message: 'Hello, n8n', callback: ['https://.../webhook/test-webhook'] }
✅ n8n responded: SUCCESS
```
