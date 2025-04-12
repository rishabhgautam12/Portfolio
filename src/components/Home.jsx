import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 flex items-center pt-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left w-full md:pl-16 lg:pl-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-lg">
           I'm a web developer with a focus on the MERN stack,
            but still exploring other technologies and frameworks that catch my interest! 
            if you're looking for a developer to add to your team,
            I'd love to hear from you!
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 transition-transform duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-[400px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
