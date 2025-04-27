import { certificates } from "../data/certficationData";

function Certificates() {
  return (
    <section
      id="certificates"
      className="text-white min-h-[90vh] flex flex-col items-center justify-center px-4 py-10"
    >
      <h2 className="text-4xl font-bold shine-text mb-8 text-center">
        Certifications
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-center">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border-[1px] border-cyan-700 hover:scale-105 transition p-4 flex flex-col items-center shadow-lg rounded-xl"
            
          >
            <img
              src={cert.link}
              alt={cert.title}
              className="w-full h-48 object-contain rounded-lg mb-4  p-2"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{cert.title}</h3>
            <p className="text-sm text-pink-300 mb-1">Issued by {cert.issuer}</p>
            <p className="text-xs text-gray-400">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
