export type PortfolioCategory =
  | "sypialnia"
  | "kuchnia"
  | "lazienka"
  | "dzieciecy"
  | "specjalne";

export const PORTFOLIO_CATEGORIES: {
  id: PortfolioCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "Wszystkie" },
  { id: "sypialnia", label: "Sypialnia" },
  { id: "kuchnia", label: "Kuchnia" },
  { id: "lazienka", label: "Łazienka" },
  { id: "dzieciecy", label: "Pokój dziecięcy" },
  { id: "specjalne", label: "Przestrzenie specjalne" },
];

export type PortfolioItem = {
  id: string;
  index: string;
  /** Main thumbnail shown in the grid. */
  src: string;
  /** Full case gallery — first image matches `src`. */
  gallery: string[];
  alt: string;
  category: PortfolioCategory;
  /** Headline of the case, shown under the photo. */
  title: string;
  /** Short type label used as the eyebrow marker. */
  tag: string;
  /** Full case description shown in the lightbox. */
  description: string;
  /** Aspect ratio used for the framed thumb. */
  aspect: "portrait" | "tall" | "square" | "landscape";
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "r01",
    index: "01",
    src: "/images/realizacje/sypialnia-gory/01.jpg",
    gallery: [
      "/images/realizacje/sypialnia-gory/01.jpg",
      "/images/realizacje/sypialnia-gory/02.jpg",
      "/images/realizacje/sypialnia-gory/03.jpg",
      "/images/realizacje/sypialnia-gory/04.jpg",
    ],
    alt: "Sypialnia z dekoracyjnym panelem przedstawiającym górski krajobraz.",
    category: "sypialnia",
    title: "Sypialnia · Wzór „Góry”",
    tag: "Wzór górski",
    description:
      "Górski pejzaż na ścianie staje się głównym akcentem sypialni — wnosi głębię, spokój i poczucie harmonii z naturą. Realizacja przygotowana indywidualnie pod wymiar ściany, kolorystykę i światło wnętrza, w prestiżowym, autorskim wykonaniu.",
    aspect: "landscape",
  },
  {
    id: "r02",
    index: "02",
    src: "/images/realizacje/kwiatowy/01.jpg",
    gallery: [
      "/images/realizacje/kwiatowy/01.jpg",
      "/images/realizacje/kwiatowy/02.jpg",
      "/images/realizacje/kwiatowy/03.jpg",
      "/images/realizacje/kwiatowy/04.jpg",
    ],
    alt: "Sypialnia z dekoracyjnym panelem z motywem kwiatowym.",
    category: "sypialnia",
    title: "Sypialnia · Wzór kwiatowy",
    tag: "Wzór kwiatowy",
    description:
      "Autorski wzór kwiatowy, który staje się elegancką ozdobą wnętrza i nadaje mu wyjątkowy, luksusowy charakter. Każdy panel powstaje na zamówienie — pod konkretną ścianę, styl i atmosferę pomieszczenia.",
    aspect: "landscape",
  },
  {
    id: "r03",
    index: "03",
    src: "/images/realizacje/kuchnia/02.jpg",
    gallery: [
      "/images/realizacje/kuchnia/02.jpg",
      "/images/realizacje/kuchnia/01.jpg",
      "/images/realizacje/kuchnia/03.jpg",
      "/images/realizacje/kuchnia/04.jpg",
    ],
    alt: "Kuchnia z dekoracyjnym wzorem na ścianie nad blatem.",
    category: "kuchnia",
    title: "Kuchnia · Wzór na ścianie",
    tag: "Wzór do kuchni",
    description:
      "Dekoracyjny wzór nad blatem i w strefie jadalnianej, który nadaje kuchni charakter i klasę premium. Indywidualny projekt wykonany pod wymiar — efekt „wow” bez przytłaczania wnętrza.",
    aspect: "landscape",
  },
  {
    id: "r04",
    index: "04",
    src: "/images/realizacje/lazienka/02.jpg",
    gallery: [
      "/images/realizacje/lazienka/02.jpg",
      "/images/realizacje/lazienka/01.jpg",
      "/images/realizacje/lazienka/03.jpg",
      "/images/realizacje/lazienka/04.jpg",
    ],
    alt: "Łazienka z dekoracyjnym panelem z motywem wodospadu.",
    category: "lazienka",
    title: "Łazienka · Wzór „Wodospad”",
    tag: "Wzór do łazienki",
    description:
      "Motyw wodospadu i natury zamienia łazienkę w elegancką, prestiżową strefę relaksu. Panel wykonujemy na zamówienie, dopasowując kompozycję do układu ściany, armatury i oświetlenia.",
    aspect: "landscape",
  },
  {
    id: "r05",
    index: "05",
    src: "/images/realizacje/pokoj-dzieciecy/01.jpg",
    gallery: [
      "/images/realizacje/pokoj-dzieciecy/01.jpg",
      "/images/realizacje/pokoj-dzieciecy/02.jpg",
      "/images/realizacje/pokoj-dzieciecy/03.jpg",
      "/images/realizacje/pokoj-dzieciecy/04.jpg",
    ],
    alt: "Pokój dziecięcy z bajkowym wzorem dekoracyjnym na ścianie.",
    category: "dzieciecy",
    title: "Pokój dziecięcy · Wzór bajkowy",
    tag: "Wzór bajkowy",
    description:
      "Bajkowy wzór, który zamienia pokój dziecka w przytulną, wyjątkową przestrzeń do zabawy i odpoczynku. Realizacja powstaje indywidualnie według Twojego pomysłu — pod wiek dziecka i charakter pokoju.",
    aspect: "landscape",
  },
  {
    id: "r06",
    index: "06",
    src: "/images/realizacje/garaz/02.jpg",
    gallery: [
      "/images/realizacje/garaz/02.jpg",
      "/images/realizacje/garaz/01.jpg",
      "/images/realizacje/garaz/03.jpg",
      "/images/realizacje/garaz/04.jpg",
    ],
    alt: "Garaż z dekoracyjnym wzorem przedstawiającym auto na ścianie.",
    category: "specjalne",
    title: "Garaż · Wzór motoryzacyjny",
    tag: "Wzór z autem",
    description:
      "Motyw motoryzacyjny, który zmienia zwykły garaż w stylowe, prestiżowe miejsce dla pasjonata. Indywidualna realizacja wykonana pod wymiar — od głównej ściany po strefę detailingu czy showroom.",
    aspect: "landscape",
  },
  {
    id: "r07",
    index: "07",
    src: "/images/realizacje/portret/02.jpg",
    gallery: [
      "/images/realizacje/portret/02.jpg",
      "/images/realizacje/portret/01.jpg",
      "/images/realizacje/portret/03.jpg",
      "/images/realizacje/portret/04.jpg",
    ],
    alt: "Wnętrze z dekoracyjnym panelem z portretem na zamówienie.",
    category: "specjalne",
    title: "Portret na zamówienie",
    tag: "Panel z portretem",
    description:
      "Ekskluzywny panel z portretem na zamówienie — wyjątkowy, osobisty prezent i główny akcent aranżacji. Subtelna kolorystyka, dopracowane detale i ciepłe podświetlenie tworzą efekt luksusowej dekoracji.",
    aspect: "landscape",
  },
];
