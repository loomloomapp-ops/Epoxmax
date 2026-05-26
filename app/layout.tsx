import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import { PopupProvider } from "@/providers/PopupProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { FloatingWidget } from "@/components/layout/FloatingWidget";
import { defaultMetadata, SITE } from "@/content/seo";
import { env } from "@/lib/env";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#F3F7F4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: "EPOXMAX — panele dekoracyjne",
  description:
    "Dekoracyjne panele z różnymi wzorami do mieszkań, domów, biur i lokali usługowych. Obsługa całej Polski.",
  url: SITE.url,
  image: `${SITE.url}/og-image.jpg`,
  telephone: env.CONTACT_PHONE,
  email: env.CONTACT_EMAIL,
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        {env.GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${env.GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        <a href="#start" className="skip-link">
          Pomiń do treści
        </a>
        <PopupProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingWidget />
          <MobileStickyCta />
        </PopupProvider>
        {env.GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${env.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="GTM"
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
