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
<<<<<<< HEAD
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
=======
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
      {projects.map((project, index) => (
        <Card key={index} title={project.title} image={project.image} />
      ))}
    </div>
  );
}

export default CardContainer;
