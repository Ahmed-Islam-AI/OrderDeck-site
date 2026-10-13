import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Geist, Noto_Nastaliq_Urdu } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: "700", variable: "--font-urdu-face", display: "swap", preload: false });

const description =
  "QR table ordering for Pakistani restaurants. Guests scan, order and pay with Easypaisa or JazzCash while your kitchen sees every ticket live.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "OrderDeck | QR ordering for Pakistani restaurants", template: "%s | OrderDeck" },
  description,
  openGraph: { type: "website", siteName: site.name, title: "OrderDeck | QR ordering for Pakistani restaurants", description, url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { plausibleDomain, ga4Id } = site.analytics;
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${urdu.variable}`}>
      <body className="font-sans">
        {children}
        {plausibleDomain && (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.outbound-links.js" />
        )}
        {ga4Id && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
            <Script id="ga4">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga4Id}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
