import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm Ramya Harshitha Bolla
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Frontend Developer | Full Stack Developer 
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/BRH.pdf"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
