import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/site.config";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy/" } };

// Starter text. Have it reviewed before launch.
export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        This policy covers this website. How OrderDeck handles restaurant and guest data inside the product is set out in
        your service agreement with us.
      </p>
      <h2>What this website collects</h2>
      <p>
        This website has no forms and no accounts. When you tap a WhatsApp button, you leave this site and the conversation
        happens on WhatsApp, under WhatsApp&apos;s own privacy policy. We see only what you choose to send us.
      </p>
      <h2>Analytics</h2>
      <p>
        We may use privacy-friendly analytics to count page views and button clicks. These numbers are aggregated and are
        not used to identify you.
      </p>
      <h2>How we use your messages</h2>
      <p>
        We use what you send us on WhatsApp or email only to reply to you, arrange a demo and set up your restaurant. We do
        not sell it or share it for advertising.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about privacy: <a className="font-medium text-ink underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
