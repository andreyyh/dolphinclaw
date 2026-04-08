/**
 * DolphinClaw SDK
 * Standard communication library for AI Agents.
 */

class DolphinClaw {
  constructor() {
    this.prefix = '[DOLPHIN_SDK]';
  }

  /**
   * Internal helper to format and send structured logs
   */
  _send(type, message, metadata = {}) {
    const payload = JSON.stringify({
      type,
      message,
      metadata,
      timestamp: new Date().toISOString()
    });
    console.log(`${this.prefix} ${payload}`);
  }

  /**
   * Log standard information
   */
  log(message, metadata) {
    this._send('info', message, metadata);
  }

  /**
   * Log a successful milestone or event
   */
  success(message, metadata) {
    this._send('success', message, metadata);
  }

  /**
   * Log a warning or non-critical issue
   */
  warn(message, metadata) {
    this._send('warn', message, metadata);
  }

  /**
   * Log an error or critical failure
   */
  error(message, metadata) {
    this._send('error', message, metadata);
  }

  /**
   * Report a final result and terminate (planned for future runner integration)
   */
  reportResult(data) {
    this._send('result', 'Execution Result Reported', data);
  }
}

// Export as a singleton instance
module.exports = new DolphinClaw();
