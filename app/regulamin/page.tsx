import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { BRAND } from "@/content/nav";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Regulamin korzystania z serwisu Panelio i ogólne warunki realizacji zamówień paneli dekoracyjnych.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <article className="bg-canvas pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="container max-w-3xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-marker text-accent-blue"
        >
          <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-[2px]" />
          Wróć do strony głównej
        </Link>
        <h1 className="mt-6 font-display text-[2.5rem] font-medium leading-tight tracking-display text-ink sm:text-[3.25rem]">
          Regulamin
        </h1>
        <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-muted">
          Regulamin określa zasady korzystania z serwisu prowadzonego przez{" "}
          {BRAND.fullLegal} oraz ogólne warunki obsługi zapytań ofertowych
          składanych za pośrednictwem formularzy.
        </p>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            1. Definicje
          </h2>
          <p>
            <strong>Usługodawca</strong> — {BRAND.fullLegal}. <strong>Serwis</strong>{" "}
            — strona internetowa prezentująca ofertę paneli dekoracyjnych.{" "}
            <strong>Użytkownik</strong> — osoba fizyczna lub firma korzystająca
            z serwisu.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            2. Zakres usług
          </h2>
          <p>
            Za pośrednictwem serwisu Użytkownik może zapoznać się z ofertą paneli
            dekoracyjnych oraz wysłać zapytanie ofertowe poprzez formularz
            kontaktowy. Wypełnienie formularza nie stanowi zawarcia umowy.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            3. Czas odpowiedzi
          </h2>
          <p>
            Usługodawca odpowiada na zapytania w terminie do 24 godzin w dni
            robocze. W okresach świątecznych czas reakcji może ulec wydłużeniu.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            4. Reklamacje
          </h2>
          <p>
            Reklamacje należy kierować na adres{" "}
            <a
              href={`mailto:${env.CONTACT_EMAIL}`}
              className="text-accent-blue underline-offset-4 hover:underline"
            >
              {env.CONTACT_EMAIL}
            </a>
            . Reklamacja powinna zawierać dane kontaktowe, opis sprawy oraz —
            jeśli to możliwe — dokumentację fotograficzną.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            5. Postanowienia końcowe
          </h2>
          <p>
            W sprawach nieuregulowanych regulaminem stosuje się przepisy prawa
            polskiego, w tym Kodeksu cywilnego oraz ustawy o świadczeniu usług
            drogą elektroniczną.
          </p>
        </section>
      </div>
    </article>
  );
}
