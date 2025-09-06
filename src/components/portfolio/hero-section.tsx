import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import heroModern from "@/assets/hero-modern.jpg"

export function HeroSection() {
  const navigate = useNavigate()
  
  const skills = ["AWS", "React", "Python", "TypeScript", "Kubernetes", "Docker", "Node.js", "GraphQL"]
  
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Modern Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(var(--background) / 0.05), rgba(var(--background) / 0.95)), url(${heroModern})`,
        }}
      />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Available for new opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Ashenafi</span>
                <span className="block hero-text-gradient">Godana</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Cloud Architect & Full-Stack Developer
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Crafting scalable cloud solutions and modern web applications with 5+ years of experience. 
              AWS Cloud Captain specializing in React, Python, and Kubernetes.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group"
                onClick={() => navigate('/projects')}
              >
                <Code className="w-4 h-4 mr-2" />
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/Ashenafi_Resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Content - Skills Showcase */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="card-glass p-6 hover-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Badge variant="secondary" className="mb-3">
                      {skill}
                    </Badge>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${85 + Math.random() * 15}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}