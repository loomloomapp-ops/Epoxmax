export type TrustBadgeItem = {
  label: string;
};

export const HERO_BADGES: TrustBadgeItem[] = [
  { label: "Cała Polska" },
  { label: "Efekt nawet w kilka godzin" },
  { label: "Dowolny wzór na zamówienie" },
  { label: "Mieszkania i lokale komercyjne" },
];

export type EfektPhoto = {
  id: string;
  index: string;
  src: string;
  alt: string;
  caption: string;
  pattern: string;
  city: string;
};

export const EFEKT_PHOTOS: EfektPhoto[] = [
  {
    id: "e01",
    index: "01",
    src: "/images/trust/efekt-1.jpg",
    alt: "Realizacja sypialni z dekoracyjnym panelem kwiatowym.",
    caption: "Sypialnia z motywem kwiatowym",
    pattern: "Wzór \"Kwiat\"",
    city: "Warszawa",
  },
  {
    id: "e02",
    index: "02",
    src: "/images/trust/efekt-2.jpg",
    alt: "Realizacja w sypialni z panelem przedstawiającym górski krajobraz.",
    caption: "Sypialnia z motywem górskim",
    pattern: "Wzór \"Szczyt\"",
    city: "Poznań",
  },
  {
    id: "e03",
    index: "03",
    src: "/images/trust/efekt-3.jpg",
    alt: "Łazienka po metamorfozie z dekoracyjnym panelem z wodospadem.",
    caption: "Łazienka z motywem wodospadu",
    pattern: "Wzór \"Wodospad\"",
    city: "Wrocław",
  },
  {
    id: "e04",
    index: "04",
    src: "/images/trust/efekt-4.jpg",
    alt: "Kuchnia po realizacji z panelem dekoracyjnym imitującym mech.",
    caption: "Kuchnia z motywem mchu",
    pattern: "Wzór \"Mech\"",
    city: "Gdańsk",
  },
  {
    id: "e05",
    index: "05",
    src: "/images/trust/efekt-5.jpg",
    alt: "Sypialnia po realizacji z minimalistycznym panelem górskim.",
    caption: "Sypialnia z motywem górskim",
    pattern: "Wzór \"Górski\"",
    city: "Kraków",
  },
];
