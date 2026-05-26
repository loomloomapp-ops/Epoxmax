import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

type ProductShot = {
  index: string;
  src: string;
  alt: string;
  pattern: string;
  room: string;
  city: string;
  caption: string;
};

const SHOTS: ProductShot[] = [
  {
    index: "001",
    src: "/images/product/produkt-main.jpg",
    alt: "Kuchnia z dekoracyjnym panelem imitującym zieloną ścianę z mchu jako backsplash.",
    pattern: "Wzór \"Mech\"",
    room: "Kuchnia",
    city: "Gdańsk",
    caption:
      "Strefa za blatem, panel z fakturą zieleni — bez płytek, bez dymu i pyłu.",
  },
  {
    index: "002",
    src: "/images/product/produkt-detail.jpg",
    alt: "Detal panelu z motywem górskim w nowoczesnej sypialni.",
    pattern: "Wzór \"Górski\"",
    room: "Sypialnia",
    city: "Kraków",
    caption:
      "Ściana za łóżkiem, motyw górski w naturalnej kolorystyce — montaż w jednym dniu.",
  },
];

const PRODUCT_POINTS = [
  {
    index: "01",
    title: "Do różnych typów wnętrz",
    body: "Mieszkania, domy, biura, salony i lokale usługowe — panele dopasowujemy do funkcji pomieszczenia.",
  },
  {
    index: "02",
    title: "Różne wzory i style",
    body: "Od subtelnych faktur i naturalnych motywów po wyraziste kompozycje, które stają się akcentem wnętrza.",
  },
  {
    index: "03",
    title: "Szybka zmiana wyglądu",
    body: "Zamiast wielodniowego remontu wybierasz wzór, my dopasowujemy go do przestrzeni i wymiarów.",
  },
  {
    index: "04",
    title: "Efekt dekoracyjny i praktyczny",
    body: "Powierzchnia wygląda świeżo, estetycznie i nowocześnie — bez kompromisów w codziennym użytkowaniu.",
  },
];

export function Product() {
  return (
    <section
      id="produkt"
      aria-labelledby="produkt-title"
      className="bg-accent-green-soft/40 py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        {/* Section label on its own row */}
        <Reveal>
          <SectionLabel number="02" label="O produkcie" />
        </Reveal>

        {/* Heading + intro on the same baseline */}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal delay={0.05} className="lg:col-span-7">
            <EditorialHeading
              as="h2"
              size="lg"
              id="produkt-title"
              className="max-w-[22ch]"
            >
              Dekoracyjne panele <Em>z charakterem</Em>, dopasowane do Twojego wnętrza
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-[40ch] text-[1.05rem] leading-relaxed text-ink/70">
              Tworzymy panele, które łączą charakter wnętrza, funkcję i szybki
              efekt wizualny w jednym rozwiązaniu.
            </p>
          </Reveal>
        </div>

        {/* Two-image visual layer with rich captions */}
        <div className="mt-14 grid gap-10 sm:gap-12 lg:mt-16 lg:grid-cols-2">
          {SHOTS.map((shot, index) => (
            <Reveal
              key={shot.index}
              delay={index * 0.08}
              className={index === 1 ? "lg:pt-16" : ""}
            >
              <ParallaxImage
                src={shot.src}
                alt={shot.alt}
                className={index === 0 ? "aspect-[4/5] sm:aspect-[5/6]" : "aspect-[3/4] sm:aspect-[4/5]"}
                scrim="light"
                sizes="(min-width: 1024px) 40vw, 100vw"
                rounded="rounded-5xl"
              />

              {/* Caption block — eyebrow / title / one-line context */}
              <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/12 pt-5">
                <span className="font-display text-[1.85rem] font-medium leading-none tracking-display text-ink/30 sm:text-[2.15rem]">
                  {shot.index}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                    Panelio · {shot.pattern}
                  </span>
                  <span className="mt-2 font-display text-[1.2rem] tracking-tighter text-ink sm:text-[1.35rem]">
                    {shot.room} · {shot.city}
                  </span>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/65">
                    {shot.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Connected characteristics block */}
        <Reveal delay={0.05}>
          <div className="mt-14 lg:mt-16">
            <div className="flex flex-col gap-6 border-t border-ink/12 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <h3 className="max-w-[28ch] font-display text-[1.65rem] leading-snug tracking-tighter text-ink sm:text-[2rem]">
                Co wyróżnia <Em>nasze</Em> panele dekoracyjne
              </h3>
              <p className="max-w-[44ch] text-[0.98rem] leading-relaxed text-ink/65">
                Cztery cechy, które sprawiają, że klienci wybierają panele
                zamiast wielodniowego remontu.
              </p>
            </div>

            {/* 2×2 grid of feature cards — big number left, content right; sticky stack on mobile */}
            <ul className="mt-8 grid gap-4 sm:gap-5 lg:mt-10 lg:grid-cols-2">
              {PRODUCT_POINTS.map((point, idx) => (
                <li
                  key={point.index}
                  style={{ top: `${100 + idx * 22}px` }}
                  className="group sticky overflow-hidden rounded-4xl border border-ink/12 bg-accent-green-soft/95 p-7 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-smooth hover:-translate-y-[2px] hover:border-ink/25 hover:shadow-soft-lift sm:p-8 lg:!static lg:!top-auto lg:bg-surface/70"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-7 top-0 h-px bg-accent-green/55 sm:inset-x-8"
                  />
                  <div className="grid grid-cols-[auto_1fr] items-start gap-x-7 gap-y-2 sm:gap-x-9">
                    <span className="font-display text-[3.5rem] font-medium leading-none tracking-display text-ink/18 sm:text-[4.25rem]">
                      {point.index}
                    </span>
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                        Cecha · 0{point.index.slice(-1)} / 04
                      </span>
                      <h4 className="font-display text-[1.4rem] font-medium leading-snug tracking-tighter text-ink sm:text-[1.55rem]">
                        {point.title}
                      </h4>
                      <p className="text-[0.96rem] leading-relaxed text-ink/65">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
