import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and explore how we can bring your vision to life 
          with cutting-edge technology and proven expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105 group"
            onClick={() => navigate('/contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-300 backdrop-blur-sm"
            onClick={() => navigate('/projects')}
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}