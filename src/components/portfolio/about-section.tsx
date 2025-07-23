import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating modern web applications. I love turning complex problems into 
                simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solving", "Creative Thinking", "Team Leadership", 
                "Agile Development", "UI/UX Design", "Open Source"
              ].map((skill, index) => (
                <Badge key={index} variant="secondary" className="hover-lift">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <Card className="project-card hover-lift">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Dedication</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}