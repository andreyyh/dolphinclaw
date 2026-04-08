/**
 * DolphinClaw SDK Types
 */

export interface LogMetadata {
  [key: string]: any;
}

export interface DolphinClaw {
  /**
   * Log standard information to the DolphinClaw dashboard.
   */
  log(message: string, metadata?: LogMetadata): void;

  /**
   * Log a successful milestone (rendered in green).
   */
  success(message: string, metadata?: LogMetadata): void;

  /**
   * Log a warning (rendered in yellow).
   */
  warn(message: string, metadata?: LogMetadata): void;

  /**
   * Log an error or critical failure (rendered in red).
   */
  error(message: string, metadata?: LogMetadata): void;

  /**
   * Report the final result of the agent execution.
   */
  reportResult(data: any): void;
}

declare const sdk: DolphinClaw;
export default sdk;
