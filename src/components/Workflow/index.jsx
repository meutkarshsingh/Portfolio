import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Pencil, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Analyze the problem and requirements deeply',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the architecture and user experience',
    icon: Pencil
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement the solution with clean code',
    icon: Code
  },
  {
    number: '04',
    title: 'Test',
    description: 'Validate functionality and performance',
    icon: TestTube
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Make the application usable for users',
    icon: Rocket
  }
];

function WorkflowStep({ step, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = step.icon;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="glass rounded-xl p-6 h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/20 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <span className="text-primary font-mono text-sm mb-1 block">
              {step.number}
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              {step.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-400">{step.description}</p>
      </div>
      
      {step.number !== '05' && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
        </div>
      )}
    </motion.div>
  );
}

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            How I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My development workflow from idea to deployment
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <WorkflowStep key={step.number} step={step} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
