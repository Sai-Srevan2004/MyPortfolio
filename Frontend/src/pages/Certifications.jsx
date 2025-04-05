import React from "react";
import codehelp from '../assets/certificates/codehelp-certificate.png'
import ps from '../assets/certificates/ps.png'
import codekaro from '../assets/certificates/codekaroCSS.png'

function Certificates() {
  const certificates = [
    {
      title: "CSS Bootcamp Completion Certificate",
      issuer: "Codekaro",
      year: "2023",
      link: codekaro,
    },
    {
      title: "MERN Stack Web Development",
      issuer: "Codehelp",
      year: "2023",
      link: codehelp,
    },
    {
      title: "Project Completion Certificates In Project School",
      issuer: "KMIT",
      year: "2024, 2025",
      link: ps,
    },
  ];
  
  return (
    <section id="certificates" className="text-white py-20 px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-teal-400 text-center md:text-left">Certificates</h2>
        <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
          Here are some of the certifications I've earned:
        </p>

        {/* Certificates Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={certificate.link}
                alt={`${certificate.title} issued by ${certificate.issuer}`}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-2xl font-semibold text-white mt-4">{certificate.title}</h3>
              <p className="text-teal-300 font-medium">{certificate.issuer}</p>
              <p className="text-gray-400 text-sm">{certificate.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
