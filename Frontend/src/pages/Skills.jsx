import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiExpo, SiRedux } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

import { SiTypescript } from "react-icons/si";  // Importing TypeScript icon
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
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }, // Added TypeScript icon
  ],
  "App Development": [
    { name: "React Native", icon: <FaReact className="text-blue-400" /> },
    { name: "Expo", icon: <SiExpo className="text-gray-300" /> },
  ],
  "Programming(DSA) & Tools": [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Data Structures & Algorithms", icon: <TbBinaryTree className="text-teal-300" /> },
  ],
};

function Skills() {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section id="skills" className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Skills</h2>
        <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
          Technologies & Concepts I work with:
        </p>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap md:justify-start gap-5 mt-8">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm px-2 md:px-4 py-2 font-semibold rounded-lg transition ${activeTab === category ? "bg-cyan-700 text-white" : "bg-gray-700 text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {/* Skills Display */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <AnimatePresence mode="sync">
            {skillsData[activeTab].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex flex-col items-center bg-gray-800 px-6 py-6 rounded-xl text-teal-300 font-semibold shadow-lg hover:scale-110 transition duration-300 hover:bg-gradient-to-br hover:from-teal-500 hover:to-purple-600"
              >
                <span className="text-5xl">{skill.icon}</span>
                <span className="mt-3 text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Skills;
