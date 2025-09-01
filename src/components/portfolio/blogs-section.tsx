import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Microservices with Docker and Kubernetes",
    excerpt: "Learn how to design and deploy microservices architecture using containerization technologies for maximum scalability and reliability.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "DevOps",
    image: "/logos/kubernetes.svg"
  },
  {
    id: 2,
    title: "AWS Cloud Architecture Best Practices",
    excerpt: "Discover essential patterns and practices for building robust, cost-effective cloud solutions on Amazon Web Services.",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "Cloud",
    image: "/logos/aws.svg"
  },
  {
    id: 3,
    title: "Modern API Design with GraphQL and REST",
    excerpt: "Compare GraphQL and REST approaches, and learn when to use each for optimal API performance and developer experience.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Backend",
    image: "/logos/graphql.svg"
  },
  {
    id: 4,
    title: "CI/CD Pipeline Automation with GitHub Actions",
    excerpt: "Streamline your development workflow with automated testing, building, and deployment using GitHub Actions.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "DevOps",
    image: "/logos/github.svg"
  }
]

export function BlogsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on cloud architecture, software engineering, and modern development practices
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-80 bg-muted flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-24 h-24 object-contain opacity-60"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <button className="text-primary font-medium hover:underline self-start">
                      Read More →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}