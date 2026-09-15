import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function TimelineItem({ year, title, description, delay, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-border" />
      )}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary border-4 border-background" />
      <div className="glass rounded-xl p-6">
        <span className="text-primary font-semibold text-sm">{year}</span>
        <h3 className="text-xl font-display font-bold text-white mt-2 mb-2">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const experiences = [
    {
      year: '2024 → Present',
      title: 'AI/ML Development & Software Development',
      description: 'Focusing on building intelligent applications, machine learning models, and software solutions. Working on academic projects, web applications, and GitHub contributions while enhancing skills in data structures and algorithms.'
    },
    {
      year: '2024',
      title: 'Academic Projects & Learning',
      description: 'Developed foundational skills in programming, algorithms, and software engineering. Built multiple projects including web applications and desktop software.'
    },
    {
      year: '2024',
      title: 'Programming Foundation',
      description: 'Started journey in computer science and programming. Learned core concepts of programming, data structures, and problem-solving.'
    }
  ];
  
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Academic & Project <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in software development and AI/ML
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              description={exp.description}
              delay={index * 0.2}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
