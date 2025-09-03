import { Navigation } from "@/components/portfolio/navigation"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"
import contactHero from "@/assets/contact-hero.jpg"

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Contact Page */}
      <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${contactHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 leading-tight">
            Let's <span className="hero-text-gradient">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Ready to discuss your next project? I'm here to help bring your ideas to life 
            with cutting-edge technology and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open('mailto:ashenafimb.work@gmail.com', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Direct Email
            </Button>
          </div>
        </div>
      </section>

      <main>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;