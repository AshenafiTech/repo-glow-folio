import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "AI Intern",
    company: "iCog Labs",
    location: "Addis Ababa, Ethiopia",
    period: "July 2024 - Oct 2024", // Update period as needed
    description: "As an AI Intern at iCog Labs, I focused on testing and containerizing web applications and machine learning models, implementing Retrieval-Augmented Generation (RAG) systems, and contributing to research and development in emerging AI technologies.",
    technologies: ["Python", "Docker", "Machine Learning", "RAG", "AI Research"]
  }
]

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2022 - 2027",
    description: "Currently pursuing a comprehensive software engineering degree with focus on modern development practices, algorithms, and system design.",
    logo: "/aau.png",
    courses: [
      "Web Development",
      "Mobile Development",
      "Operating Systems",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Databases",
      "Artificial Intelligence",
      "Cybersecurity"
    ]
  },
  {
    degree: "AWS Cloud Academy - Cloud Computing AWS Solutions Architect",
    institution: "ALX Africa",
    period: "May 2023 - Feb 2024",
    description: "Intensive cloud computing program focusing on AWS solutions architecture, cloud infrastructure, and DevOps practices.",
    logo: "/alx.png",
    technologies: ["AWS", "CloudFormation", "EC2", "S3", "IAM", "VPC", "Lambda", "DevOps", "RDS", "CloudWatch", "ECS", "ECR", "Route 53", "CI/CD", "Linux"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
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
            {[experiences[0]].map((exp, index) => (
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
                    <div className="flex items-start gap-4">
                      {edu.logo && (
                        <div className="flex-shrink-0">
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                          />
                        </div>
                      )}
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
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {edu.description}
                  </p>
                  {edu.courses && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.courses.map((course: string) => (
                        <span key={course} className="inline-block rounded bg-primary/10 text-primary px-3 py-1 text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                  {edu.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.technologies.map((tech: string) => (
                        <span key={tech} className="inline-block rounded bg-primary/10 text-primary px-3 py-1 text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}