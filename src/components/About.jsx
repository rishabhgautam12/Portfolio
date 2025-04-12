import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        {/* Section Title */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        {/* About Content */}
        <p className="text-xl mt-10">
          Hi! I'm Rishabh Gautam, a passionate and curious Software Engineer and
          MERN Stack Developer. I recently completed my B.Tech in Computer
          Science and Engineering, and I love building scalable and efficient
          web applications that solve real-world problems.
        </p>

        <br />

        <p className="text-xl">
          I'm proficient in JavaScript, C++, React with hands-on experience in
          technologies like Node.js, Express.js, and MongoDB.
          <br />
          Some of my favorite projects include an E-commerce platform, an
          internship automation bot, and my latest work—Attendo, a smart
          attendance management system with live updates and QR-based check-ins.
          <br /><br/>
          I’m currently looking for opportunities where I can grow as a
          developer, work on impactful projects, and collaborate with
          like-minded teams.
        </p>
      </div>
    </section>
  );
};

export default About;
