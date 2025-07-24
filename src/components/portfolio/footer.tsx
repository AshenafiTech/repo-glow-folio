import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-xl hero-text-gradient">
              Ashenafi.tech
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors hover-lift">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors hover-lift">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@ashenafi.tech"
                 className="text-muted-foreground hover:text-primary transition-colors hover-lift">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["About", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <div>Web Development</div>
              <div>Mobile Apps</div>
              <div>UI/UX Design</div>
              <div>Consulting</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Ashenafi. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}