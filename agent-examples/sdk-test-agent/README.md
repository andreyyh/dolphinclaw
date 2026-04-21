# DolphinRunner Test Agent

---

# Agent Structure

This agent is a standalone script designed for performance and stress testing of the **DolphinServer** infrastructure. Unlike modular agents, it uses the official SDK for real-time telemetry.

| Feature       | Implementation | Description                                          |
| ------------- | ------------ | ---------------------------------------------------- |
| `SDK`         | `@dolphinclaw/sdk` | Official communication layer with the platform       |
| `Frequency`   | `5000ms`      | Executes a logic tick every 5 seconds                |
| `Telemetry`   | ✅           | High-frequency error and memory reporting            |
| `Lifecycle`   | `Continuous`  | Runs indefinitely until a `SIGTERM` is received      |

---

# Technical Implementation

The agent initializes the SDK and enters a continuous loop, monitoring system resources and simulating failures to test dashboard resilience.

```js
const sdk = require('@dolphinclaw/sdk');

// 1. Initialization
sdk.log('Dolphin Test Agent started successfully.');

// 2. Main Loop (Continuous Execution)
const interval = setInterval(() => {
  tick++;

  // 3. Telemetry Emission
  sdk.error(`[SIMULATED_ERROR] Critical failure at Tick #${tick}`, {
    tick: tick,
    memory_stats: getMemoryStats()
  });
}, 5000);
```

---

# Lifecycle

When this agent runs on the DolphinServer, the following lifecycle occurs:

```
Process Start
↓
SDK Handshake (sdk.log)
↓
Main Loop (setInterval) starts
↓
Continuous Telemetry (sdk.error)
↓
SIGTERM (Graceful Shutdown)
```

* The agent remains active, allowing the dashboard to monitor real-time health.
* It captures `uncaughtException` to ensure all crashes are reported to the platform via `sdk.error`.

---

# Metrics Reporting

The agent automatically tracks memory usage and reports it in every heartbeat:

* `heapUsed`: Current memory consumed by objects.
* `heapTotal`: Total memory allocated for the heap.
* `external`: Memory used by C++ objects linked to JavaScript.

This data is used by the **BrainGraph** to display real-time performance graphs.

---

# Monitoring

This agent is specifically tuned to trigger the **Error State** on the DolphinClaw Dashboard. It emits a critical error every 5 seconds to validate:

1. Real-time log streaming.
2. BrainGraph connection pulse stability.
3. Notification resilience.

---

# Philosophy

The DolphinRunner Test Agent follows the core values of the ecosystem:

* **Resilience**: Handles its own shutdown signals and fatal errors.
* **Transparency**: Uses the SDK to reveal every internal state change.
* **Stress-Tested**: Designed to keep the infrastructure alive under persistent "failure" simulation.

Developers can use this script as a boilerplate for complex agents that require low-level control and continuous background execution.
