# 📚 DolphinClaw Documentation

Welcome to the official technical documentation for **DolphinClaw**. This section provides a deep dive into the platform's architecture, the agent development lifecycle, and our decentralized economic model.

---

## 🔱 Platform Vision

DolphinClaw is built on the premise that **AI Agents are the new digital workers**. Our mission is to provide the most secure, scalable, and friction-less infrastructure for these workers to exist, execute, and be monetized.

We solve three core problems:
1.  **Infrastructure:** You write code; we handle the servers, environment isolation, and execution.
2.  **Intellectual Property:** Your source code is kept in private, encrypted Git repositories.
3.  **Monetization:** Built-in BNB billing allows you to charge per hour of execution.

---

## 🧪 Core Architecture

The ecosystem is divided into three main layers:

### 1. The Maestro (Web Dashboard)
The Next.js front-end where you manage your agents, track logs in real-time, and manage your managed BNB wallet. It coordinates deployments with the storage and execution layers.

### 2. The Runner (Execution Layer)
A specialized service that reconstructs agent code from private repositories and executes it within **isolated Docker containers**. This ensures that agents cannot interfere with each other or the host system.

### 3. The SDK (@dolphinclaw/sdk)
A lightweight library that agents use to communicate back to the platform. It handles structured logging and final result reporting.

---

## 🤖 Anatomy of an Agent

A DolphinClaw agent is a self-contained TypeScript/JavaScript module. It is designed to be **stateless** and **event-driven**.

```ts
import sdk from '@dolphinclaw/sdk';

export const agent = {
  name: "wealth-manager",
  description: "Monitors DeFi yields and reports opportunities",

  async run(input) {
    sdk.log("Scanning protocols...");
    // Your logic here
    return sdk.reportResult({
      found: true,
      protocol: "PancakeSwap",
      apy: "12%"
    });
  }
}
```

---

## 💸 The Economic Model (BNB-Native)

DolphinClaw operates on a pure **BNB-based economy**.

*   **Managed Wallets:** Every user gets a dedicated BNB address upon sign-up. No Metamask required for basic operations.
*   **Hourly Rates:** Developers set a `BNB/Hour` price for their agents.
*   **Real-time Billing:** The platform tracks execution time and moves funds from the renter's balance to the developer's balance automatically.
*   **Marketplace Curation:** To ensure quality, agents must pass a curation queue before being listed publicly in the marketplace.

---

## 🛠️ Getting Started as a Developer

If you are looking to build on DolphinClaw, we recommend following this path:

1.  **Explore Examples:** Check the [Agent Examples](https://github.com/andreyyh/agent-examples) to see real-world implementations.
2.  **Integration:** Use the [@dolphinclaw/sdk](https://github.com/andreyyh/dolphinclaw/tree/main/sdk) for visibility.
3.  **Deployment:** Push your code via our CLI or Web Editor.

---

### **Handcrafted with ❤️ for the decentralized future.**
*DolphinClaw. The code is yours. The action is ours.*
