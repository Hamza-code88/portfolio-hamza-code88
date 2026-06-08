"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const textContainerRef = useRef(null);
  const imgRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);

  useEffect(() => {
    // Staggered text animation
    const textElements = textContainerRef.current.children;
    gsap.fromTo(
      textElements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // Image pop-in
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, x: 50 },
      { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'back.out(1.5)', delay: 0.4 }
    );

    // Floating badges animation
    gsap.fromTo(
      [badge1Ref.current, badge2Ref.current],
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.3, ease: 'elastic.out(1, 0.6)', delay: 1 }
    );

    // Continuous floating effect for image
    gsap.to(imgRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <header
        id="home"
        className="bg-white shadow-xl mx-auto rounded-3xl mt-8 overflow-hidden relative border border-gray-100"
        style={{ width: '95%' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-8 lg:px-16 py-16 relative z-10 gap-10">
          
          {/* Left Section: Text */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0"
            ref={textContainerRef}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-6 border border-red-200">
              👋 Welcome to my digital space
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Hamza-Code88
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              A passionate <strong className="text-red-500">Full-Stack Web Developer</strong> specializing in creating modern, interactive, and high-performance applications using React, Next.js, and Expo.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setIsPopupOpen(true)}
              >
                Get In Touch
              </button>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full transition-all duration-300 border border-gray-200 shadow-sm"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Section: Image & Badges */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            
            {/* Floating Badge 1 */}
            <div 
              ref={badge1Ref}
              className="absolute top-10 left-0 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600 text-xl">🚀</div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium">Completed</p>
                <p className="text-sm font-bold text-gray-800">100+ Projects</p>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 border-4 border-dashed border-red-300">
              <img
                ref={imgRef}
                className="w-full h-full object-cover rounded-full shadow-2xl bg-red-50"
                src="/hero_avatar.png"
                alt="Hamza Code88 3D Avatar"
              />
            </div>

            {/* Floating Badge 2 */}
            <div 
              ref={badge2Ref}
              className="absolute bottom-10 right-0 md:-right-5 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 text-xl">⭐</div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium">Freelance</p>
                <p className="text-sm font-bold text-gray-800">Top Rated</p>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Social Links Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center relative max-w-sm w-full mx-4 transform transition-all scale-100 animate-in zoom-in-95 duration-300 border-t-8 border-red-600">
            <button 
              onClick={() => setIsPopupOpen(false)} 
              className="absolute top-2 right-4 text-3xl font-bold text-gray-400 hover:text-red-600 transition-colors"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-red-600 mb-6">Let's Connect!</h2>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/Hamza-code88" target="_blank" rel="noreferrer" className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200 font-bold text-gray-800 transition transform hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2">
                🚀 GitHub
              </a>
              <a href="https://www.linkedin.com/in/hamza-khan-0a5419336" target="_blank" rel="noreferrer" className="bg-blue-50 p-4 rounded-xl hover:bg-blue-100 font-bold text-blue-700 transition transform hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2">
                💼 LinkedIn
              </a>
              <a href="https://youtube.com/@hamza-code8887" target="_blank" rel="noreferrer" className="bg-red-50 p-4 rounded-xl hover:bg-red-100 font-bold text-red-600 transition transform hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2">
                📺 YouTube
              </a>
              <a href="https://wa.me/923494427822" target="_blank" rel="noreferrer" className="bg-green-50 p-4 rounded-xl hover:bg-green-100 font-bold text-green-600 transition transform hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
