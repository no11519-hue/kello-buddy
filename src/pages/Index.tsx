import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CustomerFlowSection from "@/components/CustomerFlowSection";
import SolutionSection from "@/components/SolutionSection";
import RevenueGraphSection from "@/components/RevenueGraphSection";


import FAQSection from "@/components/FAQSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <RevenueGraphSection />
      <CustomerFlowSection />

      <ProblemSection />
      <SolutionSection />

      <FAQSection />
      <CTAFormSection />
      <Footer />
      <FloatingContact />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
