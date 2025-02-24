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
    className="group relative cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b3b]/10 to-[#ff7676]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-300" />
    
    <div className="relative overflow-hidden rounded-2xl bg-dark-200/30 backdrop-blur-sm border border-white/5 group-hover:border-[#ff3b3b]/20 transition-all duration-500">
      <div className="aspect-video overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 sm:p-6 flex flex-col justify-end backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">{project.name}</h3>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen bg-[#0a0a0a] py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#ff3b3b] to-[#ff7676] mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
