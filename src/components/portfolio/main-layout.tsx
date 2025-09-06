import { Navigation } from "@/components/portfolio/navigation"
import { SidebarNav } from "@/components/portfolio/sidebar-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 right-0 left-64 h-16 bg-background border-b border-border flex items-center justify-between px-6 z-30">
        <div />
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Button>
          <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
            Documentation
          </Button>
          <ThemeToggle />
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
      </nav>

      {/* Sidebar */}
      <SidebarNav />

      {/* Main Content */}
      <main className="ml-64 pt-16">
        {children}
      </main>
    </div>
  )
}