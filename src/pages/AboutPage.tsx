import { Navigation } from "@/components/portfolio/navigation"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { Footer } from "@/components/portfolio/footer"
import codingBackground from "@/assets/coding-background.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for About Page */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${codingBackground})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Passionate software engineer with expertise in cloud architecture and modern development
          </p>
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