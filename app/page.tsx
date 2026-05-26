import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Product } from "@/components/sections/Product";
import { FormPrimary } from "@/components/sections/FormPrimary";
import { Benefits } from "@/components/sections/Benefits";
import { MidCtaStrip } from "@/components/sections/MidCtaStrip";
import { TrustEfekty } from "@/components/sections/TrustEfekty";
import { Faq } from "@/components/sections/Faq";
import { FormFinal } from "@/components/sections/FormFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Product />
      <FormPrimary />
      <Benefits />
      <MidCtaStrip />
      <TrustEfekty />
      <Faq />
      <FormFinal />
    </>
  );
}
