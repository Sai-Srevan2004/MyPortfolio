import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiExpo,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { useState } from "react";

const skillsData = {
  "Web Development": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  ],
  "App Development": [
    { name: "React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "Expo", icon: <SiExpo className="text-gray-300" /> },
  ],
  "Programming(DSA) & Tools": [
    {
      name: "Java",
      icon: <FaJava className="text-orange-500" />,
    },
    {
      name: "Data Structures & Algorithms",
      icon: <TbBinaryTree className="text-teal-300" />,
    },
  ],
};

function Skills() {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section
      id="skills"
      className="text-white py-20 px-8 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-center md:text-left">
          Skills
        </h2>
        <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
          Technologies & Concepts I work with:
        </p>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap md:justify-start gap-5 mt-8">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm px-2 md:px-4 py-2 font-semibold rounded-lg transition ${
                activeTab === category
                  ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="relative group transition-transform transform hover:scale-105"
            >
              {/* Glowing Border Effect */}
              <div className="before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-yellow-800 via-pink-800 to-purple-800 before:blur-md before:opacity-70 before:z-0"></div>
              {/* Inner Card */}
              <div className="relative z-10 bg-black/80 backdrop-blur-md rounded-xl px-6 py-6 flex flex-col items-center justify-center text-white font-semibold">
                <span className="text-5xl">{skill.icon}</span>
                <span className="mt-3 text-lg">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
