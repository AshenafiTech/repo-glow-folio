import { Navigation } from "@/components/portfolio/navigation"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import aboutHero from "@/assets/about-hero.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for About Page */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${aboutHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight">
            About <span className="hero-text-gradient">Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Passionate cloud architect and full-stack developer with 5+ years of experience 
            building scalable solutions and leading tech communities.
          </p>
          <Button
            size="lg"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 group"
            onClick={() => window.open('/Ashenafi_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>
      </section>

      <main>
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;