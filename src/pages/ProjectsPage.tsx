import { Navigation } from "@/components/portfolio/navigation"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import projectsHero from "@/assets/projects-hero.jpg"

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Projects Page */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${projectsHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight">
            My <span className="hero-text-gradient">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Showcasing innovative solutions built with modern technologies, 
            from cloud-native applications to AI-powered platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open('https://github.com/ashenafimb', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
          </div>
        </div>
      </section>

      <main>
        <div id="projects">
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;