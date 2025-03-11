import React from "react";
import CardContainer from "../components/CardConatiner";


function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-9 md:py-16 px-7 md:px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-teal-400">Projects</h2>
      <p className="mt-2 text-gray-300 text-lg text-center max-w-2xl">
        Here are some of my latest projects showcasing my skills and expertise.
      </p>
      <CardContainer />
    </section>
  );
}

export default Projects;
