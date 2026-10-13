import {
  InstagramLogo, FacebookLogo, LinkedinLogo, WhatsappLogo, EnvelopeSimple, MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { formatPkNumber, normalizePkNumber } from "@/lib/whatsapp.js";
import { site } from "@/site.config";
import { nav } from "@/content";
import { DemoButton, Logo } from "./cta";

export { Header } from "./header";

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookLogo },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
].filter((s) => s.href);

const columns = [
  { title: "Product", links: nav.map((n) => ({ label: n.label, href: `/${n.href}` })) },
  {
    title: "Features",
    links: ["Digital menu", "Kitchen display", "Easypaisa and JazzCash", "Staff and payroll", "Inventory and bazar"].map((label) => ({
      label,
      href: "/#features",
    })),
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: `mailto:${site.email}` },
      { label: "Privacy policy", href: "/privacy/" },
      { label: "Terms of use", href: "/terms/" },
    ],
  },
];

// Fixed dark palette in both themes, so the footer always closes the page the same way.
export function Footer() {
  const link = "text-[#a8a29e] transition hover:text-[#fafaf9]";
  return (
    <footer className="relative overflow-hidden bg-[#1c1917] pb-28 pt-20 text-[#e7e5e4] md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="text-[#fafaf9]" />
            <p className="mt-4 max-w-sm leading-relaxed text-[#a8a29e]">
              QR ordering, a live kitchen display and a full back office for restaurants across Pakistan.
            </p>
            <DemoButton from="footer" className="mt-7" />
            <address className="mt-7 space-y-2.5 text-sm not-italic">
              <a href={`https://wa.me/${normalizePkNumber(site.whatsapp)}`} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2.5 ${link}`}>
                <WhatsappLogo size={17} aria-hidden /> {formatPkNumber(site.whatsapp)}
              </a>
              <a href={`mailto:${site.email}`} className={`flex items-center gap-2.5 ${link}`}>
                <EnvelopeSimple size={17} aria-hidden /> {site.email}
              </a>
              <p className="flex items-center gap-2.5 text-[#a8a29e]">
                <MapPin size={17} aria-hidden /> {site.city}
              </p>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-semibold text-[#fafaf9]">{col.title}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={link}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[#2f2b27] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="mr-1 text-[#a8a29e]">Payments</span>
            {["Easypaisa", "JazzCash", "Pay at counter"].map((p) => (
              <span key={p} className="rounded-full border border-[#2f2b27] px-3 py-1 text-[#e7e5e4]">{p}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="mr-1 text-[#a8a29e]">Languages</span>
            <span className="rounded-full border border-[#2f2b27] px-3 py-1">English</span>
            <span lang="ur" className="rounded-full border border-[#2f2b27] px-3 py-1 font-urdu">اردو</span>
          </div>
        </div>
      </div>

      <p aria-hidden className="pointer-events-none mt-14 select-none text-center font-display text-[18.5vw] font-bold leading-[0.8] tracking-tighter text-[#fafaf9]/[0.05] lg:text-[16rem]">
        OrderDeck
      </p>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 border-t border-[#2f2b27] pt-6 text-sm text-[#a8a29e] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. Made in Pakistan.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy/" className={link}>Privacy</a>
            <a href="/terms/" className={link}>Terms</a>
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={link}>
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
