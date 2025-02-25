import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillsExpirience from "./pages/Skills";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Home />
        <About />
        <SkillsExpirience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;