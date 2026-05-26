"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { usePopupForm } from "@/hooks/usePopupForm";
import { Events } from "@/lib/analytics";

export function MidCtaStrip() {
  const popup = usePopupForm();

  return (
    <section
      aria-label="Skontaktuj się z nami"
      className="bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <GlassCard
            eyebrow="Twój pomysł"
            title={
              <>
                Twoja przestrzeń
                <br />
                nasza ekspertyza
              </>
            }
            bgImage="/images/portfolio/02-gorski-krakow.jpg"
            bgImageAlt=""
          >
            <Button
              href="/#portfolio"
              variant="dark"
              size="lg"
              onClick={() => Events.ctaClicked("mid-strip-services")}
            >
              Zobacz portfolio
            </Button>
          </GlassCard>

          <GlassCard
            eyebrow="Napisz do nas"
            title={
              <>
                Zacznijmy
                <br />
                od konsultacji
              </>
            }
            bgImage="/images/portfolio/04-szczyt-poznan.jpg"
            bgImageAlt=""
          >
            <Button
              variant="dark"
              size="lg"
              onClick={() => {
                Events.ctaClicked("mid-strip-contact");
                popup.open("mid-strip");
              }}
            >
              Skontaktuj się
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
