import { ArrowDown, Github, Linkedin, Mail, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-glow/15"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/15 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-primary-glow/15 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent/15 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float blur-sm" style={{animationDelay: '0.5s'}}></div>
      
      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 text-primary font-mono text-sm animate-pulse">{"{ code: 'passion' }"}</div>
        <div className="absolute bottom-32 right-1/3 text-primary-glow font-mono text-sm animate-pulse" style={{animationDelay: '1s'}}>{"< innovation />"}</div>
        <div className="absolute top-1/2 left-10 text-accent font-mono text-sm animate-pulse" style={{animationDelay: '2s'}}>{"// building future"}</div>
      </div>
      
      <div className="container px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="hero-text-gradient animate-glow">
                  Ashenafi
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Software Engineer & Cloud Solutions Architect
              </p>
              
              <p className="text-lg text-muted-foreground mb-12">
                Specializing in scalable cloud infrastructure and full-stack development. 
                Expert in AWS, GCP, Azure with extensive experience in containerization and DevOps practices.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 hover-lift relative z-10 bg-gradient-to-br from-primary/20 to-primary-glow/20">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Ashenafi - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
                <div className="absolute -inset-2 rounded-full border border-primary-glow/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-8">
            <Button size="lg" className="hover-lift hover-glow group">
              <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-lift group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift hover:scale-110 group">
              <Github className="h-7 w-7 group-hover:rotate-12 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift hover:scale-110 group">
              <Linkedin className="h-7 w-7 group-hover:rotate-12 transition-transform" />
            </a>
            <a href="https://credly.com/users/your-profile" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift hover:scale-110 group">
              <Award className="h-7 w-7 group-hover:rotate-12 transition-transform" />
            </a>
            <a href="mailto:hello@example.com"
               className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift hover:scale-110 group">
              <Mail className="h-7 w-7 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}