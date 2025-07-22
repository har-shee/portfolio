import React from 'react';

const skills = [
  "Angular",
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "MongoDB",
  "SQL",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
