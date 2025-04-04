import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <Navbar />
      <div className="sm:w-9/12 mx-auto">

        <Home />
        <About />
        <Skills/>
        <Experience/>
        <Projects />
        <Certifications/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;