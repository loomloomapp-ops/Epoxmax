import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { Phone } from "@/components/icons/Phone";
import { Mail } from "@/components/icons/Mail";
import { env } from "@/lib/env";

export function FormFinal() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className="bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        <Reveal>
          <SectionLabel number="07" label="Kontakt" />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <EditorialHeading
                as="h2"
                size="lg"
                id="kontakt-title"
                className="max-w-[22ch]"
              >
                Zmień wygląd wnętrza <Em>bez</Em> długiego remontu
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[55ch] text-[1.05rem] leading-relaxed text-muted">
                Zostaw kontakt, a pomożemy dobrać panele z odpowiednim wzorem do
                Twojej przestrzeni. Bez zobowiązań, bez presji sprzedażowej.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 overflow-hidden rounded-5xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/portfolio/01-floral-warszawa.jpg"
                    alt="Sypialnia z dekoracyjnym panelem — przykład gotowej realizacji."
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-deep/65 via-deep/15 to-transparent"
                  />
                  <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4 text-white sm:inset-x-9 sm:bottom-8">
                    <div className="flex flex-col leading-tight">
                      <span className="font-mono text-[0.68rem] uppercase tracking-marker text-accent-green">
                        Tylko prawdziwe wnętrza
                      </span>
                      <span className="mt-2 font-display text-[1.4rem] tracking-tighter text-white sm:text-[1.65rem]">
                        Twoje wnętrze może być następne.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${env.CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface px-5 py-4 transition hover:border-ink/15 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                      <Phone />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-[0.66rem] uppercase tracking-marker text-muted">
                        Wolisz zadzwonić?
                      </span>
                      <span className="text-[0.95rem] font-medium text-ink">
                        {env.CONTACT_PHONE}
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${env.CONTACT_EMAIL}`}
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface px-5 py-4 transition hover:border-ink/15 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                      <Mail />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-[0.66rem] uppercase tracking-marker text-muted">
                        Napisz e-mail
                      </span>
                      <span className="text-[0.95rem] font-medium text-ink">
                        {env.CONTACT_EMAIL}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 rounded-3xl border border-hairline bg-surface p-6 shadow-soft-lift sm:p-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                Formularz kontaktowy
              </p>
              <h3 className="mt-2 font-display text-[1.35rem] leading-tight tracking-tighter text-ink sm:text-[1.5rem]">
                Zostaw kontakt — pomożemy dobrać panele.
              </h3>
              <div className="mt-5">
                <LeadForm source="section-07-kontakt" variant="compact" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
