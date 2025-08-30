import { User, FileText, FolderOpen, BookOpen, MessageSquare, Award, Briefcase, Code, Users, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Portfolio", href: "#portfolio", icon: FolderOpen },
  { name: "Community", href: "#community", icon: Users },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: MessageSquare },
  { name: "Resume", href: "#resume", icon: FileText },
]

export function Sidebar() {
  const { theme, setTheme } = useTheme()
  
  const scrollToSection = (href: string) => {
    if (href === "#resume") {
      // Download resume - using the correct path from public folder
      const link = document.createElement('a')
      link.href = "/Ashenafi_Resume.pdf"
      link.download = "Ashenafi_Resume.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <aside className="w-20 lg:w-64 bg-card/50 backdrop-blur-sm border-r border-border flex flex-col py-8 sticky top-0 h-screen">
      {/* Logo */}
      <div className="mb-8 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <div className="hidden lg:block">
            <h1 className="font-bold text-lg text-foreground">Ashenafi</h1>
            <p className="text-sm text-muted-foreground">Portfolio</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start h-12 px-3 lg:px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
            onClick={() => scrollToSection(item.href)}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span className="hidden lg:block ml-3 text-sm font-medium">{item.name}</span>
            
            {/* Tooltip for mobile */}
            <div className="lg:hidden absolute left-20 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap border border-border shadow-md">
              {item.name}
            </div>
          </Button>
        ))}
      </nav>

      {/* Theme Toggle & Status */}
      <div className="px-4 mt-auto space-y-3">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start h-10 px-3 lg:px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 flex-shrink-0" />
          ) : (
            <Sun className="h-4 w-4 flex-shrink-0" />
          )}
          <span className="hidden lg:block ml-3 text-sm font-medium">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
          
          {/* Tooltip for mobile */}
          <div className="lg:hidden absolute left-20 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap border border-border shadow-md">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </div>
        </Button>

        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
          <span className="hidden lg:block text-sm text-muted-foreground">Available for work</span>
        </div>
      </div>
    </aside>
  )
}