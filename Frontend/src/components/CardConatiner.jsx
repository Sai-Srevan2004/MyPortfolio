import React from "react";
import Card from "./Card";
// import project1 from "../assets/project1.jpg"; // Uncomment when adding real images
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/project3.jpg";
// import project4 from "../assets/project4.jpg";

function CardContainer() {
  const projects = [
    { title: "E-Commerce Website", image: "" },
    { title: "Chat Application", image: "" },
    { title: "Portfolio Website", image: "" },
    { title: "Task Manager App", image: "" }
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {projects.map((project, index) => (
        <Card key={index} title={project.title} image={project.image} />
      ))}
    </div>
  );
}

export default CardContainer;
