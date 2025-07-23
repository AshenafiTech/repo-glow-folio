import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead cloud architecture initiatives and full-stack development projects. Designed and implemented scalable microservices architecture on AWS, reducing system latency by 40%.",
    technologies: ["AWS", "Python", "Node.js", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    title: "Cloud Developer",
    company: "CloudTech Systems",
    location: "Seattle, WA", 
    period: "2020 - 2022",
    description: "Developed and maintained cloud-native applications using multi-cloud strategies. Implemented CI/CD pipelines and infrastructure automation, improving deployment efficiency by 60%.",
    technologies: ["GCP", "Azure", "FastAPI", "MongoDB", "Docker", "Terraform"]
  },
  {
    title: "Software Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2019 - 2020", 
    description: "Built full-stack web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions using agile methodologies.",
    technologies: ["JavaScript", "Django", "MySQL", "Redis", "Git"]
  }
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "California, USA",
    period: "2015 - 2019",
    description: "Graduated Magna Cum Laude. Focused on software engineering, algorithms, and distributed systems."
  },
  {
    degree: "AWS Solutions Architect Certification",
    institution: "Amazon Web Services",
    period: "2021",
    description: "Comprehensive training in cloud architecture, security, and best practices."
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card hover-lift">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover-lift">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="project-card hover-lift">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-medium">{edu.institution}</span>
                        {edu.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}