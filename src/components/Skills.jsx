
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import ReactImg from "../assets/react.png";
import Postgres from "../assets/postgres.png";
import Javascript from "../assets/javascript.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#c54848]  ">
            Skills
          </p>
          <p className="py-4">
            {" "}
            These are the programming languages and technologies I'm experienced
            with!
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-3 ">
        {/* <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div> */}
          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

       

          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Postgres} alt="HTML icon" />
            <p className="my-4">POSTGRES</p>
          </div>


          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
          </div>

          <div className="shadow-md shadow-[#161b22] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
