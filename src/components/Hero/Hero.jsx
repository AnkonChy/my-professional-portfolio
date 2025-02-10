import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import Typical from "react-typical";

const PDF_FILE = "http://localhost:5173/Resume-of-Ankon-Chowdhury.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume-of-Ankon-Chowdhury.pdf";
    link.download = "Resume-of-Ankon-Chowdhury";
    link.click();
  };
  return (
    <div className="min-h-screen md:min-h-[450px] lg:min-h-[600px] bg-violet-50 pt-20 px-4 lg:pt-20 md:py-10">
      <div className="lg:w-10/12 mx-auto mt-20 flex items-center justify-center flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co.com/J2627KR/Ankon-Chowdhury.jpg"
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-top shadow-2xl lg:mb-10"
          />
        </div>
        <div className="lg:w-1/2 mt-10 md:mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I&apos;m a passionate{" "}
            <span className="text-slate-700">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Enthusiast",
                  "MERN Stack Developer",
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="py-6 font-medium">
            I transform visions into functional, eye-catching websites.
          </p>
          <div className="flex items-center gap-1 mt-1 mb-2">
            <div>
              <a href="https://github.com/AnkonChy" target="_blank">
                <img
                  className="w-10 h-10"
                  src="https://img.icons8.com/?size=64&id=3tC9EQumUAuq&format=png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ankon-chowdhury/"
                target="_blank"
              >
                <img
                  className="w-10 h-10"
                  src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://x.com/AnkonChy2682" target="_blank">
                <img
                  className="w-10 h-10"
                  src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="btn bg-[#7c3aed] hover:bg-[#5b21b6] text-white my-2"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
