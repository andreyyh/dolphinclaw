/**
 * DolphinRunner Test Agent (SDK Version)
 * Runs indefinitely, communicating via @dolphinclaw/sdk
 */

const sdk = require('@dolphinclaw/sdk');

let tick = 0;

function getMemoryStats() {
  const mem = process.memoryUsage();
  return {
    heapUsed: (mem.heapUsed / 1024 / 1024).toFixed(2),
    heapTotal: (mem.heapTotal / 1024 / 1024).toFixed(2),
    external: (mem.external / 1024 / 1024).toFixed(2),
    unit: 'MB'
  };
}

sdk.log('Dolphin Test Agent started successfully using the official SDK.');

const interval = setInterval(() => {
  tick++;

  // Emitting an error every 5 seconds (each tick) for dashboard stress testing
  sdk.error(`[SIMULATED_ERROR] Critical failure detected at Tick #${tick}`, {
    tick: tick,
    error_code: 'ERR_SYNC_FAIL',
    timestamp: new Date().toISOString(),
    memory_stats: getMemoryStats()
  });

}, 5000);

// Shutdown
process.on('SIGTERM', () => {
  sdk.log('Shutdown signal received. The dolphin is going to sleep... 🐬💤');
  clearInterval(interval);
  process.exit(0);
});

process.on('uncaughtException', (err) => {
  sdk.error(`Fatal exception caught: ${err.message}`, { stack: err.stack });
  process.exit(1);
});