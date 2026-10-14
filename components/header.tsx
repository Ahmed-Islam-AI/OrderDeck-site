"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { nav } from "@/content";
import { DemoButton, Logo } from "./cta";

// Full-width and transparent at the top of the page; once scrolled it condenses into a floating
// frosted pill. The link for the section currently on screen gets a sliding highlight.
export function Header() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.href.slice(1))).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    // A section counts as "current" while it crosses the middle band of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const top = document.getElementById("hero");
    const topIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(""), { rootMargin: "-45% 0px -50% 0px" });
    if (top) topIo.observe(top);
    return () => {
      io.disconnect();
      topIo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const compact = scrolled || open;
  const ease = reduce ? "" : "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <>
      {/* Fixed, so pages reserve its 76px themselves (hero and legal pages pad their tops). */}
      <header className={`fixed inset-x-0 top-0 z-30 px-3 ${ease} ${compact ? "pt-3" : "pt-0"}`}>
        <div
          className={`mx-auto flex items-center justify-between border ${ease} ${
            compact
              ? "h-[60px] max-w-5xl rounded-full border-line bg-surface/80 pl-5 pr-2 shadow-soft backdrop-blur-xl"
              : "h-[76px] max-w-7xl rounded-none border-transparent bg-transparent px-1 sm:px-3"
          }`}
        >
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 text-[15px] font-medium md:flex">
            {nav.map((n) => {
              const on = active === n.href;
              return (
                <a
                  key={n.href}
                  href={`/${n.href}`}
                  aria-current={on ? "true" : undefined}
                  className={`relative isolate rounded-full px-4 py-2 transition-colors ${on ? "text-ink" : "text-muted hover:text-ink"}`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-active"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                    />
                  )}
                  {n.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <DemoButton from="header" variant="ink" className={`max-md:!hidden ${compact ? "!px-4 !py-2 !text-sm" : "!px-5 !py-2.5"}`} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-line bg-surface md:hidden"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 max-w-5xl rounded-card border border-line bg-surface p-3 shadow-soft md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={`/${n.href}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-semibold ${active === n.href ? "bg-accent-soft text-accent-ink" : "hover:bg-subtle"}`}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <DemoButton from="header" className="mt-2 w-full" />
          </motion.div>
        )}
      </header>
    </>
  );
}
