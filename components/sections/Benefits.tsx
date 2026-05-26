"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { BENEFITS } from "@/content/benefits";

const SUCCESS_STATS = [
  { value: "30", suffix: "+", label: "Wzorów do wyboru" },
  { value: "16", suffix: "/16", label: "Województw obsługujemy" },
  { value: "24", suffix: "h", label: "Reakcja na zapytanie" },
  { value: "0", suffix: " dni", label: "Wstrzymanego życia" },
];

export function Benefits() {
  return (
    <section
      id="zalety"
      aria-labelledby="zalety-title"
      className="bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        {/* Heading row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionLabel number="04" label="Zalety" />
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-8">
            <EditorialHeading
              as="h2"
              size="lg"
              id="zalety-title"
              className="max-w-[22ch]"
            >
              Krótszy remont, <Em>mniej stresu</Em>, więcej życia w nowym wnętrzu.
            </EditorialHeading>
          </Reveal>
        </div>

        {/* Stats row — Luzen .success_list */}
        <Reveal delay={0.1}>
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-hairline pt-10 sm:gap-x-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-16">
            {SUCCESS_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="flex items-baseline gap-1">
                  <span className="font-display text-[2.25rem] font-medium leading-none tracking-display text-ink sm:text-[3rem] lg:text-[4rem]">
                    {stat.value}
                  </span>
                  <span className="font-display text-[1.15rem] font-medium leading-none tracking-tighter text-accent-green sm:text-[1.5rem] lg:text-[1.85rem]">
                    {stat.suffix}
                  </span>
                </dt>
                <dd className="mt-3 max-w-[22ch] text-[0.88rem] leading-relaxed text-muted sm:text-[0.95rem]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Big feature image */}
        <Reveal delay={0.05}>
          <div className="mt-14 lg:mt-16">
            <ParallaxImage
              src="/images/portfolio/05-mech-gdansk.jpg"
              alt="Kuchnia z zielonym panelem dekoracyjnym imitującym ścianę z mchu — przykład szybkiej metamorfozy wnętrza."
              className="aspect-[16/9] sm:aspect-[21/9]"
              scrim="strong"
              rounded="rounded-5xl"
              sizes="(min-width: 1280px) 1320px, 100vw"
            />
            <div className="-mt-20 flex flex-wrap items-end justify-between gap-4 px-7 pb-7 sm:-mt-24 sm:px-10 sm:pb-10 lg:px-12">
              <div className="flex flex-col leading-tight text-white">
                <span className="font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                  Realizacja · Wzór &quot;Mech&quot;
                </span>
                <span className="mt-2 font-display text-[1.55rem] tracking-tighter sm:text-[1.85rem]">
                  Kuchnia · Gdańsk
                </span>
              </div>
              <span className="rounded-full border border-white/20 bg-deep/50 px-4 py-1.5 font-mono text-[0.66rem] uppercase tracking-marker text-white/85 backdrop-blur-md">
                Metamorfoza w 1 dzień
              </span>
            </div>
          </div>
        </Reveal>

        {/* 6-benefit tile grid — stronger visual rhythm + sticky stack on mobile */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal
              key={benefit.id}
              delay={Math.min(index * 0.05, 0.25)}
              style={{ top: `${100 + index * 22}px` }}
              className="sticky sm:!static sm:!top-auto"
            >
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-4xl border border-hairline bg-surface p-7 transition-[transform,box-shadow,border-color] duration-500 ease-smooth hover:-translate-y-[2px] hover:border-ink/15 hover:shadow-soft-lift sm:p-8">
                {/* Top accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-7 top-0 h-px bg-accent-green/60 sm:inset-x-8"
                />
                <header className="flex items-start justify-between gap-4">
                  <span className="font-display text-[2.85rem] font-medium leading-none tracking-display text-ink/12 sm:text-[3.25rem]">
                    {benefit.index}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                    Zaleta
                  </span>
                </header>
                <div className="mt-auto flex flex-col gap-3">
                  <h3 className="font-display text-[1.35rem] font-medium leading-snug tracking-tighter text-ink sm:text-[1.5rem]">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.93rem] leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
