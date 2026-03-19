import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CustomerFlowSection from "@/components/CustomerFlowSection";
import SolutionSection from "@/components/SolutionSection";
import RevenueGraphSection from "@/components/RevenueGraphSection";

import FAQSection from "@/components/FAQSection";
import SocialProofSection from "@/components/SocialProofSection";
import KelloServiceStepsSection from "@/components/KelloServiceStepsSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Header from "@/components/Header";
import CherryBlossoms from "@/components/CherryBlossoms";
import FloatingPromo from "@/components/FloatingPromo";

const Index = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <CherryBlossoms />
      <Header />
      <FloatingPromo />
      <HeroSection />
      <div>
        <RevenueGraphSection />
        <CustomerFlowSection />
      </div>

      <div id="service">
        <ProblemSection />
        <SolutionSection />
        <KelloServiceStepsSection />
      </div>

      <SocialProofSection />
      <div id="faq">
        <FAQSection />
      </div>

      <div id="apply">
        <CTAFormSection />
      </div>
      <Footer />
      <FloatingContact />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
