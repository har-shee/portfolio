import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
      role: "Graduate Teaching Assistant (Math)",
      company: "University of Kansas",
      duration: "Jun 2025 – Present",
      details: [
        "Teaching undergraduate-level math courses, delivering lectures, and creating assessments in coordination with faculty.",
    "Holding office hours and tutoring sessions to support students’ learning and clarify mathematical concepts."
      ],
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University of Kansas",
      duration: "Aug 2024 – May 2025",
      details: [
        "Conducted weekly lab sessions for 50+ undergraduates in 'Introduction to Computing: Python'.",
        "Guided students through coding assignments, clarified key concepts, and provided personalized feedback on Python fundamentals."
      ],
    },
    {
      role: "Software Engineer",
      company: "IDS Next Business Solutions",
      duration: "Dec 2022 – Dec 2023",
      details: [
        "Built user-centric interfaces for hospitality platforms (hotel booking, KOT, billing) using Angular, TypeScript, and SCSS.",
        "Redesigned legacy features based on client requirements, improving functionality and reducing post-release issues.",
        "Enabled multilingual support using Angular Pipes and collaborated cross-functionally to enhance usability and clarity.",
      ],
    },
    {
      role: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      duration: "Mar 2021 – Sep 2022",
      details: [
        "Created highly interactive UIs using React, JavaScript, and CSS to boost user engagement.",
        "Automated 10,000+ test cases using Protractor, reducing smoke testing time from 6 hours to 30 minutes.",
        "Resolved production bugs, contributed to daily standups, and participated in requirement walk-throughs with QA and development teams."
      ],
    }
  ];
  
const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6
    }
  })
};

const Experience = () => {
  return (
    <section id="experience" className="bg-white text-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-2">Work Experience</h2>
        <p className="text-center text-gray-500 mb-12">My professional journey in software development</p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-blue-400"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeVariant}
              className={`mb-12 flex items-center w-full ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 px-4 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="rounded-lg bg-white text-gray-900 shadow-md border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-4 text-sm">{exp.duration}</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {exp.details.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 px-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
