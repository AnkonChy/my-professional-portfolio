import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="pt-16 md:w-10/12 md:mx-auto flex flex-col lg:flex-row"
      id="aboutMe"
    >
      <div
        className="flex-1"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
      >
        <img
          src="https://i.ibb.co/ZR3CZFxG/Programming-pana.png"
          className="md:pr-28"
          alt=""
        />
      </div>
      <div
        className="flex-1 p-4 lg:p-0"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
      >
        <h1 className="text-5xl font-bold my-10 text-center">About Me</h1>
        <p className="text-lg font-medium text-justify">
          My programming journey began in university, where I built a strong
          foundation in C, C++, and Java. As I transitioned into web
          development, I gained experience in HTML, CSS, and JavaScript, along
          with backend technologies like PHP and Laravel. Later, I delved into
          modern JavaScript frameworks, mastering React to create dynamic and
          responsive user interfaces. Additionally, I have worked with
          Express.js and MongoDB, enabling me to develop full-stack
          applications. Passionate about building clean, efficient, and
          user-centric solutions, I continuously explore emerging technologies
          to enhance my expertise and deliver high-quality web experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
