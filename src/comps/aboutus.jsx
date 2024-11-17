import { Navbar } from "../App";

export default function AboutUs() {
    return (
      <div className="bg-[#f9f7e8] flex flex-col h-screen  p-6">
        <Navbar />
        <div className="max-w-4xl text-center space-y-6 h-screen bg-[#f9f7e8]">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our community! We are dedicated to bringing people
            together, fostering cultural connections, and creating a space where
            everyone feels valued and inspired. Our mission is to celebrate
            diversity, promote learning, and build strong relationships.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s through vibrant events, meaningful discussions, or
            collaborative projects, we aim to make a positive impact in every
            endeavor. Join us as we explore, grow, and achieve great things
            together.
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
