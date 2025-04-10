import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: node, title: "Node js", style: "shadow-green-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        
        {/* Title */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="py-6 text-gray-400">These are the technologies I've worked with:</p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
