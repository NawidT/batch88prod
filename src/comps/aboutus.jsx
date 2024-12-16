import { Navbar } from "../App";
import React from "react";
import batch22Logo from "../assets/batch22_logo.png";

const AboutUs = () => {
  return (
    <div className="bg-[#f9f7e8] h-screen w-screen flex flex-col">
      <Navbar />
      <section className="container mx-auto py-12 flex-grow">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Logo Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={batch22Logo}
              alt="Batch-88 Foundation Logo"
              className="h-40 w-auto"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-left space-y-6">
            <h1 className="text-black text-5xl font-bold">
              About Batch-88 Foundation
            </h1>
            <p className="text-black text-lg leading-relaxed">
              The Batch-88 Foundation is dedicated to nurturing education,
              fostering community growth, and empowering future generations.
              Inspired by the legacy of our founding members, we work tirelessly
              to create sustainable projects and initiatives that bring positive
              change to communities worldwide.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Through collaboration, innovation, and compassion, the Batch-88
              Foundation strives to break down barriers to access and
              opportunity. Our goal is to uplift those in need, support
              educational endeavors, and build a brighter future for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
