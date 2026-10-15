import {
  Check, QrCode, Sparkle, Bell, WarningCircle, ArrowsClockwise, WifiSlash, Storefront, Plus,
} from "@phosphor-icons/react/dist/ssr";

// Small, static product vignettes (sample data) that sit inside feature/step cards.
// Each one shows the feature instead of describing it.

type Tone = "soft" | "brand" | "dark";
const stageTone: Record<Tone, string> = {
  soft: "bg-[radial-gradient(120%_100%_at_50%_0%,var(--accent-soft),var(--subtle))]",
  brand: "bg-brand",
  dark: "bg-[#1c1917]",
};

export function Stage({ tone = "soft", children, className = "h-[230px]" }: { tone?: Tone; children: React.ReactNode; className?: string }) {
  return (
    <div aria-hidden className={`relative overflow-hidden rounded-2xl ${stageTone[tone]} ${className}`}>
      <div className="absolute inset-x-5 top-5 sm:inset-x-7 sm:top-7">{children}</div>
    </div>
  );
}

const card = "rounded-xl border border-line bg-surface p-3.5 shadow-soft";
const rs = (n: number) => "Rs " + n.toLocaleString("en-PK");

function Row({ left, right, className = "" }: { left: React.ReactNode; right: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-between gap-3 text-[12px] ${className}`}>
      <span className="truncate">{left}</span>
      <span className="shrink-0 font-semibold tabular-nums">{right}</span>
    </div>
  );
}

/* ---------- Steps ---------- */

function SetupVisual() {
  return (
    <div className={card}>
      <p className="text-[13px] font-bold">Your restaurant</p>
      {[["Name", "Lahori Darbar"], ["Branches", "Gulberg, DHA Phase 5"], ["Staff", "12 logins"]].map(([k, v]) => (
        <div key={k} className="mt-2.5">
          <p className="text-[10px] text-muted">{k}</p>
          <p className="mt-0.5 rounded-lg border border-line bg-bg px-2.5 py-1.5 text-[11.5px]">{v}</p>
        </div>
      ))}
    </div>
  );
}

function ScanVisual() {
  return (
    <div className={card}>
      <p className="flex items-center gap-1.5 text-[13px] font-bold">
        <Sparkle size={14} weight="fill" className="text-accent" />
        Reading your menu
      </p>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-subtle">
        <div className="h-full w-[72%] rounded-full bg-brand" />
      </div>
      <div className="mt-3 space-y-2">
        {[["Chicken Karahi", 1850], ["Seekh Kebab", 950], ["Garlic Naan", 120]].map(([n, p]) => (
          <Row key={n} left={<span className="flex items-center gap-1.5"><Check size={12} weight="bold" className="text-accent" />{n}</span>} right={rs(p as number)} />
        ))}
      </div>
    </div>
  );
}

function BrandVisual() {
  return (
    <div className={card}>
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-[#1c1917] font-display text-sm font-bold text-[#fbbf24]">LD</span>
        <div>
          <p className="text-[13px] font-bold">Lahori Darbar</p>
          <p className="text-[10.5px] text-muted">Logo and colours</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        {["#f97316", "#b91c1c", "#15803d", "#1d4ed8", "#1c1917"].map((c, i) => (
          <span key={c} style={{ background: c }} className={`size-7 rounded-full ${i === 0 ? "ring-2 ring-offset-2 ring-offset-[var(--surface)] ring-[var(--ink)]" : ""}`} />
        ))}
      </div>
      <p className="mt-4 rounded-lg bg-subtle px-2.5 py-1.5 text-[11px] text-muted">Cover photo uploaded</p>
    </div>
  );
}

function ServeVisual() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {[1, 2, 3, 4, 5, 6].map((t) => (
        <div key={t} className="rounded-xl bg-[#fafaf9] p-2.5 text-center text-[#1c1917]">
          <QrCode size={40} weight="bold" className="mx-auto" />
          <p className="mt-1 text-[10px] font-semibold">Table {t}</p>
        </div>
      ))}
    </div>
  );
}

export function StepVisual({ k }: { k: string }) {
  const map: Record<string, [Tone, React.ReactNode]> = {
    setup: ["soft", <SetupVisual key="a" />],
    scan: ["soft", <ScanVisual key="b" />],
    brand: ["soft", <BrandVisual key="c" />],
    serve: ["dark", <ServeVisual key="d" />],
  };
  const [tone, node] = map[k];
  return <Stage tone={tone} className="h-[210px]">{node}</Stage>;
}

/* ---------- Features ---------- */

function MenuVisual() {
  return (
    <div className="mx-auto w-[220px] rounded-t-[30px] border border-b-0 border-line bg-[#1c1917] p-[6px] pb-0 shadow-soft">
      <div className="overflow-hidden rounded-t-[24px] bg-surface">
        <div className="bg-brand px-3.5 pb-3 pt-4 text-on-brand">
          <p className="font-display text-[13px] font-bold">Lahori Darbar</p>
          <p className="text-[10px] opacity-80">Table 7</p>
        </div>
        <div className="space-y-2 p-3">
          {[["Chicken Karahi", 1850], ["Mutton Pulao", 1450], ["Mint Lassi", 380]].map(([n, p]) => (
            <div key={n} className="flex items-center gap-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-semibold">{n}</p>
                <p className="text-[10.5px] font-semibold text-accent-ink">{rs(p as number)}</p>
              </div>
              <span className="grid size-6 place-items-center rounded-full bg-ink text-bg"><Plus size={11} weight="bold" /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KitchenVisual() {
  const cols = [
    { t: "New", tickets: [["#1291", "T4", "Beef Nihari, 2 Roti"], ["#1292", "T9", "Mutton Biryani x2"]] },
    { t: "Preparing", tickets: [["#1289", "T12", "Chicken Karahi, 4 Naan"]] },
    { t: "Ready", tickets: [["#1288", "T2", "Chicken Tikka"]] },
  ];
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {cols.map((c, ci) => (
        <div key={c.t} className="rounded-xl bg-surface/95 p-2">
          <p className="px-1 pb-2 text-[11px] font-semibold text-muted">{c.t}</p>
          <div className="space-y-2">
            {c.tickets.map(([id, t, items]) => (
              <div key={id} className={`rounded-lg border p-2 ${ci === 2 ? "border-transparent bg-brand text-on-brand" : "border-line bg-bg"}`}>
                <p className="text-[11px] font-bold">{id}, {t}</p>
                <p className="mt-0.5 truncate text-[10.5px]">{items}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PaymentsVisual() {
  return (
    <div className={card}>
      <p className="text-[10.5px] text-muted">Table 12</p>
      <p className="font-display text-xl font-bold">{rs(3140)}</p>
      <div className="mt-3 space-y-1.5">
        {["Easypaisa", "JazzCash", "Pay at counter"].map((m, i) => (
          <div key={m} className={`flex items-center justify-between rounded-lg border px-2.5 py-2 text-[11.5px] ${i === 0 ? "border-accent font-semibold" : "border-line"}`}>
            {m}
            <span className={`grid size-4 place-items-center rounded-full border ${i === 0 ? "border-accent bg-accent text-white" : "border-line"}`}>
              {i === 0 && <Check size={9} weight="bold" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [22, 30, 44, 36, 25, 21, 33, 52, 76, 94, 68, 41];
  return (
    <div className={card}>
      <div className="grid grid-cols-3 gap-3">
        {[["Sales", "Rs 184,250"], ["Orders", "126"], ["Best seller", "Karahi"]].map(([k, v]) => (
          <div key={k}>
            <p className="text-[10px] text-muted">{k}</p>
            <p className="font-display text-[15px] font-bold tabular-nums">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-[92px] items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded ${i === 9 ? "bg-brand" : "bg-accent-soft"}`} />
        ))}
      </div>
    </div>
  );
}

