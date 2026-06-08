"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // If it's home, scroll to top
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      // Offset a bit for the navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="flex items-center justify-between p-5 shadow-md m-auto mt-5 bg-white sticky top-4 z-50 rounded-lg"
        style={{ width: '95%' }}
      >
        {/* Logo Section */}
        <div className="text-3xl font-bold cursor-pointer" onClick={(e) => handleScroll(e, 'home')}>
          <h2>
            <span className="text-red-600">Hu</span>m-
            <span className="text-red-600">Co</span>de
          </h2>
        </div>

        {/* Links Section - Hidden on mobile */}
        <div className="hidden lg:flex w-5/12">
          <ul className="flex justify-evenly font-bold w-full">
            <li>
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-red-600 transition-colors cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-red-600 transition-colors cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-red-600 transition-colors cursor-pointer">
                My Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-red-600 transition-colors cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')} className="hover:text-red-600 transition-colors cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex lg:hidden ">
          <button
            className="text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div
            className="absolute top-24 left-0 w-full bg-white shadow-md rounded-lg lg:hidden border-t-4 border-red-600"
            style={{ zIndex: 100 }}
          >
            <ul className="flex flex-col items-center p-5 space-y-5 font-bold">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-red-600 transition-colors text-lg">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-red-600 transition-colors text-lg">About</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-red-600 transition-colors text-lg">My Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-red-600 transition-colors text-lg">Projects</a>
              </li>
              <li>
                <a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')} className="hover:text-red-600 transition-colors text-lg">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
