import { data } from "../data/data.jsx";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ... (imports)

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b3b]/10 to-[#ff7676]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
    
    <div className="relative overflow-hidden rounded-2xl bg-dark-200/30 backdrop-blur-sm border border-white/5 group-hover:border-[#ff3b3b]/20 transition-all duration-500">
      <div className="aspect-video overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 sm:p-6 flex flex-col justify-end backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.name}</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs sm:text-sm bg-[#ff3b3b]/10 rounded-full text-[#ff3b3b] border border-[#ff3b3b]/20">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff3b3b] transition-colors duration-300"
              >
                <FaGithub size={18} />
                <span>Code</span>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff3b3b] transition-colors duration-300"
              >
                <FaExternalLinkAlt size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen bg-[#0a0a0a] py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] mt-4"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
