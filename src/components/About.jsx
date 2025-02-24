import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-[#0a0a0a] py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b3b]/20 to-[#ff7676]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <img
                src={Profile}
                alt="Profile"
                className="w-full max-w-[400px] rounded-2xl mx-auto shadow-2xl border border-white/5"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-dark-200/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end development.
                Born and raised in Nigeria, my journey in software development has been driven by a desire to create impactful solutions that make a difference.
              </p>
            </div>

            <div className="bg-dark-200/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Experience Highlights:</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-[#ff3b3b] rounded-full" />
                  <span>Software Engineering Intern at Capital One (Summer 2024)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-[#ff3b3b] rounded-full" />
                  <span>Incoming SWE Intern at Atlassian (Summer 2025)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 bg-[#ff3b3b] rounded-full" />
                  <span>Incoming SWE Intern at Amazon (Fall 2025)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
