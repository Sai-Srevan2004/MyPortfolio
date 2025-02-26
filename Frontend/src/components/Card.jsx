import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
// import defaultImage from "../assets/default.jpg"; // A fallback image

function Card({ title, image,git }) {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image || ""} alt={title} className="min-w-[300px] h-96 object-cover" />

      {/* Overlay with title */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <a
          href={git}
          className="mt-2 flex items-center text-teal-400 hover:text-teal-300 transition"
        >
          View Project <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default Card;
