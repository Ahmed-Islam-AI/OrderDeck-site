"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// Full-width statement band: the headline starts tilted and lower, and straightens as it scrolls into view.
const tones = {
  dark: "bg-[#1c1917] text-[#fafaf9]",
  brand: "bg-brand text-[#1c1917]",
  ink: "bg-[#2a1a0e] text-[#fed7aa]",
};

export function KineticBand({ label, text, sub, tone }: { label: string; text: string; sub: string; tone: keyof typeof tones }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <section ref={ref} className={`overflow-hidden ${tones[tone]}`}>
      <motion.div
        style={reduce ? undefined : { rotate, y, opacity, transformOrigin: "0% 50%" }}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"
      >
        <p className="text-sm font-semibold opacity-70">{label}</p>
        <div className="mt-4 border-t border-current/20 pt-6">
          <h2 className="font-display text-[3.2rem] font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-[8.5rem]">
            {text}
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg opacity-80 md:text-xl">{sub}</p>
        </div>
      </motion.div>
    </section>
  );
}
