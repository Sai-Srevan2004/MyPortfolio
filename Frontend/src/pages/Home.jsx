import React from "react";
import user from "../assets/UserImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen flex items-center justify-center">
      <div className="w-10/12 flex flex-col md:flex-row items-center justify-between mx-auto">
        
        {/* Left Section */}
        <div className="flex flex-col text-start md:w-[45%]">
          <h1 className="text-5xl font-bold">Hi,</h1>
          <h1 className="text-5xl font-bold mt-4 text-teal-400">I'm Sai Srevan</h1>
          <p className="text-2xl font-medium mt-4 text-gray-300">
            Full Stack Developer | MERN Stack Enthusiast
          </p>

          {/* Hire Me Button */}
          <button className="px-6 py-3 mt-6 w-fit bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md outline-none font-semibold hover:scale-105 transition-all duration-300 shadow-md">
            Hire Me
          </button>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/Sai-Srevan2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-srevan-3660862ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="relative w-full md:w-[40%] flex justify-center mt-10 md:mt-0">
          <div className="relative group">
            {/* Profile Image with Hover Effect */}
            <img
              src={user}
              alt="Sai Srevan"
              className="md:w-72 rounded-[70%] shadow-lg border-4 border-teal-500 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
