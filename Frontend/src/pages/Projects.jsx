
import CardContainer from "../components/CardConatiner";


function Projects() {
  return (
    <section id="projects" className=" text-white py-9 md:py-16 px-10 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Projects</h2>
      <p className="mt-2 text-gray-300 text-lg text-center max-w-2xl">
        Here are some of my latest projects showcasing my skills and expertise.
      </p>
      <CardContainer />
    </section>
  );
}

export default Projects;
