import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          I'm a Master's student in Computer Science at the University of Kansas with a strong foundation in full-stack development. 
          Before diving into grad school, I worked as a Software Engineer for over 2.5 years where I built scalable, responsive web 
          applications using Angular, TypeScript, and modern UI practices.
          <br /><br />
          Over the years, I've developed a knack for turning complex requirements into clean, usable interfaces. Whether it's integrating APIs, 
          improving component reusability, or helping students learn Python code as a GTA, I enjoy both writing great code and making an impact.
          <br /><br />
          Outside of class and code, I love to paint and listen to music. I thrive in environments that mix structure with creativity, 
          and I’m always up for learning something new.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
