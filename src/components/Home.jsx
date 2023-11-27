import React from "react";

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
          I'm a Computer Engineering Student at CalPoly Pomona.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I specialize in full-stack developement. Currently I'm focused on
          Integrating Artificial Intelligence into responsive full-stack web
          applications.
        </p>

        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c54848] hover:border-[#c54848] ">
            <a
              target="_blank"
              href="https://www.dropbox.com/scl/fi/bpru0wdbk3f1ag7gl8zt2/57AF31D7-A14A-44F6-A6CE-287A792D8002.pdf?rlkey=3sbksfn8yd8zxax71uqerz2w1&dl=0"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
