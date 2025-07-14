// src/components/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certs = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    link: "https://learn.microsoft.com/en-us/users/VSDhannaSreeCognizant-9042/credentials/2931AB21C8056EE0", // If you have the cert URL
  },
  {
    title: "Oracle Certified Foundations Associate – OCI",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=745325AB428884DD9A28937C8918566982B60FE24CC15F1C38D766A435B532FB",
  },
  {
    title: "Oracle Certified Data Foundations Associate",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=745325AB428884DD9A28937C89185669B5BB4D55AF0D68A9B157E776572CACC0",
  },
  {
    title: "Selenium WebDriver Masterclass – Udemy",
    link: "/images/Udemy - Selenium WebDriver Cetificate.pdf",
  },
  {
    title: "SQL Masterclass – Udemy",
    link: "/images/Udemy - SQL Certificate.pdf",
  },
  {
    title: "Git & GitHub Essentials – Udemy",
    link: "/images/Udemy - Git Certificate.pdf",
  },
  {
    title: "AI Dashboards with Microsoft Power BI – Workshop",
    link: "#",
  },
];

const Certifications = () => (
  <section id="certifications" className="py-20 bg-white text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-extrabold text-primaryPurple mb-10"
    >
      Certifications
    </motion.h2>

    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 text-left">
      {certs.map((cert, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-start gap-3 p-4 bg-lightPurple border border-primaryPurple rounded-lg shadow-md hover:shadow-lg hover:bg-primaryPurple hover:text-white transition duration-300"
        >
          <FaAward className="text-xl mt-1 text-primaryPurple group-hover:text-white" />
          <div>
            <h4 className="font-semibold text-base">{cert.title}</h4>
            {cert.link !== "#" && (
              <a
                href={cert.link}
                className="text-sm underline hover:text-pink-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certifications;
