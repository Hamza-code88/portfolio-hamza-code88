"use client";
import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with signature red accent */}
          <a
            href="#top"
            onClick={(e) => scrollTo(e, 'top')}
            className="flex items-center font-extrabold text-xl tracking-tight text-gray-900 hover:text-red-600 transition-colors"
          >
            <span>Hamza-</span>
            <span className="text-red-600">Code88</span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600">
            <a
              href="#proof"
              onClick={(e) => scrollTo(e, 'proof')}
              className="hover:text-red-600 transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => scrollTo(e, 'about')}
              className="hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#stack"
              onClick={(e) => scrollTo(e, 'stack')}
              className="hover:text-red-600 transition-colors"
            >
              Stack
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, 'services')}
              className="hover:text-red-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={(e) => scrollTo(e, 'process')}
              className="hover:text-red-600 transition-colors"
            >
              Process
            </a>
          </div>

          {/* Direct Actions in Navbar: Direct Email Click (mailto) & Direct WhatsApp */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="mailto:connecthamzacode88@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-lg text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-all"
            >
              Email Direct &rarr;
            </a>

            <a
              href="https://wa.me/923494427822"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              WhatsApp Direct &rarr;
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-red-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#proof"
            onClick={(e) => scrollTo(e, 'proof')}
            className="block text-base font-semibold text-gray-700 hover:text-red-600 py-1.5"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => scrollTo(e, 'about')}
            className="block text-base font-semibold text-gray-700 hover:text-red-600 py-1.5"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={(e) => scrollTo(e, 'stack')}
            className="block text-base font-semibold text-gray-700 hover:text-red-600 py-1.5"
          >
            Stack
          </a>
          <a
            href="#services"
            onClick={(e) => scrollTo(e, 'services')}
            className="block text-base font-semibold text-gray-700 hover:text-red-600 py-1.5"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={(e) => scrollTo(e, 'process')}
            className="block text-base font-semibold text-gray-700 hover:text-red-600 py-1.5"
          >
            Process
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="mailto:connecthamzacode88@gmail.com"
              className="w-full text-center py-2.5 text-sm font-bold rounded-lg text-red-600 bg-red-50 border border-red-200"
            >
              Email Direct (connecthamzacode88@gmail.com)
            </a>
            <a
              href="https://wa.me/923494427822"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-sm font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 shadow-md transition"
            >
              WhatsApp Direct (+92 349 4427822)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
