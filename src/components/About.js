// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
      
      {/* 📸 Left: Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-80 overflow-hidden rounded-xl border-4 border-primaryPurple shadow-xl"
        >
          <img
            src="/images/dhanna.jpg"
            alt="Dhanna Sree Profile"
            className="bg-lightPurple w-full h-full object-contain object-center"
          />
        </motion.div>
      </div>

      {/* 📝 Right: About Content */}
      <div className="w-full md:w-1/2 space-y-4 text-justify">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-primaryPurple text-center md:text-left"
        >
          About Me
        </motion.h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold text-pink-500">Dhanna Sree V S</span>, a passionate QA Automation Engineer with <strong>3.3 years of experience</strong> in building scalable, reliable test solutions across UI, API, and database layers.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Proficient in Hybrid Frameworks using <strong>Selenium WebDriver, Java, TestNG, Cucumber BDD, and REST Assured</strong>, I’ve developed and maintained hybrid automation frameworks that accelerate feedback cycles and align with Agile delivery. Skilled in CI/CD tools like <strong>Jenkins, Git</strong>, test management platforms such as <strong>JIRA and Rally</strong>, and environment deployments, I ensure smooth Dev-to-QA transitions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          With a strong focus on continuous learning, I actively intergrate modern tools like <strong>n8n, GitHub Copilot</strong>, and <strong>Appium</strong> into my testing workflows to enhance automation and scalability. For me, quality isn’t just about finding bugs—it’s about building trust, speed, and excellence across the SDLC.
        </p>
      </div>
    </div>
  </section>
);

export default About;
