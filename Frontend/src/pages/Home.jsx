import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import resume from '../assets/Resume/MyResume.pdf';

function Home() {
  return (
    <section
      id="home"
      className="text-white py-16 min-h-screen flex items-center justify-center w-full"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between mx-auto">

        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-start md:w-[45%]">
          <h1 className="text-4xl sm:text-5xl font-bold animate-waveSlide break-words text-white drop-shadow-lg">
            Hi,
          </h1>
          <h1
            className="text-4xl sm:text-5xl font-bold mt-4
              bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400
              bg-clip-text text-transparent animate-waveSlideDelay break-words drop-shadow-md"
          >
            I'm Sai Srevan
          </h1>
          <p className="text-center sm:text-start text-lg sm:text-2xl font-medium mt-4 text-gray-300 animate-waveSlideDelay2 max-w-xl">
            Full Stack Developer | MERN Enthusiast
          </p>

          {/* Resume Button with Updated Gradient */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 mt-6 w-fit
              bg-gradient-to-r from-cyan-500 via-blue-600 to-teal-500
              text-white rounded-md font-semibold shadow-lg hover:scale-105
              transition-transform duration-300 animate-waveSlideDelay3"
          >
            <button className="bg-transparent">View Resume</button>
          </a>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href={import.meta.env.VITE_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaGithub />
            </a>
            <a
              href={import.meta.env.VITE_LINKDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaLinkedin />
            </a>
            <a
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 text-3xl transition duration-300 animate-waveSlideDelay4"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="relative w-full md:w-[40%] flex justify-center sm:justify-end sm:mr-12 mt-10 md:mt-0">
          <div className="relative animate-float">
            {/* Background Glow with new gradient colors */}
            <div
              className="absolute inset-0 w-full h-full rounded-[70%] blur-xl opacity-50 animate-revealCenter"
              style={{
                background:
                  "linear-gradient(90deg, #22d3ee 0%, #3b82f6 50%, #14b8a6 100%)",
              }}
            ></div>

            {/* Profile Image */}
            <img
              src={null}
              alt="Sai Srevan"
              className="relative w-72 rounded-[70%] shadow-lg border-[2px] border-cyan-500 border-solid animate-revealCenter object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
