// import React from "react";
// import codehelp from '../assets/certificates/codehelp-certificate.png'
// import ps from '../assets/certificates/ps.png'
// import codekaro from '../assets/certificates/codekaroCSS.png'

// function Certifications() {
//   const certifications = [
//     { 
//       title: "CSS Bootcamp Completion Certificate", 
//       issuer: "Codekaro", 
//       year: "2023",
//       link: codekaro 
//     },
//     { 
//       title: "MERN Stack Web Development", 
//       issuer: "Codehelp", 
//       year: "2023",
//       link: codehelp 
//     },
//     { 
//       title: "Project Completion Certificates In Project School", 
//       issuer: "KMIT", 
//       year: "2024, 2025",
//       link: ps 
//     },
//   ];

//   return (
//     <section className="bg-gray-900 text-white py-16 px-10 min-h-screen">
//       <h2 className="text-4xl font-bold text-teal-400 text-center">Certifications</h2>
//       <div className="mt-10 space-y-6">
//         {certifications.map((cert, index) => (
//           <div key={index} className="w-full text-center p-6">
//             <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
//             <p className="text-gray-400 mt-1">Issued by {cert.issuer}</p>
//             <p className="text-gray-400 mt-1">{cert.year}</p>
//             {cert.link && (
//               <a
//                 className="text-teal-400 mt-2 inline-block hover:underline"
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Certificate
//               </a>
//             )}
//             <hr className="border-gray-700 mt-4" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// export default Certifications;


import React, { useState } from "react";
import codehelp from "../assets/certificates/codehelp-certificate.png";
import ps from "../assets/certificates/ps.png";
import codekaro from "../assets/certificates/codekaroCSS.png";

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
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
    <section className="bg-gray-900 text-white py-16 px-10">
      <h2 className="text-4xl font-bold text-teal-400 text-center">Certifications</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-400 mt-1">Issued by {cert.issuer}</p>
            <p className="text-gray-400 mt-1">{cert.year}</p>
            <button
              className="mt-3 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
              onClick={() => setSelectedCert(cert.link)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-5 rounded-lg relative max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedCert(null)}
            >
              X
            </button>
            <img src={selectedCert} alt="Certificate" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;