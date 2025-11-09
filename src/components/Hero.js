import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fullText = "Hi, I'm Ramya Harshitha Bolla";
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (indexRef.current < fullText.length) {
          const nextChar = fullText.charAt(indexRef.current);
          indexRef.current += 1;
          return prev + nextChar;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          {displayedText}
          <span className="inline-block animate-pulse text-indigo-600">|</span>
        </h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          Frontend Developer | Full Stack Developer
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <a
            href="/RamyaHarshitha_Bolla.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
