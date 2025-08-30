import { TopNavigation } from "@/components/portfolio/top-navigation"
import { HeroProfileSection } from "@/components/portfolio/hero-profile-section"
import { ProjectsGridSection } from "@/components/portfolio/projects-grid-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { CommunitySection } from "@/components/portfolio/community-section"
import { BlogsSection } from "@/components/portfolio/blogs-section"
import { ContactSection } from "@/components/portfolio/contact-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Content */}
      <main>
        {/* Hero/Profile Section */}
        <HeroProfileSection />
        
        {/* Projects Grid */}
        <ProjectsGridSection />
        
        {/* Experience Section */}
        <div id="experience">
          <ExperienceSection />
        </div>
        
        {/* About Me Section */}
        <div id="about">
          <AboutSection />
        </div>
        
        {/* Additional Sections */}
        <CertificationsSection />
        <SkillsSection />
        <CommunitySection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
