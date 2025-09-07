import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function HeroModern() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <Avatar className="w-32 h-32 border-4 border-primary/20">
            <AvatarImage src={profilePhoto} alt="Ashenafi Godana" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">AG</AvatarFallback>
          </Avatar>
        </div>

        {/* Brand Name */}
        <h1 className="text-6xl font-bold text-primary mb-6 tracking-tight">
          tech5ense
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Join me for your weekly dose of cloud onboarding: practical roadmaps, 
          key topic insights, actionable strategies for cloud job preparation, 
          and free learning resources.
        </p>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
          <Input 
            type="email" 
            placeholder="Your email here..." 
            className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Subscribe
          </Button>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Follow me on my socials</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Featured Posts Section */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kubernetes Deployment Strategies Explained",
                description: "Use cases, trade-offs, and answers to real interview scenarios",
                date: "Jul 31, 2025",
                likes: 2,
                image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/50ef9858-8dcb-49de-a4fb-51bfedb508c8/K8s_deployment.gif"
              },
              {
                title: "Cloud Engineer Roadmap",
                description: "How to start, what to learn, and the resources to help you build real-world cloud skills",
                date: "Jun 19, 2025",
                likes: 4,
                image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/65f520e7-4283-4cc3-8d3e-5c27558f1aad/engineer_roadmap.gif"
              },
              {
                title: "3 Skills that's working insanely well in Cloud/DevOps",
                description: "|| SPECIAL EDITION ||",
                date: "Aug 03, 2025",
                likes: 2,
                image: "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/0c8a4d4d-7b3a-4c3a-8c7e-1b2c3d4e5f6g/cloud_devops.gif"
              }
            ].map((post, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-200 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                    {post.date} • ♥ {post.likes}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={profilePhoto} alt="Ashenafi Godana" />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">AG</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">Ashenafi Godana</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}