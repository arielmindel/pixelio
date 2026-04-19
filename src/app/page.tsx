import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Packages } from "@/components/Packages";
import { MaintenanceAddon } from "@/components/MaintenanceAddon";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { WhyPixelio } from "@/components/WhyPixelio";
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
        <Packages />
        <MaintenanceAddon />
        <Process />
        <Portfolio />
        <WhyPixelio />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
