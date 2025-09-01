import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MapPin, ExternalLink } from "lucide-react"

interface Community {
  id: number
  name: string
  role: string
  description: string
  members: string
  location: string
  founded: string
  image: string
  website?: string
  achievements: string[]
}

const communities: Community[] = [
  {
    id: 1,
    name: "AWS Cloud Club AAU",
    role: "Captain & Founder",
    description: "Leading a vibrant community of 300+ developers, fostering cloud computing knowledge and AWS expertise among students and professionals.",
    members: "300+",
    location: "Addis Ababa University",
    founded: "2023",
    image: "/aws-cloud-clubs.png",
    website: "https://awscloudclub-aau.com",
    achievements: [
      "Organized 15+ technical workshops",
      "Hosted AWS certification bootcamps",
      "Built partnerships with tech companies",
      "Mentored 50+ students in cloud technologies"
    ]
  },
  {
    id: 2,
    name: "Google Developer Groups Addis",
    role: "Active Member",
    description: "Contributing to the local tech ecosystem through knowledge sharing, workshops, and collaborative projects in Google technologies.",
    members: "500+",
    location: "Addis Ababa",
    founded: "2019",
    image: "/gdg-logo.png",
    achievements: [
      "Speaker at GDG DevFest events",
      "Contributed to open source projects",
      "Mentored junior developers",
      "Organized Flutter study groups"
    ]
  },
  {
    id: 3,
    name: "ALX Software Engineering",
    role: "Student & Peer Mentor",
    description: "Part of Africa's leading software engineering program, collaborating with peers across the continent to build world-class technical skills.",
    members: "10,000+",
    location: "Pan-African",
    founded: "2022",
    image: "/alx.png",
    achievements: [
      "Completed advanced backend projects",
      "Peer mentor for junior cohorts",
      "Built collaborative projects",
      "Maintained 95%+ project completion rate"
    ]
  }
]

export function CommunitiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">


        <div className="space-y-8">
          {communities.map((community) => (
            <Card key={community.id} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {community.name}
                        </h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {community.role}
                        </Badge>
                      </div>
                      {community.website && (
                        <a 
                          href={community.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {community.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{community.members}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{community.founded}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{community.location}</span>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Key Achievements</h4>
                      <ul className="space-y-1">
                        {community.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Community Image */}
                  <div className="relative bg-muted flex items-center justify-center">
                    <img 
                      src={community.image} 
                      alt={community.name}
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg'
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}