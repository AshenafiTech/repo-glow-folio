import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Github, Linkedin, Youtube, Award } from "lucide-react"
import heroPhoto from "@/assets/hero.jpg"

// Custom X (Twitter) logo SVG
const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.53 3H21L13.47 10.91L22.25 21H15.97L10.77 14.68L4.97 21H1L9.03 12.61L0.5 3H7.03L12.71 9.76L17.53 3ZM16.32 19H18.13L6.62 5H4.7L16.32 19Z" fill="currentColor"/>
  </svg>
)

export function HeroProfileSection() {
  const socialLinks = [
    { icon: Mail, href: "mailto:ashenafigodanaj@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashenafig/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/AshenafiTech", label: "GitHub" },
  ]

  const scrollToWork = () => {
    const element = document.querySelector('#work')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column - Contact & Info */}
          <div className="lg:w-1/3 space-y-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto lg:mx-0">
              <img
                src={heroPhoto}
                alt="Ashenafi Godana"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-muted-foreground">
                Let's talk about code! Reach out via the links below.
              </p>
              
              <div className="space-y-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
                <a
                  href="https://github.com/AshenafiTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Github</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Hi! I'm Ashenafi Godana 👋
              </h1>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a Software Engineering student at Addis Ababa University graduating in 2027. 
                  I'm also an AWS Cloud Club Captain, leading a community of 300+ developers in cloud technologies.
                </p>
                <p>
                  I invite you to explore some of my projects and recent works below or go to{" "}
                  <button 
                    onClick={scrollToWork}
                    className="font-semibold text-primary hover:underline"
                  >
                    My Work
                  </button>{" "}
                  to see a categorized list of my experience.
                </p>
              </div>

              {/* Current Focus */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Currently focusing on:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">Cloud Architecture</Badge>
                  <Badge variant="secondary">DevOps & CI/CD</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Community Leadership</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}