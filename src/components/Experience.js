// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaSuitcase } from 'react-icons/fa';

const experiences = [
  {
    role: "Associate",
    company: "Cognizant Technology Solutions",
    project: "AIG Gen-HSS Implementation",
    period: "Feb 2025 – Present",
    achievements: [
      "Led offshore QA team, defined Test Strategies/Plans.",
      "Developed regression suites with Selenium‑Java RTEE 2.0.",
      "Delivered 48% profit margin & received 5/5 PSCAT score.",
    ],
  },
  {
    role: "Associate",
    company: "Cognizant Technology Solutions",
    project: "AIG Japan Automation Enhancement",
    period: "Sep 2024 – Jan 2025",
    achievements: [
      "Automated 7 insurance flows using RTEE 2.0.",
      "Reduced regression effort by 90% and earned client commendation.",
    ],
  },
   {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    project: "AIG Europe Talbot Discovery SOW-J ",
    period: "Jul 2024 – Aug 2024 ",
    achievements: [
      "Reviewed 74 legacy and modern applications in the Talbot landscape to extract system test requirements and initiated API automation by preparing requirement spreadsheets for key modules."
    ],
  },
 

  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    project: "America‑CQUAL Rewrite",
    period: "Mar 2023 – Jul 2024",
    achievements: [
      "Built Hybrid POM + Cucumber framework, executed 250+ tests.",
      "Reduced manual effort by 60%, traced defects via Rally.",
    ],
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    project: "Synergy QA GI Flex",
    period: "May 2022 – Feb 2023",
    achievements: [
      "Learnt & built automation suites with Java, TestNG, Cucumber.",
      "Participated in Agile ceremonies, raised defects via Rally.",
    ],
  },
 
];

const Experience = () => (
  <section id="experience" className="py-20 bg-white text-center">
    <h2 className="text-4xl font-extrabold text-primaryPurple mb-10">Work Experience</h2>
    <div className="max-w-5xl mx-auto space-y-8 px-4 text-left">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="group bg-lightPurple border-l-4 border-primaryPurple p-6 rounded-xl shadow-md hover:bg-primaryPurple hover:text-white transition duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <FaSuitcase className="text-xl text-primaryPurple group-hover:text-white" />
            <h3 className="text-xl font-semibold text-primaryPurple group-hover:text-white">
              {exp.role}
            </h3>
          </div>
          <p className="text-sm font-medium group-hover:text-white">
            {exp.project} | <span className="italic">{exp.company}</span>
          </p>
          <p className="text-sm text-gray-600 group-hover:text-white mb-3">{exp.period}</p>
          <ul className="list-disc ml-5 mt-2 text-sm space-y-1 leading-relaxed group-hover:text-white">
            {exp.achievements.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
