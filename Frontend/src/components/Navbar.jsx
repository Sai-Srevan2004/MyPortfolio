import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-10 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400"><a href="#home">Portfolio</a></h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-teal-400 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-teal-400 transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-teal-400 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-teal-400 transition">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:text-teal-400 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
