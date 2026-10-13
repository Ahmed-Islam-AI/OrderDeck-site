import { Header, Footer } from "@/components/chrome";
import { Hero, Steps, Features, More, Bands, Benefits, Pricing, Faq, FinalCta } from "@/components/sections";
import { StickyCta } from "@/components/sticky-cta";
import { DemoButton } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Features />
        <More />
        <Bands />
        <Benefits />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta>
        <DemoButton from="sticky" className="w-full" />
      </StickyCta>
    </>
  );
}
