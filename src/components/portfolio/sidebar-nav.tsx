import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react"

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function SidebarNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border p-6 z-40">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Ashenafi G.</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant={location.pathname === item.href ? "secondary" : "ghost"}
            className={`w-full justify-start text-left font-medium ${
              location.pathname === item.href 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => navigate(item.href)}
          >
            {item.name}
          </Button>
        ))}
        
        {/* Expandable sections */}
        <Button
          variant="ghost"
          className="w-full justify-between text-left font-medium text-muted-foreground hover:text-foreground"
        >
          Recipes
          <ChevronDown className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-between text-left font-medium text-muted-foreground hover:text-foreground"
        >
          Blog
          <ChevronDown className="h-4 w-4" />
        </Button>
      </nav>

      {/* Social Links */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  )
}