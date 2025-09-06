import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Download } from "lucide-react"
import heroTech from "@/assets/hero-tech.jpg"

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Tech Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroTech})`,
        }}
      />
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="space-y-6 mb-10">
          <div className="text-sm font-mono text-primary-glow uppercase tracking-wider">
            // Cloud Architect & Full-Stack Developer
          </div>
          <h1 className="font-bold leading-tight">
            <span className="block">Ashenafi Godana</span>
            <span className="block hero-text-gradient text-2xl md:text-4xl font-normal mt-2">
              Building scalable cloud solutions
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            AWS Cloud Captain • React • Python • Kubernetes • 5+ years
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-200 group"
            onClick={() => navigate('/projects')}
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-6 py-3 bg-white/10 border border-white/30 text-white hover:bg-white/20 font-medium transition-all duration-200 backdrop-blur-sm"
            onClick={() => window.open('/Ashenafi_Resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </div>
        
        {/* Tech Stack Quick View */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">AWS</span>
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">React</span>
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Python</span>
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">TypeScript</span>
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Kubernetes</span>
          <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Docker</span>
        </div>
      </div>
    </section>
  )
}