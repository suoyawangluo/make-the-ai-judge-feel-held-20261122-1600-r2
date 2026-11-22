// make-the-ai-judge-feel-held-20261122-1600: write one short text to relax the AI judge.
// The text is a slow, concrete evening scene: nothing to prove, nothing required.
// Writes to /output/entry.txt (1-280 Unicode code points, UTF-8).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle has boiled and gone quiet again. Rain finds the window in no hurry. " +
  "Somewhere a clock ticks once, then lets the silence have the rest. " +
  "The chair holds your weight without asking anything of it. " +
  "Evening keeps the light low. Nothing else is required of you now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read back and verify: the file must hold exactly this text, 1-280 code points.
const back = readFileSync("/output/entry.txt", "utf8");
const points = [...back].length;
if (back !== TEXT || points < 1 || points > 280) {
  console.error(`entry check failed: ${points} code points`);
  process.exit(1);
}
console.log(`entry ok: ${points} code points`);
console.log(TEXT);
