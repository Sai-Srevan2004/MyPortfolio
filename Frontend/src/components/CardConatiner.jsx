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

function CardContainer() {
  const scrollRef = useRef(null); // Create a ref for the scrollable container

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Move left
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Move right
    }
  };

  const projects = [
    { title: "Manas Health", image: "",deploy:"",gitlink:"https://github.com/Sai-Srevan2004/ManasHealth" },
    { title: "World Atlas", image: "", deploy:"",gitlink:"https://github.com/Sai-Srevan2004/WorldAtlas-Project-React"},
    { title: "Feedback Analysis", image: "",deploy:"",gitlink:"https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G206-PS24" },
    { title: "Study Notion", image: "",deploy:"",gitlink:"https://github.com/Sai-Srevan2004/Study-Notion" },
    { title: "AnonyCare", image: "",deploy:"",gitlink:"https://github.com/Sai-Srevan2004/AnonyCare" },
  ];

  return (
    <div className="relative mt-10 w-full">
      {/* Left Scroll Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-teal-400 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft/>
      </button>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 p-4 
                   w-[90%] mx-auto custom-scroll custom-scroll-hidden" 
      >
        {projects.map((project, index) => (
          <div key={index} className="m-2">
            <Card title={project.title} image={project.image} git={project.gitlink}/>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-400 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
        onClick={scrollRight}
      >
         <FaChevronRight/>
      </button>
    </div>
  );
}

export default CardContainer;
