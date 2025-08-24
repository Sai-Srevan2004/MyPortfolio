import img from "../assets/edu.webp"; 

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    institution: "Keshav Memorial Institute of Technology, Hyderabad, Telangana",
    duration: "2022 - 2026",
    grade: "CGPA: 8.72",   
  },
  {
    degree: "Intermediate (12th)",
    branch: "MPC (Maths, Physics, Chemistry)",
    institution: "Sree Vedha Saraswathi Junior College, Narayanpet, Telangana",
    duration: "2020 - 2022",
    grade: "Percentage: 97.9%",   
  },
  {
    degree: "Secondary School (10th)",
    institution: "Government High School, Narayanpet, Telangana",
    duration: "2019 - 2020",
    grade: "GPA: 10",   
  },
];

function Education() {
  return (
    <section
      id="education"
      className="text-white py-20 px-8 min-h-full flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="hidden rounded-lg md:block md:w-1/3">
          <img
            src={img}
            alt="Education Illustration"
            className="w-full max-w-xs mx-auto rounded-lg animate-float ring-2 ring-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          />
        </div>

        {/* Right: Education Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Education
          </h2>
          
          <div className="mt-10 space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-900/60 p-6 rounded-lg shadow-md border border-gray-700 hover:border-blue-400 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  {edu.branch && (
                    <p className="text-sm text-gray-400">{edu.branch}</p>
                  )}
                  <p className="text-gray-300 mt-1">{edu.institution}</p>
                  <p className="text-sm text-green-400 mt-1">{edu.grade}</p> 
                </div>
                <span className="text-sm text-cyan-400 mt-3 md:mt-0 md:text-right">
                  {edu.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
