import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Card({ title, desc, image, git, demo }) {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105 hover:shadow-2xl w-[300px]">
      {/* Project Image */}
      <img src={image || ""} alt={title} className="h-[260px] object-cover w-full" />

      {/* Always Visible Title */}
      <div className="bg-gray-900 text-white py-2 px-4 text-center font-bold">{title}</div>

      {/* Hover Overlay with Project Info */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-gray-300 text-sm">{desc}</p>

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
            className="flex items-center bg-teal-600 hover:bg-teal-500 text-white px-3 py-1.5 rounded-md transition"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
