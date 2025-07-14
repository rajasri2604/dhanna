// src/components/Nav.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "CoreCompetencies", href: "#corecompetencies" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full bg-primaryPurple text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* 👩 Profile */}
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <FaUserCircle className="text-2xl" />
            Dhanna Sree V S
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-pink-200 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <IoMdClose className="text-2xl text-white" />
              ) : (
                <GiHamburgerMenu className="text-2xl text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed top-16 left-0 w-full bg-primaryPurple text-white shadow-lg md:hidden z-40">
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-pink-200 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
