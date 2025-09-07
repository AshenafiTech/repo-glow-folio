import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ServicesSection } from "@/components/portfolio/services-section"
import { CTASection } from "@/components/portfolio/cta-section"
import { Footer } from "@/components/portfolio/footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;