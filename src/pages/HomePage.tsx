import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ServicesSection } from "@/components/portfolio/services-section"
import { Footer } from "@/components/portfolio/footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default HomePage;