import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { Code2 as Github, ExternalLink, X } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-48 object-cover rounded-xl mb-6"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-display font-bold gradient-text mb-4">
          {project.title}
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Problem</h3>
            <p className="text-gray-300">{project.problem}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Solution</h3>
            <p className="text-gray-300">{project.solution}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
            <p className="text-gray-300">{project.architecture}</p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass hover:bg-card text-white rounded-lg font-medium transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, delay, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onClick(project)}
      className="glass rounded-xl p-6 cursor-pointer group"
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="relative w-full aspect-[16/9] object-cover rounded-lg mb-5 transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="mb-4">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-border text-gray-400 rounded text-xs">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="flex items-center gap-2 text-primary text-sm font-medium"
      >
        <span>View Details</span>
        <Github size={16} />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world applications and solutions I've built
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
