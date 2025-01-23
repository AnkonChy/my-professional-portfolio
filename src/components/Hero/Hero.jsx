import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen lg:min-h-[600px] bg-violet-50 lg:pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/J2627KR/Ankon-Chowdhury.jpg"
          className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-top shadow-2xl"
        />
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mt-6 lg:mt-0">
            Hi, I&apos;m a passionate Frontend Developer
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
          <button className="btn bg-[#7c3aed] hover:bg-[#5b21b6] text-white my-2">
            Download Resume
          </button>

          {/* #5b21b6 */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
