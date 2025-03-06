import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import TypewriterTitle from "./TypewriterTitle";

const TiltCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-dark-200/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div name="home" className="w-full h-screen relative bg-black">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center">
        <div className="flex flex-col gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-5 py-2 bg-[#ff3b3b]/5 backdrop-blur-sm rounded-xl border border-[#ff3b3b]/10">
              <p className="text-[#ff3b3b] font-medium">Hi, my name is</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className="text-gray-200">Ayomide</span>{" "}
              <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">
                Hakeem
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl text-gray-400 font-light"
          >
            <TypewriterTitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 max-w-[600px] leading-relaxed"
          >
            I'm a software developer and my passion lies in crafting efficient, scalable, and user-friendly solutions to tackle real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4"
          >
            {[
              { href: "https://github.com/ashakeem", icon: FaGithub },
              { href: "https://linkedin.com/in/ayomidehakeem", icon: FaLinkedin },
              { href: "mailto:ayomidesuleimanh@gmail.com", icon: HiOutlineMail }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#ff3b3b]/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-4 bg-dark-200/30 backdrop-blur-sm rounded-xl border border-white/5 hover:border-[#ff3b3b]/20 transition-all duration-300">
                  <link.icon size={22} className="text-gray-400 group-hover:text-[#ff3b3b] transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
