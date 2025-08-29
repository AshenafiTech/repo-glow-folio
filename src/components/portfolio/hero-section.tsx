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
    { icon: Youtube, href: "https://youtube.com/@ashenafi", label: "YouTube" },
    { icon: Award, href: "https://www.credly.com/users/ashenafi-godana/badges#credly", label: "Credly" },
  ]

    return (
  <section className="min-h-screen w-full flex items-center justify-center bg-background py-20 relative overflow-hidden">
        {/* Subtle Professional Background */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/3 to-accent/3 opacity-50"></div>
    <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl opacity-20"></div>
        {/* Centered content: wider than default but constrained to avoid horizontal scroll */}
        <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center w-full">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                      <span className="text-sm font-medium text-primary">Software Engineer</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                      <span className="block text-foreground">
                        Building 
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Professional Solutions
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                      Specializing in cloud architecture, backend development, and AI-powered applications with modern technologies.
                    </p>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="px-8 py-6 bg-primary hover:bg-primary-dark text-primary-foreground font-medium transition-all duration-200 hover:translate-y-[-2px] shadow-elegant hover:shadow-vibrant"
                    onClick={() => {
                      const aboutSection = document.querySelector('#about')
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <ArrowDown className="mr-2 h-4 w-4" />
                    View My Work
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 border-border hover:bg-muted text-foreground font-medium transition-all duration-200 hover:translate-y-[-2px]"
                    onClick={() => {
                      const contactSection = document.querySelector('#contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                </div>
              </div>

              {/* Right Content - Small Professional Photo */}
              <div className="flex flex-col items-center lg:items-end justify-center gap-6">
                <div className="relative group">
                  {/* Photo Container - Smaller Size */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-card border border-border shadow-elegant group-hover:shadow-vibrant transition-all duration-300 group-hover:translate-y-[-4px]">
                    <img
                      src={heroPhoto}
                      alt="Ashenafi - Software Engineer"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
                  </div>
                </div>
                {/* Professional Social Links */}
                <div className="flex flex-row items-center justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 rounded-lg bg-card border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 hover:translate-y-[-2px] shadow-sm hover:shadow-elegant"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Highlights Grid */}
            <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-semibold text-sm">SE</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Software Engineer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building scalable applications with modern tech stacks and best practices.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent font-semibold text-sm">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cloud Architect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designing cloud-native solutions with AWS and modern infrastructure.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-semibold text-sm">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Community Leader</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leading 300+ developers as AWS Cloud Captain and organizing events.
                </p>
              </div>

              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent font-semibold text-sm">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Educator</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sharing knowledge and mentoring developers in cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}