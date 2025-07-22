import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-600">Contact</h2>
        <p className="mb-8 text-lg">Let's connect! I'm always open to opportunities, collaborations, or just a chat.</p>
        
        <div className="flex justify-center gap-8 text-indigo-700 text-lg">
          <a href="mailto:bollaramyaharshitha@gmail.com" className="flex items-center gap-2 hover:text-indigo-900">
            <Mail size={20} /> Mail
          </a>
          <a href="https://github.com/har-shee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-900">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ramyaharshithabolla/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-900">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
