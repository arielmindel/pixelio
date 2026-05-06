import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Process } from "@/components/Process";
import { DemoCTA } from "@/components/DemoCTA";
import { Packages } from "@/components/Packages";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <DemoCTA />
        <Packages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
