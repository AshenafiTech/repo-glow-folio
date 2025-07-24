import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink } from "lucide-react"

const blogs = [
  {
    title: "Building Scalable Cloud Infrastructure with AWS",
    description: "A comprehensive guide to designing and implementing scalable cloud infrastructure using AWS services, including best practices for security and cost optimization.",
    image: "photo-1518770660439-4636190af475",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AWS", "Cloud Architecture", "DevOps"],
    link: "https://medium.com/@ashenafi/building-scalable-cloud-infrastructure"
  },
  {
    title: "Microservices with Docker and Kubernetes",
    description: "Learn how to containerize applications and orchestrate them using Kubernetes for production-ready microservices architecture.",
    image: "photo-1487058792275-0ad4aaf24ca7",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["Docker", "Kubernetes", "Microservices"],
    link: "https://medium.com/@ashenafi/microservices-docker-kubernetes"
  },
  {
    title: "Machine Learning in Production with MLOps",
    description: "Best practices for deploying and managing machine learning models in production environments using modern MLOps tools and techniques.",
    image: "photo-1531297484001-80022131f5a1",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["MLOps", "Machine Learning", "Python"],
    link: "https://medium.com/@ashenafi/mlops-production-deployment"
  },
  {
    title: "GraphQL vs REST: When to Use Each",
    description: "A detailed comparison of GraphQL and REST APIs, exploring their strengths, weaknesses, and ideal use cases for modern web development.",
    image: "photo-1460925895917-afdab827c52f",
    date: "2023-12-10",
    readTime: "6 min read",
    tags: ["GraphQL", "REST", "API Design"],
    link: "https://medium.com/@ashenafi/graphql-vs-rest-comparison"
  }
]

export function BlogsSection() {
  return (
    <section id="blogs" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and knowledge from my journey in software development and cloud computing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Card key={blog.title} className="project-card hover-lift overflow-hidden group"
                  style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${blog.image}?w=600&h=400&fit=crop`}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-base line-clamp-3">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs hover-lift">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover-lift group"
                  onClick={() => window.open(blog.link, '_blank')}
                >
                  <span>Read Article</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}