import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle" 
import { Menu, X, Download } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blogs" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === "#home" ? "#hero" : href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-elegant" : "bg-transparent"
    }`}>
      {/* Navigation aligned to the same centered container as the hero (max-w-[1400px] px-6) */}
      <div className="w-full">
        <div className="mx-auto max-w-[1400px] w-full px-6">
          <div className="relative h-16 w-full">
            {/* Left: Logo aligned to container left edge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-xl text-foreground">AshenafiTech</div>

            {/* Center: Desktop Navigation (centered) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Side Actions: aligned to container right edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex flex-none"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1FgjlHo9F1vAplOonGMEQBXix75H7Z1DK/view?usp=sharing', '_blank', 'noopener,noreferrer')
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-fit mt-4"
                onClick={() => {
                  window.open('https://docs.google.com/document/d/1HbxDzC6AspTOGhdW5pwB9NrNjUQw6BN34GN3XqnSg2E/edit?usp=sharing', '_blank', 'noopener,noreferrer')
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}