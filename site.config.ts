// Everything you need to edit before launch lives in this one file.
// `npm run check:deploy` refuses to ship while any value still equals a placeholder.

export const PLACEHOLDER_WHATSAPP = "923001234567";
export const PLACEHOLDER_URL = "https://orderdeck.example";

export const site = {
  name: "OrderDeck",
  // Your public domain (no trailing slash). Also written to out/CNAME for GitHub Pages.
  url: PLACEHOLDER_URL,
  // Any Pakistani format works: 0300-1234567, +92 300 1234567 ...
  whatsapp: PLACEHOLDER_WHATSAPP,
  email: "hello@orderdeck.example",
  city: "Lahore, Pakistan",
  // Leave a value empty to hide that icon.
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  // Optional. Both track WhatsApp button clicks as outbound links automatically.
  analytics: {
    plausibleDomain: "",
    ga4Id: "",
  },
};

// One prefilled message per placement, so every WhatsApp chat tells you which part of the page converted.
export const ctaMessages = {
  header: "Hi OrderDeck, I'd like to book a demo for my restaurant.",
  hero: "Hi OrderDeck, I saw your website and I'd like to see OrderDeck for my restaurant.",
  pricingMonthly: "Hi OrderDeck, I'm interested in the Monthly plan. Can you share pricing?",
  pricingPerOrder: "Hi OrderDeck, I'm interested in the Pay-per-order model. Can you share details?",
  final: "Hi OrderDeck, here is a photo of our menu. Can you show us how it looks on OrderDeck?",
  sticky: "Hi OrderDeck, I'd like to book a demo for my restaurant.",
  footer: "Hi OrderDeck, I'd like to know more about OrderDeck for my restaurant.",
} as const;

export type CtaPlacement = keyof typeof ctaMessages;