function StaffVisual() {
  const people: [string, string, string][] = [["Imran", "Chef", "Present"], ["Sana", "Cashier", "Present"], ["Bilal", "Waiter", "Late"], ["Hina", "Manager", "Leave"]];
  const tone: Record<string, string> = { Present: "bg-accent-soft text-accent-ink", Late: "bg-subtle text-ink", Leave: "bg-subtle text-muted" };
  return (
    <div className={card}>
      <p className="pb-2 text-[12px] font-bold">Attendance today</p>
      <div className="space-y-2">
        {people.map(([n, r, s]) => (
          <div key={n} className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-full bg-subtle text-[11px] font-bold">{n[0]}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[11.5px] font-semibold">{n}</p>
              <p className="text-[10px] text-muted">{r}</p>
            </div>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone[s]}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventoryVisual() {
  const rows: [string, string, boolean][] = [["Chicken", "18 kg", false], ["Basmati rice", "25 kg", false], ["Cooking oil", "4 L", true], ["Tomatoes", "3 kg", true]];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr]">
      <div className={card}>
        <p className="pb-2 text-[12px] font-bold">Stock</p>
        <div className="space-y-2">
          {rows.map(([n, q, low]) => (
            <Row key={n} left={n} right={low ? <span className="inline-flex items-center gap-1 text-accent-ink"><WarningCircle size={12} weight="fill" />{q} low</span> : q} />
          ))}
        </div>
      </div>
      <div className={`${card} hidden sm:block`}>
        <p className="text-[10.5px] text-muted">Today&apos;s bazar</p>
        <p className="font-display text-xl font-bold">{rs(10060)}</p>
        <div className="mt-2 space-y-1.5">
          <Row left="Sabzi Mandi" right={rs(4200)} />
          <Row left="Meat shop" right={rs(5860)} />
        </div>
      </div>
    </div>
  );
}

function OffersVisual() {
  return (
    <div className={card}>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold">Happy hour</p>
        <span className="flex h-5 w-9 items-center rounded-full bg-accent p-0.5"><span className="ml-auto size-4 rounded-full bg-white" /></span>
      </div>
      <p className="mt-1 text-[11px] text-muted">20% off all drinks, 5pm to 7pm</p>
      <div className="mt-3 flex gap-1">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className={`grid size-6 place-items-center rounded-full text-[10px] font-semibold ${i < 5 ? "bg-ink text-bg" : "bg-subtle text-muted"}`}>{d}</span>
        ))}
      </div>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10.5px] font-semibold text-accent-ink">
        <Bell size={11} weight="fill" /> Live now at Gulberg
      </p>
    </div>
  );
}

