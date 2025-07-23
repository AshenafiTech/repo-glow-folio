import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order processing.",
    image: "photo-1460925895917-afdab827c52f",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
    image: "photo-1611224923853-80b023f02d71",
    tags: ["Next.js", "Socket.io", "MongoDB", "JWT", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Weather Analytics Platform",
    description: "A data visualization platform that analyzes weather patterns and provides predictive insights using machine learning algorithms.",
    image: "photo-1504608524841-42fe6f032b4b",
    tags: ["Vue.js", "Python", "FastAPI", "Chart.js", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Social Media Mobile App",
    description: "A cross-platform mobile application for social networking with features like real-time messaging, media sharing, and user profiles.",
    image: "photo-1432821596592-e2c18b78144f",
    tags: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Portfolio Website Builder",
    description: "A drag-and-drop website builder specifically designed for creating beautiful portfolio websites with customizable templates.",
    image: "photo-1467232004584-a241de8bcf5d",
    tags: ["React", "Django", "AWS S3", "Stripe", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Learning Management System",
    description: "An educational platform with course management, progress tracking, video streaming, and interactive quizzes for online learning.",
    image: "photo-1501504905252-473c47e087f8",
    tags: ["Angular", "NestJS", "PostgreSQL", "Redis", "WebRTC"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent work that showcase my skills and experience
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="project-card hover-lift overflow-hidden"
                  style={{animationDelay: `${index * 0.2}s`}}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge className="ml-2">Featured</Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="hover-lift">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="hover-lift hover-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="project-card hover-lift"
                    style={{animationDelay: `${(index + 2) * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover-lift">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 hover-lift">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
