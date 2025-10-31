import { useState } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import SpecsTable from "@/components/SpecsTable";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero 
        onRequestDemo={() => setIsDemoModalOpen(true)}
        onSeeLiveDemo={scrollToDemo}
      />
      <Problem />
      <Solution />
      <HowItWorks />
      <LiveDemo />
      <SpecsTable />
      <UseCases />
      <Integrations />
      <CTAForm />
      <Footer />
      
      <DemoModal 
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </div>
  );
}
