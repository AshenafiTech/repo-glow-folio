import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import yenebrandImage from "@/assets/yenebrand.png"
import smartpathImage from "@/assets/smartpath.png"

const fullstackProjects = [
  {
    title: "YeneBrand",
    description: "A startup platform that connects creators with brands for authentic collaborations, featuring matchmaking algorithms, campaign management, and performance analytics.",
    image: yenebrandImage,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/AshenafiTech/yenebrand",
    demo: "https://yenebrand.vercel.app",
    category: "Fullstack"
  },
  {
    title: "SmartPath",
    description: "An intelligent platform that helps university and college students make informed decisions about their academic departments through data-driven insights and peer reviews.",
    image: smartpathImage,
    tags: ["Next.js", "Python", "MongoDB", "Machine Learning", "Chart.js"],
    github: "https://github.com/AshenafiTech/smartpath",
    demo: "https://smartpath.vercel.app",
    category: "Fullstack"
  }
]

const backendProjects = [
  {
    title: "ALX System Engineering DevOps",
    description: "A comprehensive collection of system engineering and DevOps projects covering shell scripting, networking, web infrastructure, and automation.",
    image: "photo-1518432031352-d6fc5c10da5a",
    tags: ["Bash", "Python", "Nginx", "HAProxy", "MySQL", "Docker"],
    github: "https://github.com/AshenafiTech/alx-system_engineering-devops",
    category: "Backend & Cloud"
  },
  {
    title: "Online Poll System",
    description: "A comprehensive online polling platform that allows users to create, manage, and participate in polls with real-time results and analytics.",
    image: "photo-1551288049-bebda4e38f71",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    github: "https://github.com/AshenafiTech/Online-Poll-System",
    category: "Backend & Cloud"
  },
  {
    title: "Journal API",
    description: "A RESTful API for journal management built as part of the Learn to Cloud platform, featuring authentication, CRUD operations, and cloud deployment.",
    image: "photo-1481627834876-b7833e8f5570",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "AWS", "Docker"],
    github: "https://github.com/AshenafiTech/journal-api",
    category: "Backend & Cloud"
  }
]

const dataProjects = [
  {
    title: "Intelligent Compliant Analysis",
    description: "Advanced compliance analysis system for financial services using machine learning to detect regulatory violations and ensure adherence to financial standards.",
    image: "photo-1560472354-b33ff0c44a43",
    tags: ["Python", "Machine Learning", "NLP", "Pandas", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/AshenafiTech/Intelligent-Compliant-analysis-for-financial-services",
    category: "Data Science"
  },
  {
    title: "Credit Risk Model",
    description: "A sophisticated credit risk assessment model using machine learning algorithms to predict loan default probability and assess creditworthiness.",
    image: "photo-1579621970795-87facc2f976d",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "XGBoost", "Feature Engineering"],
    github: "https://github.com/AshenafiTech/credit-risk-model",
    category: "Data Science"
  },
  {
    title: "End-to-End Insurance Analytics",
    description: "Comprehensive insurance analytics platform providing insights into claims processing, risk assessment, and customer behavior analysis.",
    image: "photo-1450101499163-c8848c66ca85",
    tags: ["Python", "Data Analytics", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis"],
    github: "https://github.com/AshenafiTech/end-to-end-insurance-analytics",
    category: "Data Science"
  }
]

export function ProjectsSection() {

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 hero-text-gradient">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across fullstack development, backend & cloud systems, and data science
          </p>
        </div>
        
        {/* Fullstack Projects - Hidden for now */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Fullstack Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {fullstackProjects.map((project, index) => (
              <Card key={project.title} className="project-card hover-lift"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                  <img 
                    src={typeof project.image === 'string' && project.image.startsWith('photo-') 
                      ? `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                      : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    {project.title}
                    <Badge variant="outline">{project.category}</Badge>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 relative z-50">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 hover-lift pointer-events-auto relative z-50"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 hover-lift pointer-events-auto"
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
        </div> */}

        {/* Backend & Cloud Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Backend & Cloud Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {backendProjects.map((project, index) => (
              <Card key={project.title} className="project-card hover-lift"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    {project.title}
                    <Badge variant="outline">{project.category}</Badge>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 relative z-50">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 hover-lift pointer-events-auto relative z-50"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Science Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Data Science Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dataProjects.map((project, index) => (
              <Card key={project.title} className="project-card hover-lift"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    {project.title}
                    <Badge variant="outline">{project.category}</Badge>
                  </CardTitle>
                  <CardDescription className="text-sm">
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
                  <div className="flex gap-2 relative z-50">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 hover-lift pointer-events-auto relative z-50"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AshenafiTech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 hover-lift pointer-events-auto"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}