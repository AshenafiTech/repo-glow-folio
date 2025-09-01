import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Blogs", href: "/blogs" },
  { name: "Communities", href: "/communities" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToPage = (href: string) => {
    navigate(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="w-full">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <div className="font-bold text-xl text-white cursor-pointer" onClick={() => navigate('/')}>
              AshenafiTech
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigateToPage(item.href)}
                  className={`transition-colors duration-200 font-medium uppercase text-sm tracking-wide ${
                    location.pathname === item.href 
                      ? 'text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right: Contact Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase font-medium tracking-wide"
                onClick={() => navigateToPage('/contact')}
              >
                CONTACT
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigateToPage(item.href)}
                  className={`text-left transition-colors py-2 uppercase font-medium tracking-wide ${
                    location.pathname === item.href 
                      ? 'text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-fit mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black"
                onClick={() => navigateToPage('/contact')}
              >
                CONTACT
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}