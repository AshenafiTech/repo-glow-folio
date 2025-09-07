import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import heroDeveloper from "@/assets/hero-developer.jpg"

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Modern Developer Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroDeveloper})`,
        }}
      />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-8 mb-12">
          {/* Name and Title */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-card/10 backdrop-blur-sm border border-border/20 rounded-full">
              <span className="text-sm font-mono text-primary tracking-wider">
                ⚡ Available for new opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block">Ashenafi</span>
              <span className="block hero-text-gradient">Godana</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              Cloud Architect & Full-Stack Developer specializing in scalable solutions
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-border/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-foreground">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-border/20">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-foreground">AWS Cloud Captain</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-border/20">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-foreground">Full-Stack Developer</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 group glow-effect hover:scale-105"
            onClick={() => navigate('/projects')}
          >
            <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-card/10 backdrop-blur-sm border-border/30 text-foreground hover:bg-card/20 font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('/Ashenafi_Resume.pdf', '_blank')}
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-card/10 backdrop-blur-sm border border-border/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            onClick={() => window.open('https://github.com/ashenafi-dev', '_blank')}
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-card/10 backdrop-blur-sm border border-border/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            onClick={() => window.open('https://linkedin.com/in/ashenafi-dev', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-card/10 backdrop-blur-sm border border-border/20 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3">
          {['AWS', 'React', 'Python', 'TypeScript', 'Kubernetes', 'Docker', 'Node.js', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-card/10 backdrop-blur-sm border border-border/20 rounded-full text-sm text-foreground hover:bg-card/20 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}