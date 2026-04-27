import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorGlow } from "@/components/cursor-glow";
import { ConsoleSignature } from "@/components/console-signature";
import { Hero } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-it-works";
import { Transformation } from "@/sections/transformation";
import { Team } from "@/sections/team";
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
      <ConsoleSignature />
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Transformation />
        <Team />
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
