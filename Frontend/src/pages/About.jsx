import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="p-12 md:p-16 flex flex-col md:flex-row items-center gap-16 w-full">
        {/* Left Side - Image */}
        <div className="w-52 hidden h-52 md:w-72 md:h-72 md:block rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
          <img
            src="/your-image.jpg" // Replace with your image path
            alt="Sai"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - About Me Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold text-teal-400">About Me</h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-white">Sai</span>, a passionate 
            <span className="text-teal-400 font-semibold"> MERN Stack Developer </span> 
            and a Computer Science Engineering student. I specialize in building 
            scalable, efficient, and user-friendly web applications.
          </p>
          <p className="mt-6 text-lg text-gray-400">
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
