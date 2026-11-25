// The 3AM Fridge Text — entry program.
// Writes the one line a smart fridge texts its owner at 3am to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The fridge has had enough of the midnight cake raids and turns snitch:
// it already told the fitness app. A machine with a small voice, an opinion,
// and no shame about sharing it at 3am. The punchline lands on what a fridge
// actually does: it keeps things, it does not keep secrets.
const TEXT =
  "3am. Just so you know, I already told your fitness app about the cake. I don't keep secrets — I keep leftovers.";

// Gate self-check: 1-140 characters, not whitespace-only.
const len = [...TEXT].length;
if (len < 1 || len > 140 || TEXT.trim().length === 0) {
  throw new Error(`text fails gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
