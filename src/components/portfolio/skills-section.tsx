import { useState } from "react"
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
  const [openCert, setOpenCert] = useState<null | {
    name: string;
    issuer: string;
    link: string;
    image: string;
    embed?: boolean;
  }>(null);
  return (
    <section id="skills" className="py-12">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 hero-text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="project-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                name: "AWS Certified Cloud Practitioner",
                issuer: "Amazon Web Services",
                link: "https://drive.google.com/file/d/1B51xCt8HlIqznPXK7KPW_adekKvs9OoG/view?usp=sharing",
                image: "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                embed: true
              },
              {
                name: "AWS Certified Solutions Architect - Associate",
                issuer: "Amazon Web Services",
                link: "https://drive.google.com/file/d/1Z9GprIN0-yVppjCJCfHYjoKDlD5pjHEC/view?usp=sharing",
                image: "https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
              },
              {
                name: "Google Cloud Professional Machine Learning Engineer",
                issuer: "Google Cloud",
                link: "https://drive.google.com/file/d/1MShc1Ymi3B5BLJgYTAdfmdr7nkNL3GU2/view?usp=sharing",
                image: "/gcp.webp"
              },
              {
                name: "Kubernetes and Cloud Native Associate",
                issuer: "CNCF",
                link: "https://drive.google.com/file/d/1yh9_fkUCudY7VDl0eI-RIiHGS90_J5Ab/view?usp=sharing",
                image: "/kcna.png"
              },
              {
                name: "AWS Cloud Clubs Captain",
                issuer: "Amazon Web Services",
                link: "https://www.credly.com/badges/0d2117ef-f462-463a-bdbf-2b8b900387c3",
                image: "/captain.jpg"
              }
            ].map((cert, index) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card hover-lift cursor-pointer block p-4 text-center rounded-lg shadow-md transition-transform"
                style={{ textDecoration: 'none' }}
              >
                <div className="mb-3">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-24 h-24 mx-auto mb-3"
                  />
                </div>
                <h4 className="font-medium text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                <span className="text-primary hover:underline text-xs">View Certificate →</span>
              </a>
            ))}
          </div>
        </div>
        {/* Modal removed; certs now open in new tab */}
      </div>
    </section>
  )
}