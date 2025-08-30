import { Mail, MapPin, Download, Github, Linkedin, Youtube, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroPhoto from "@/assets/hero.jpg"

// Custom X (Twitter) logo SVG
const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.53 3H21L13.47 10.91L22.25 21H15.97L10.77 14.68L4.97 21H1L9.03 12.61L0.5 3H7.03L12.71 9.76L17.53 3ZM16.32 19H18.13L6.62 5H4.7L16.32 19Z" fill="currentColor"/>
  </svg>
)

export function ProfileHeader() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AshenafiTech", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashenafig/", label: "LinkedIn" },
    { icon: XLogo, href: "https://x.com/AshenafiGodana", label: "X" },
    { icon: Youtube, href: "https://youtube.com/@ashenafi", label: "YouTube" },
    { icon: Award, href: "https://www.credly.com/users/ashenafi-godana/badges#credly", label: "Credly" },
  ]

  return (
    <header className="bg-card/30 backdrop-blur-sm border-b border-border p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden bg-muted">
              <img
                src={heroPhoto}
                alt="Ashenafi Godana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
          </div>

          {/* Info */}
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Ashenafi Godana</h1>
            <p className="text-base lg:text-lg text-muted-foreground">Software Engineer | Cloud Architect</p>
            
            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:ashenafitech.et@gmail.com" className="hover:text-primary transition-colors">
                  ashenafitech.et@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => window.open("/Ashenafi_Resume.pdf", "_blank")}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </header>
  )
}