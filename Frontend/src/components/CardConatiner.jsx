import Card from "./Card";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import { projects } from "../data/projectsData";

function CardContainer() {

  return (
    <div className="relative mt-24 sm:mt-24 md:mt-10 w-full lg:w-[900px]">
      {/* Wrap all Cards inside a single AwesomeSlider */}
      <AwesomeSlider className="h-[420px] md:h-[490px]">
        {projects.map((project, index) => (
          <div className="w-full h-full" key={index}>
            <Card
              title={project.title}
              image={project.image}
              git={project.gitlink}
              desc={project.desc}
              demo={project.deploy}
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}

export default CardContainer;
