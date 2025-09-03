import { Navigation } from "@/components/portfolio/navigation"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import experienceHero from "@/assets/experience-hero.jpg"

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Experience Page */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${experienceHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight">
            Professional <span className="hero-text-gradient">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            5+ years of hands-on experience in cloud architecture, full-stack development, 
            and leading high-performing technical teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary-glow" />
              <span>2019 - Present</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-glow" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;