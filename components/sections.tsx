import {
  Check, Plus, Storefront, Sparkle, Palette, QrCode, Buildings, Star, MusicNotes, DeviceMobile, UsersThree, Browser,
} from "@phosphor-icons/react/dist/ssr";
import { formatPkNumber } from "@/lib/whatsapp.js";
import { site } from "@/site.config";
import { hero, steps, features, more, bands, benefits, pricing, faq, finalCta } from "@/content";
import { DemoButton } from "./cta";
import { HeroVisual } from "./hero-visual";
import { KineticBand } from "./kinetic-band";
import { Reveal } from "./reveal";
import { StepVisual, FeatureVisual, BenefitVisual } from "./visuals";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";
const h2 = "text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl";

function Heading({ label, title, sub }: { label?: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {label && <p className="text-sm font-semibold text-accent-ink">{label}</p>}
      <h2 className={`${h2} ${label ? "mt-3" : ""}`}>{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-12 lg:pb-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_0%,rgb(251_191_36/0.28),transparent),radial-gradient(60%_40%_at_50%_75%,rgb(249_115_22/0.22),transparent)]" />
      <div className={`${wrap} relative pt-[132px] text-center lg:pt-[156px]`}>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-1 pr-3.5 text-sm font-medium shadow-soft">
            <span className="rounded-full bg-[#1c1917] px-2 py-0.5 text-[11px] font-bold text-[#fbbf24]">PK</span>
            {hero.tag}
          </span>
          <h1 className="mx-auto mt-7 max-w-4xl font-display text-6xl font-bold leading-[0.98] tracking-tight md:text-8xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[50ch] text-lg leading-relaxed text-muted md:text-xl">{hero.sub}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <DemoButton from="hero" />
            <a
              href={hero.secondary.href}
              className="inline-flex items-center rounded-full border border-line bg-surface px-6 py-3 text-[15px] font-semibold transition hover:bg-subtle active:scale-[0.98]"
            >
              {hero.secondary.label}
            </a>
          </div>
        </Reveal>
      </div>
      <div className={`${wrap} relative mt-16 lg:mt-20`}>
        <HeroVisual />
      </div>
    </section>
  );
}

const stepIcons = { setup: Storefront, scan: Sparkle, brand: Palette, serve: QrCode };

export function Steps() {
  return (
    <section id="how" className={`${wrap} py-20 lg:py-28`}>
      <Heading label={steps.label} title={steps.title} sub={steps.sub} />
      <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.items.map((s, i) => {
          const Icon = stepIcons[s.key as keyof typeof stepIcons];
          return (
            <li key={s.key}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-surface p-3 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="p-3">
                    <span className="grid size-11 place-items-center rounded-full bg-ink text-bg">
                      <Icon size={20} weight="fill" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{s.body}</p>
                  </div>
                  <div className="mt-auto pt-3">
                    <StepVisual k={s.key} />
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const wide = new Set(["kitchen", "inventory"]);

export function Features() {
  return (
    <section id="features" className="border-y border-line bg-surface py-20 lg:py-28">
      <div className={wrap}>
        <Heading label={features.label} title={features.title} />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((f, i) => (
            <Reveal key={f.key} delay={(i % 3) * 0.06} className={wide.has(f.key) ? "md:col-span-2" : ""}>
              <article className="group h-full rounded-card border border-line bg-bg p-3 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <FeatureVisual k={f.key} />
                <div className="px-3 pb-3 pt-5">
                  <h3 className="font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-1.5 max-w-[52ch] leading-relaxed text-muted">{f.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const moreIcons = { branches: Buildings, feedback: Star, music: MusicNotes, storefront: Browser, install: DeviceMobile, roles: UsersThree };

export function More() {
  return (
    <section className={`${wrap} py-20 lg:py-28`}>
      <Heading title={more.title} />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {more.items.map((m, i) => {
          const Icon = moreIcons[m.key as keyof typeof moreIcons];
          return (
            <Reveal key={m.key} delay={(i % 3) * 0.06}>
              <span className="grid size-11 place-items-center rounded-full bg-ink text-bg">
                <Icon size={20} weight="fill" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{m.title}</h3>
              <p className="mt-1.5 max-w-[40ch] leading-relaxed text-muted">{m.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Bands() {
  return (
    <div>
      {bands.map((b) => (
        <KineticBand key={b.text} {...b} />
      ))}
    </div>
  );
}

export function Benefits() {
  return (
    <section className={`${wrap} py-20 lg:py-28`}>
      <Heading title={benefits.title} />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        {benefits.items.map((b, i) => (
          <Reveal key={b.key} delay={(i % 2) * 0.06}>
            <div className="h-full rounded-card border border-line bg-surface p-3 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="px-3 pb-5 pt-3">
                <h3 className="font-display text-xl font-bold">{b.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{b.body}</p>
              </div>
              <BenefitVisual k={b.key} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-surface py-20 lg:py-28">
      <div className={wrap}>
        <Heading label={pricing.label} title={pricing.title} sub={pricing.sub} />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-card p-8 ${i === 0 ? "border border-line bg-bg" : "bg-[#1c1917] text-[#fafaf9]"}`}>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className={`mt-2 leading-relaxed ${i === 0 ? "text-muted" : "text-[#d6d3d1]"}`}>{p.summary}</p>
                <ul className="mb-8 mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <Check size={20} weight="bold" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
                <DemoButton from={p.from} variant={i === 0 ? "ink" : "brand"} className="mt-auto w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className={`${wrap} py-20 lg:py-28`}>
      <Heading title={faq.title} />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.items.map((item, i) => (
          <details key={item.q} className="group rounded-card border border-line bg-surface px-5 py-4 transition open:shadow-soft">
            <summary className="flex cursor-pointer list-none items-center gap-4 font-display text-lg font-semibold">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-soft text-[13px] font-bold text-accent-ink">{i + 1}</span>
              <span className="flex-1">{item.q}</span>
              <Plus size={18} weight="bold" className="faq-icon shrink-0 text-muted transition-transform" aria-hidden />
            </summary>
            <p className="mt-3 pl-11 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className={`${wrap} pb-20 lg:pb-28`}>
      <Reveal>
        <div className="relative overflow-hidden rounded-card bg-brand px-6 py-16 text-center text-on-brand md:px-12 md:py-24">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed opacity-85">{finalCta.body}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <DemoButton from="final" variant="ink" />
            <p className="text-sm font-medium opacity-80">or message us at {formatPkNumber(site.whatsapp)}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
