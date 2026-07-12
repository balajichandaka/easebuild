import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { Workflow } from "@/components/sections/workflow";
import { Security } from "@/components/sections/security";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Features />
        <Workflow />
        <Security />
        <Testimonials />
        <Pricing />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
