

import React from "react";

function About() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        {/* Left Side - Image */}
        <div className="w-48 hidden h-48 md:w-64 md:h-64 md:block rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
          <img
            src="/your-image.jpg" // Replace with your image path
            alt="Sai"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - About Me Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-teal-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-white">Sai</span>, a passionate 
            <span className="text-teal-400 font-semibold"> MERN Stack Developer </span> 
            and a Computer Science Engineering student. I specialize in building 
            scalable, efficient, and user-friendly web applications.
          </p>
          <p className="mt-4 text-gray-400">
            I love solving complex problems, optimizing performance, and continuously 
            learning new technologies. My expertise includes developing full-stack 
            applications using <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
