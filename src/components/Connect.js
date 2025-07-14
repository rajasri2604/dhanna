import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Connect = () => (
  <section id="connect" className="py-20 bg-white text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10">
      Connect With Me
    </h2>

    <div className="flex justify-center gap-6 sm:gap-8 flex-wrap px-4">
      {/* GitHub */}
      <a
        href="https://github.com/rajasri2604"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition duration-300 shadow-md"
      >
        <FaGithub className="text-xl" />
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/rajasrirk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base border-2 border-primaryPurple rounded-full hover:bg-primaryPurple hover:text-white transition duration-300 shadow-md"
      >
        <FaLinkedin className="text-xl" />
        LinkedIn
      </a>

      
    </div>
  </section>
);

export default Connect;
