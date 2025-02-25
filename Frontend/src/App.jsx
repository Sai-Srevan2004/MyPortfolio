import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import SkillsExpirience from "./pages/Skills";
=======
import Skills from "./pages/Skills";
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
import Achievements from "./pages/Achievements";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
<<<<<<< HEAD
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
=======
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Achievements/>
      <Contact />
      <Footer />
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
    </div>
  );
}

export default App;