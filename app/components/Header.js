"use client";
import React, { useState, useEffect } from 'react';

export const Header = () => {
  const heroMockups = [
    {
      src: "/projects/hero-slide-1.jpg",
      alt: "Bharosa Lab 3-Way Healthcare Ecosystem: Next.js Web Dashboard & Mobile Apps"
    },
    {
      src: "/projects/hero-slide-2.jpg",
      alt: "Bharosa Lab React Native Mobile UI"
    },
    {
      src: "/projects/hero-slide-3.jpg",
      alt: "Bharosa Lab Web Portal and Doctor Teleconsultation Dashboard"
    },
    {
      src: "/projects/hero-slide-4.jpg",
      alt: "Bharosa Lab Phlebotomist Rider Specimen Dispatch Live Route System"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMockups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroMockups.length]);

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-gray-200 overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white">
      
      {/* Subtle warm red glow in background */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 50% width on Desktop */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <p className="text-sm font-bold tracking-wide uppercase text-red-600">
              Full-Stack Web & Mobile Developer — Pakistan, working worldwide
            </p>

            {/* H1: Covering both Web & Mobile platforms */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              I build scalable{' '}
              <span className="text-red-600">Web & Mobile Apps</span> that ship to production.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-gray-600 leading-relaxed">
              I help founders, clinics, and startups build modern <strong className="text-gray-900 font-semibold">Next.js web platforms</strong> and <strong className="text-gray-900 font-semibold">React Native (Expo) mobile apps</strong> with Supabase backends — from high-converting web portals to live Play Store releases.
            </p>

            {/* Clean Professional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#proof"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Live Work & Case Studies &rarr;</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-gray-200 text-sm font-bold rounded-xl text-gray-800 bg-white hover:bg-gray-50 hover:border-red-300 hover:text-red-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs"
              >
                <span>See Bharosa Lab Live &rarr;</span>
              </a>
            </div>

            {/* Proof Row */}
            <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
              <p>
                <strong className="text-gray-900 font-semibold">Core Stack:</strong> Next.js &bull; React &bull; React Native (Expo) &bull; Supabase &bull; TypeScript &bull; n8n Automation
              </p>
            </div>

          </div>

          {/* Right Column: 50% width on Desktop */}
          <div className="lg:col-span-6 w-full flex flex-col items-center justify-center">
            
            <div className="relative w-full aspect-[16/9] flex items-center justify-center group overflow-hidden rounded-2xl shadow-xl border-2 border-red-100 bg-white">
              
              {heroMockups.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                    idx === currentIndex 
                      ? "opacity-100 z-10" 
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Minimal Left Arrow */}
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? heroMockups.length - 1 : prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
                aria-label="Previous Image"
              >
                &#8592;
              </button>

              {/* Minimal Right Arrow */}
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % heroMockups.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
                aria-label="Next Image"
              >
                &#8594;
              </button>

            </div>

            {/* Bottom Dots */}
            <div className="flex space-x-2 mt-4">
              {heroMockups.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-6 bg-red-600" : "w-2 bg-red-200 hover:bg-red-300"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Header;
