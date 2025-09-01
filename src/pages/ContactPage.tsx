import { Navigation } from "@/components/portfolio/navigation"
import { ContactSection } from "@/components/portfolio/contact-section"
import { BlogsSection } from "@/components/portfolio/blogs-section"
import { Footer } from "@/components/portfolio/footer"
import heroMountain from "@/assets/hero-mountain.jpg"

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section for Contact Page */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroMountain})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Let's collaborate and build something amazing together
          </p>
        </div>
      </section>

      <main>
        <ContactSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;