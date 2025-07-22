import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">RHB</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#education" className="hover:text-indigo-600">Education</a></li>
          <li><a href="#experience" className="hover:text-indigo-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
