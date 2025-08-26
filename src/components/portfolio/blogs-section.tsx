import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Building Scalable Microservices with Docker and Kubernetes",
    description: "A comprehensive guide to containerizing applications and orchestrating them with Kubernetes for production-ready scalability.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Docker", "Kubernetes", "DevOps", "Microservices"],
    link: "https://medium.com/@ashenafi/building-scalable-microservices",
    featured: true
  },
  {
    title: "AWS Lambda Best Practices for Production",
    description: "Learn how to optimize AWS Lambda functions for performance, cost-efficiency, and reliability in production environments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["AWS", "Lambda", "Serverless", "Cloud"],
    link: "https://dev.to/ashenafi/aws-lambda-best-practices"
  },
  {
    title: "Introduction to Machine Learning with Python",
    description: "Get started with machine learning using Python, covering essential libraries and practical examples for beginners.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["Python", "Machine Learning", "AI", "Data Science"],
    link: "https://hashnode.com/@ashenafi/ml-python-intro"
  },
  {
    title: "Cloud Security Best Practices: A Developer's Guide",
    description: "Essential security practices every developer should know when building cloud-native applications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=400",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["Security", "Cloud", "DevSecOps", "Best Practices"],
    link: "https://medium.com/@ashenafi/cloud-security-guide"
  }
]

export function BlogsSection() {
  return (
    <section id="blogs" className="py-20 relative overflow-hidden w-full">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text-gradient">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing insights on cloud computing, software development, and emerging technologies
          </p>
        </div>

        {/* Featured Blog */}
        {blogs.filter(blog => blog.featured).map((blog, index) => (
          <div key={index} className="mb-16">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                    <span className="text-sm font-semibold text-primary">Featured Post</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold shadow-vibrant hover:shadow-glow transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(blog.link, '_blank')}
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.filter(blog => !blog.featured).map((blog, index) => (
            <Card key={index} className="group hover:shadow-vibrant transition-all duration-300 overflow-hidden hover:scale-105 bg-gradient-to-br from-card to-card/50 border border-border">
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-glow"
                  onClick={() => window.open(blog.link, '_blank')}
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-7 text-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
            onClick={() => window.open('https://medium.com/@ashenafi', '_blank')}
          >
            View All Articles
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}