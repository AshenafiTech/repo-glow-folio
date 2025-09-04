import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Ashenafi Godana. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ashenafig" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@ashenafig" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="mailto:ashenafigodanaj@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}