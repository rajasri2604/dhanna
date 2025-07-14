// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-20 bg-lightPurple text-center">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-extrabold text-primaryPurple mb-10"
    >
      Education
    </motion.h2>

    <div className="max-w-3xl mx-auto px-4 text-left space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primaryPurple hover:bg-primaryPurple hover:text-white group transition duration-300"
      >
        <div className="flex items-center gap-3 mb-2">
          <FaGraduationCap className="text-xl text-primaryPurple group-hover:text-white transition" />
          <h3 className="text-xl font-semibold group-hover:text-white transition">B.Tech in Bio-Technology</h3>
        </div>
        <p className="text-sm font-medium">Sri Shakthi Institute of Engineering and Technology</p>
        <p className="text-sm text-gray-700 group-hover:text-white">Coimbatore, Tamil Nadu (2018 – 2022)</p>
        <p className="text-sm font-semibold text-green-600 group-hover:text-white">CGPA: 8.29</p>
      </motion.div>
    </div>
  </section>
);

export default Education;
