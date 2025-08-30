import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* About Me Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
        </div>

      {/* About Content */}
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          A passionate and skilled Software Engineer with a strong background in cloud architecture, 
          backend development, and AI-powered applications. I am currently a Software Engineering 
          student at Addis Ababa University and an AWS Cloud Club Captain, leading a community of 300+ developers.
        </p>
        
        <p>
          I have experience working with modern technologies such as Django, FastAPI, Docker, and 
          Kubernetes to build scalable applications and streamline development processes. Proficient 
          in managing and monitoring cloud infrastructure services on AWS, as well as implementing 
          DevOps practices and CI/CD pipelines.
        </p>
        
        <p>
          Currently completing the ALX Software Engineering Program, where I'm mastering backend 
          systems, containerization, and API design. As a Machine Learning Intern at iCog Labs, 
          I've contributed to cutting-edge AI research and development.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* DevOps Card */}
          <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">DevOps</h4>
                <p className="text-muted-foreground">
                  I enjoy to improve the speed and quality of delivery, automate and achieve CI/CD
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Engineer Card */}
          <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">☁️</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Cloud Engineer</h4>
                <p className="text-muted-foreground">
                  I enjoy design, secure and maintenance of an organization's cloud-based infrastructure and application
                </p>
              </div>
            </div>
          </div>

          {/* Software Engineer Card */}
          <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Software Engineer</h4>
                <p className="text-muted-foreground">
                  Building scalable applications with modern tech stacks and best practices
                </p>
              </div>
            </div>
          </div>

          {/* Community Leader Card */}
          <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Community Leader</h4>
                <p className="text-muted-foreground">
                  Leading 300+ developers as AWS Cloud Captain and organizing tech events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}