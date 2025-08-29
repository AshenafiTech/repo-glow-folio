export const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="w-16 h-1 bg-primary mb-8"></div>
      </div>
      
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS for AWS Certified Cloud Practitioner.
        </p>
        
        <p>
          Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code.
        </p>

        <p>
          My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort. With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-8">What I'm Doing</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-card/50 rounded-lg border border-border hover:border-primary/20 transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">DevOps</h4>
            <p className="text-sm text-muted-foreground">
              I enjoy to improve the speed and quality of delivery, automate and achieve CICD
            </p>
          </div>

          <div className="p-6 bg-card/50 rounded-lg border border-border hover:border-primary/20 transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Cloud Engineer</h4>
            <p className="text-sm text-muted-foreground">
              I enjoy design, secure and maintenance of an organization's cloud-based infrastructure and application
            </p>
          </div>

          <div className="p-6 bg-card/50 rounded-lg border border-border hover:border-primary/20 transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Site Reliability Engineering</h4>
            <p className="text-sm text-muted-foreground">
              I focus on ensuring system reliability, implementing monitoring solutions, and maintaining high availability
            </p>
          </div>

          <div className="p-6 bg-card/50 rounded-lg border border-border hover:border-primary/20 transition-all duration-200">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Infrastructure as Code</h4>
            <p className="text-sm text-muted-foreground">
              I implement and manage infrastructure using tools like Terraform, Ansible, and CloudFormation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}