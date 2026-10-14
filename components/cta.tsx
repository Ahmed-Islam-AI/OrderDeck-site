import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/lib/whatsapp.js";
import { site, ctaMessages, type CtaPlacement } from "@/site.config";

// The page has exactly one conversion intent, so it has exactly one label: "Book a demo".
export function DemoButton({
  from,
  variant = "brand",
  className = "",
}: {
  from: CtaPlacement;
  variant?: "brand" | "ink";
  className?: string;
}) {
  const look =
    variant === "brand"
      ? "bg-brand text-on-brand shadow-soft hover:brightness-105"
      : "bg-ink text-bg hover:opacity-90";
  return (
    <a
      href={waLink(site.whatsapp, ctaMessages[from])}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={from}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-semibold transition active:scale-[0.98] ${look} ${className}`}
    >
      <WhatsappLogo size={20} weight="fill" aria-hidden />
      Book a demo
    </a>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight ${className}`}>
      <img src="/logo.svg" alt="" width={30} height={30} className="rounded-[8px]" />
      OrderDeck
    </a>
  );
}
