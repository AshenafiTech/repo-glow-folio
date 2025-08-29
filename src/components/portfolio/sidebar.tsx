import { useState } from "react"
import { User, FileText, Briefcase, BookOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navigationItems = [
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: FileText, label: "Resume" },
  { id: "projects", icon: Briefcase, label: "Portfolio" },
  { id: "blogs", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-card border-r border-border flex flex-col items-center py-8 z-50">
      <div className="flex flex-col gap-6">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "relative group flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted-foreground/10 text-muted-foreground hover:text-foreground"
              )}
              title={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </button>
          )
        })}
      </div>
    </aside>
  )
}