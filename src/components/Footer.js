import React from 'react';

const Footer = () => (
  <footer className="py-6 bg-primaryPurple text-center text-white text-sm md:text-base">
    <p>
     
      <span className="font-semibold text-white hover:text-lightPurple transition duration-300">
        Dhanna sree V S
      </span>
    </p>
    <p className="mt-1">
      © {new Date().getFullYear()} Dhanna sree V S. All rights reserved.
    </p>
  </footer>
);

export default Footer;

