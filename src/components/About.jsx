import React from "react";
import Profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#161616] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#c54848]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] items-center w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex items-center sm:items-end text-4xl font-bold">
            <img
              src={Profile}
              alt="Profile Picture"
              className=" w-2/3 rounded-full mx-auto"
            />
          </div>
          <div className="sm:text-left sm:text-1xl lg:text-3xl font-bold ">
            <p>
              Raised in Nigeria, currently a junior majoring in Computer Engineering at California State
              Polytechnic University, Pomona. <span className="text-[#c54848]">Welcome to my digital space!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
