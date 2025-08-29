import { useState } from "react"
import { Sidebar } from "@/components/portfolio/sidebar"
import { ProfileHeader } from "@/components/portfolio/profile-header"
import { MainContent } from "@/components/portfolio/main-content"

const Index = () => {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="ml-20 min-h-screen">
        <div className="container max-w-6xl mx-auto p-6">
          <ProfileHeader />
          <MainContent activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
};

export default Index;
