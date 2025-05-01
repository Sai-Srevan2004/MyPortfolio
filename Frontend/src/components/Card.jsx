
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Card({ title, desc, image, git, demo }) {
  return (
    <div className="relative bg-gray-800 shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105 hover:shadow-2xl opacity-85 h-full">
      {/* Project Image */}
      <img src={image || ""} alt={title} className="w-[100%] h-[100%] opacity-70" />

      <div className="absolute inset-0 flex items-center justify-center bg-white/10 text-black italic text-2xl md:text-7xl rounded-md group-hover:hidden px-6 py-3 text-center">
  {title}
</div>




      {/* Hover Overlay with Project Info */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center gap-7 justify-center px-4 text-center ">
      <div className="bg-gray-900 text-white py-2 px-4 text-center font-bold rounded-md">{title}</div>

        <p className="text-white text-sm md:text-xl md:w-[70%] text-center">{desc}</p>

        {/* Action Buttons */}
        <div className="mt-3 flex gap-4">
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md transition"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-md transition"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
