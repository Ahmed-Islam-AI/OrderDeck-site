// Self-check for the one thing that can silently kill every lead: the WhatsApp link.
//   npm run check           -> asserts the link builder + validates the configured number
//   npm run check:deploy    -> also refuses placeholders, then writes out/CNAME + out/.nojekyll (run after build)
import assert from "node:assert/strict";
import { existsSync, writeFileSync } from "node:fs";
import { normalizePkNumber, waLink, formatPkNumber } from "../lib/whatsapp.js";
import { site, PLACEHOLDER_URL, PLACEHOLDER_WHATSAPP } from "../site.config.ts";

// Link builder
for (const raw of ["0300-1234567", "+92 300 1234567", "00923001234567", "3001234567", "923001234567"]) {
  assert.equal(normalizePkNumber(raw), "923001234567", raw);
}
for (const bad of ["", "12345", "0300-123", "+1 312 847 1928"]) {
  assert.throws(() => normalizePkNumber(bad), bad);
}
assert.equal(waLink("0300 1234567", "Hi & bye?"), "https://wa.me/923001234567?text=Hi%20%26%20bye%3F");
assert.equal(formatPkNumber("03001234567"), "+92 300 1234567");

// Configured values
normalizePkNumber(site.whatsapp); // throws on a malformed number
assert.match(site.url, /^https:\/\/[^/]+$/, "site.url must be https://domain with no trailing slash");

if (process.argv.includes("--deploy")) {
  assert.notEqual(normalizePkNumber(site.whatsapp), PLACEHOLDER_WHATSAPP, "site.whatsapp is still the placeholder");
  assert.notEqual(site.url, PLACEHOLDER_URL, "site.url is still the placeholder");
  assert.ok(!site.email.endsWith(".example"), "site.email is still the placeholder");
  assert.ok(existsSync("out"), "run `npm run build` first");
  writeFileSync("out/CNAME", new URL(site.url).host + "\n");
  writeFileSync("out/.nojekyll", "");
  console.log(`deploy check passed, CNAME -> ${new URL(site.url).host}`);
} else {
  console.log("check passed");
}
