import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SaiSrevan from '/SaiSrevanLogo.png'

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Gradient Border Bottom */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 opacity-60 backdrop-blur-2xl"></div>

        <div className="max-w-6xl sm:w-9/12 mx-auto flex justify-between items-center py-4 px-6 sm:px-0">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            <a
              href="#home"
              className="hover:text-gray-200 transition bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent"
            >
              <div style={{height:'40px', width:'100px'}}>
                  <img style={{height:'100%',width:'100%',objectFit:'cover'}} src={SaiSrevan} alt="logo"/>
              </div>
            </a>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-6 text-lg font-medium text-white">
            {["About", "Education", "Skills", "Projects","Certifications","Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${menuOpen ? "block" : "hidden"} bg-gray-900`}>
        <ul className="flex flex-col items-center space-y-4 py-4 text-white text-lg font-medium">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
