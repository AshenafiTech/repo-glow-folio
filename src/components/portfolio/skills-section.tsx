import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "SQL"]
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: ["Node.js", "Django", "FastAPI", "GraphQL"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RDS"]
  },
  {
    title: "Cloud Platforms",
    icon: Globe,
    skills: ["AWS", "Google Cloud", "Microsoft Azure"]
  },
  {
    title: "DevOps & Tools",
    icon: Code,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"]
  },
  {
    title: "Specializations",
    icon: Smartphone,
    skills: ["Cloud Architecture", "Microservices", "System Design", "MLOps"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="project-card hover-lift" 
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="hover-lift">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "AWS Certified Cloud Practitioner",
                issuer: "Amazon Web Services",
                link: "https://credly.com/badges/your-badge-id-1",
                image: "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
              },
              {
                name: "AWS Certified Solutions Architect - Associate",
                issuer: "Amazon Web Services", 
                link: "https://credly.com/badges/your-badge-id-2",
                image: "https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
              },
              {
                name: "Google Cloud Professional Machine Learning Engineer",
                issuer: "Google Cloud",
                link: "https://credly.com/badges/your-badge-id-3",
                image: "https://images.credly.com/size/220x220/images/61b30b43-c2c4-498c-b68d-4fa8e39b5e34/image.png"
              },
              {
                name: "Kubernetes and Cloud Native Associate",
                issuer: "CNCF",
                link: "https://credly.com/badges/your-badge-id-4",
                image: "https://images.credly.com/size/220x220/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png"
              }
            ].map((cert, index) => (
              <Card key={cert.name} className="project-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-20 h-20 mx-auto mb-4"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Certificate →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}