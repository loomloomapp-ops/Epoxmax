"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/content/faq";
import { usePopupForm } from "@/hooks/usePopupForm";
import { Events } from "@/lib/analytics";

export function Faq() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id ?? "");
  const popup = usePopupForm();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left col — 06 FAQ above the photo, whole column sticky on scroll */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex flex-col gap-8 lg:gap-10">
              <Reveal>
                <SectionLabel number="06" label="FAQ" />
              </Reveal>
              <Reveal delay={0.05}>
                <ParallaxImage
                  src="/images/portfolio/03-wodospad-wroclaw.jpg"
                  alt="Łazienka z dekoracyjnym panelem z motywem wodospadu — przykład aranżacji."
                  className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
                  scrim="light"
                  rounded="rounded-4xl"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </Reveal>
            </div>
          </div>

          {/* Right col — heading + accordion + CTA button below */}
          <div className="flex flex-col gap-10 lg:col-span-7 lg:pt-2">
            <Reveal>
              <EditorialHeading
                as="h2"
                size="lg"
                id="faq-title"
                className="max-w-[22ch]"
              >
                Odpowiedzi na <Em>najczęściej</Em> zadawane pytania
              </EditorialHeading>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="border-t border-hairline">
                {FAQ_ITEMS.map((item) => (
                  <AccordionItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    open={openId === item.id}
                    onToggle={() =>
                      setOpenId((current) => (current === item.id ? "" : item.id))
                    }
                  />
                ))}
              </ul>
            </Reveal>

            {/* Right-aligned CTA below the questions */}
            <Reveal delay={0.1}>
              <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="max-w-[42ch] text-[0.88rem] leading-relaxed text-muted">
                  Sprawdź również{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-accent-blue underline-offset-4 hover:underline"
                  >
                    politykę prywatności
                  </Link>
                  {" "}— Twój kontakt nie trafia do automatycznej kampanii.
                </p>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => {
                    Events.ctaClicked("faq");
                    popup.open("faq");
                  }}
                  className="w-full sm:w-auto"
                >
                  Zadaj własne pytanie
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
