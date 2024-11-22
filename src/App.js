import checklisticon from '../src/assets/checklist_icon.png'
import communityicon from '../src/assets/community_icon.png'
import documenticon from '../src/assets/document_icon.png'
import projecticon from '../src/assets/project_icon.png'

import VisitorPage from './comps/visitorpage'
import ProjEventList from './comps/projeventlist'
import AboutUs from './comps/aboutus'
import CommPage from './comps/commpage'

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VisitorPage />} />
        <Route path="/projects" element={<ProjEventList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<CommPage />} />
      </Routes>
    </Router>
  );
}

export const Navbar = () => {
  return (
    <nav className="bg-[#f9f7e8] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-black font-bold text-xl">
            BATCH-88 <br /> FOUNDATION
          </div>
        </Link>

        {/* Right Section: Links */}
        <div className="flex space-x-6 text-black font-medium">
          <Link to="/about" className="hover:text-gray-700">
            about us
          </Link>
          <div className="hover:text-gray-700">
            contact us
          </div>
          <Link to="/community" className="hover:text-gray-700">
            login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const ProjectsSection = ({header, para, btnName, imagePath, imageFirst}) => {
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
          <Link to="/projects">
            <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600">
              {btnName}
            </button>
          </Link>
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

export const Testimonials = () => {
  const testimonials = [
    {
      name: "LUFTHANSA KANTA",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
      name: "SAMIUR RAHMAN",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
      name: "ZUHAIR AL ARAF",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    }
  ];

  return (
    <section className="bg-[#f9f7e8] py-12">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-black text-sm font-bold uppercase">Testimonials</h2>
        <h1 className="text-black text-3xl font-bold mt-2">
          READ WHAT OUR FOUNDERS <br /> HAVE TO SAY
        </h1>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#d9eae1] rounded-lg p-6 text-left shadow-lg"
            >
              <h3 className="text-black font-bold">{testimonial.name}</h3>
              <p className="text-black mt-2 italic">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturedOn = () => {
  const brands = [
    { name: "TechCrunch", logo: "/path-to-techcrunch-logo.png" },
    { name: "FastCompany", logo: "/path-to-fastcompany-logo.png" },
    { name: "MIT", logo: "/path-to-mit-logo.png" },
    { name: "Forbes", logo: "/path-to-forbes-logo.png" },
  ];

  return (
    <section className="bg-[#f9f7e8] py-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-black font-bold text-lg uppercase mb-4">
          Featured On
        </h2>

        {/* Logos Section */}
        <div className="bg-[#d9eae1] py-6 px-4 rounded-lg flex justify-around items-center space-x-6">
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Resources = () => {
  return (
    <section className="bg-[#f9f7e8] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Text and Buttons */}
        <div className="lg:w-1/2 text-left space-y-6">
          <h1 className="text-black text-5xl font-bold">Resources</h1>
          <p className="text-black text-lg">
            Learn more about Batch-88 Foundation
          </p>
          <div className="flex space-x-4">
            <button className="border-2 border-black text-black py-2 px-6 rounded-full font-bold hover:bg-black hover:text-white transition">
              REPORTS
            </button>
            <button className="border-2 border-black text-black py-2 px-6 rounded-full font-bold hover:bg-black hover:text-white transition">
              GALLERY
            </button>
            <button className="border-2 border-black text-black py-2 px-6 rounded-full font-bold hover:bg-black hover:text-white transition">
              FAQS
            </button>
          </div>
        </div>

        {/* Right Section: Icon/Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={documenticon}
            alt="Resources"
            className="w-1/2 lg:w-1/3"
          />
        </div>
      </div>
    </section>
  );
};
export default App;
