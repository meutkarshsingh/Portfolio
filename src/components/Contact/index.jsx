import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Code2, BriefcaseBusiness, Send, CheckCircle } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Code2,
      href: profile.github,
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: BriefcaseBusiness,
      href: profile.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${profile.email}`,
      color: 'hover:text-primary'
    }
  ];
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Let's Build Something <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-lg text-gray-400 ${link.color} transition-all hover:scale-110`}
                    aria-label={link.name}
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
