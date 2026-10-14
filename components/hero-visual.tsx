"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  SquaresFour, Receipt, CookingPot, ForkKnife, QrCode, Wallet, UsersThree, Package, CheckCircle, Plus,
} from "@phosphor-icons/react";

// Illustrative product preview (sample data, not a live feed): the admin dashboard with a guest's
// phone menu layered on top. Orders tick through New -> Preparing -> Ready -> Paid to show the loop is live.

type Status = "New" | "Preparing" | "Ready" | "Paid";
type Order = { id: number; table: number; items: string; total: number; pay: string; status: Status };

const POOL = [
  { table: 12, items: "Chicken Karahi, 4 Naan", total: 3140, pay: "JazzCash" },
  { table: 4, items: "Beef Nihari, 2 Roti", total: 1780, pay: "Counter" },
  { table: 9, items: "Mutton Biryani x2, Raita", total: 2960, pay: "Easypaisa" },
  { table: 15, items: "Seekh Kebab, Mint Lassi", total: 1330, pay: "JazzCash" },
  { table: 2, items: "Chicken Tikka, Garlic Naan", total: 1540, pay: "Easypaisa" },
  { table: 7, items: "Daal Makhni, 3 Roti, Chai", total: 1210, pay: "Counter" },
];
const FLOW: Status[] = ["New", "Preparing", "Ready", "Paid"];
// Dishes are picked by id so the rotating list never shows the same order twice.
const START: Order[] = FLOW.map((status, i) => ({ id: 1290 - i, ...POOL[(1290 - i) % POOL.length], status }));
const HOURS = [18, 26, 41, 33, 22, 19, 28, 47, 72, 94, 64, 39];

const rs = (n: number) => "Rs " + n.toLocaleString("en-PK");

const pill: Record<Status, string> = {
  New: "bg-brand text-on-brand",
  Preparing: "bg-accent-soft text-accent-ink",
  Ready: "bg-ink text-bg",
  Paid: "bg-subtle text-muted",
};

