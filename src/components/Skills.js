import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "HTML", "CSS", "Bootstrap", "Tailwind CSS",
  "Angular", "React", 
  "JavaScript", "TypeScript", "Python", "Java", "SQL",
  "MongoDB", "MySQL",
  "Git", "GitHub", "GitLab",
  "JIRA", "Ghidra"
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4
    }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-indigo-50 text-indigo-800 font-medium shadow-md p-4 rounded-lg hover:shadow-xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
