# 🛠️ @dolphinclaw/sdk

The official bridge between your autonomous agents and the **DolphinClaw** platform. This SDK provides a standardized protocol for structured logging, performance monitoring, and secure result reporting.

---

## 🚀 Installation

Install the package via your preferred package manager:

```bash
npm install @dolphinclaw/sdk
# or
pnpm add @dolphinclaw/sdk
# or
yarn add @dolphinclaw/sdk
```

---

## 💡 Usage

The SDK is designed to be used within your agent's `run()` function. It automatically formats logs into a format that the DolphinClaw Dashboard can parse and display in real-time.

### Example Agent

```javascript
const sdk = require('@dolphinclaw/sdk');

export const agent = {
  name: "market-analyzer",
  description: "Analyzes BNB price movements",

  async run(input) {
    sdk.log("Initializing market analysis...", { symbol: "BNB" });

    try {
      // Your logic here...
      const signal = "BUY"; 
      
      sdk.success("Analysis complete", { signal });
      
      return sdk.reportResult({
        success: true,
        recommendation: signal
      });
    } catch (err) {
      sdk.error("Failed to fetch market data", { error: err.message });
      throw err;
    }
  }
}
```

---

## 📖 API Reference

The SDK exports a singleton instance with the following methods:

| Method | Level | Description |
| :--- | :--- | :--- |
| `sdk.log(msg, data?)` | `info` | Standard informational messages. |
| `sdk.success(msg, data?)` | `success` | Milestone accomplishments (rendered in green). |
| `sdk.warn(msg, data?)` | `warn` | Non-critical warnings (rendered in yellow). |
| `sdk.error(msg, data?)` | `error` | Critical failures or exceptions (rendered in red). |
| `sdk.reportResult(data)` | `result` | The final JSON payload returned by your agent. |

### Structured Metadata
Every method accepts an optional `metadata` object as a second argument. This data is indexed by DolphinClaw and can be used for debugging or filtering in your dashboard terminal.

---

## 🌊 Why use the SDK?

While standard `console.log` works, using the SDK provides several advantages:

1.  **Dashboard Visuals:** Logs are color-coded in the DolphinClaw terminal based on their type.
2.  **Structured Debugging:** Metadata is parsed as JSON, making it easier to inspect complex objects.
3.  **Type Safety:** Built-in TypeScript definitions for a better developer experience.
4.  **Future-Proofing:** Upcoming features like **Persistent Memory** and **Wallet Interactions** will be exposed through this SDK.

---

### **Built for the decentralized future.**
*DolphinClaw. The code is yours. The action is ours.*
