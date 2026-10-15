"use client";
import { useEffect, useState } from "react";

// Mobile-only floating demo button, shown once the hero (and its own CTA) has scrolled away.
export function StickyCta({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
