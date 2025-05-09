
import Carousel from "../components/ui/caurosel";
import { projects } from "../data/projectsData";
export default function Projects() {
 
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={projects} />
    </div>
  );
}
