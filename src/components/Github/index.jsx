import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2 as GithubIcon, Star, GitFork, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';

function RepoCard({ repo, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.a
      ref={ref}
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-xl p-6 block group"
    >
      <div className="flex items-start justify-between mb-4">
        <GithubIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
        {repo.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{repo.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        {repo.language && (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stars && (
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>{repo.stars}</span>
          </div>
        )}
        {repo.forks && (
          <div className="flex items-center gap-1">
            <GitFork size={14} />
            <span>{repo.forks}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default function Github() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const repositories = [
    {
      name: 'Diabetes-Prediction-System',
      description: 'Machine learning-based web application for diabetes risk prediction',
      url: 'https://github.com/meutkarshsingh/Diabetes-Prediction-System/',
      language: 'Python',
      stars: 0,
      forks: 0
    },
    {
      name: 'Face-Recognition-Attendance-System',
      description: 'Automated attendance system using computer vision and face recognition',
      url: 'https://github.com/meutkarshsingh/Face-Recognition-Attendance-System',
      language: 'Python',
      stars: 0,
      forks: 0
    },
    {
      name: 'Expense-Tracker-for-Students',
      description: 'Student-focused expense management desktop application',
      url: 'https://github.com/meutkarshsingh/Expense-Tracker-for-Students',
      language: 'Java',
      stars: 0,
      forks: 0
    },
    {
      name: 'Garbage-Collection-Algorithm-Visualizer',
      description: 'Interactive visualization of garbage collection algorithms',
      url: 'https://github.com/meutkarshsingh/Garbage-Collection-Algorithm-Visualizer',
      language: 'Java',
      stars: 0,
      forks: 0
    }
  ];
  
  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Building in <span className="gradient-text">Public</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out my GitHub repositories and contributions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {repositories.map((repo, index) => (
            <RepoCard key={repo.name} repo={repo} delay={index * 0.1} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            <GithubIcon size={20} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
