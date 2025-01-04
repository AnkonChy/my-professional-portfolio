import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen lg:min-h-[500px] bg-violet-50 mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/J2627KR/Ankon-Chowdhury.jpg"
          className="w-80 h-80 rounded-full object-top shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Hi, I&apos;m a passionate Frontend Developer
          </h1>
          <p className="py-6">
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
          <button className="btn btn-accent my-2">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
