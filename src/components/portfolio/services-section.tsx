import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Users, GraduationCap } from "lucide-react"
import cloudArchitecture from "@/assets/cloud-architecture.jpg"
import development from "@/assets/development.jpg"
import leadership from "@/assets/leadership.jpg"

export function ServicesSection() {
  const services = [
    {
      title: "Cloud Architecture",
      subtitle: "AWS Solutions Expert",
      description: "Designing scalable cloud-native solutions with AWS, implementing microservices architecture, and optimizing infrastructure for performance and cost-efficiency.",
      icon: Cloud,
      image: cloudArchitecture,
    },
    {
      title: "Full-Stack Development", 
      subtitle: "Modern Web Applications",
      description: "Building robust applications with React, TypeScript, Node.js, and Python. Creating scalable APIs and database solutions.",
      icon: Code,
      image: development,
    },
    {
      title: "Tech Leadership",
      subtitle: "AWS Cloud Captain",
      description: "Leading 300+ developers as AWS Cloud Captain, organizing tech events, and fostering innovation in the developer community.",
      icon: Users,
      image: leadership,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 hero-text-gradient">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in cloud solutions, modern development, and tech leadership 
            to drive innovation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:translate-y-[-8px] cursor-pointer h-96"
            >
              <CardContent className="p-0 h-full">
                <div className="relative h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${service.image})`,
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                    <div className="mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-lg w-fit">
                      <service.icon className="h-8 w-8 text-primary-glow" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-glow transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary-glow font-medium mb-4 uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}