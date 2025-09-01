import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Code, Users, GraduationCap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Architecture",
      subtitle: "Cloud Solutions",
      description: "Designing scalable cloud-native solutions with AWS, implementing microservices architecture, and optimizing infrastructure for performance and cost-efficiency.",
      icon: Cloud,
      image: "/logos/aws.svg",
    },
    {
      title: "Development", 
      subtitle: "Full-Stack Applications",
      description: "Building modern web applications with React, TypeScript, Node.js, and Python. Creating robust APIs and database solutions.",
      icon: Code,
      image: "/logos/react.svg",
    },
    {
      title: "Community Leadership",
      subtitle: "AWS Cloud Captain",
      description: "Leading 300+ developers as AWS Cloud Captain, organizing tech events, and fostering innovation in the developer community.",
      icon: Users,
      image: "/aws-cloud-clubs.png",
    },
    {
      title: "Education",
      subtitle: "Knowledge Sharing",
      description: "Mentoring developers, creating educational content, and sharing expertise in cloud technologies and software engineering best practices.",
      icon: GraduationCap,
      image: "/logos/kubernetes.svg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${service.image})`,
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <div className="mb-4">
                      <service.icon className="h-8 w-8 text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{service.subtitle}</p>
                    <p className="text-sm text-white/70 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}