export type PortfolioCategory =
  | "mieszkania"
  | "domy"
  | "biura"
  | "lokale";

export const PORTFOLIO_CATEGORIES: {
  id: PortfolioCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "Wszystkie" },
  { id: "mieszkania", label: "Mieszkania" },
  { id: "domy", label: "Domy" },
  { id: "biura", label: "Biura" },
  { id: "lokale", label: "Lokale usługowe" },
];

export type PortfolioItem = {
  id: string;
  index: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  category: PortfolioCategory;
  room: string;
  city: string;
  pattern: string;
  /** Tailwind classes controlling masonry span on lg+. */
  span: string;
  /** Aspect ratio used for the framed thumb. */
  aspect: "portrait" | "tall" | "square" | "landscape";
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p01",
    index: "01",
    src: "/images/portfolio/01-floral-warszawa.jpg",
    width: 1024,
    height: 1280,
    alt: "Sypialnia z dekoracyjnym panelem z motywem kwiatowym podświetlonym ciepłym światłem.",
    category: "mieszkania",
    room: "Sypialnia",
    city: "Warszawa",
    pattern: "Wzór \"Kwiat\"",
    span: "lg:col-span-5 lg:row-span-2",
    aspect: "portrait",
  },
  {
    id: "p02",
    index: "02",
    src: "/images/portfolio/02-gorski-krakow.jpg",
    width: 1024,
    height: 1280,
    alt: "Sypialnia z panelem dekoracyjnym przedstawiającym górski krajobraz o zachodzie słońca.",
    category: "mieszkania",
    room: "Sypialnia",
    city: "Kraków",
    pattern: "Wzór \"Górski\"",
    span: "lg:col-span-4 lg:row-span-1",
    aspect: "landscape",
  },
  {
    id: "p03",
    index: "03",
    src: "/images/portfolio/03-wodospad-wroclaw.jpg",
    width: 720,
    height: 1280,
    alt: "Łazienka z panelem dekoracyjnym z motywem wodospadu w ciemnym wnętrzu.",
    category: "mieszkania",
    room: "Łazienka",
    city: "Wrocław",
    pattern: "Wzór \"Wodospad\"",
    span: "lg:col-span-3 lg:row-span-2",
    aspect: "tall",
  },
  {
    id: "p04",
    index: "04",
    src: "/images/portfolio/04-szczyt-poznan.jpg",
    width: 1024,
    height: 1280,
    alt: "Domowa sypialnia z minimalistycznym panelem z motywem górskiego szczytu.",
    category: "domy",
    room: "Sypialnia",
    city: "Poznań",
    pattern: "Wzór \"Szczyt\"",
    span: "lg:col-span-4 lg:row-span-1",
    aspect: "landscape",
  },
  {
    id: "p05",
    index: "05",
    src: "/images/portfolio/05-mech-gdansk.jpg",
    width: 1024,
    height: 1024,
    alt: "Kuchnia z zielonym panelem dekoracyjnym imitującym mech jako lampka kuchenna.",
    category: "lokale",
    room: "Kuchnia",
    city: "Gdańsk",
    pattern: "Wzór \"Mech\"",
    span: "lg:col-span-5 lg:row-span-2",
    aspect: "square",
  },
  {
    id: "p06",
    index: "06",
    src: "/images/portfolio/06-kwiat-lodz.jpg",
    width: 1024,
    height: 1280,
    alt: "Biurowa strefa relaksu z dekoracyjnym panelem kwiatowym podświetlonym od tyłu.",
    category: "biura",
    room: "Strefa relaksu",
    city: "Łódź",
    pattern: "Wzór \"Kwiat\"",
    span: "lg:col-span-4 lg:row-span-1",
    aspect: "portrait",
  },
  {
    id: "p07",
    index: "07",
    src: "/images/portfolio/07-wodospad-katowice.jpg",
    width: 720,
    height: 1280,
    alt: "Łazienka w lokalu usługowym z dekoracyjnym panelem z wodospadem.",
    category: "lokale",
    room: "Łazienka",
    city: "Katowice",
    pattern: "Wzór \"Wodospad\"",
    span: "lg:col-span-3 lg:row-span-2",
    aspect: "tall",
  },
  {
    id: "p08",
    index: "08",
    src: "/images/portfolio/08-mech-lublin.jpg",
    width: 1024,
    height: 1024,
    alt: "Biurowa kuchnia z dekoracyjnym panelem imitującym zieloną ścianę z mchu.",
    category: "biura",
    room: "Strefa lunchu",
    city: "Lublin",
    pattern: "Wzór \"Mech\"",
    span: "lg:col-span-5 lg:row-span-1",
    aspect: "landscape",
  },
];
