
function Footer() {
  return (
    <footer className="p-5 bg-gray-800 text-center mt-10 border-t border-gray-700 w-full">
      <nav className="flex flex-wrap justify-center space-x-6 text-teal-300">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      <p className="mt-4 text-gray-300">&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
