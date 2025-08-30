import { Sidebar } from "@/components/portfolio/sidebar"
import { ProfileHeader } from "@/components/portfolio/profile-header"
import { MainContent } from "@/components/portfolio/main-content"

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default Index;
