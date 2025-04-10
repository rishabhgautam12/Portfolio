import React from "react";
import attendo from "../assets/portfolio/Attendance.png";
import freshkart from "../assets/portfolio/FreshKart.png";
import portfolio from "../assets/portfolio/Portfolio.png";
import sorting from "../assets/portfolio/Sorting.png";
import internshala from "../assets/portfolio/Internshala.png";
import filmyfly from "../assets/portfolio/Filmyfly.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: attendo,
      title: "Attendo",
      codeLink: "https://github.com/rishabhgautam12?tab=repositories",
    },
    {
      id: 2,
      src: freshkart,
      title: "Freshkart",
      codeLink: "https://github.com/rishabhgautam12/MERN-Project-using-Redux",
    },
    {
      id: 3,
      src: portfolio,
      title: "Portfolio",
      codeLink: "https://github.com/rishabhgautam12?tab=repositories",
    },
    {
      id: 4,
      src: sorting,
      title: "Sorting_visualiser",
      codeLink: "https://github.com/rishabhgautam12/Sorting-vis",
    },
    {
      id: 5,
      src: internshala,
      title: "Internshala_automation",
      codeLink: "https://github.com/rishabhgautam12/Internshala_automation",
    },
    {
      id: 6,
      src: filmyfly,
      title: "Filmyfly",
      codeLink: "https://github.com/rishabhgautam12/javscript-api-project",
    },
  ];

  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* Title */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="py-6 text-gray-400">Check out some of my work below:</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src, title,  codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Project"
                className="rounded-md duration-200 hover:scale-105 w-full h-70"
              />

              <h3 className="text-center text-lg font-semibold mt-3">
                {title}
              </h3>

              <div className="flex items-center justify-between p-2">
                {/* <button className="w-1/2 px-4 py-2 bg-blue-500 rounded-md hover:scale-105 transition duration-200">
                  Demo
                </button> */}
                <button
                  onClick={() => window.open(codeLink, "_blank")}
                  className="w-full px-2 py-2 bg-gray-700 rounded-md hover:scale-105 transition duration-200"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
