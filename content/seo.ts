import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://panele-dekoracyjne.pl";

export const SITE = {
  url: SITE_URL,
  title: "Panele dekoracyjne z nadrukiem do wnętrz | Szybka metamorfoza ścian w Polsce",
  description:
    "Dekoracyjne panele z różnymi wzorami do mieszkań, domów, biur i lokali. Odmień powierzchnie we wnętrzu nawet w kilka godzin. Obsługa całej Polski.",
  ogImage: "/og-image.jpg",
  locale: "pl_PL",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Panelio",
  },
  description: SITE.description,
  applicationName: "Panelio",
  authors: [{ name: "Panelio" }],
  keywords: [
    "panele dekoracyjne",
    "panele ścienne z nadrukiem",
    "metamorfoza wnętrza",
    "panele do biura",
    "panele do mieszkania",
    "panele do salonu",
    "odświeżenie ścian",
    "panele Polska",
  ],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: "Panelio",
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Panele dekoracyjne — szybka metamorfoza wnętrza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
    languages: { "pl-PL": SITE.url },
  },
  category: "home & interior",
};
