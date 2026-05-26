import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { BRAND } from "@/content/nav";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Zasady przetwarzania danych osobowych przez Panelio — administrator, cele, podstawy prawne, prawa użytkownika.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
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
          Polityka prywatności
        </h1>
        <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-muted">
          Niniejsza polityka opisuje, w jaki sposób {BRAND.fullLegal} przetwarza
          dane osobowe użytkowników odwiedzających serwis oraz osoby kontaktujące
          się z nami poprzez formularz.
        </p>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            1. Administrator danych
          </h2>
          <p>
            Administratorem danych osobowych jest {BRAND.fullLegal}. W sprawach
            dotyczących danych osobowych kontakt:{" "}
            <a
              href={`mailto:${env.CONTACT_EMAIL}`}
              className="text-accent-blue underline-offset-4 hover:underline"
            >
              {env.CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            2. Zakres i cel przetwarzania
          </h2>
          <p>
            Przetwarzamy następujące dane: imię, adres e-mail, numer telefonu,
            miasto, typ pomieszczenia, treść wiadomości. Dane wykorzystujemy w
            celu przygotowania odpowiedzi na zapytanie ofertowe, udzielenia
            konsultacji oraz realizacji ewentualnej umowy.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            3. Podstawa prawna
          </h2>
          <p>
            Podstawą przetwarzania jest art. 6 ust. 1 lit. a RODO (zgoda) oraz
            art. 6 ust. 1 lit. b RODO (działania zmierzające do zawarcia umowy
            na żądanie osoby, której dane dotyczą).
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            4. Okres przechowywania
          </h2>
          <p>
            Dane przechowujemy przez czas niezbędny do obsługi zapytania, a w
            razie zawarcia umowy — przez okres wymagany przepisami prawa, w tym
            podatkowymi.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            5. Prawa użytkownika
          </h2>
          <p>
            Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przeniesienia, sprzeciwu oraz wycofania
            zgody w dowolnym momencie. Możesz również wnieść skargę do Prezesa
            Urzędu Ochrony Danych Osobowych.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <h2 className="font-display text-[1.6rem] tracking-tighter text-ink">
            6. Pliki cookies
          </h2>
          <p>
            Serwis może wykorzystywać pliki cookies w celu zapewnienia
            prawidłowego działania, analizy ruchu oraz integracji z narzędziami
            analitycznymi. Ustawienia plików cookies można zmienić w
            przeglądarce.
          </p>
        </section>
      </div>
    </article>
  );
}
