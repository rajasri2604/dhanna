// src/components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaRegSmile, FaPaintBrush } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaAward className="text-3xl text-yellow-500" />,
    title: "Client Appreciation – Q3 2024",
    desc: "Recognized for delivering high-quality automation output with measurable impact in Cognizant.",
  },
  {
    icon: <FaRegSmile className="text-3xl text-pink-400" />,
    title: "Inspiring Volunteer Award – Q1 2024",
    desc: "Awarded for volunteering & mentoring in Cognizant Passion programs.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-purple-500" />,
    title: "Talent Hunt – Painting Winner 🎨",
    desc: "Won first place in the Cognizant 2024 Talent Hunt painting competition.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-lightPurple text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-primaryPurple mb-10"
      >
        Awards & Achievements
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border-2 border-primaryPurple rounded-xl p-6 shadow-md hover:bg-primaryPurple hover:text-white transition duration-300"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
