import React from "react";
import codehelp from '../assets/certificates/codehelp-certificate.png'
import ps from '../assets/certificates/ps.png'

function Certifications() {
  const certifications = [
    { 
      title: "CSS Bootcamp Completion Certificate", 
      issuer: "Codekaro", 
      year: "2023",
      link: "https://codekaro.in/course-certificate/81393bfc5cafb496" 
    },
    { 
      title: "MERN Stack Web Development", 
      issuer: "Codehelp", 
      year: "2023",
      link: codehelp 
    },
    { 
      title: "Project Completion Certificates In Project School", 
      issuer: "KMIT", 
      year: "2024, 2025",
      link: ps 
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-10 min-h-screen">
      <h2 className="text-4xl font-bold text-teal-400 text-center">Certifications</h2>
      <div className="mt-10 space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="w-full text-center p-6">
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-400 mt-1">Issued by {cert.issuer}</p>
            <p className="text-gray-400 mt-1">{cert.year}</p>
            {cert.link && (
              <a
                className="text-teal-400 mt-2 inline-block hover:underline"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
            <hr className="border-gray-700 mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
