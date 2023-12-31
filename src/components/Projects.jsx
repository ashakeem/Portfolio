import React from "react";
import { data } from "../data/data.jsx";

// ... (imports)

const Projects = () => {
  const projects = data;

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#161616]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#c54848]">
            Featured Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-1xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  {/* Code Button */}
                  {item.github && (
                    <a href={item.github} target="_blank">
                      <button
                        className={`text-center rounded-lg px-4 py-3 m-2 
                          bg-white text-gray-700 font-bold text-lg ${
                            item.github === "" ? "hidden" : ""
                          }`}
                      >
                        Code
                      </button>
                    </a>
                  )}

                  {/* Live Button */}
                  {item.live && (
                    <a href={item.live} target="_blank">
                      <button
                        className={`text-center rounded-lg px-4 py-3 m-2 
                          bg-white text-gray-700 font-bold text-lg ${
                            item.live === "" ? "hidden" : ""
                          }`}
                      >
                        Live Website
                      </button>
                    </a>
                  )}
                  {/* Demo Button */}
                  {item.demo && (
                    <a href={item.demo} target="_blank">
                      <button
                        className={`text-center rounded-lg px-4 py-3 m-2 
                          bg-white text-gray-700 font-bold text-lg ${
                            item.demo === "" ? "hidden" : ""
                          }`}
                      >
                        Video Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
