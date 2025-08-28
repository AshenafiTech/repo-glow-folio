
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "iCog Labs",
    location: "Addis Ababa, Ethiopia",
    period: "July 2024 - Oct 2024",
    description: "As a Machine Learning Intern at iCog Labs, I focused on testing and containerizing web applications and machine learning models, implementing Retrieval-Augmented Generation (RAG) systems, and contributing to research and development in emerging AI technologies.",
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
    type: "degree",
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
    degree: "ALX Software Engineering Program",
    institution: "ALX Africa",
    period: "April 2025 - August 2025",
    description: "Intensive software engineering program focusing on backend development, DevOps practices, and system architecture. Building scalable, secure, and maintainable systems through hands-on projects and real-world applications.",
    logo: "/alx.png",
    type: "bootcamp",
    keySkills: [
      "Backend development with Django",
      "DevOps & CI/CD using Docker, Kubernetes",
      "API design with REST and GraphQL",
      "Testing & automation for reliability"
    ],
    note: "Learning not just how to build systems that work, but systems that are scalable, secure, and maintainable.",
    technologies: ["Django", "Docker", "Kubernetes", "Redis", "GraphQL", "Nginx", "GitHub Actions", "Bash"]
  },
  {
    degree: "AWS Cloud Academy - Cloud Computing AWS Solutions Architect",
    institution: "AWS Cloud Academy through ALX Africa",
    period: "May 2023 - Feb 2024",
    description: "Intensive cloud computing program focusing on AWS solutions architecture, cloud infrastructure, and DevOps practices.",
    logo: "/alx.png",
    type: "certification",
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    
                    <div className="ml-14">
                      <Card className="project-card hover-lift">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col gap-3">
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">{exp.company}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{exp.location}</span>
                                </div>
                                <div className="flex items-center gap-1 text-primary">
                                  <CalendarDays className="h-4 w-4" />
                                  <span className="font-medium">{exp.period}</span>
                                </div>
                              </div>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-background shadow-lg ${
                      edu.type === 'degree' ? 'bg-blue-500' : 
                      edu.type === 'bootcamp' ? 'bg-green-500' : 'bg-orange-500'
                    }`}></div>
                    
                    <div className="ml-14">
                      <Card className="project-card hover-lift">
                        <CardHeader className="pb-4">
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
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{edu.institution}</span>
                                {edu.location && (
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{edu.location}</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-1 text-primary">
                                  <CalendarDays className="h-4 w-4" />
                                  <span className="font-medium">{edu.period}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {edu.description}
                          </p>
                          
                          {edu.keySkills && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-3 text-primary">Key Skills & Learning:</h4>
                              <ul className="space-y-2">
                                {edu.keySkills.map((skill, skillIndex) => (
                                  <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
                              {edu.note && (
                                <p className="mt-3 text-sm italic text-primary/80 border-l-2 border-primary/20 pl-3">
                                  {edu.note}
                                </p>
                              )}
                            </div>
                          )}
                          
                          {edu.courses && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-3 text-primary">Core Courses:</h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.courses.map((course: string) => (
                                  <span key={course} className="inline-block rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {edu.technologies && (
                            <div>
                              <h4 className="font-semibold text-sm mb-3 text-primary">Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.technologies.map((tech: string) => (
                                  <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
