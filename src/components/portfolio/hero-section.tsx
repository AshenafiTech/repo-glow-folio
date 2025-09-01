import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import heroMountain from "@/assets/hero-mountain.jpg"

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Mountain/Landscape Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroMountain})`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl font-medium opacity-90">
            You can't do
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
            Today's Job
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
            with yesterdays methods, and be in business tomorrow!
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium transition-all duration-300"
            onClick={() => navigate('/projects')}
          >
            PROJECTS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-medium transition-all duration-300"
            onClick={() => navigate('/about')}
          >
            ABOUT ME
          </Button>
        </div>
      </div>
    </section>
  )
}