import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t-transparent border-t-[1px] border-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Text */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} Sai Srevan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href={import.meta.env.VITE_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href={import.meta.env.VITE_LINKDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${import.meta.env.VITE_EMAIL}`}
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
