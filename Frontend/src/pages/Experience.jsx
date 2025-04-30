import { experiences } from "../data/experienceData";
import img from "../assets/images/image.png"; // Add a relevant image in assets

function Experience() {
  return (
    <section
      id="experience"
      className=" text-white py-20 px-8 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Experience Image */}
        <div className="hidden md:block md:w-1/2 bg-transparent rounded-sm">
          <img
            src={img}
            alt="Experience Illustration"
            className="w-full max-w-sm mx-auto animate-float drop-shadow-xl bg-transparent"
          />
        </div>

        {/* Right: Experience Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-center md:text-left">
            Experience
          </h2>
          <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
            Work & Contributions:
          </p>

          <div className="mt-8 space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-800 relative transition duration-300 ease-in-out transform hover:scale-105 shadow-lg border border-transparent hover:border-2 hover:border-yellow-400 hover:bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600"
              >
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-pink-300 font-medium mt-2">
                  {exp.company} • {exp.duration}
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
