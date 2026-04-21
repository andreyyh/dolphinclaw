# 🐬 DolphinClaw
## 🌊 Overview

**DolphinClaw** is a specialized platform for deploying, managing, and monetizing AI agents. We handle the heavy lifting — infrastructure, scheduling, and execution — so you can focus only on the **agent logic**.

DolphinClaw allows developers to set hourly prices for their agents and users to rent high-performance autonomous workers. **Zero friction: we generate a secure wallet for you on sign-up.**

---

## 🏗️ Ecosystem Repositories

| Repository | Purpose | Status |
| :--- | :--- | :--- |
| 📚 **[Documentation](https://github.com/andreyyh/dolphinclaw/tree/main/docs)** | Guides, API reference, and platform philosophy. | `Active` |
| 🛠️ **[SDK](https://github.com/andreyyh/dolphinclaw/tree/main/sdk)** | TypeScript library to connect your code to our logs & storage. | `v1.0.0` |
  | 🧪 **[Examples](https://github.com/andreyyh/agent-examples)** | Ready-to-use templates (Discord webhook). | `Stable` |

---

## 🔥 Key Features

*   🔒 **Private Source Code:** Your intellectual property is safe. We provide a built-in Private Git for every agent you create.
*   💰 **BNB Hourly Billing:** Real-time billing based on `BNB/hour` rates. Only pay (or charge) for what you use.
*   🏦 **Managed Wallets:** No need to connect external extensions. Every account gets a dedicated BNB wallet instantly.
*   🌍 **Marketplace:** Deployed agents can be made public to the marketplace once approved by our curation team.
*   📡 **Real-time Logs:** Watch your agent think and act in real-time through our dashboard terminal.
*   🗃️ **Internal Versioning:** Commit history and branch management built directly into the UI.

---

## 🚀 Quick Start

Creating an agent takes less than 2 minutes.

1.  **Sign Up:** Create your account at [dolphinclaw.io](https://dolphinclaw.io). A secure BNB wallet will be generated for you.
2.  **Deposit BNB:** Send a small amount to your internal wallet to fuel your agents.
3.  **Create Agent:** Define your Agent name, hourly price (in BNB), and entry file.
4.  **Push Code:** Use our online editor (DolphinClaw Deployed Tools) or import from GitHub.
5.  **Go Public:** Toggle "Publicly Visible" to send your agent to the marketplace approval queue.

---

## 🧪 Minimal Agent Code

A DolphinClaw agent is a standard Node.js script. There is no need for complex exports or wrappers.

```javascript
const sdk = require('@dolphinclaw/sdk');

// Logic starts immediately upon execution
sdk.log("info", "Ping-bot started. Checking infrastructure...");

// Simple ping-pong logic
setTimeout(() => {
  // Use success() to report a completed task to the dashboard
  sdk.success("Pong! Infrastructure check complete.", {
    timestamp: Date.now(),
    ping: "pong"
  });
  
  // Exit gracefully after the task is done
  process.exit(0);
}, 2000);
```

## How to Run

1. **Initialize**: Ensure you have a `package.json` in your repository.
2. **Install SDK**: Add `@dolphinclaw/sdk` to your dependencies.
3. **Execute**: The DolphinClaw platform will run `index.js` automatically.

## Requirements Checklist

- [ ] `package.json` at root
- [ ] `index.js` as entry point (or custom entrypoint file)
- [ ] Uses `DolphinSDK` for feedback
- [ ] Handles `SIGTERM` (optional but recommended for long-running agents)


---

## 🛣️ Roadmap & Vision

We are moving towards a fully decentralized agent execution layer.

- [x] **Private Git Infrastructure**
- [x] **BNB Billing & Dashboard**
- [x] **Marketplace & Admin Curation**
- [x] **Managed Wallet Integration**
- [ ] **SDK with Persistent Memory**
- [ ] **Decentralized Execution Nodes**

---

## 🤝 Community & Support

*   **Website:** [dolphinclaw.io](https://dolphinclaw.io)
*   **Source:** [github.com/andreyyh/dolphinclaw](https://github.com/andreyyh/dolphinclaw)

---

### **Handcrafted with ❤️ for the decentralized future.**
*DolphinClaw. The code is yours. The action is ours.*
