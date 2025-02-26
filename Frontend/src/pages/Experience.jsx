import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "XYZ Tech",
    duration: "June 2023 - Dec 2023",
    description: "Developed full-stack applications using the MERN stack, optimized performance, and collaborated on API development.",
  },
  {
    role: "Open-Source Contributor",
    company: "GitHub",
    duration: "Ongoing",
    description: "Contributed to open-source projects, improving documentation and fixing bugs in various repositories.",
  },
];

function Experience() {
  return (
    <section id="experience" className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
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
    </section>
  );
}

export default Experience;
