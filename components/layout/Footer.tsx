import Link from "next/link";
import { BRAND, NAV_ITEMS } from "@/content/nav";
import { Phone } from "@/components/icons/Phone";
import { Mail } from "@/components/icons/Mail";
import { env } from "@/lib/env";

const NAV_COLUMN = NAV_ITEMS.filter((item) => item.label !== "Opinie");

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay [background-image:radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.55),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(63,125,90,0.55),transparent_45%)]"
      />

      <div className="container relative pt-20 sm:pt-24 lg:pt-28">
        {/* Top — large tagline left + link columns right (Luzen .footer_layout) */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.85rem] leading-[1.05] tracking-display text-white sm:text-[2.4rem] lg:text-[2.85rem]">
              {BRAND.tagline}
            </p>
            <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-marker text-white/55">
              {BRAND.fullLegal}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-12">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                Nawigacja
              </p>
              <ul className="flex flex-col gap-3 text-[0.98rem] text-white/80">
                {NAV_COLUMN.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-block overflow-hidden"
                    >
                      <span className="block transition-colors duration-300 group-hover:text-white">
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-white/70 transition-transform duration-500 ease-smooth group-hover:origin-left group-hover:scale-x-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                Kontakt
              </p>
              <ul className="flex flex-col gap-3 text-[0.98rem] text-white/80">
                <li>
                  <a
                    href={`tel:${env.CONTACT_PHONE.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Phone />
                    <span>{env.CONTACT_PHONE}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${env.CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail />
                    <span>{env.CONTACT_EMAIL}</span>
                  </a>
                </li>
                <li className="text-white/65">Cała Polska — obsługa zdalna</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                Dokumenty
              </p>
              <ul className="flex flex-col gap-3 text-[0.98rem] text-white/80">
                <li>
                  <Link
                    href="/polityka-prywatnosci"
                    className="transition-colors hover:text-white"
                  >
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link
                    href="/regulamin"
                    className="transition-colors hover:text-white"
                  >
                    Regulamin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 sm:mt-16 lg:mt-20" />
      </div>

      {/* Full-bleed brand wordmark — Luzen .footer_logo { width: 100% } */}
      <div
        aria-hidden="true"
        className="relative w-full select-none overflow-hidden leading-[0.82]"
      >
        <p className="block w-full whitespace-nowrap px-4 font-display font-medium tracking-[-0.045em] text-white text-[18vw] sm:px-6 lg:px-8">
          {BRAND.name}
          <span className="text-accent-green">.</span>
        </p>
      </div>

      <div className="container relative">
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[0.82rem] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <p>
            © {year} {BRAND.fullLegal}. Wszystkie prawa zastrzeżone.
          </p>
          <p className="font-mono uppercase tracking-marker">
            Made for premium interiors · PL
          </p>
        </div>
      </div>
    </footer>
  );
}
