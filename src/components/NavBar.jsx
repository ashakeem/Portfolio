import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuItems = ['Home', 'About', 'Skills', 'Projects'];

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-black text-gray-300 z-[100] border-b border-white/5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            <Link to="home" smooth={true} duration={500} className="flex items-center">
              <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">Ayo</span>
              <span className="text-gray-200">mide</span>
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              className="relative group px-0"
            >
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={handleClick}
            className="relative z-[110] p-2 text-gray-300 focus:outline-none"
          >
            {nav ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[90] md:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-4"
                >
                  <Link
                    onClick={handleClick}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-2xl font-medium text-gray-300 hover:text-[#ff3b3b] transition-colors duration-300 block px-8 py-2"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
