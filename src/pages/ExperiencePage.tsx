import { Navigation } from "@/components/portfolio/navigation"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { CommunitySection } from "@/components/portfolio/community-section"
import { Footer } from "@/components/portfolio/footer"
import workspaceBackground from "@/assets/workspace-background.jpg"

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Experience Page */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${workspaceBackground})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Experience</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Professional journey and community contributions
          </p>
        </div>
      </section>

      <main>
        <ExperienceSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;