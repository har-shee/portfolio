import React from 'react';
import { motion } from 'framer-motion';

const educationList = [
  {
    school: "University of Kansas",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2024 – Present",
    gpa: "4.0 / 4.0"
  },
  {
    school: "SASTRA University",
    degree: "Bachelor of Technology in Electronics and Communications Engineering",
    duration: "Jun 2017 – Jul 2021",
    gpa: "7.86 / 10.0"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-600">Education</h2>
        <div className="space-y-10">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-50 border border-gray-200 shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.duration}</p>
              <p className="text-gray-700 mt-1 font-medium">GPA: {edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
