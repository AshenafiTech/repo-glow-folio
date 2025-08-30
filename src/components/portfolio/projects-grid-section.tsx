import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import yenebrandImage from "@/assets/yenebrand.png"
import smartpathImage from "@/assets/smartpath.png"

const projects = [
  {
    title: "CS Portfolio Hosting Application",
    description: "Portfolio Hosting application for Computer Science and Software Engineering students at MNSU.",
    image: "https://mankato.mnsu.edu/globalassets/brand-hub/flame_m-state_maverick/mav-words.jpg",
    tags: ["React", "Node.js", "Portfolio", "Education"],
    github: "https://github.com/AshenafiTech/portfolio-hosting",
    demo: "https://portfolio-hosting.vercel.app",
    logo: "/logos/react.svg"
  },
  {
    title: "YeneBrand",
    description: "A startup platform that connects creators with brands for authentic collaborations, featuring matchmaking algorithms.",
    image: yenebrandImage,
    tags: ["React", "TypeScript", "PostgreSQL", "AI"],
    github: "https://github.com/AshenafiTech/yenebrand",
    demo: "https://yenebrand.vercel.app",
    logo: "/logos/react.svg"
  },
  {
    title: "SmartPath: Academic Decision Platform",
    description: "An intelligent platform that helps university students make informed decisions about their academic departments.",
    image: smartpathImage,
    tags: ["Next.js", "Python", "Machine Learning", "Analytics"],
    github: "https://github.com/AshenafiTech/smartpath",
    demo: "https://smartpath.vercel.app",
    logo: "/logos/python.svg"
  },
  {
    title: "NVDA Accessibility Extension",
    description: "Open Source Screen reader extension to improve web accessibility for visually impaired users.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/NVDA_Logo.png",
    tags: ["Python", "Accessibility", "Open Source", "NVDA"],
    github: "https://github.com/AshenafiTech/nvda-extension",
    logo: "/logos/python.svg"
  },
  {
    title: "ALX System Engineering DevOps",
    description: "A comprehensive collection of system engineering and DevOps projects covering shell scripting and automation.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=400&h=250",
    tags: ["Bash", "DevOps", "Nginx", "Docker"],
    github: "https://github.com/AshenafiTech/alx-system_engineering-devops",
    logo: "/logos/docker.svg"
  },
  {
    title: "Intelligent Compliance Analysis",
    description: "Advanced compliance analysis system for financial services using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=400&h=250",
    tags: ["Python", "Machine Learning", "Finance", "NLP"],
    github: "https://github.com/AshenafiTech/Intelligent-Compliant-analysis-for-financial-services",
    logo: "/logos/python.svg"
  }
]

export function ProjectsGridSection() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, cloud engineering, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt=""
                      className="w-8 h-8 object-contain ml-2 flex-shrink-0"
                    />
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 transition-colors"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 transition-colors"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AshenafiTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}