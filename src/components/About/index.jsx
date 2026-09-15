import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../../data/profile';

function StatCard({ label, value, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-4 text-center"
    >
      <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-gray-400 text-xs uppercase tracking-[0.12em]">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Computer Science & Engineering student passionate about Artificial Intelligence, Machine Learning, and Software Development
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
                {profile.name}
              </h3>
              <p className="text-primary font-medium mb-4">{profile.subtitle}</p>
              <div className="space-y-3 text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                <p>
                  Hi, I'm {profile.name} — a Computer Science & Engineering student passionate about <strong className="text-white">Artificial Intelligence, Machine Learning, and Software Development</strong>.
                </p>
                <p>
                  I enjoy turning ideas into practical technology. My journey in computer science has been driven by curiosity and a simple mindset: <strong className="text-white">learn how things work, build something with them, and keep improving.</strong>
                </p>
                <p>
                  I'm currently pursuing my <strong className="text-white">B.Tech in Computer Science and Engineering with a minor in Artificial Intelligence & Machine Learning</strong>, where I've developed a strong foundation in Data Structures & Algorithms, Database Management, Software Development, AI/ML, and Computer Vision.
                </p>
                <p>
                  Beyond academics, I believe the best way to learn technology is by building. I've worked on projects involving machine learning, face recognition, expense management, algorithm visualization, and intelligent applications, gaining hands-on experience in taking an idea from concept to implementation.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white mb-2">What I'm Interested In</h4>
                {profile.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="inline-block mr-2 mb-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-xl p-5">
              <h4 className="text-lg font-semibold text-white mb-4">Journey</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Started Programming</p>
                    <p className="text-gray-400 text-sm">Foundation in computer science</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">B.Tech CSE (AI/ML)</p>
                    <p className="text-gray-400 text-sm">Specialized in AI and Machine Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Building Projects</p>
                    <p className="text-gray-400 text-sm">Creating real-world solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-5 mt-6">
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                I'm continuously exploring new technologies, experimenting with ideas, and strengthening my development skills. My goal is to become an engineer who doesn't just <strong className="text-white">write code</strong>, but understands the problem, chooses the right technology, and builds solutions that create real value.
              </p>
              <p className="text-primary font-semibold mb-4">Currently learning. Constantly building. Always curious.</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm open to <strong className="text-white">internships, collaborative projects, and opportunities to learn and contribute.</strong> Let's connect and build something meaningful.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 lg:pt-2"
          >
            <StatCard label="Projects" value={profile.stats.projects} delay={0.5} />
            <StatCard label="Technologies" value={profile.stats.technologies} delay={0.6} />
            <StatCard label="AI/ML Focus" value="Active" delay={0.7} />
            <StatCard label="GitHub" value={profile.stats.github} delay={0.8} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
