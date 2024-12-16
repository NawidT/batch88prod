import {
  Navbar,
  MissionSection,
  ProjectsSection,
  Testimonials,
  FeaturedOn,
  Resources,
} from "../App.js";
import checklisticon from "../assets/checklist_icon.png";
import projecticon from "../assets/project_icon.png";

export default function VisitorPage() {
  return (
    <div className="bg-[#f9f7e8] h-full w-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center mx-[10%]">
        {/* Mission Section */}
        <MissionSection />

        {/* Existing Sections */}
        <ProjectsSection
          header="Projects"
          para="We have completed various projects in the past. Our projects are always successful and we are proud of them."
          btnName="View Projects"
          imagePath={checklisticon}
          imageFirst={true}
        />
        <FeaturedOn />
        <ProjectsSection
          header="Events"
          para="We have completed various projects in the past. Our projects are always successful and we are proud of them."
          btnName="View Projects"
          imagePath={projecticon}
        />
        <Testimonials />
        <Resources />
      </div>
    </div>
  );
}
