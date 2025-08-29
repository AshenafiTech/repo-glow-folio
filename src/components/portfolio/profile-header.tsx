import { Mail, MapPin, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroPhoto from "@/assets/hero.jpg"

export const ProfileHeader = () => {
  return (
    <div className="flex items-start justify-between mb-8 p-6 bg-card rounded-lg border border-border">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            src={heroPhoto}
            alt="Ashenafi Godana"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-background flex items-center justify-center">
            <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
          </div>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Ashenafi Godana</h1>
          <p className="text-muted-foreground mb-3">DevOps | SRE | Cloud Engineer</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:ashenafigodana@gmail.com" className="hover:text-primary transition-colors">
                ashenafigodana@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href="/Ashenafi_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download size={16} className="mr-2" />
            CV
          </a>
        </Button>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span>Available</span>
        </div>
      </div>
    </div>
  )
}