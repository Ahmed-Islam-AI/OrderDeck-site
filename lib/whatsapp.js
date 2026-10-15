// Plain JS (not TS) so scripts/check.mjs can import it with no build step.

/**
 * Normalize a Pakistani number to wa.me format (92XXXXXXXXXX).
 * Accepts 0300-1234567, +92 300 1234567, 00923001234567, 3001234567.
 * @param {string} raw
 * @returns {string}
 */
export function normalizePkNumber(raw) {
  const d = String(raw ?? "").replace(/\D/g, "");
  if (/^92\d{10}$/.test(d)) return d;
  if (/^0092\d{10}$/.test(d)) return d.slice(2);
  if (/^0\d{10}$/.test(d)) return "92" + d.slice(1);
  if (/^3\d{9}$/.test(d)) return "92" + d;
  throw new Error(`Invalid Pakistani WhatsApp number: "${raw}"`);
}

/**
 * @param {string} number
 * @param {string} message
 */
export function waLink(number, message) {
  return `https://wa.me/${normalizePkNumber(number)}?text=${encodeURIComponent(message)}`;
}

/** "+92 300 1234567" for display. @param {string} number */
export function formatPkNumber(number) {
  const n = normalizePkNumber(number);
  return `+92 ${n.slice(2, 5)} ${n.slice(5)}`;
}
