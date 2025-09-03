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
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="space-y-8 mb-12">
          <div className="space-y-6">
            <div className="text-lg md:text-xl text-blue-200 font-medium tracking-wide uppercase">
              Cloud Solutions Architect & Full-Stack Developer
            </div>
            <h1 className="font-extrabold leading-tight tracking-tight">
              <span className="block">Transforming Ideas into</span>
              <span className="block hero-text-gradient">Scalable Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Specializing in cloud architecture, generative AI, and modern web applications. 
              Leading innovation as AWS Cloud Captain with 300+ developers.
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            onClick={() => navigate('/projects')}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-semibold transition-all duration-300 backdrop-blur-sm group"
            onClick={() => window.open('/Ashenafi_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">300+</div>
            <div className="text-gray-300">Developers Led</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">50+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  )
}