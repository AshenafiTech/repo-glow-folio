import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden w-full bg-muted/20">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional software engineer specializing in cloud architecture and scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Software Engineering student</span> at Addis Ababa University and an <span className="text-accent font-semibold">AWS Cloud Club Captain</span>, leading a community of 300+ developers. My expertise spans backend development with Django, DevOps automation, and cloud infrastructure design.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently completing the <span className="text-foreground font-semibold">ALX Software Engineering Program</span>, where I'm mastering scalable backend systems, containerization with Docker & Kubernetes, and API design with REST and GraphQL. I hold multiple <span className="text-foreground font-semibold">AWS certifications</span> including Cloud Practitioner and Solutions Architect Associate.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a <span className="text-primary font-semibold">Machine Learning Intern at iCog Labs</span>, I've worked on AI-powered systems and contributed to cutting-edge research. My passion lies in building systems that are not just functional, but scalable, secure, and maintainable.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary font-semibold text-sm">⚡</span>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">Quickly adapting to new technologies</p>
              </div>
              
              <div className="group p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-elegant transition-all duration-200 hover:translate-y-[-2px]">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-accent font-semibold text-sm">🎯</span>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">Goal-Oriented</h4>
                <p className="text-sm text-muted-foreground">Focused on delivering results</p>
              </div>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Do Best</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Backend Development", "Cloud Architecture", "DevOps & CI/CD",
                  "Microservices", "Docker & Kubernetes", "AWS Solutions", 
                  "Machine Learning", "API Design", "System Design"
                ].map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-center py-2 px-3 justify-center bg-primary/5 border border-primary/10 hover:border-primary/20 hover:bg-primary/10 transition-all duration-200 hover:translate-y-[-1px] text-primary font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Current Focus</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Completing ALX Software Engineering Program</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Leading AWS Cloud Club with 300+ developers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Building AI-powered systems at iCog Labs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}