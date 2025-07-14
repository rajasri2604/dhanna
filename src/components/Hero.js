// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-primaryPurple text-center px-4 overflow-hidden"
    >
      {/* 🔳 Clear Background Image (No blur) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/i4.jpeg" // Make sure the image exists in public/images
          alt="background"
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-lightPurple/50" />
      </div>

      {/* 🌟 Foreground Content */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400 animate-pulse">
          Dhanna Sree V S
        </span>{' '}
        💻
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-lg md:text-xl max-w-xl mb-6 text-gray-800"
      >
        QA Engineer with 3.2 years of experience in Automation Testing using Selenium, TestNG, and creating quality web applications.
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 px-6 py-3 bg-primaryPurple text-white rounded-full shadow-md hover:bg-purple-800 transition"
      >
        Let’s Connect ✨
      </motion.a>
    </section>
  );
};

export default Hero;
