# Panelio — landing dla paneli dekoracyjnych

Premium, conversion-first landing page w języku polskim dla marki sprzedającej dekoracyjne panele ścienne z nadrukiem. Zbudowany na Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + React Hook Form + Zod.

## Stack

| Warstwa | Technologia |
| --- | --- |
| Framework | Next.js 14.2 (App Router, RSC) |
| Język | TypeScript 5.6 (strict) |
| Style | Tailwind CSS 3.4 (custom theme) |
| Motion | Framer Motion 11 (spring physics, respektuje `prefers-reduced-motion`) |
| Forms | React Hook Form 7 + Zod (resolver) |
| Fonty | Fraunces (display), Geist (sans), Geist Mono (mono) — `next/font/google` |

## Szybki start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

Skrypty:

- `npm run dev` — tryb deweloperski
- `npm run build` — build produkcyjny
- `npm run start` — uruchomienie buildu
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript

## Konfiguracja zmiennych środowiskowych

| Klucz | Wymagane | Opis |
| --- | --- | --- |
| `CRM_ENDPOINT` | tak (prod) | Webhook CRM, do którego serwer forwarduje zapytania. Jeśli pusty, payload trafia do logu serwera (dev only). |
| `CRM_TOKEN` | opcjonalnie | Wysyłany w nagłówku `X-Lead-Token`. Waliduj go po stronie CRM. |
| `NEXT_PUBLIC_SITE_URL` | tak | URL produkcyjny dla metadata, sitemap i OG. |
| `NEXT_PUBLIC_GTM_ID` | opcjonalnie | Google Tag Manager. |
| `NEXT_PUBLIC_GA_ID` | opcjonalnie | Google Analytics. |
| `NEXT_PUBLIC_CONTACT_PHONE` | tak | Telefon wyświetlany w footerze i CTA. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | tak | E-mail kontaktowy. |

## Integracja CRM

1. Ustaw `CRM_ENDPOINT` w `.env.local`.
2. Endpoint `/api/lead` waliduje payload przez Zod (`leadSchema`), wzbogaca go o `userAgent`, `submittedAt`, `source`, a następnie wykonuje `POST` z `Content-Type: application/json` na `CRM_ENDPOINT`.
3. Jeśli ustawisz `CRM_TOKEN`, zostanie on przesłany w nagłówku `X-Lead-Token` — zwaliduj go w odbiorcy.
4. Sieciowy retry: klient (`lib/crm.ts`) ponawia żądanie raz po 2 s, jeśli serwer zwrócił 5xx.

Payload trafiający do CRM:

```json
{
  "name": "Anna",
  "phone": "+48 600 000 000",
  "email": "anna@firma.pl",
  "city": "Warszawa",
  "roomType": "mieszkanie",
  "message": "Sypialnia, ściana za łóżkiem…",
  "consent": true,
  "source": "section-03-konsultacja",
  "userAgent": "Mozilla/5.0 …",
  "submittedAt": "2026-05-25T14:23:11.341Z"
}
```

## Struktura katalogów

```
app/                Next.js App Router (layout, page, API, legal, OG image, sitemap)
components/
  forms/            LeadForm, lead-schema (Zod), success / error states
  icons/            Custom inline SVG icons (no Lucide)
  layout/           Header, Footer, MobileMenu, MobileStickyCta, FloatingWidget
  sections/         9 sekcji landingu w kolejności renderowania
  ui/               Primitives: Button, Input, Lightbox, Accordion, PopupModal, etc.
content/            Single source of truth: portfolio, faq, benefits, nav, SEO
hooks/              useHideOnScroll, useLockBodyScroll, useFormPersistence, etc.
lib/                cn (clsx + tailwind-merge), crm submit helper, analytics, env
providers/          PopupProvider (modal context)
public/             Zdjęcia, favicon, OG
```

## Sekcje landingu

| # | Plik | Cel |
| --- | --- | --- |
| Hero | `components/sections/Hero.tsx` | Komunikat, 2 CTA, trust badges |
| 01 | `Portfolio.tsx` | Galeria z filtrem + lightbox |
| 02 | `Product.tsx` | Czym są panele — 4 numerowane punkty |
| 03 | `FormPrimary.tsx` | Pierwszy formularz w ciemnej sekcji |
| 04 | `Benefits.tsx` | Bento z 6 zaletami |
| — | `MidCtaStrip.tsx` | Mid-funnel CTA (otwiera popup) |
| 05 | `TrustEfekty.tsx` | Uczciwy blok zaufania (bez fake testimoniali) |
| 06 | `Faq.tsx` | 6 pytań w akordeonie |
| 07 | `FormFinal.tsx` | Zamykający formularz + dane kontaktowe |

## Conversion architecture

- **Dwa formularze** identyczne strukturalnie, w różnych miejscach lejka (03 i 07).
- **Mid-funnel CTA** między Zalety a Trust — łapie gorące leady przed sekcją wymagającą uczciwości.
- **Popup forma** dostępna z każdego CTA poza nawigacją: portfolio, mid-strip, FAQ, mobilne sticky CTA, desktop floating widget.
- **localStorage persistence** — formularze zapisują wartości na żywo i czyszczą dopiero po sukcesie.
- **Honeypot field** (`website`) — chroni przed botami bez blokowania użytkownika.
- **GDPR consent** — wymagany checkbox z linkiem do polityki prywatności.

## Accessibility

- Wszystkie pola formularza mają `<label>` + `aria-invalid` + `role="alert"` na błędach.
- Lightbox, MobileMenu i PopupModal implementują focus-trap, `aria-modal`, esc-to-close, lock body scroll.
- Akordeon FAQ: `aria-expanded`, `aria-controls`, klawiatura.
- Skip-link „Pomiń do treści" widoczny po focusie.
- `prefers-reduced-motion` wyłącza translate/scale; pozostaje samo opacity.
- Wszystkie kontrasty tekstu spełniają WCAG AA (`#64736A` na `#F3F7F4` = 4.62:1, `#1F5C8B` na `#FFFFFF` = 6.21:1).

## SEO

- `metadata` w `content/seo.ts` (canonical, OG, Twitter, JSON-LD `LocalBusiness`).
- Auto-generowany OG image w `app/opengraph-image.tsx`.
- `sitemap.xml` i `robots.txt` przez App Router.
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.

## Wymiana zdjęć

Zdjęcia portfolio znajdują się w `public/images/portfolio/`. Aby podmienić materiały, zachowaj nazwy plików lub zaktualizuj odwołania w `content/portfolio.ts`. Hero i sekcja Produkt korzystają z `public/images/hero/` i `public/images/product/`.

## Licencja

Wszystkie prawa zastrzeżone — Panelio Sp. z o.o.
