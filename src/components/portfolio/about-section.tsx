import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
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
                I am a Software Engineer specializing in cloud-native technologies and AI. As an AWS Cloud Club Captain, I create educational content, provide cloud consults and mentorship for students and companies, and actively participate in tech communities. My passion is helping others grow and building solutions that make a real impact. I build scalable solutions to help businesses and startups succeed. I create applications using JavaScript, TypeScript, Python, and cloud platforms like AWS, GCP, and Azure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy collaborating with diverse teams, sharing knowledge, and supporting the next generation of tech talent. My approach combines technical expertise with a strong sense of community and continuous learning.
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