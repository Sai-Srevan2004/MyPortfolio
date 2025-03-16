import React from "react";
import user from "../assets/UserImage.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import resume from '../assets/Resume/MyResume.pdf'

function Home() {
  return (
    <section id="home" className="bg-gray-900 text-white py-16 px-10 min-h-screen flex items-center justify-center">
      <div className="w-10/12 flex flex-col md:flex-row items-center justify-between mx-auto">

        {/* Left Section */}
        <div className="flex flex-col text-start md:w-[45%]">
          <h1 className="text-5xl font-bold animate-waveSlide">Hi,</h1>
          <h1 className="text-5xl font-bold mt-4 text-teal-400 animate-waveSlideDelay">I'm Sai Srevan</h1>
          <p className="text-2xl font-medium mt-4 text-gray-300 animate-waveSlideDelay2">
            Full Stack Developer | MERN Stack Enthusiast
          </p>



          {/* Resume Button with Animation */}
          <a href={resume} className="px-6 py-3 mt-6 w-fit bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md outline-none font-semibold hover:scale-105 transition-all duration-300 shadow-md animate-waveSlideDelay3">
            <button>View Resume</button>
          </a>

          {/* Social Links with Animation */}
          <div className="flex space-x-6 mt-6">
            <a
              href={import.meta.env.VITE_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaGithub />
            </a>

            <a
              href={import.meta.env.VITE_LINKDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaLinkedin />
            </a>

            <a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaInstagram />
            </a>
          </div>

        </div>

        {/* Right Section - Profile Image */}
<div className="relative w-full md:w-[40%] flex justify-center mt-10 md:mt-0">
  <div className="relative animate-float">
    
    {/* Background Glow Effect - Fades in together with the image */}
    <div className="absolute inset-0 w-full h-full bg-teal-400 rounded-[70%] blur-md opacity-50 animate-revealCenter"></div>

    {/* Profile Image with Reveal Animation */}
    <img
      src={user}
      alt="Sai Srevan"
      className="relative md:w-72 rounded-[70%] shadow-lg border-4 border-teal-500 transition-transform duration-300 animate-revealCenter"
    />
  </div>
</div>


      </div>
    </section>
  );
}

export default Home;
