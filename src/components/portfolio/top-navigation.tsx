import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon, Download } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "My Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "About Me", href: "#about" },
]

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">Ashenafi Godana</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement('a')
                link.href = "/Ashenafi_Resume.pdf"
                link.download = "Ashenafi_Resume.pdf"
                link.target = "_blank"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="w-full justify-start"
                    >
                      {theme === "light" ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = "/Ashenafi_Resume.pdf"
                        link.download = "Ashenafi_Resume.pdf"
                        link.target = "_blank"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                        setIsOpen(false)
                      }}
                      className="w-full justify-start mt-2"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}