import { FaCode, FaTools, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b3b]/10 to-[#ff7676]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
    
    <div className="relative bg-dark-200/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/5">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-[#ff3b3b]/5 rounded-xl">
          <Icon size={24} className="text-[#ff3b3b]" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-200">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group/skill"
          >
            <div className="min-h-[60px] flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 rounded-xl border border-white/5 hover:border-[#ff3b3b]/20 transition-all duration-300">
              <span className="text-xs sm:text-sm text-gray-300 font-medium text-center group-hover/skill:text-[#ff3b3b] transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "Go" },
        { name: "SQL" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: FaTools,
      skills: [
        { name: "React" },
        { name: "Django" },
        { name: "OpenCV" },
        { name: "Scikit-Learn" },
        { name: "NumPy" },
      ],
    },
    {
      title: "Databases & Tools",
      icon: FaDatabase,
      skills: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "PostgreSQL" },
        { name: "Git" },
      ],
    },
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-black py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] mt-4"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
