import React, { useState, useEffect } from "react";

function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents SSR issues

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`bg-gray-900 text-white py-4 px-10 shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">
          <a href="#home">Portfolio</a>
        </h1>
        <ul className="hidden sm:flex space-x-6 text-lg">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li key={item} className="hover:text-teal-400 transition">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
