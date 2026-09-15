import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';

const iconMap = {
  'code': Icons.Code,
  'coffee': Icons.Coffee,
  'cpu': Icons.Cpu,
  'javascript': Icons.Code2,
  'brain': Icons.Brain,
  'database': Icons.Database,
  'sliders': Icons.Sliders,
  'trending-up': Icons.TrendingUp,
  'eye': Icons.Eye,
  'bot': Icons.Bot,
  'file-code': Icons.FileCode,
  'palette': Icons.Palette,
  'atom': Icons.Atom,
  'flask': Icons.FlaskConical,
  'server': Icons.Server,
  'table': Icons.Table,
  'git-branch': Icons.GitBranch,
  'github': Icons.Code2,
};

function SkillCard({ skill, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = iconMap[skill.icon] || Icons.Code;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-xl p-4 cursor-pointer group"
    >
      <Icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
      <h3 className="text-white font-medium">{skill.name}</h3>
    </motion.div>
  );
}

function SkillCategory({ category, skills, delay }) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 text-left"
      >
        <h3 className="text-xl font-display font-bold gradient-text">{category}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icons.ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              delay={index * 0.05}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const categories = [
    { name: 'Programming', skills: skills.programming },
    { name: 'AI / Machine Learning', skills: skills.ai_ml },
    { name: 'Web Development', skills: skills.web },
    { name: 'Databases', skills: skills.databases },
    { name: 'Tools', skills: skills.tools },
  ];
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category.name}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
