import { ArrowDown, Github, Linkedin, Mail, Instagram, Youtube, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroPhoto from "@/assets/hero.jpg"

export function HeroSection() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/ashenafi", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ashenafi", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/ashenafi", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@ashenafi", label: "YouTube" },
    { icon: Award, href: "https://credly.com/users/ashenafi", label: "Credly" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                    <span className="text-sm font-mono font-medium hero-text-gradient">Software Engineer</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="hero-text-gradient font-display">Crafting scalable</span>
                    <br />
                    <span className="text-foreground">solutions & AI-powered</span>
                    <br />
                    <span className="text-foreground">applications</span>
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Specializing in <span className="text-primary font-semibold">cloud-native technologies</span>, 
                  <span className="text-secondary font-semibold"> backend solutions</span>, and 
                  <span className="text-accent font-semibold"> cutting-edge AI</span> with modern development practices.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm font-medium text-muted-foreground">Connect:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold shadow-vibrant hover:shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const aboutSection = document.querySelector('#about')
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <ArrowDown className="mr-3 h-5 w-5" />
                  Explore My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-7 border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Let's Connect
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glowing Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-background rounded-full"></div>
                </div>
                
                {/* Photo Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-vibrant group-hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                  <img
                    src={heroPhoto}
                    alt="Ashenafi - Software Engineer"
                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-125"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce shadow-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce shadow-glow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Key Highlights Grid */}
          <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">SE</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 hero-text-gradient">Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building scalable applications with modern tech stacks, focusing on performance and user experience.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Cloud Architect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing and implementing cloud-native solutions with AWS, mentoring teams on best practices.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Community Leader</h3>
              <p className="text-muted-foreground leading-relaxed">
                AWS Cloud Captain leading 300+ developers, organizing workshops and speaking at tech events.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mentor & Educator</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about sharing knowledge, teaching algorithms, and helping developers grow their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}