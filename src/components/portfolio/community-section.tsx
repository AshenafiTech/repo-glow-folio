import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe } from "lucide-react"

const communityRoles = [
  {
    title: "AWS Cloud Captain",
    organization: "Amazon Web Services",
    period: "2024 - Present",
    description: "Leading cloud adoption initiatives and mentoring developers in AWS best practices. Organizing workshops and speaking at tech events.",
    icon: Globe,
    tags: ["Cloud Architecture", "Community Building", "Technical Leadership"],
    achievements: [
      "Mentored 50+ developers in cloud technologies",
      "Organized 10+ AWS workshops",
      "Spoke at 5 major tech conferences"
    ]
  }
]

export const CommunitySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Community Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the tech community through leadership roles, mentorship, and knowledge sharing
          </p>
        </div>

        <div className="grid gap-6">
          {communityRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <Card key={index} className="card-glass hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{role.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {role.organization}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="self-start sm:self-center">
                          {role.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{role.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {role.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}