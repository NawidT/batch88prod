import { Navbar, ProjectsSection, Testimonials, FeaturedOn, Resources } from "../App";
import checklisticon from '../assets/checklist_icon.png'
import projecticon from '../assets/project_icon.png'
import communityicon from '../assets/community_icon.png'
import { Link } from "react-router-dom";


export default function CommPage() {
    return (
        <div className="bg-[#f9f7e8] h-screen w-screen">
            <Navbar />
            <div className=" flex flex-col justify-center items-center mx-[10%]  ">
                <CustomProjectsSection
                    header="Communitiy"
                    para="We have completed various projects in the past. Our projects are always successful and we are proud of them."
                    btnName="View Projects"
                    imagePath={communityicon}
                    imageFirst={true}
                />
                <Testimonials />
                <ProjectsSection
                    header="Events"
                    para="We have completed various projects in the past. Our projects are always successful and we are proud of them."
                    btnName="View Projects"
                    imagePath={projecticon}
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

export const CustomProjectsSection = ({header, para, btnName, imagePath, imageFirst}) => {
    return (
      <section className="bg-[#f9f7e8] py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {imageFirst && <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src={imagePath}
              alt="Projects"
              className="w-2/3 lg:w-2/3"
            />
          </div>}
          <div className="lg:w-1/2 text-left space-y-4">
            <h1 className="text-black text-5xl font-bold">{header}</h1>
            <p className="text-black text-lg">
              {para}
            </p>
            <div className="flex space-x-4">
                <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600">
                    Engage
                </button>
                <button className="bg-white text-black font-bold py-2 px-6 rounded-lg border-2 border-black hover:bg-gray-600">
                    View Community Members
                </button>
            </div>        
          </div>
  
          {!imageFirst && <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src={imagePath}
              alt="Projects"
              className="w-2/3 lg:w-2/3"
            />
          </div>}
        </div>
      </section>
    );
  };