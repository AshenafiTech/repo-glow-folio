import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden w-full">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a <span className="text-primary font-semibold">Software Engineer</span> specializing in cloud-native technologies and AI. As an <span className="text-accent font-semibold">AWS Cloud Club Captain</span>, I create educational content, provide cloud consulting, and mentor students and companies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion is helping others grow and building solutions that make a real impact. I craft scalable applications using <span className="text-secondary font-semibold">JavaScript, TypeScript, Python</span>, and cloud platforms like <span className="text-primary font-semibold">AWS, GCP, and Azure</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I enjoy collaborating with diverse teams, sharing knowledge, and supporting the next generation of tech talent. My approach combines technical expertise with a strong sense of community and continuous learning.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">Quickly adapting to new technologies and frameworks</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:shadow-vibrant transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-glow rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Goal-Oriented</h4>
                <p className="text-sm text-muted-foreground">Focused on delivering impactful solutions</p>
              </div>
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Do Best</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Cloud Architecture", "System Design", "DevOps",
                  "Microservices", "Infrastructure as Code", "CI/CD", 
                  "Agile Development", "Team Leadership", "Mentoring"
                ].map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="hover-lift text-center py-2 px-3 justify-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-4">Current Focus</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Building AI-powered cloud applications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Leading AWS Cloud Club community initiatives
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Mentoring next-gen developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}