import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Database, Cloud, Users } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript. From simple landing pages to complex web platforms.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern UI/UX"],
    price: "Starting at $2,500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native and Flutter. Native iOS and Android development also available.",
    features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"],
    price: "Starting at $5,000"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable backend solutions with Node.js, Python, and cloud services. API development, database design, and server management.",
    features: ["RESTful APIs", "Database Design", "Authentication", "Real-time Features"],
    price: "Starting at $3,000"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup and migration services. AWS, Google Cloud, and Azure deployment and optimization.",
    features: ["Infrastructure Setup", "DevOps Pipeline", "Monitoring", "Cost Optimization"],
    price: "Starting at $2,000"
  },
  {
    icon: Code,
    title: "Technical Consulting",
    description: "Technical architecture consulting, code reviews, and technology stack recommendations for your projects.",
    features: ["Architecture Review", "Technology Stack", "Performance Audit", "Best Practices"],
    price: "Starting at $150/hour"
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Join your existing team as a senior developer or technical lead. Remote collaboration and project delivery.",
    features: ["Remote Work", "Agile Development", "Code Quality", "Mentorship"],
    price: "Starting at $80/hour"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional freelance development services to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={service.title} className="project-card hover-lift"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="ml-auto">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full hover-lift hover-glow">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <Button size="lg" className="hover-lift hover-glow">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}