import { Header, Footer } from "./chrome";
import { legalUpdated } from "@/content";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-[140px] sm:px-6 lg:pb-24 lg:pt-[172px]">
        <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated {legalUpdated}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
