import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { CommunitySection } from "@/components/portfolio/community-section"
import { BlogsSection } from "@/components/portfolio/blogs-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero is full-bleed and should live outside the centered main container */}
      <div id="hero">
        <HeroSection />
      </div>
      <main>
        <div id="about">
          <AboutSection />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="community">
          <CommunitySection />
        </div>
        <div id="blogs">
          <BlogsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
