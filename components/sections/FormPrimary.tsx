import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { Check } from "@/components/icons/Check";

const POINTS = [
  "Dobór wzoru pod Twoje wnętrze",
  "Konsultacja bez zobowiązań",
  "Obsługa w całej Polsce",
];

export function FormPrimary() {
  return (
    <section
      id="konsultacja"
      aria-labelledby="konsultacja-title"
      className="relative isolate overflow-hidden bg-deep py-16 sm:py-20 lg:py-24 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:radial-gradient(circle_at_20%_15%,rgba(63,125,90,0.7),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(31,92,139,0.5),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.5)_0_1px,transparent_1px_8px)]"
      />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-6">
            <Reveal>
              <SectionLabel number="03" label="Konsultacja" variant="dark" />
            </Reveal>
            <Reveal delay={0.05}>
              <EditorialHeading
                as="h2"
                size="lg"
                variant="dark"
                id="konsultacja-title"
                className="max-w-[22ch]"
              >
                Opisz swoje wnętrze — <Em>przygotujemy</Em> propozycję paneli
              </EditorialHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[55ch] text-[1.05rem] leading-relaxed text-white/75">
                Wypełnij krótki formularz — odpowiadamy w ciągu 24 godzin w dni
                robocze. Doradzimy wzór, omówimy szczegóły techniczne i wycenę.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-2 flex flex-col gap-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/85">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-green/15 text-accent-green"
                    >
                      <Check />
                    </span>
                    <span className="text-[0.95rem]">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 text-[0.875rem] leading-relaxed text-white/75">
                <span className="block font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                  Co dalej
                </span>
                Otrzymasz krótkie podsumowanie z propozycją wzorów, szacunkowy
                czas realizacji oraz informację o sposobie wysyłki. Bez presji
                sprzedażowej.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-7 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-x-9 top-0 h-px bg-accent-green/70"
              />
              <p className="font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                Formularz konsultacji
              </p>
              <h3 className="mt-2 font-display text-[1.45rem] leading-tight tracking-tighter text-ink sm:text-[1.65rem]">
                Zostaw kontakt — odezwiemy się w 24 godziny.
              </h3>
              <div className="mt-6">
                <LeadForm source="section-03-konsultacja" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
