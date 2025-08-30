import { User, FileText, FolderOpen, BookOpen, MessageSquare, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Portfolio", href: "#portfolio", icon: FolderOpen },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: MessageSquare },
]

export function Sidebar() {
  const scrollToSection = (href: string) => {
    if (href === "#resume") {
      // Download resume
      window.open("/Ashenafi_Resume.pdf", "_blank")
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <aside className="w-16 md:w-20 lg:w-24 bg-card/50 backdrop-blur-sm border-r border-border flex flex-col items-center py-8 sticky top-0 h-screen">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg md:text-xl">A</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            size="sm"
            className="w-12 h-12 md:w-14 md:h-14 p-0 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
            onClick={() => scrollToSection(item.href)}
            aria-label={item.name}
          >
            <item.icon className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        ))}
      </nav>

      {/* Status indicator */}
      <div className="mt-auto">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </aside>
  )
}