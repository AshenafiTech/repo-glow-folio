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
                I'm a passionate software engineer with extensive experience in cloud computing 
                and full-stack development. I specialize in designing and implementing scalable 
                cloud-native solutions across AWS, GCP, and Azure platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from containerized microservices to machine learning pipelines, 
                with a strong focus on DevOps practices and infrastructure automation. I'm passionate 
                about building robust, secure, and highly available systems.
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