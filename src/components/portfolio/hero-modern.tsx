import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Twitter, Mail, Download, Award, Code, Cloud, Users, ExternalLink, MapPin, CalendarDays } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function HeroModern() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "/logos/aws.svg",
      link: "https://drive.google.com/file/d/1B51xCt8HlIqznPXK7KPW_adekKvs9OoG/view?usp=sharing"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services", 
      image: "/logos/aws.svg",
      link: "https://drive.google.com/file/d/1Z9GprIN0-yVppjCJCfHYjoKDlD5pjHEC/view?usp=sharing"
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      image: "/logos/googlecloud.svg",
      link: "https://drive.google.com/file/d/1MShc1Ymi3B5BLJgYTAdfmdr7nkNL3GU2/view?usp=sharing"
    },
    {
      name: "Kubernetes and Cloud Native Associate",
      issuer: "CNCF",
      image: "/kcna.png",
      link: "https://drive.google.com/file/d/1yh9_fkUCudY7VDl0eI-RIiHGS90_J5Ab/view?usp=sharing"
    }
  ]

  const skills = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "FastAPI", logo: "/logos/fastapi.svg" },
    { name: "Django", logo: "/logos/django.svg" },
    { name: "GraphQL", logo: "/logos/graphql.svg" },
    { name: "Redis", logo: "/logos/redis.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Jenkins", logo: "/logos/jenkins.svg" },
    { name: "Azure", logo: "/logos/azure.svg" },
    { name: "Google Cloud", logo: "/logos/googlecloud.svg" },
    { name: "Microservices", logo: "/logos/microservices.svg" }
  ]

  const stats = [
    { value: "5+", label: "Years of experience" },
    { value: "50+", label: "Completed projects" },
    { value: "300+", label: "Community members led" },
  ]

  const experience = [
    {
      title: "Machine Learning Intern",
      company: "iCog Labs",
      location: "Addis Ababa, Ethiopia",
      period: "July 2024 - Oct 2024",
      description: "Testing and containerizing ML models, implementing RAG systems"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Addis Ababa University",
      period: "2022 - 2027",
      logo: "/aau.png"
    },
    {
      degree: "ALX Software Engineering Program", 
      institution: "ALX Africa",
      period: "April 2025 - August 2025",
      logo: "/alx.png"
    }
  ]

  const featuredProjects = [
    {
      title: "YeneBrand",
      description: "Startup platform connecting creators with brands for authentic collaborations, featuring matchmaking algorithms and campaign management",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/ashenafig/yenebrand",
      demo: "https://yenebrand.vercel.app"
    },
    {
      title: "SmartPath",
      description: "Intelligent platform helping students make informed academic decisions through data-driven insights and peer reviews",
      tech: ["Next.js", "Python", "MongoDB", "Machine Learning"],
      github: "https://github.com/ashenafig/smartpath",
      demo: "https://smartpath.vercel.app"
    },
    {
      title: "Intelligent Compliance Analysis",
      description: "Advanced compliance analysis system for financial services using ML to detect regulatory violations",
      tech: ["Python", "Machine Learning", "NLP", "TensorFlow"],
      github: "https://github.com/ashenafig/Intelligent-Compliant-analysis-for-financial-services"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <Avatar className="w-32 h-32 border-4 border-primary/20">
            <AvatarImage src={profilePhoto} alt="Ashenafi Godana" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">AG</AvatarFallback>
          </Avatar>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl font-bold text-primary mb-4 tracking-tight">
          Ashenafi Godana
        </h1>
        <h2 className="text-2xl text-foreground mb-6 font-medium">
          Software Engineer & Cloud Architect
        </h2>

        {/* Bio */}
        <p className="text-xl text-muted-foreground max-w-4xl mb-8 leading-relaxed">
          Software Engineering student at Addis Ababa University and AWS Cloud Club Captain leading 300+ developers. 
          Specializing in backend development with Django, DevOps automation, cloud infrastructure, and machine learning. 
          Currently completing the ALX Software Engineering Program with expertise in scalable systems and containerization.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-2xl">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
          <Input 
            type="email" 
            placeholder="Your email here..." 
            className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Subscribe
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Follow me on my socials</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-card border border-border text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{exp.title}</h4>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
            {education.map((edu, index) => (
              <Card key={`edu-${index}`} className="bg-card border border-border text-left">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    {edu.logo && (
                      <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="w-3 h-3" />
                    {edu.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 w-full max-w-6xl">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex items-center gap-2 py-2 px-3">
                <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12 w-full max-w-6xl">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            <Award className="w-6 h-6 inline mr-2" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-card border border-border hover:border-primary/30 transition-all duration-200 h-full">
                  <CardContent className="p-4 text-center">
                    <img src={cert.image} alt={cert.name} className="w-16 h-16 mx-auto mb-3 object-contain" />
                    <h4 className="font-medium text-sm mb-2 text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                    <span className="text-primary hover:underline text-xs">View Certificate</span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-card border border-border hover:border-primary/30 transition-all duration-200 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </Button>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}