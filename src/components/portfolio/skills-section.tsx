import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone } from "lucide-react";
// provider icons
import {
	SiJavascript,
	SiTypescript,
	SiPython,
	SiNodedotjs,
	SiDjango,
	SiFastapi,
	SiGraphql,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiRedis,
		SiAmazon,
			SiGooglecloud,
	SiDocker,
	SiKubernetes,
	SiJenkins,
	SiGithub
} from "react-icons/si";

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
					sql: '/logos/sql.svg',
					'node.js': '/logos/nodejs.svg',
					django: '/logos/django.svg',
					fastapi: '/logos/fastapi.svg',
					graphql: '/logos/graphql.svg',
					postgresql: '/logos/postgresql.svg',
					mysql: '/logos/mysql.svg',
					mongodb: '/logos/mongodb.svg',
					redis: '/logos/redis.svg',
					rds: '/logos/rds.svg',
					aws: '/logos/aws.svg',
					'google cloud': '/logos/googlecloud.svg',
					'microsoft azure': '/logos/azure.svg',
					docker: '/logos/docker.svg',
					kubernetes: '/logos/kubernetes.svg',
					jenkins: '/logos/jenkins.svg',
					'github actions': '/logos/github.svg',
					'ci/cd': '/logos/cicd.svg',
					'cloud architecture': '/logos/cloud-architecture.svg',
					microservices: '/logos/microservices.svg',
					'system design': '/logos/system-design.svg',
					mlops: '/logos/python.svg'
				}

				// icon component lookup - prefer these when available for consistent rendering
				const iconComponentLookup: Record<string, any> = {
					javascript: SiJavascript,
					typescript: SiTypescript,
					python: SiPython,
					'node.js': SiNodedotjs,
					django: SiDjango,
					fastapi: SiFastapi,
					graphql: SiGraphql,
					postgresql: SiPostgresql,
					mysql: SiMysql,
					mongodb: SiMongodb,
					redis: SiRedis,
									aws: SiAmazon,
									'google cloud': SiGooglecloud,
									// microsoft azure: no reliable Si component name across versions, fall back to SVG
					docker: SiDocker,
					kubernetes: SiKubernetes,
					jenkins: SiJenkins,
					'github actions': SiGithub,
					// react icon removed to avoid stray rendering
				}

				// brand colors for icons (used when rendering Icon components)
				const iconColorLookup: Record<string, string> = {
					javascript: '#F7DF1E',        // JS
					typescript: '#3178C6',        // TS
					python: '#3776AB',           // Python
					'sql': '#00758F',            // SQL (generic)
					'node.js': '#339933',        // Node.js
					django: '#092E20',           // Django
					fastapi: '#009688',          // FastAPI (teal)
					graphql: '#E10098',          // GraphQL
					postgresql: '#336791',       // PostgreSQL
					mysql: '#4479A1',            // MySQL (brand blue)
					mongodb: '#47A248',          // MongoDB
					redis: '#DC382D',            // Redis
					rds: '#FF9900',              // RDS (AWS orange)
					aws: '#FF9900',             // AWS
					'google cloud': '#4285F4',   // Google Cloud
					'microsoft azure': '#0078D4',// Azure
					docker: '#2496ED',          // Docker
					kubernetes: '#326CE5',      // Kubernetes
					jenkins: '#D33833',         // Jenkins
					'github actions': '#181616', // GitHub
					'ci/cd': '#68217A',          // CI/CD (purple placeholder)
					'cloud architecture': '#FF6B35',
					microservices: '#326CE5',
					'system design': '#2C3E50',
					mlops: '#3776AB',
					react: '#61DAFB'
				}

				// prefer using existing SVG files for these technologies instead of provider icons
				const preferSvg = new Set([
					'jenkins',
					'google cloud',
					'mysql',
					'postgresql',
					'python',
					'github actions'
				])
				preferSvg.add('redis')
				// also prefer SVG / no provider icon for GraphQL
				preferSvg.add('graphql')
				preferSvg.add('redis')

				const marqueeItems = Array.from(seen.values()).map((label) => {
					const key = label.toLowerCase()
					const normalized = key.replace(/\s|\.|-/g, '')
					const src = iconLookup[key] ?? iconLookup[normalized] ?? '/placeholder.svg'
					const IconComp = (preferSvg.has(key) || preferSvg.has(normalized)) ? undefined : (iconComponentLookup[key] ?? iconComponentLookup[normalized])
					const color = iconColorLookup[key] ?? iconColorLookup[normalized] ?? undefined
					return { label, src, IconComp, color }
				})
				// trim marquee to stop after 'github actions' so nothing after it is shown
				const stopIndex = marqueeItems.findIndex((m) => m.label.toLowerCase() === 'github actions')
				const finalMarquee = stopIndex >= 0 ? marqueeItems.slice(0, stopIndex + 1) : marqueeItems

				// prepare display list: unique, only items that have an icon component or a real SVG (not placeholder)
				const excludeTop = new Set(['rds', 'sql', 'postgresql'])
				const seenLogos = new Set<string>()
				const displayMarquee = finalMarquee.filter((it) => {
					const key = it.label.toLowerCase().replace(/\s|\.|-/g, '')
					if (seenLogos.has(key)) return false // remove duplicates
					if (excludeTop.has(key)) return false // explicitly exclude from top horizontal list
					// include only if there's an Icon component or a valid src (not placeholder)
					const hasSvg = it.src && it.src !== '/placeholder.svg'
					const hasIcon = !!it.IconComp
					if (!(hasSvg || hasIcon)) return false
					seenLogos.add(key)
					return true
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
							<div className="flex flex-row items-center justify-center flex-wrap">
								{displayMarquee.map((it, i) => {
									return (
										<div key={i} className="inline-flex items-center justify-center flex-none m-2 p-2 bg-card/80 rounded-md border border-border" style={{width: 44, height: 44}}>
											{it.IconComp ? (
												<it.IconComp className="h-6 w-6" style={{color: it.color}} aria-label={it.label} />
											) : (
												<img
													src={it.src}
													alt={it.label}
													className="h-6 w-6 object-contain"
													loading="lazy"
													onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
														e.currentTarget.onerror = null
														e.currentTarget.src = '/placeholder.svg'
													}}
												/>
											)}
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
									{(() => {
										const rendered = new Set<string>()
										const nodes: JSX.Element[] = []
										category.skills.forEach((skill) => {
											const key = skill.toLowerCase()
											const normalized = key.replace(/\s|\.|-/g, '')
											if (rendered.has(normalized)) return
											rendered.add(normalized)
											const IconComp = (preferSvg.has(key) || preferSvg.has(normalized)) ? null : (iconComponentLookup as any)[key]
											nodes.push(
												<Badge key={skill} variant="outline" className="text-xs flex items-center gap-2">
													{IconComp ? <IconComp className="h-3 w-3" style={{color: iconColorLookup[key]}} /> : null}
													{skill}
												</Badge>
											)
										})
										return nodes
									})()}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}