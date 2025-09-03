import { Navigation } from "@/components/portfolio/navigation"
import { BlogsSection } from "@/components/portfolio/blogs-section"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, PenTool } from "lucide-react"
import techBackground from "@/assets/tech-background.jpg"

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Blogs Page */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${techBackground})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight">
            Tech <span className="hero-text-gradient">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Sharing knowledge about cloud architecture, modern development practices, 
            and the latest trends in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Articles
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open('https://medium.com/@ashenafimb', '_blank')}
            >
              <PenTool className="mr-2 h-5 w-5" />
              Medium Profile
            </Button>
          </div>
        </div>
      </section>

      <main>
        <div id="blogs">
          <BlogsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;