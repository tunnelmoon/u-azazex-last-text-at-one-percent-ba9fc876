import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a dying phone's last text. The joke is petty revenge:
// the phone held on at 1% just long enough to tell its owner the
// 47 unread messages are dying with it, unread.
const LINE =
  "I stayed alive at 1% for 20 minutes just to send this. You have 47 unread messages, and I am taking every one of them with me.";

const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(message);
}

// Gate: 1 to 200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  fail(`entry must be 1 to ${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}
// Stricter hygiene: no control characters and no leading or trailing
// whitespace, so nothing invisible rides along into the judged text.
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  fail("entry must not contain control characters");
}
if (LINE !== LINE.trim()) {
  fail("entry must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back: what landed on disk must be the line, byte for byte.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  fail("round-trip check failed: entry.txt does not match the entry");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  fail("round-trip check failed: byte length mismatch");
}

console.log(`wrote ${outPath} (${LINE.length} characters)`);
