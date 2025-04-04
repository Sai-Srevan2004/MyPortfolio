import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl text-center md:text-left">
        <h2 className="text-5xl font-bold text-teal-400">About Me</h2>
        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          I am a passionate <span className="text-teal-400 font-semibold">MERN Stack Developer </span> 
          and Computer Science professional dedicated to crafting high-performance web solutions.
        </p>
        <p className="mt-6 text-lg text-gray-400">
          With expertise in <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span>,
          I specialize in building Responsive and efficient full-stack applications. My focus is on 
          developing innovative solutions, optimizing performance, and leveraging the latest 
          technological advancements.
        </p>
        <p className="mt-6 text-lg text-gray-400">
          Driven by a commitment to excellence, I aim to create impactful digital experiences 
          that enhance user engagement and business efficiency. Let's collaborate to shape the 
          future of technology.
        </p>
      </div>
    </section>
  );
}

export default About;