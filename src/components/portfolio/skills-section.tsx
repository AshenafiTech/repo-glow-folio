import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 75 }
    ]
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Code,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 }
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "PWA", level: 88 },
      { name: "Responsive Design", level: 95 }
    ]
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="project-card hover-lift" 
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
              "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis",
              "Docker", "AWS", "Vercel", "Netlify", "Git", "Linux", "Figma", "Tailwind CSS"
            ].map((tech, index) => (
              <Badge key={tech} variant="outline" className="hover-lift text-sm py-2 px-4"
                     style={{animationDelay: `${index * 0.05}s`}}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}