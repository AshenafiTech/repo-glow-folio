import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroPhoto from "@/assets/hero.jpg"

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
                  Ashenafi is a Software Engineer specializing in cloud-native technologies and AI. He is an AWS Cloud Club Captain, creates educational content, and actively participates in tech communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8 py-6"
                  onClick={() => {
                    const aboutSection = document.querySelector('#about')
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Know more
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Right Content - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-muted">
                  <img
                    src={heroPhoto}
                    alt="Ashenafi - Software Engineer"
                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-500"
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
                Has built scalable applications for users, sharing expertise in modern development practices.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Cloud consultant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Provides cloud consults and mentorship for students and companies.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Community leader & speaker</h3>
              <p className="text-muted-foreground leading-relaxed">
                Renowned for exceptional community leadership and engaging as a speaker at tech events.
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