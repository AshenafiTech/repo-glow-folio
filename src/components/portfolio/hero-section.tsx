import { ArrowDown, Github, Linkedin, Mail, Instagram, Youtube, Award } from "lucide-react"
// Custom X (Twitter) logo SVG
const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.53 3H21L13.47 10.91L22.25 21H15.97L10.77 14.68L4.97 21H1L9.03 12.61L0.5 3H7.03L12.71 9.76L17.53 3ZM16.32 19H18.13L6.62 5H4.7L16.32 19Z" fill="currentColor"/>
  </svg>
)
import { Button } from "@/components/ui/button"
import heroPhoto from "@/assets/hero.jpg"

export function HeroSection() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashenafig/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/AshenafiTech", label: "GitHub" },
  { icon: XLogo, href: "https://x.com/AshenafiGodana", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/ashenafi_5/", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@ashenafi", label: "YouTube" },
    { icon: Award, href: "https://www.credly.com/users/ashenafi-godana/badges#credly", label: "Credly" },
  ]

    return (
  <section className="min-h-screen w-full flex items-center justify-center bg-background py-20 relative overflow-hidden">
        {/* Animated Background - full width */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse opacity-70 transition-opacity duration-1000"></div>
    <div className="absolute top-10 left-0 w-[40vw] h-[40vw] max-w-[900px] max-h-[900px] bg-primary/10 rounded-full blur-3xl animate-float opacity-40 transition-opacity duration-1000"></div>
    <div className="absolute bottom-10 right-0 w-[50vw] h-[50vw] max-w-[1200px] max-h-[1200px] bg-secondary/10 rounded-full blur-3xl animate-float opacity-30 transition-opacity duration-1000" style={{animationDelay: '2s'}}></div>
        {/* Centered content: wider than default but constrained to avoid horizontal scroll */}
        <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="text-base md:text-lg font-semibold text-muted-foreground mb-2">Cloud & AI. Building intelligent, scalable solutions.</div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                      <span className="text-sm font-mono font-medium hero-text-gradient">Software Engineer</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      <span className="block font-display text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                        Inventing tomorrow:
                      </span>
                      <span className="block text-foreground mt-2">
                        <span className="font-bold text-primary">Scalable</span> solutions & <span className="font-bold text-secondary">AI-powered</span> apps
                      </span>
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Architecting <span className="text-primary font-semibold">cloud-native platforms</span>, engineering <span className="text-foreground font-semibold">robust backends</span>, and building <span className="text-accent font-semibold">AI solutions</span>—all with a passion for modern, scalable development.
                  </p>
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
              <div className="flex flex-col items-center lg:items-end justify-center gap-8">
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
                {/* Social Links - moved under image, shifted left */}
                <div className="flex flex-row items-center justify-center gap-4 mt-6 lg:ml-16">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-gradient-to-br from-primary via-secondary to-accent border-2 border-primary/40 shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-125"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-white group-hover:text-accent transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]" />
                    </a>
                  ))}
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
                  Dedicated to sharing cloud expertise, guiding others in modern tech, and empowering learners in digital innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}