import { useEffect, useState } from "react";
import Project from "../Project/Project";
import "aos/dist/aos.css";
import Aos from "aos";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Aos.init();
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="bg-[#f8f9f9]">
      <div className="px-4 pt-10 pb-16 md:w-10/12 md:mx-auto" id="projects">
        <h1 className="text-5xl font-bold text-center my-10">Projects</h1>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
           data-aos-duration="1000"
        >
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
        {/* <div className="flex flex-col items-center justify-center my-7">
          <button className="px-2 py-2 rounded-xl text-black bg-base-100 font-medium border-2 border-[#5b21b6] hover:bg-[#5b21b6] hover:text-white">
            See more
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
