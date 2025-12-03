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
import FooterModal from "@/components/FooterModal";
import { footerModalContent } from "@/lib/footerContent";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFooterModalOpen, setIsFooterModalOpen] = useState(false);
  const [footerModalData, setFooterModalData] = useState({ title: "", content: "" });

  const scrollToDemo = () => {
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterLinkClick = (type: 'scroll' | 'modal', target: string) => {
    if (type === 'scroll') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (type === 'modal') {
      const modalContent = footerModalContent[target];
      if (modalContent) {
        setFooterModalData(modalContent);
        setIsFooterModalOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero
        onRequestDemo={() => setIsDemoModalOpen(true)}
        onSeeLiveDemo={scrollToDemo}
        onViewDemo={() => setIsVideoModalOpen(true)}
      />
      <Problem />
      <Solution />
      <div id="features">
        <HowItWorks />
      </div>
      <LiveDemo />
      <div id="specifications">
        <SpecsTable />
      </div>
      <UseCases />
      <Integrations />
      <div id="demo-form">
        <CTAForm />
      </div>
      <Footer onLinkClick={handleFooterLinkClick} />
      
      <DemoModal 
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
      
      <FooterModal
        open={isFooterModalOpen}
        onOpenChange={setIsFooterModalOpen}
        title={footerModalData.title}
        content={footerModalData.content}
      />
    </div>
  );
}
