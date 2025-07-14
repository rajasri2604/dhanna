// src/components/CoreCompetencies.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaCodeBranch, FaCogs, FaTasks, FaTools, FaClipboardList } from 'react-icons/fa';

const competencies = [
  {
    icon: <FaBug className="text-pink-500 text-3xl" />,
    title: "Automation Testing",
    items: ["Selenium WebDriver", "TestNG", "Cucumber", "Java", "Maven", "POM"],
  },
  {
    icon: <FaTasks className="text-purple-600 text-3xl" />,
    title: "Manual Testing",
    items: [
      "UI, API, System Testing",
      "Functional, Regression",
      "Integration, UAT, Ad hoc",
    ],
  },
  {
    icon: <FaCogs className="text-blue-500 text-3xl" />,
    title: "API Testing",
    items: ["Postman", "Swagger", "REST Assured"],
  },
  {
    icon: <FaCodeBranch className="text-green-600 text-3xl" />,
    title: "CI/CD & Version Control",
    items: ["Jenkins", "Git"],
  },
  {
    icon: <FaTools className="text-yellow-500 text-3xl" />,
    title: "Tools & Platforms",
    items: ["Eclipse", "IntelliJ", "JIRA", "Rally"],
  },
  {
    icon: <FaClipboardList className="text-indigo-500 text-3xl" />,
    title: "Methodologies & Soft Skills",
    items: ["Agile", "Scrum", "Waterfall", "Team Leadership", "Client Communication", "Problem Solving"],
  },
];

const CoreCompetencies = () => {
  return (
    <section id="core" className="py-20 bg-lightPurple text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-primaryPurple mb-10"
      >
        Core Competencies
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {competencies.map((comp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 border-2 border-primaryPurple rounded-xl bg-white shadow hover:bg-primaryPurple hover:text-white transition duration-300"
          >
            <div className="flex justify-center mb-4">{comp.icon}</div>
            <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
            <ul className="text-sm space-y-1">
              {comp.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
