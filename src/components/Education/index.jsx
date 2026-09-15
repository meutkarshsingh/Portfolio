import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-7 sm:p-8 relative overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_30%)]" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      Current
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    B.Tech — Computer Science & Engineering (AI/ML)
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <Calendar size={16} />
                      <span>Currently pursuing</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <MapPin size={16} />
                      <span>Computer Science & Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Focus Areas</h4>
                  <p className="text-gray-400">Focused on AI/ML, software engineering, and practical project work.</p>
                </div>
                
                <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Machine Learning', 'Deep Learning', 'Database Systems', 'Web Development', 'Operating Systems'].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/20 shadow-[0_0_15px_rgba(139,92,246,0.12)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
