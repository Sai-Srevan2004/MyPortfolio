<<<<<<< HEAD



import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb"; // For DSA icon

function SkillsExperience() {
=======
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiGithub } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb"; // For DSA icon

function Skills() {
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
  const skillCategories = [
    {
      title: "🌐 Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
      ],
    },
    {
      title: "💻 Programming & DSA",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
<<<<<<< HEAD
        { name: "Data Structures & Algorithms", icon: <TbBinaryTree className="text-teal-300" /> },
=======
        { name: "Data Structures And Algorithms", icon: <TbBinaryTree className="text-teal-300" /> },
      ],
    },
    {
      title: "🛠 Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
      ],
    },
  ];

<<<<<<< HEAD
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "XYZ Tech",
      duration: "June 2023 - Dec 2023",
      description: "Developed full-stack applications using the MERN stack, optimized performance, and collaborated on API development.",
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2022 - Present",
      description: "Built multiple client projects, ranging from e-commerce platforms to portfolio websites, with responsive UI and secure backend implementations.",
    },
    {
      role: "Open-Source Contributor",
      company: "GitHub",
      duration: "Ongoing",
      description: "Contributed to open-source projects, improving documentation and fixing bugs in various repositories.",
    },
  ];

  return (
    <section className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side - Skills */}
        <div>
          <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Skills</h2>
          <p className="mt-6 text-gray-300 text-lg text-center md:text-left">Technologies & Concepts I work with:</p>
          <div className="mt-8 space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-gray-800 px-6 py-6 rounded-xl text-teal-300 font-semibold shadow-lg hover:scale-110 transition duration-300"
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

        {/* Right Side - Experience */}
        <div>
          <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Experience</h2>
          <p className="mt-6 text-gray-300 text-lg text-center md:text-left">Work & Contributions:</p>
          <div className="mt-8 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-teal-300 font-medium mt-2">{exp.company} • {exp.duration}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

=======
  return (
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-teal-400">Skills</h2>
      <p className="mt-4 text-gray-300 text-lg">Technologies & Concepts I work with:</p>

      {/* Skills Categories */}
      <div className="mt-8 space-y-10 w-full max-w-4xl">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-white text-center mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-gray-800 px-6 py-5 rounded-lg text-teal-300 font-semibold shadow-md hover:scale-105 transition transform duration-300"
                >
                  <span className="text-4xl">{skill.icon}</span>
                  <span className="mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default SkillsExperience;
=======
export default Skills;
>>>>>>> ff2160ac4907242e49ca5f9ee3a2d894474fd25a
