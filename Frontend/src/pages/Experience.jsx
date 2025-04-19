import { experiences } from "../data/experienceData";
function Experience() {
  return (
    <section id="experience" className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Experience</h2>
        <p className="mt-6 text-gray-300 text-lg text-center md:text-left">Work & Contributions:</p>
        <div className="mt-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br hover:from-teal-500 hover:to-purple-600
">
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
