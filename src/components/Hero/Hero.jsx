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
    <div className="hero min-h-screen lg:min-h-[600px] bg-violet-50 lg:pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/J2627KR/Ankon-Chowdhury.jpg"
          className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-top shadow-2xl"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 lg:mt-0">
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
              <img
                className="w-10 h-10"
                src="https://img.icons8.com/?size=64&id=3tC9EQumUAuq&format=png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-10 h-10"
                src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-10 h-10"
                src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
                alt=""
              />
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="btn bg-[#7c3aed] hover:bg-[#5b21b6] text-white my-2"
          >
            Download Resume
          </button>

          {/* #5b21b6 */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
