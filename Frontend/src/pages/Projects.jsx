import Carousel from "../components/ui/caurosel";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h2 className="text-5xl sm:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-600 to-cyan-400 text-center mb-4">
        Projects
      </h2>
      <p className="text-gray-300 text-lg text-center mb-12 sm:text-left">
        Explore some of my recent work and real-time applications.
      </p>
      <Carousel slides={projects} />
    </div>
  );
}
