
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
  SiExpo, SiRedux, SiTypescript,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { Tabs } from "../components/ui/tabs";

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
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Data Structures & Algorithms", icon: <TbBinaryTree className="text-teal-300" /> },
  ],
};

export default function Skills() {
  const tabs = Object.keys(skillsData).map((category) => ({
    title: category,
    value: category.toLowerCase().replace(/\s+/g, "-"),
    content: (
      <div className="w-full relative rounded-2xl p-6 md:p-10 md:pb-[100px] text-white bg-gradient-to-br ">
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center">{category}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-11">
          {skillsData[category].map((skill) => (
            <div
              key={skill.name}
              className="relative bg-black/80 backdrop-blur-md group transition-transform transform hover:scale-105 border border-purple-600 rounded-xl"

            >
              <div className="relative z-10  rounded-xl px-6 py-6 flex flex-col items-center justify-center text-white font-semibold">
                <span className="text-4xl md:text-5xl">{skill.icon}</span>
                <span className="mt-3 text-center text-base md:text-lg">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="skills" className=" flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl sm:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-600 to-cyan-400 text-center mb-4">
          Skills
        </h2>
        <p className="text-gray-300 sm:text-left text-lg text-center mb-12">Technologies & Concepts I work with:</p>
        <div className="relative flex flex-col items-start justify-start mx-auto w-full">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