const nav = [
  { label: "Dashboard", Icon: SquaresFour },
  { label: "Orders", Icon: Receipt },
  { label: "Kitchen", Icon: CookingPot },
  { label: "Menu", Icon: ForkKnife },
  { label: "Tables", Icon: QrCode },
  { label: "Payments", Icon: Wallet },
  { label: "Staff", Icon: UsersThree },
  { label: "Inventory", Icon: Package },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [{ orders, sales, count }, setLive] = useState({ orders: START, sales: 184250, count: 126 });

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setLive(({ orders, sales, count }) => {
        const aged = orders.slice(0, 3).map((o) => ({ ...o, status: FLOW[FLOW.indexOf(o.status) + 1] ?? "Paid" }));
        const paid = aged.find((o) => o.status === "Paid");
        const next = POOL[(orders[0].id + 1) % POOL.length];
        return {
          orders: [{ id: orders[0].id + 1, ...next, status: "New" as Status }, ...aged],
          sales: sales + (paid?.total ?? 0),
          count: count + 1,
        };
      });
    }, 3200);
    return () => clearInterval(t);
  }, [reduce]);

  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const } };

  // The dashboard starts tilted back and settles flat as it scrolls up into view.
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "start 0.2"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <div ref={stage} style={{ perspective: 1600 }} role="img" aria-label="The OrderDeck dashboard showing live orders and today's sales, next to a guest's phone menu" className="relative md:pb-12 lg:min-h-[630px] lg:pb-0">
      <motion.div style={reduce ? undefined : { rotateX, scale, transformOrigin: "50% 0%" }} className="relative">
      {/* Dashboard (md and up), inside a soft frame */}
      <motion.div {...rise(0.15)} aria-hidden className="hidden rounded-[30px] border border-line/70 bg-surface/50 p-2 shadow-soft backdrop-blur md:block lg:mx-[110px]">
      <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
        <div className="grid lg:grid-cols-[190px_1fr]">
          <aside className="hidden border-r border-line bg-subtle/60 p-4 lg:block">
            <div className="flex items-center gap-2 px-2 pb-5 pt-1">
              <img src="/logo.svg" alt="" width={22} height={22} className="rounded-md" />
              <span className="font-display text-sm font-bold">OrderDeck</span>
            </div>
            <div className="mb-4 rounded-xl border border-line bg-surface px-3 py-2">
              <p className="text-[10px] text-muted">Branch</p>
              <p className="text-[12px] font-semibold">Gulberg, Lahore</p>
            </div>
            <ul className="space-y-0.5">
              {nav.map(({ label, Icon }, i) => (
                <li key={label} className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] ${i === 0 ? "bg-surface font-semibold shadow-soft" : "text-muted"}`}>
                  <Icon size={16} weight={i === 0 ? "fill" : "regular"} className={i === 0 ? "text-accent" : ""} />
                  {label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="p-5 lg:p-6">
            <p className="text-[11px] text-muted">Tuesday, Lahori Darbar</p>
            <div className="flex items-center gap-2.5">
              <p className="font-display text-lg font-bold">Today</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {[
                { k: "Sales", v: rs(sales), d: "+12.4% vs last Tue" },
                { k: "Orders", v: String(count), d: "18 in the last hour" },
                { k: "Avg. ticket", v: rs(Math.round(sales / count)), d: "Dine-in" },
                { k: "Tables", v: "14 / 22", d: "occupied now" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-line p-3">
                  <p className="text-[10.5px] text-muted">{s.k}</p>
                  <p className="mt-1 font-display text-[17px] font-bold tabular-nums">{s.v}</p>
                  <p className="mt-0.5 truncate text-[10px] text-muted">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.45fr_1fr]">
              <div className="rounded-2xl border border-line p-3">
                <p className="px-1 pb-2 text-[12px] font-semibold">Live orders</p>
                <ul className="space-y-1.5">
                  {orders.map((o) => (
                    <motion.li
                      key={o.id}
                      layout={!reduce}
                      initial={reduce ? false : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="flex items-center gap-3 rounded-xl bg-subtle/70 px-3 py-2"
                    >
                      <span className="w-10 text-[11px] font-bold tabular-nums">#{o.id}</span>
                      <span className="w-12 text-[11px] text-muted">Table {o.table}</span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px]">{o.items}</span>
                      <span className="hidden w-16 text-right text-[11px] font-semibold tabular-nums xl:block">{rs(o.total)}</span>
                      <span className={`w-[72px] rounded-full py-0.5 text-center text-[10px] font-semibold ${pill[o.status]}`}>
                        {o.status === "Paid" ? o.pay : o.status}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="hidden rounded-2xl border border-line p-3 lg:block">
                <p className="px-1 text-[12px] font-semibold">Sales by hour</p>
                <div className="mt-3 flex h-[118px] items-end gap-1.5 px-1">
                  {HOURS.map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-md ${i === 9 ? "bg-brand" : "bg-accent-soft"}`} />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between px-1 text-[9.5px] text-muted">
                  <span>12pm</span><span>4pm</span><span>8pm</span><span>11pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Guest phone menu */}
      <motion.div
        {...rise(0.35)}
        aria-hidden
        className="mx-auto w-[260px] rounded-[40px] border border-line bg-[#1c1917] p-[7px] shadow-soft md:absolute md:-bottom-10 md:right-6 md:w-[236px] lg:bottom-auto lg:right-0 lg:top-[130px] lg:w-[250px]"
      >
        <div className="overflow-hidden rounded-[33px] bg-surface">
          <div className="bg-brand px-4 pb-4 pt-6 text-on-brand">
            <div className="flex items-center justify-between">
              <p className="font-display text-[15px] font-bold">Lahori Darbar</p>
              <span className="rounded-full bg-[#1c1917]/10 px-2 py-0.5 text-[10px] font-semibold">
                EN <span className="opacity-50">|</span> <span lang="ur" className="font-urdu">اردو</span>
              </span>
            </div>
            <p className="text-[11px] font-medium opacity-80">Table 7, open until 1am</p>
          </div>
          <div className="flex gap-1.5 overflow-hidden px-3 pt-3">
            {["Karahi", "BBQ", "Rice", "Breads"].map((c, i) => (
              <span key={c} className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${i === 0 ? "bg-ink text-bg" : "bg-subtle text-muted"}`}>{c}</span>
            ))}
          </div>
          <ul className="space-y-1 px-3 py-3">
            {[
              { n: "Chicken Karahi", d: "Half, with green chillies", p: 1850 },
              { n: "Mutton Karahi", d: "Desi ghee, full", p: 3400 },
              { n: "White Karahi", d: "Cream, black pepper", p: 1950 },
              { n: "Namkeen Karahi", d: "Peshawari style", p: 2100 },
            ].map((m) => (
              <li key={m.n} className="flex items-center gap-2 rounded-2xl px-2 py-2">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-semibold">{m.n}</p>
                  <p className="truncate text-[10.5px] text-muted">{m.d}</p>
                  <p className="text-[11.5px] font-semibold text-accent-ink">{rs(m.p)}</p>
                </div>
                <span className="grid size-7 place-items-center rounded-full bg-ink text-bg">
                  <Plus size={12} weight="bold" />
                </span>
              </li>
            ))}
          </ul>
          <div className="mx-3 mb-3 flex items-center gap-2 rounded-2xl bg-subtle px-3 py-2.5 text-[10.5px] text-muted">
            <CheckCircle size={14} weight="fill" className="shrink-0 text-accent" />
            Pay with Easypaisa, JazzCash or at the counter
          </div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}
