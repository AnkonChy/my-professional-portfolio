import { useEffect, useState } from "react";
import Skill from "../Skill/Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="py-16 w-full md:max-w-7xl md:mx-auto">
      <h1
        className="text-5xl font-bold text-center my-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
