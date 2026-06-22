import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PresskitSection from "@/components/PresskitSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PresskitSection />
      <CtaSection />
    </main>
  );
};

export default Index;
