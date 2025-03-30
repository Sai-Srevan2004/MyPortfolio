import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiExpo, SiRedux } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const skills = [
  {
    title: "🌐 Web Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },  // Added Redux Toolkit
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    ],
  },
  {
    title: "📱 App Development",
    skills: [
      { name: "React Native", icon: <FaReact className="text-blue-400" /> },
      { name: "Expo", icon: <SiExpo className="text-gray-300" /> },
    ],
  },
  {
    title: "💻 Programming & DSA",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "Data Structures & Algorithms", icon: <TbBinaryTree className="text-teal-300" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Skills</h2>
        <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
          Technologies & Concepts I work with:
        </p>

        {/* Skills Section */}
        <div className="mt-8 space-y-12">
          {skills.map((category, index) => (
            <div key={index}>
              
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-gray-800 px-6 py-6 rounded-xl 
                    text-teal-300 font-semibold shadow-lg hover:scale-110 transition duration-300"
                  >
                    <span className="text-5xl">{skill.icon}</span>
                    <span className="mt-3 text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
