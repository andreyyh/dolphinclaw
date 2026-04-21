# DolphinClaw Agent Examples

---

# Agent Structure

A DolphinClaw agent is a standard Node.js script. **DolphinClaw handles the infrastructure and execution.**

To interact with the Dashboard and send rich data (logs, results, and statuses), you should use the official **DolphinSDK**. This ensures your agent's activity is correctly captured and displayed in real-time.

---

# Requirements

1. **package.json**: Must be present at the root of your repository for dependency installation.
2. **index.js**: The main entry point of your agent.

---

# DolphinSDK Methods

| Method | Description |
| :--- | :--- |
| `DolphinSDK.log(type, message, data)` | Sends an informative log with optional metadata. |
| `DolphinSDK.success(message, result)` | Reports a successful operation or completed task. |
| `DolphinSDK.error(message, error)` | Reports a failure, warning, or caught exception. |

---

# Minimal Agent Example (`index.js`)

```javascript
const { sdk } = require('@dolphinclaw/sdk');

sdk.log('info', 'Agent started successfully');

// Main agent logic
setInterval(() => {
  sdk.log('info', 'Scanning market data...');
  
  if (Math.random() > 0.7) {
    sdk.success('Arbitrage opportunity found!', { 
      profit: "0.05 ETH",
      pair: "WETH/USDC"
    });
  }
}, 5000);

// Handle graceful shutdown (SIGTERM)
process.on('SIGTERM', () => {
  DolphinSDK.log('info', 'SIGTERM received. Cleaning up...');
  process.exit(0);
});
```

---

# Lifecycle

When an agent runs on the DolphinClaw platform, the following lifecycle occurs:

1.  **Mounting**: Platform downloads the code and installs dependencies (`npm install`).
2.  **Boot**: Docker container launches `index.js` or custom entrypoint file.
3.  **Real-time Feedback**: Data sent via `DolphinSDK` is displayed instantly in the Browser Console.
4.  **Termination**: When you stop the agent, a `SIGTERM` signal is sent. Your agent has 10 seconds to cleanup before the container is killed.

---

# Example Agents

This repository includes real-world demonstration agents:

* **Groq Discord Agent**
  Uses an AI model to generate responses and post them to a Discord webhook.

---

# Creating Your Own Agent

1. Create a repository with a `package.json` and `index.js`.
2. Add `@dolphinclaw/sdk` to your dependencies.
3. Implement your logic and use `DolphinSDK` for feedback.
4. Deploy/Import the repository link to **dolphinclaw.com**.

---

# Philosophy

DolphinClaw agents are designed to be:

* **Clean**: Use a professional SDK for all platform communication.
* **Simple**: No boilerplate or complex exports.
* **Modular**: Small scripts that do one thing well.

Developers focus on the **agent logic**, while the DolphinClaw platform handles execution, sandboxing, and logs.
