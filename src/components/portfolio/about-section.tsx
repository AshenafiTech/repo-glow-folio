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
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
               <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a freelance software engineer helping businesses transform their ideas into 
                powerful digital solutions. With expertise in cloud computing and full-stack development, 
                I deliver scalable, secure applications tailored to your specific needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups to enterprise clients, I provide end-to-end development services including 
                web applications, mobile apps, cloud infrastructure, and technical consulting. My approach 
                combines cutting-edge technology with practical business solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Cloud Architecture", "System Design", "DevOps", 
                "Microservices", "Infrastructure as Code", "CI/CD", "Agile Development"
              ].map((skill, index) => (
                <Badge key={index} variant="secondary" className="hover-lift">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}