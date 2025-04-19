

import  { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track mobile menu visibility

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`bg-gray-900 text-white py-4 px-10 sm:px-0 shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl sm:w-9/12 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">
          <a href="#home">Portfolio</a>
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li key={item} className="hover:text-teal-400 transition">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-gray-900 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg hover:text-teal-400 transition"
                  onClick={toggleMenu} // Close menu on item click
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
