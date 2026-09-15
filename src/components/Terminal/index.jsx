import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { profile } from '../../data/profile';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', content: 'Welcome to Utkarsh\'s terminal' },
    { type: 'system', content: 'Type "help" to see available commands' }
  ]);
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef(null);
  
  const commands = {
    whoami: () => [{ type: 'output', content: 'utkarsh-singh' }],
    skills: () => [
      { type: 'output', content: 'Programming:' },
      ...skills.programming.map(s => ({ type: 'output', content: `  - ${s.name}` })),
      { type: 'output', content: '' },
      { type: 'output', content: 'AI/ML:' },
      ...skills.ai_ml.map(s => ({ type: 'output', content: `  - ${s.name}` })),
      { type: 'output', content: '' },
      { type: 'output', content: 'Web Development:' },
      ...skills.web.map(s => ({ type: 'output', content: `  - ${s.name}` }))
    ],
    projects: () => projects.map(p => ({ type: 'output', content: `  - ${p.title}` })),
    status: () => [{ type: 'output', content: 'Building intelligent software...' }],
    contact: () => [
      { type: 'output', content: `Email: ${profile.email}` },
      { type: 'output', content: `GitHub: ${profile.github}` },
      { type: 'output', content: `LinkedIn: ${profile.linkedin}` }
    ],
    help: () => [
      { type: 'output', content: 'Available commands:' },
      { type: 'output', content: '  whoami    - Display user info' },
      { type: 'output', content: '  skills    - List technical skills' },
      { type: 'output', content: '  projects  - Show projects' },
      { type: 'output', content: '  status    - Current status' },
      { type: 'output', content: '  contact   - Contact information' },
      { type: 'output', content: '  clear     - Clear terminal' },
      { type: 'output', content: '  help      - Show this help' }
    ],
    clear: () => {
      setOutput([]);
      return [];
    }
  };
  
  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setOutput(prev => [...prev, { type: 'input', content: `$ ${cmd}` }]);
    
    if (trimmedCmd === '') return;
    
    const commandFunc = commands[trimmedCmd];
    if (commandFunc) {
      const result = commandFunc();
      setOutput(prev => [...prev, ...result]);
    } else {
      setOutput(prev => [...prev, { type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` }]);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(currentCommand);
    setCurrentCommand('');
  };
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  
  const copyToClipboard = () => {
    const text = output.map(o => o.content).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Developer <span className="gradient-text">Terminal</span>
          </h2>
          <p className="text-gray-400">
            Interact with the terminal to explore my portfolio
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-400">utkarsh@portfolio</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-card rounded transition-colors"
              title="Copy output"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
          
          <div
            ref={terminalRef}
            className="p-4 h-80 overflow-y-auto font-mono text-sm space-y-2"
          >
            {output.map((line, index) => (
              <div
                key={index}
                className={
                  line.type === 'input'
                    ? 'text-primary'
                    : line.type === 'error'
                    ? 'text-red-400'
                    : line.type === 'system'
                    ? 'text-gray-500'
                    : 'text-gray-300'
                }
              >
                {line.content}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="px-4 py-3 bg-card border-t border-border flex items-center gap-2">
            <span className="text-primary font-mono">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none"
              placeholder="Type a command..."
              autoComplete="off"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
