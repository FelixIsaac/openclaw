import { runEmbeddedAttempt } from "../embedded-agent-runner/run/attempt.js";
import type { AgentHarness } from "./types.js";

export function createOpenClawAgentHarness(): AgentHarness {
  return {
    id: "openclaw",
    label: "OpenClaw embedded agent",
    supports: () => ({ supported: true, priority: 0 }),
    runAttempt: runEmbeddedAttempt,
  };
}
