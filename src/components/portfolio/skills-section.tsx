import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const skillCategories = [
	{ title: "Languages", icon: Code, skills: ["JavaScript", "TypeScript", "Python", "SQL"] },
	{ title: "Backend & APIs", icon: Database, skills: ["Node.js", "Django", "FastAPI", "GraphQL"] },
	{ title: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RDS"] },
	{ title: "Cloud Platforms", icon: Globe, skills: ["AWS", "Google Cloud", "Microsoft Azure"] },
	{ title: "DevOps & Tools", icon: Code, skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"] },
	{ title: "Specializations", icon: Smartphone, skills: ["Cloud Architecture", "Microservices", "System Design", "MLOps"] }
];

export function SkillsSection() {

				// build a deduplicated list of skills from skillCategories (preserve first seen casing)
				const seen = new Map<string, string>()
				skillCategories.forEach((cat) => {
					cat.skills.forEach((s) => {
						const key = s.trim().toLowerCase()
						if (!seen.has(key)) seen.set(key, s.trim())
					})
				})

				const iconLookup: Record<string, string> = {
					javascript: '/logos/javascript.svg',
					typescript: '/logos/typescript.svg',
					python: '/logos/python.svg',
					sql: '/logos/postgresql.svg',
					react: '/logos/react.svg',
					'node.js': '/logos/nodejs.svg',
					nodejs: '/logos/nodejs.svg',
					django: '/logos/django.svg',
					fastapi: '/logos/fastapi.svg',
					graphql: '/logos/graphql.svg',
					postgresql: '/logos/postgresql.svg',
					mysql: '/logos/mysql.svg',
					mongodb: '/logos/mongodb.svg',
					redis: '/logos/redis.svg',
					rds: '/aws-cloud-clubs.png',
					aws: '/aws-cloud-clubs.png',
					'google cloud': '/logos/googlecloud.svg',
					googlecloud: '/logos/googlecloud.svg',
					'microsoft azure': '/logos/azure.svg',
					azure: '/logos/azure.svg',
					docker: '/logos/docker.svg',
					kubernetes: '/logos/kubernetes.svg',
					jenkins: '/logos/jenkins.svg',
					'github actions': '/logos/github.svg',
					githubactions: '/logos/github.svg',
					'ci/cd': '/logos/docker.svg',
					cicd: '/logos/docker.svg',
					'cloud architecture': '/aws-cloud-clubs.png',
					cloudarchitecture: '/aws-cloud-clubs.png',
					microservices: '/logos/docker.svg',
					'system design': '/logos/kubernetes.svg',
					systemdesign: '/logos/kubernetes.svg',
					mlops: '/logos/python.svg'
				}

				const marqueeItems = Array.from(seen.values()).map((label) => {
					const key = label.toLowerCase()
					const src = iconLookup[key] ?? iconLookup[key.replace(/\s|\.|-/g, '')] ?? '/placeholder.svg'
					return { label, src }
				})

	return (
		<section id="skills" className="py-20 relative overflow-hidden">
			<div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-3 hero-text-gradient">Skills & Technologies</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">A comprehensive toolkit for building modern digital solutions</p>
				</div>
				{/* Scrolling marquee of tech logos - duplicated list for smooth loop */}
						<div className="marquee-wrapper mb-8">
							<div className="marquee-track animate-slow flex flex-row items-center">
								{marqueeItems.concat(marqueeItems).map((it, i) => {
									return (
														<div key={i} className="inline-flex flex-row items-center flex-none gap-3 px-4 py-2 bg-card/40 rounded-md">
															<img
																src={it.src}
																alt={it.label}
																className="h-8 w-8 object-contain"
																loading="lazy"
																onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
																	e.currentTarget.onerror = null
																	e.currentTarget.src = '/placeholder.svg'
																}}
															/>
														</div>
									)
								})}
							</div>
						</div>
				<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
					{skillCategories.map((category, index) => (
						<Card key={category.title} className="project-card hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
							<CardContent className="p-4 text-center">
								<div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
									<category.icon className="h-5 w-5 text-primary" />
								</div>
								<h3 className="font-semibold text-sm mb-3">{category.title}</h3>
								<div className="flex flex-wrap gap-1">
									{category.skills.map((skill) => (
										<Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}