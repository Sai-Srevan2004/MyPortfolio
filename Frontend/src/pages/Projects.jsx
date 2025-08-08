import Carousel from "../components/ui/caurosel";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <div id="projects" className="relative overflow-hidden w-full h-full py-20 px-2 sm:px-0">
      <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 text-center mb-4">
        Projects
      </h2>
      <p className="text-gray-300 text-base sm:text-lg sm:text-center mb-12 text-left">
        Explore some of my recent work and real-time applications.
      </p>
      <Carousel slides={projects} />
    </div>
  );
}
