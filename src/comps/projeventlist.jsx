import { Navbar } from "../App";
import checklisticon from '../assets/checklist_icon.png'
import projecticon from '../assets/project_icon.png'

export default function ProjEventList() {
    return (
        <div className="bg-[#f9f7e8] h-full w-screen">
            <Navbar />
            <div className=" flex flex-col justify-center items-center ml-20  ">
                <ProjectEventItem 
                    header="Our Projects"
                    subheader="January 2025"
                    para="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dui purus, porta quis nulla nec, scelerisque ultricies purus. Cras tempor cursus lectus at gravida. Ut sed elit varius quam tincidunt rhoncus sed eget lectus. Maecenas et nulla rhoncus, vulputate quam quis, faucibus augue. Sed vitae semper lacus. Suspendisse dolor ligula, laoreet a nunc eu, eleifend congue leo. Mauris id pretium ante, quis efficitur magna. Etiam pretium rutrum turpis, vel vehicula enim efficitur ac. Proin velit est, feugiat ac pretium sed, sodales id eros. Aenean nunc metus, imperdiet non condimentum vel, euismod at leo. Mauris porttitor metus eget felis convallis, eu tristique leo posuere. Pellentesque ornare tellus rutrum dolor accumsan, sit amet molestie mauris auctor. Aliquam volutpat nisl quis velit imperdiet volutpat. Etiam euismod urna non sodales porta."
                    imageFirst={true}
                />
                <ProjectEventItem 
                    header="Our Projects"
                    subheader="January 2025"
                    para="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dui purus, porta quis nulla nec, scelerisque ultricies purus. Cras tempor cursus lectus at gravida. Ut sed elit varius quam tincidunt rhoncus sed eget lectus. Maecenas et nulla rhoncus, vulputate quam quis, faucibus augue. Sed vitae semper lacus. Suspendisse dolor ligula, laoreet a nunc eu, eleifend congue leo. Mauris id pretium ante, quis efficitur magna. Etiam pretium rutrum turpis, vel vehicula enim efficitur ac. Proin velit est, feugiat ac pretium sed, sodales id eros. Aenean nunc metus, imperdiet non condimentum vel, euismod at leo. Mauris porttitor metus eget felis convallis, eu tristique leo posuere. Pellentesque ornare tellus rutrum dolor accumsan, sit amet molestie mauris auctor. Aliquam volutpat nisl quis velit imperdiet volutpat. Etiam euismod urna non sodales porta."
                    imageFirst={true}
                />
                <ProjectEventItem 
                    header="Our Projects"
                    subheader="January 2025"
                    para="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dui purus, porta quis nulla nec, scelerisque ultricies purus. Cras tempor cursus lectus at gravida. Ut sed elit varius quam tincidunt rhoncus sed eget lectus. Maecenas et nulla rhoncus, vulputate quam quis, faucibus augue. Sed vitae semper lacus. Suspendisse dolor ligula, laoreet a nunc eu, eleifend congue leo. Mauris id pretium ante, quis efficitur magna. Etiam pretium rutrum turpis, vel vehicula enim efficitur ac. Proin velit est, feugiat ac pretium sed, sodales id eros. Aenean nunc metus, imperdiet non condimentum vel, euismod at leo. Mauris porttitor metus eget felis convallis, eu tristique leo posuere. Pellentesque ornare tellus rutrum dolor accumsan, sit amet molestie mauris auctor. Aliquam volutpat nisl quis velit imperdiet volutpat. Etiam euismod urna non sodales porta."
                    imageFirst={true}
                />
            </div>
            
        </div>
        );
}

const ProjectEventItem = ({header, subheader, para, imageFirst}) => {
    return (
      <section className="bg-[#f9f7e8] py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section: Text */}
          <div className="lg:w-2/3 space-y-4">
            <h1 className="text-black text-5xl font-bold">{header}</h1>
            <h2 className="text-black text-xl font-semibold">{subheader}</h2>
            <p className="text-black text-lg leading-relaxed">
                {para}
            </p>
  
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-teal-500 text-white py-2 px-6 rounded-full font-bold hover:bg-teal-600 transition">
                CONTRIBUTE
              </button>
              <button className="border-2 border-black text-black py-2 px-6 rounded-full font-bold hover:bg-black hover:text-white transition">
                REPORTS
              </button>
              <button className="border-2 border-black text-black py-2 px-6 rounded-full font-bold hover:bg-black hover:text-white transition">
                GALLERY
              </button>
            </div>
          </div>
  
          {/* Right Section: Icon/Image */}
          <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
            <img
              src={checklisticon}
              alt="Event Icon"
              className="w-2/3 lg:w-1/2"
            />
          </div>
        </div>
      </section>
    );
  };