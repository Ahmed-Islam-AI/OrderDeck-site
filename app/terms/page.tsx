import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/site.config";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms/" } };

// Starter text. Have it reviewed before launch.
export default function Terms() {
  return (
    <LegalPage title="Terms of use">
      <p>These terms cover your use of this website. Use of the OrderDeck service is governed by a separate agreement.</p>
      <h2>Information on this site</h2>
      <p>
        We describe OrderDeck as accurately as we can. Features, plans and prices can change, and a quote or agreement from
        us takes priority over anything on this page.
      </p>
      <h2>Product previews</h2>
      <p>Screens shown on this site use sample restaurants, dishes and numbers to illustrate the product.</p>
      <h2>Trademarks</h2>
      <p>
        OrderDeck and its logo belong to us. Easypaisa, JazzCash and WhatsApp are trademarks of their owners and are named
        only to describe payment and contact options.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: <a className="font-medium text-ink underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
