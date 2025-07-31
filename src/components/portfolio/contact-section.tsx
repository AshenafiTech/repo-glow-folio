import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can replace this with your own logic (API call, etc.)
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  // You can add a handleSubmit here if you want to process the form
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project idea, want to discuss potential work, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover-lift">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">ashenafigodanaj@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-lift">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+251 939278100</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-lift">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/AshenafiTech" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors hover-lift">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/ashenafig/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-muted hover:bg-primary/10 rounded-full transition-colors hover-lift">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Remote Work</Badge>
                <Badge variant="secondary">Full-time</Badge>
                <Badge variant="secondary">Contract</Badge>
                <Badge variant="secondary">Consulting</Badge>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="project-card hover-lift">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      className="hover:border-primary/50 focus:border-primary"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      className="hover:border-primary/50 focus:border-primary"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="hover:border-primary/50 focus:border-primary"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Project Discussion"
                    className="hover:border-primary/50 focus:border-primary"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    className="min-h-[120px] hover:border-primary/50 focus:border-primary"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full hover-lift hover-glow">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  I'll get back to you within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}