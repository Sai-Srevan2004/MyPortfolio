<<<<<<< HEAD


=======
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
import React from "react";

function About() {
  return (
<<<<<<< HEAD
    <section className="bg-gray-900 text-white py-16 px-6 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        {/* Left Side - Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
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
=======
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen flex flex-col items-center">
      {/* About Me Section */}
      <h2 className="text-4xl font-bold text-teal-400">About Me</h2>
      <div className="mt-6 max-w-2xl text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
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

      {/* Education Section */}
      <h3 className="text-3xl font-bold text-teal-400 mt-12">Education</h3>
      <div className="mt-6 space-y-6 max-w-3xl w-full">
        
        {/* B.Tech */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white">
            🎓 Bachelor of Technology (B.Tech) - Computer Science
          </h3>
          <p className="text-gray-400 mt-2">Keshav Memorial Intitute of Technology, Hyderabad | 2022 - 2026</p>
          <p><strong>CGPA: </strong>8.84</p>
        </div>

        {/* Intermediate */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white">
            🏫 Intermediate (10+2) - MPC Stream
          </h3>
          <p className="text-gray-400 mt-2">Sree Vedha Saraswathi Jr College, Narayanpet | 2020 - 2022</p>
          <p><strong>Percentage: </strong>97.9%</p>
        </div>

        {/* 10th Standard */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white">
            📖 Secondary School (10th Grade)
          </h3>
          <p className="text-gray-400 mt-2">Govt High School, Narayanpet | 2020</p>
          <p><strong>Grade: </strong>10</p>
        </div>

>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
      </div>
    </section>
  );
}

export default About;
