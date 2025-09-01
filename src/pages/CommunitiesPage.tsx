import { Navigation } from "@/components/portfolio/navigation"
import { CommunitiesSection } from "@/components/portfolio/communities-section"
import { Footer } from "@/components/portfolio/footer"
import techBackground from "@/assets/tech-background.jpg"

const CommunitiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Communities Page */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${techBackground})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Communities</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Building and leading tech communities that empower developers across Africa
          </p>
        </div>
      </section>

      <main>
        <CommunitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CommunitiesPage;