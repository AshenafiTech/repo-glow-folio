import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layers, FileText } from "lucide-react"

export function HeroSection() {
  const stats = [
    { value: "5+", label: "Years of experience", suffix: "" },
    { value: "50+", label: "Completed projects", suffix: "" },
    { value: "99%", label: "Client satisfaction", suffix: "" },
  ]

  const services = [
    {
      icon: Code,
      title: "Full-stack development",
      description: "Building scalable web applications with modern technologies like React, Python, and cloud infrastructure."
    },
    {
      icon: Layers,
      title: "Cloud Architecture",
      description: "Designing and implementing robust cloud solutions using AWS services, containerization, and microservices."
    },
    {
      icon: FileText,
      title: "Technical Leadership",
      description: "Leading development teams and mentoring developers while driving technical excellence and best practices."
    }
  ]

  return (
    <div className="p-8 space-y-12">
      {/* About Me Section */}
      <section className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
            I'm Ashenafi Godana, a software engineer and cloud architect
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea do 
            eiusmod tempor incididunt commodo consequat.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-200">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                    <span className="text-primary ml-1">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-foreground">My Services</h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-200 group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Python", "AWS", "Docker", "Kubernetes", "Node.js", "PostgreSQL"].map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}