import { motion } from 'framer-motion';
import { Code2, BriefcaseBusiness, Mail, Heart } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Code2,
      href: profile.github
    },
    {
      name: 'LinkedIn',
      icon: BriefcaseBusiness,
      href: profile.linkedin
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${profile.email}`
    }
  ];
  
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-bold gradient-text mb-2">
              {profile.name}
            </h3>
            <p className="text-gray-400 text-sm">
              AI/ML Developer | Software Developer
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-all hover:scale-110"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-right"
          >
            <p className="text-gray-400 text-sm flex items-center justify-end gap-2">
              © 2026 {profile.name}
              <Heart size={14} className="text-primary" />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
