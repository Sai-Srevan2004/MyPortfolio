import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import resume from '../assets/Resume/MyResume.pdf'

function Home() {
  return (
    <section id="home" className=" text-white py-16 min-h-screen flex items-center justify-center w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between mx-auto ">

        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start md:w-[45%]">
          <h1 className="text-4xl sm:text-5xl font-bold animate-waveSlide break-words">Hi,</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 bg-gradient-to-r from-fuchsia-500 via-indigo-600 to-cyan-400
 bg-clip-text text-transparent animate-waveSlideDelay break-words">
            I'm Sai Srevan
          </h1>
          <p className="text-center sm:text-start text-lg sm:text-2xl font-medium mt-4 text-gray-300 animate-waveSlideDelay2">
            Full Stack Developer | MERN Enthusiast
          </p>

          {/* Resume Button with Updated Gradient */}
          <a href={resume} className="px-6 py-3 mt-6 w-fit bg-gradient-to-r from-fuchsia-500 via-indigo-600 to-cyan-400
 text-white rounded-md outline-none font-semibold hover:scale-105 transition-all duration-300 shadow-md animate-waveSlideDelay3">
            <button>View Resume</button>
          </a>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href={import.meta.env.VITE_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaGithub />
            </a>
            <a
              href={import.meta.env.VITE_LINKDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaLinkedin />
            </a>
            <a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="relative w-full md:w-[40%] flex justify-center sm:justify-end sm:mr-12 mt-10 md:mt-0">
          <div className="relative animate-float">
            {/* Background Glow (Updated Color) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500 via-indigo-600 to-cyan-400
 rounded-[70%] blur-xl opacity-50 animate-revealCenter"></div>

            {/* Profile Image */}
            <img
              src={""}
              alt="Sai Srevan"
              className="relative w-72 rounded-[70%] shadow-lg border-[2px] border-purple-600 border-solid animate-revealCenter"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
