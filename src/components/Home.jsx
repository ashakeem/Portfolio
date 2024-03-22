import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import TypewriterTitle from "./TypewriterTitle";

const Home = () => {
  return (
    <div name="homepage" className="w-full h-screen bg-[#000000]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c54848]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ayomide Hakeem,
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <TypewriterTitle />
        </h2>

        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I specialize in full-stack development, emphasizing unique and
          minimalistic design!. Currently I'm focused on Integrating Artificial
          Intelligence into full-stack web applications.
        </p>

        <div className="flex flex-row ">
          <button className="text-white border-2 px-4 py-2 my-2 flex items-center hover:bg-[#c54848] hover:bg-transparent duration-300 bg-[#950101]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/ayomidehakeem/"
            >
              {" "}
              <span className="hidden lg:flex mr-[8px] text-[20px]">
                LinkedIn
              </span>
              <FaLinkedin size={20} />
            </a>
          </button>
          <button className="text-white border-2 px-4 py-2 my-2 mx-2 flex items-center hover:bg-[#c54848] hover:bg-transparent duration-300  bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/ashakeem"
            >
              {" "}
              <span className="hidden lg:flex mr-[8px] text-[20px]">
                GitHub
              </span>
              <FaGithub size={20} />
            </a>
          </button>
          <button
            className="text-white border-2 px-4 py-2 my-2 flex items-center  hover:bg-[#c54848] hover:bg-transparent duration-300 bg-[#461111]"
            onClick={() => {
              window.open("mailto:emailayomidesuleimanh@gmail.com");
            }}
          >
            <span className="hidden lg:flex mr-[8px] text-[20px]">Email</span>
            <HiOutlineMail size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
