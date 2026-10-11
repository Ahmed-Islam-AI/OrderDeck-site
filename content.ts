// All visible marketing copy. Short on purpose: one title + one sentence per item.
// Only claims OrderDeck ships today (see the app's docs/PROGRESS.md).

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  tag: "Made for Pakistani restaurants",
  title: "Scan. Order. Serve.",
  sub: "QR menus, a live kitchen screen and Easypaisa or JazzCash payments. One system for your whole restaurant.",
  secondary: { label: "See how it works", href: "#how" },
};

export const steps = {
  label: "How it works",
  title: "Go live in 4 simple steps",
  sub: "From paper menu to QR ordering, and our team sets it up with you.",
  items: [
    { key: "setup", title: "We set you up", body: "Your restaurant, branches and staff logins, ready to go." },
    { key: "scan", title: "Scan your menu", body: "Snap your printed menu. AI turns it into dishes and prices." },
    { key: "brand", title: "Make it yours", body: "Add your logo, colours and cover photo." },
    { key: "serve", title: "Print and serve", body: "Put a QR on every table and start taking orders." },
  ],
};

export const features = {
  label: "One platform",
  title: "Everything your restaurant needs",
  items: [
    { key: "menu", title: "Digital menu", body: "Photos, prices and categories in English and Urdu. No app to download." },
    { key: "kitchen", title: "Live kitchen display", body: "Orders hit the kitchen screen instantly and move from New to Ready." },
    { key: "payments", title: "Easypaisa and JazzCash", body: "Guests pay from their phone or at the counter. Every order reconciled." },
    { key: "analytics", title: "Sales analytics", body: "Today's sales, busy hours and best sellers for every branch." },
    { key: "staff", title: "Staff and payroll", body: "Attendance, leave and salaries worked out from the days they worked." },
    { key: "inventory", title: "Inventory and bazar", body: "Track stock and daily market spend, with low-stock alerts." },
    { key: "offers", title: "Offers and happy hours", body: "Schedule deals that switch on and off by themselves." },
  ],
};

export const more = {
  title: "And a whole lot more",
  items: [
    { key: "branches", title: "Multi-branch", body: "Run every outlet from one account, each with its own menu and tables." },
    { key: "feedback", title: "Guest feedback", body: "Star ratings and comments, straight from the table." },
    { key: "music", title: "Music playlist", body: "Share your restaurant's playlist with guests." },
    { key: "storefront", title: "Branded storefront", body: "A landing page with your hours, location and social links." },
    { key: "install", title: "Installs like an app", body: "Guests can add your menu to their home screen." },
    { key: "roles", title: "Team roles", body: "Separate logins for admin, managers and the kitchen." },
  ],
};

export const bands = [
  { label: "The floor", text: "Every table. One screen.", sub: "Orders from every table land on one live kitchen display.", tone: "dark" as const },
  { label: "The payments", text: "Paid in a tap.", sub: "Easypaisa, JazzCash or the counter. Tax and service worked out for you.", tone: "brand" as const },
  { label: "The market", text: "Built for Pakistan.", sub: "Urdu, rupees, local wallets and the daily bazar, from day one.", tone: "ink" as const },
];

export const benefits = {
  title: "Made for how Pakistan eats out",
  items: [
    { key: "urdu", title: "Urdu that reads right", body: "A full right-to-left Urdu menu, one tap from English." },
    { key: "support", title: "Help on WhatsApp", body: "Setup and support from a real person, where you already chat." },
    { key: "rupees", title: "Priced in rupees", body: "Prices, tax and service charge in PKR on every bill." },
    { key: "reliable", title: "Never lose an order", body: "Orders save instantly and the kitchen screen reconnects by itself." },
  ],
};

export const pricing = {
  label: "Pricing",
  title: "Pick how you pay",
  sub: "Two simple models. We share a quote after a short WhatsApp call.",
  plans: [
    {
      name: "Monthly plan",
      from: "pricingMonthly" as const,
      summary: "A fixed monthly fee. Nothing added to your guests' bills.",
      points: ["Sized by branches and staff", "Choose the modules you need", "Same cost every month"],
    },
    {
      name: "Pay per order",
      from: "pricingPerOrder" as const,
      summary: "No monthly fee. A small service charge on each order.",
      points: ["Nothing to pay upfront", "Pay only when guests order", "One invoice a month"],
    },
  ],
};

export const faq = {
  title: "Questions owners ask",
  items: [
    { q: "Do guests need to download an app?", a: "No. They scan the QR and your menu opens in their phone's browser." },
    { q: "Which payments are supported?", a: "Easypaisa, JazzCash and pay at the counter. You choose which ones to offer." },
    { q: "Does it work in Urdu?", a: "Yes. Guests switch the whole menu to Urdu, right to left, and back anytime." },
    { q: "I have more than one branch.", a: "Each branch gets its own tables, kitchen screen and menu, all in one dashboard." },
    { q: "Can it look like my restaurant?", a: "Yes. Your logo, colours, cover photo and hours are on the guest page." },
    { q: "What if the internet drops?", a: "Orders are saved the moment they are placed. The kitchen screen reconnects and catches up." },
  ],
};

export const finalCta = {
  title: "See your menu on OrderDeck",
  body: "Send us a photo of your menu on WhatsApp. We'll show you how it looks.",
};

export const legalUpdated = "29 September 2026";
