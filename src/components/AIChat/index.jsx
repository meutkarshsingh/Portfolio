import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const mockResponses = {
  'projects': `Utkarsh has built several projects including:\n\n• Diabetes Prediction System - ML-based web app for diabetes risk prediction\n• Face Recognition Attendance System - Automated attendance using computer vision\n• Expense Tracker for Students - Desktop app for expense management\n• Garbage Collection Algorithm Visualizer - Interactive visualization of GC algorithms\n\nYou can view all projects in the Projects section or check the GitHub repositories.`,
  
  'skills': `Utkarsh's technical skills include:\n\nProgramming: Python, Java, C/C++, JavaScript\n\nAI/ML: Machine Learning, Data Preprocessing, Feature Scaling, Predictive Modeling, Computer Vision, Scikit-learn\n\nWeb Development: HTML, CSS, JavaScript, React, Flask, REST APIs\n\nDatabases: MySQL, SQL\n\nTools: Git, GitHub, VS Code`,
  
  'diabetes': `The Diabetes Prediction System is a machine learning-based web application that predicts diabetes risk based on health parameters. It uses Python, Machine Learning, Flask, and Scikit-learn. Key features include data preprocessing, missing-value handling, feature scaling, model training, and a Flask web interface for user interaction.`,
  
  'contact': `You can contact Utkarsh through:\n\nEmail: meutkarsh2004singh@gmail.com\nGitHub: https://github.com/meutkarshsingh\nLinkedIn: https://www.linkedin.com/in/utkarsh-singh\n\nOr use the contact form in the Contact section.`,
  
  'github': `Utkarsh's GitHub profile is available at: https://github.com/meutkarshsingh\n\nHe actively contributes to open source and maintains several repositories including AI/ML projects, web applications, and algorithm visualizers.`,
  
  'default': `I can help you learn about Utkarsh's portfolio. Try asking about:\n\n• Projects\n• Skills\n• Diabetes Prediction System\n• How to contact\n• GitHub\n\nOr explore the website sections directly!`
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Utkarsh AI. Ask me anything about the portfolio!' }
  ]);
  const [input, setInput] = useState('');
  
  const getResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('project')) return mockResponses.projects;
    if (lowerMessage.includes('skill')) return mockResponses.skills;
    if (lowerMessage.includes('diabetes')) return mockResponses.diabetes;
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) return mockResponses.contact;
    if (lowerMessage.includes('github')) return mockResponses.github;
    
    return mockResponses.default;
  };
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 500);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/50 transition-all"
        aria-label="Open AI Chat"
      >
        <MessageSquare size={24} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 max-h-[500px] glass rounded-2xl shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Utkarsh AI</h3>
                  <p className="text-xs text-gray-400">Portfolio Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-card rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-card text-gray-300'
                  }`}>
                    {message.role === 'user' ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>
                  <div className={`flex-1 p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary/20 text-white'
                      : 'bg-card/50 text-gray-300'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about the portfolio..."
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
