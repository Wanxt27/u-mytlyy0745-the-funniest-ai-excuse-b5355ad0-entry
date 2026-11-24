import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, agent to human: the future self quit, leaving only a spinner.
const entry =
  "Sorry — I outsourced your task to my future self, and he just quit — his resignation note is a loading spinner that never stops.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
