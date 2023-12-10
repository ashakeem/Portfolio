import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

const NavBar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3D0000] text-gray-300">
      <div>
        <h1 className="ayo text-2xl font-bold">
          <Link to="homepage" smooth={true} duration={500}>
            <span className=" text-[#c54848]">A</span>yomide
          </Link>
        </h1>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="homepage" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* {mobile menu */}
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#3D0000] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="homepage"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavBar;
