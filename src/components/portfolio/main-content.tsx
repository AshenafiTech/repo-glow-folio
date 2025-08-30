import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ExperienceSection } from "./experience-section"
import { ProjectsSection } from "./projects-section"
import { CommunitySection } from "./community-section"
import { BlogsSection } from "./blogs-section"
import { ContactSection } from "./contact-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"

export function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto">
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
      <div id="portfolio">
        <ProjectsSection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <div id="blog">
        <BlogsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}