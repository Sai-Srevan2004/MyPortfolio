import React from "react";

function Achievements() {
  const achievements = [
    { title: "Google Cloud Certification", year: "2024" },
    { title: "AWS Certified Developer - Associate", year: "2023" },
    { title: "Winner - Hackathon XYZ", year: "2023" },
    { title: "LeetCode 1000+ Problems Solved", year: "2024" },
  ];

  const certifications = [
    { title: "CSS bootcamp Completion Certificate.", issuer: "Codekaro", year: "2023" ,link:"https://codekaro.in/course-certificate/81393bfc5cafb496"},
    { title: "MERN stack Web Development", issuer: "Codehelp", year: "2023",link:"" },
    { title: "Project Completion Certificates In Project School", issuer: "KMIT", year: "2023,2024",link:"" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen">
      <h2 className="text-4xl font-bold text-teal-400 text-center">Achievements & Certifications</h2>

      {/* Achievements Section */}
      <h3 className="text-2xl font-semibold text-white mt-10 text-left">🏆 Achievements</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 w-72 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
            <p className="text-gray-400 mt-2">{achievement.year}</p>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <h3 className="text-2xl font-semibold text-white mt-12 text-left">📜 Certifications</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 w-72 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-400 mt-1">Issued by {cert.issuer}</p>
            <p className="text-gray-400 mt-1">{cert.year}</p>
            <a className="text-gray-500 mt-1" href={cert.link}>link</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
