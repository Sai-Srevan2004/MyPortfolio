// import React from "react";
// import Card from "./Card";
// // import project1 from "../assets/project1.jpg"; // Uncomment when adding real images
// // import project2 from "../assets/project2.jpg";
// // import project3 from "../assets/project3.jpg";
// // import project4 from "../assets/project4.jpg";

// function CardContainer() {
//   const projects = [
//     { title: "E-Commerce Website", image: "" },
//     { title: "Chat Application", image: "" },
//     { title: "Portfolio Website", image: "" },
//     { title: "Task Manager App", image: "" }
//   ];

//   return (
//     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {projects.map((project, index) => (
//         <Card key={index} title={project.title} image={project.image} />
//       ))}
//     </div>
//   );
// }

// export default CardContainer;


import React, { useRef } from "react";
import Card from "./Card";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import manashealth from '../assets/projects/manashealth.png'
import world from '../assets/projects/world.png'
import feedback from '../assets/projects/feedback.png'
import study from '../assets/projects/study.png'
import Anony from '../assets/projects/Anony.png'


function CardContainer() {
  const scrollRef = useRef(null); // Create a ref for the scrollable container

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 325; // Move left
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 325; // Move right
    }
  };

  const projects = [
    { title: "Manas Health", image:manashealth ,deploy:"",gitlink:"https://github.com/Sai-Srevan2004/ManasHealth",desc:"A MERN stack web application that helps assess students' mental health through quizzes on stress, depression, and anxiety. An integrated ML model evaluates their condition, and teachers can access detailed reports to provide personalized support." },
    { title: "World Atlas", image: world, deploy:"https://world-atlas-project-react.vercel.app/",gitlink:"https://github.com/Sai-Srevan2004/WorldAtlas-Project-React",desc:"A React-based web application that displays information about all countries, including their capitals, languages, and continents. Users can search for countries and sort them by continent, name, or capital in ascending or descending order for easy exploration."},
    { title: "Feedback Analysis", image: feedback,deploy:"",gitlink:"https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G206-PS24",desc:"A MERN stack web application with Deep Learning that analyzes product reviews from Amazon and Flipkart. It generates a concise summary, sentiment scores, and detailed pros & cons, helping buyers make informed decisions and sellers improve their products." },
    { title: "Study Notion", image: study,deploy:"",gitlink:"https://github.com/Sai-Srevan2004/Study-Notion" ,desc:" A MERN stack-based ed-tech platform that enables users to create, consume, and rate educational content. It provides an interactive learning experience for students and a space for instructors to share their expertise globally. The platform features a seamless UI, robust backend, well-structured APIs, and scalable deployment, making education more accessible and engaging."},
    { title: "AnonyCare", image: Anony,deploy:"",gitlink:"https://github.com/Sai-Srevan2004/AnonyCare",desc:"An anonymous mental health support web app where users can freely share their feelings without fear of judgment. It provides a safe space for anonymous chats, allowing individuals to express their emotions and receive support without revealing their identity." },
  ];

  return (
    <div className="relative mt-32 sm:mt-28 md:mt-10 w-full">
      {/* Left Scroll Button */}
      <button
        className="absolute -left-9 sm:left-2 top-1/2 -translate-y-1/2 bg-teal-400 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft/>
      </button>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 py-4  w-full
                   sm:w-[90%] mx-auto custom-scroll custom-scroll-hidden" 
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Card title={project.title} image={project.image} git={project.gitlink} desc={project.desc} demo={project.deploy}/>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute -right-9 sm:right-2 top-1/2 -translate-y-1/2 bg-teal-400 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
        onClick={scrollRight}
      >
         <FaChevronRight/>
      </button>
    </div>
  );
}

export default CardContainer;
