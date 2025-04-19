import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { certificates } from "../data/certficationData";

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = certificates[currentIndex];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <motion.section
      id="certificates"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="text-white h-[90vh] mt-14 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-9 mx-5 sm:px-8"
    >
      <div className="max-w-6xl w-full h-full flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-teal-400 text-center md:text-left">
          Certifications
        </h2>
        <p className="mt-4 text-gray-300 text-lg text-center md:text-left">
          Explore my certifications below.
        </p>

        {/* Content */}
        <div className="mt-10 flex h-full flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Details */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-3 text-cyan-300">
                  {current.title}
                </h3>
                <p className="text-lg text-pink-300 font-medium mb-1">
                  Issued By {current.issuer}
                </p>
                <p className="text-sm text-gray-400">{current.year}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image + Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.link}
                src={current.link}
                alt={current.title}
                className="w-full max-h-[400px] object-contain rounded-lg shadow-lg bg-slate-800 p-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 3, scale: 1.03 }}
              />
            </AnimatePresence>

            {/* Next Button */}
            <button
              onClick={nextCertificate}
              className="mt-6 bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Certificates;
