import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import StorySection from "@/components/landing/StorySection";
import TurningPointSection from "@/components/landing/TurningPointSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FounderSection from "@/components/landing/FounderSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <TurningPointSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FounderSection />
        <TargetAudienceSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
