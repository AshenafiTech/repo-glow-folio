import React from "react"

export function CertificationsSection() {
  const certs = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://drive.google.com/file/d/1B51xCt8HlIqznPXK7KPW_adekKvs9OoG/view?usp=sharing",
      image: "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      embed: true
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      link: "https://drive.google.com/file/d/1Z9GprIN0-yVppjCJCfHYjoKDlD5pjHEC/view?usp=sharing",
      image: "https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    },
    {
      name: "Google Cloud Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      link: "https://drive.google.com/file/d/1MShc1Ymi3B5BLJgYTAdfmdr7nkNL3GU2/view?usp=sharing",
      image: "/gcp.webp"
    },
    {
      name: "Kubernetes and Cloud Native Associate",
      issuer: "CNCF",
      link: "https://drive.google.com/file/d/1yh9_fkUCudY7VDl0eI-RIiHGS90_J5Ab/view?usp=sharing",
      image: "/kcna.png"
    },
  ]

  return (
    <section id="certifications" className="py-20 relative overflow-hidden w-full">
      <div className="relative z-10 w-full px-6 mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 hero-text-gradient">Professional Certifications</h2>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1400px] mx-auto justify-items-center">
          {certs.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card hover-lift cursor-pointer block p-6 text-center rounded-lg shadow-md transition-transform max-w-[300px] mx-auto w-full"
              style={{ textDecoration: 'none' }}
            >
              <div className="mb-3">
                <img src={cert.image} alt={cert.name} className="w-28 h-28 mx-auto mb-4" />
              </div>
              <h4 className="font-medium text-base mb-2">{cert.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              <span className="text-primary hover:underline text-sm">View Certificate </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
