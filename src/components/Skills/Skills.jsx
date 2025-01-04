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
    <div>
      <h1 className="text-5xl font-bold text-center my-10">Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