export function FeatureVisual({ k }: { k: string }) {
  const map: Record<string, [Tone, React.ReactNode]> = {
    menu: ["brand", <MenuVisual key="menu" />],
    kitchen: ["dark", <KitchenVisual key="kitchen" />],
    payments: ["soft", <PaymentsVisual key="pay" />],
    analytics: ["soft", <AnalyticsVisual key="an" />],
    staff: ["soft", <StaffVisual key="staff" />],
    inventory: ["soft", <InventoryVisual key="inv" />],
    offers: ["brand", <OffersVisual key="off" />],
  };
  const [tone, node] = map[k];
  return <Stage tone={tone} className="h-[250px]">{node}</Stage>;
}

/* ---------- Benefits ---------- */

export function BenefitVisual({ k }: { k: string }) {
  if (k === "urdu")
    return (
      <Stage className="h-[190px]">
        <div className="flex flex-col items-center gap-3 pt-2">
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold">
            EN <span className="text-muted">|</span> <span lang="ur" className="font-urdu">اردو</span>
          </span>
          <p lang="ur" dir="rtl" className="font-urdu text-4xl leading-[2] text-accent-ink">مینو دیکھیں</p>
        </div>
      </Stage>
    );
  if (k === "support")
    return (
      <Stage className="h-[190px]">
        <div className="space-y-2.5">
          <p className="max-w-[80%] rounded-2xl rounded-bl-md border border-line bg-surface px-3 py-2 text-[12px]">Can you add our new BBQ platter?</p>
          <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#1c1917] px-3 py-2 text-[12px] text-[#f5f5f4]">Done. It&apos;s live on your menu now.</p>
          <p className="text-right text-[10px] text-muted">Just now</p>
        </div>
      </Stage>
    );
  if (k === "rupees")
    return (
      <Stage className="h-[190px]">
        <div className={`${card} mx-auto max-w-[260px] space-y-1.5`}>
          <Row left="Subtotal" right={rs(2860)} />
          <Row left="Tax 16%" right={rs(458)} className="text-muted" />
          <Row left="Service 5%" right={rs(143)} className="text-muted" />
          <Row left={<b>Total</b>} right={rs(3461)} className="border-t border-line pt-1.5 text-[13px]" />
        </div>
      </Stage>
    );
  return (
    <Stage className="h-[190px]">
      <div className="mx-auto max-w-[280px] space-y-2">
        <p className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[12px] text-muted">
          <WifiSlash size={15} /> Connection lost at 8:42pm
        </p>
        <p className="flex items-center gap-2 rounded-xl bg-brand px-3 py-2 text-[12px] font-semibold text-on-brand">
          <ArrowsClockwise size={15} weight="bold" /> Reconnected, 2 orders synced
        </p>
        <p className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[12px]">
          <Storefront size={15} /> Kitchen screen up to date
        </p>
      </div>
    </Stage>
  );
}
