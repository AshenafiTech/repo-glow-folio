import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Building scalable solutions and helping businesses grow.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Ashenafi is a Software Engineer at Microsoft, where he focuses on cloud-native 
                  technologies and AI, helping companies modernize their infrastructure and adopt 
                  innovative solutions. He is also the founder of DevCommunity, a community initiative 
                  where he mentors individuals in tech. His educational content on YouTube has been 
                  watched by millions. A passionate advocate for open source, Ashenafi regularly speaks 
                  at industry conferences on cloud, AI, and developer growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8 py-6">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Know more
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  Get in touch
                </Button>
              </div>
            </div>
            
            {/* Right Content - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                    alt="Ashenafi - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Four Key Points Grid */}
          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Has built scalable applications for millions of users, sharing expertise in modern development practices.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Cloud consultant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provides insightful consultancy to companies embarking on their cloud transformation journeys.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Community leader & speaker</h3>
              <p className="text-muted-foreground leading-relaxed">
                Renowned for exceptional community leadership and engaging as a speaker at global tech conferences.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Empathy and professionalism</h3>
              <p className="text-muted-foreground leading-relaxed">
                Known for a unique blend of empathetic understanding and professional acumen in approach to work and life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}