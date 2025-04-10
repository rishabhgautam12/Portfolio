import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full">
        
        {/* Title */}
        <div className="pb-8 text-center md:text-left">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h2>
          <p className="py-6 text-gray-400">Submit the form below to get in touch with me</p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/bqokvopb"
            method="POST"
            className="w-full sm:w-3/4 md:w-1/2 flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
