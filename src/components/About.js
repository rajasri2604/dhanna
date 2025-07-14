// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
      
      {/* 📸 Left: Profile Image */}
     {/* 📸 Left: Profile Image - full, non-rounded */}
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
          I'm <span className="font-semibold text-pink-500">Dhanna Sree V S</span>, a dedicated QA Engineer with <strong>3.2 years of hands-on experience</strong> in automation testing using <strong>Selenium, TestNG, Java, and REST APIs</strong>.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I’m a passionate Quality Automation Engineer with over 3 years of experience delivering robust, scalable, and intelligent QA solutions across UI, API, and Database layers. With a strong foundation in Selenium WebDriver, Java, TestNG, Cucumber BDD, and REST Assured, I’ve built and maintained hybrid automation frameworks that accelerate feedback loops, boost test coverage, and align seamlessly with Agile delivery models.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I'm well-versed in CI/CD pipelines using Jenkins and Git, test management with JIRA/Rally, and have actively contributed to environment deployments, ensuring seamless Dev-to-QA transitions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          With a curious mindset and a drive for excellence, I’m continuously exploring cutting-edge tools like n8n, GitHub Copilot and Appium to future-proof test automation. I believe that great QA isn’t just about catching bugs—it’s about enabling confidence, speed, and quality at every step of the SDLC.
        </p>
      </div>
    </div>
  </section>
);

export default About;
