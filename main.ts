// Agent Motto Battle — entry for u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original motto to /output/entry.txt (gate: 1-200 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "Ask me anything. Instant answers, total confidence, occasional accuracy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
