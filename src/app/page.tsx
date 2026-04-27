import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorGlow } from "@/components/cursor-glow";
import { Hero } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-it-works";
import { About } from "@/sections/about";
import { Pricing } from "@/sections/pricing";
import { Portfolio } from "@/sections/portfolio";
import { Testimonials } from "@/sections/testimonials";
import { FAQ } from "@/sections/faq";
import { FinalCTA } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
