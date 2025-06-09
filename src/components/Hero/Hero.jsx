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
    <div
      className="min-h-screen md:min-h-[450px] lg:min-h-[600px] bg-violet-50 pt-20 px-4 lg:pt-20 md:py-10"
      style={{
        clipPath: `polygon(
    100% 0%, 0% 0%, 
    0.00% 93.13%, 2.00% 93.30%, 4.00% 93.32%, 6.00% 93.19%, 8.00% 92.92%, 
    10.00% 92.51%, 12.00% 91.99%, 14.00% 91.37%, 16.00% 90.70%, 18.00% 89.99%, 
    20.00% 89.28%, 22.00% 88.61%, 24.00% 88.00%, 26.00% 87.48%, 28.00% 87.07%, 
    30.00% 86.80%, 32.00% 86.68%, 34.00% 86.70%, 36.00% 86.87%, 38.00% 87.19%, 
    40.00% 87.63%, 42.00% 88.19%, 44.00% 88.82%, 46.00% 89.51%, 48.00% 90.22%, 
    50.00% 90.92%, 52.00% 91.58%, 54.00% 92.16%, 56.00% 92.65%, 58.00% 93.02%, 
    60.00% 93.25%, 62.00% 93.33%, 64.00% 93.26%, 66.00% 93.05%, 68.00% 92.69%, 
    70.00% 92.21%, 72.00% 91.63%, 74.00% 90.98%, 76.00% 90.28%, 78.00% 89.57%, 
    80.00% 88.88%, 82.00% 88.24%, 84.00% 87.68%, 86.00% 87.23%, 88.00% 86.90%, 
    90.00% 86.71%, 92.00% 86.67%, 94.00% 86.78%, 96.00% 87.04%, 98.00% 87.44%, 
    100.00% 87.95%
  )`,
      }}
    >
      <div className="lg:w-10/12 mx-auto mt-20 flex items-center justify-center flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co.com/wFdQYyL8/Ankon-2.jpg"
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
