import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Twitter, Mail, Download, Award, Code, Cloud, Users } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function HeroModern() {
  const certifications = [
    "AWS Cloud Practitioner",
    "Kubernetes Certified",
    "Azure Fundamentals",
    "Google Cloud Associate",
    "Docker Certified"
  ]

  const skills = [
    "React", "TypeScript", "Python", "AWS", "Docker", "Kubernetes", 
    "Node.js", "PostgreSQL", "FastAPI", "Django", "GraphQL", "Redis",
    "MongoDB", "MySQL", "Jenkins", "GitHub Actions", "Microservices"
  ]

  const stats = [
    { value: "5+", label: "Years of experience" },
    { value: "50+", label: "Completed projects" },
    { value: "99%", label: "Client satisfaction" },
  ]

  const featuredProjects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and CI/CD pipelines, reducing deployment time by 80%",
      tech: ["AWS", "Terraform", "Docker", "Jenkins"],
      image: "/logos/aws.svg"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices using FastAPI, Docker, and Kubernetes for a fintech platform",
      tech: ["Python", "FastAPI", "Kubernetes", "PostgreSQL"],
      image: "/logos/kubernetes.svg"
    },
    {
      title: "Full-Stack E-commerce Platform",
      description: "Built a complete e-commerce solution with React frontend, Node.js backend, and integrated payment systems",
      tech: ["React", "Node.js", "MongoDB", "GraphQL"],
      image: "/logos/react.svg"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
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

        {/* Name and Title */}
        <h1 className="text-6xl font-bold text-primary mb-4 tracking-tight">
          Ashenafi Godana
        </h1>
        <h2 className="text-2xl text-foreground mb-6 font-medium">
          Software Engineer & Cloud Architect
        </h2>

        {/* Bio */}
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Join me for your weekly dose of cloud onboarding: practical roadmaps, 
          key topic insights, actionable strategies for cloud job preparation, 
          and free learning resources. Specializing in full-stack development, 
          cloud architecture, and technical leadership.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-2xl">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
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

        {/* Tech Stack */}
        <div className="mb-12 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            <Award className="w-5 h-5 inline mr-2" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="border-primary/30 text-foreground">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-card border border-border hover:border-primary/30 transition-all duration-200 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={profilePhoto} alt="Ashenafi Godana" />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">AG</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">Ashenafi Godana</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}