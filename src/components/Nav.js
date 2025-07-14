// src/components/Nav.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "CoreCompetencies", href: "#core" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 🌐 Navbar */}
      <nav className="fixed w-full bg-primaryPurple text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* 🍔 Hamburger Menu (Left) */}
          <div className="md:hidden mr-4">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <IoMdClose className="text-2xl text-white" />
              ) : (
                <GiHamburgerMenu className="text-2xl text-white" />
              )}
            </button>
          </div>

          {/* 👩 Profile Info */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 flex items-center justify-center bg-pink-400 text-white rounded-full font-semibold">
              DS
            </div>
            Dhanna Sree V S
          </div>

          {/* 🔗 Desktop Links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-pink-200 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 📱 Sidebar From Left */}
      {open && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-primaryPurple text-white shadow-lg z-40 md:hidden transition-transform duration-300 ease-in-out">
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
              <IoMdClose className="text-2xl text-white" />
            </button>
          </div>
          <ul className="flex flex-col items-start px-6 space-y-4 font-medium">
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
