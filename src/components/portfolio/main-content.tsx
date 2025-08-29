import { AboutSection } from "./about-section"
import { ExperienceSection } from "./experience-section"
import { ProjectsSection } from "./projects-section"
import { BlogsSection } from "./blogs-section"
import { ContactSection } from "./contact-section"

interface MainContentProps {
  activeSection: string
}

export const MainContent = ({ activeSection }: MainContentProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "experience":
        return <ExperienceSection />
      case "projects":
        return <ProjectsSection />
      case "blogs":
        return <BlogsSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen">
      {renderSection()}
    </div>
  )
}