import { certificates } from "../data/certficationData";

function Certificates() {
  return (
    <section
      id="certificates"
      className=" text-white min-h-[90vh] flex flex-col items-center justify-center px-4 py-16"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-10 text-center">
        Certifications
      </h2>

      {/* Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 text-center">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="rounded-xl p-[1px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-transform transform hover:scale-[1.03]"
          >
            <div className="bg-gray-900 rounded-xl p-6 h-full">
              <img
                src={cert.link}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md mb-4 bg-white p-2"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-pink-200 mb-1">Issued by {cert.issuer}</p>
              <p className="text-xs text-gray-300">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
