"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Container fade up
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        }
      }
    );

    // Image Sci-fi hover floating effect
    gsap.to(imgRef.current, {
      y: -10,
      boxShadow: "0px 15px 30px rgba(220, 38, 38, 0.4)", // red glow
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        className="mx-auto mt-12 w-[96%] relative overflow-hidden"
      >
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border-t-4 border-red-600 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Left Side: Sci-fi Real Image */}
            <div className="w-full md:w-5/12 flex justify-center relative">
              {/* Decorative Tech Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-red-500 rounded-tl-xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-red-500 rounded-br-xl opacity-50"></div>
              
              <div 
                ref={imgRef}
                className="relative rounded-2xl overflow-hidden border-2 border-red-200 bg-gray-900"
              >
                <img
                  className="w-full max-w-sm h-auto object-cover contrast-125"
                  src="./about_scifi.png" 
                  alt="Hamza Code88 Real Developer"
                />
                {/* Tech overlay scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent opacity-50 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>

            {/* Right Side: Text & Details */}
            <div className="w-full md:w-7/12" ref={textRef}>
              <div className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                Know the Developer
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                About <span className="text-red-600">Me</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-red-200 pl-6">
                <p>
                  Hi, I'm <strong className="text-gray-900">Hamza-Code88</strong>, a passionate Web & Mobile Developer. I specialize in building modern, user-friendly, and visually stunning applications that bridge the gap between design and complex engineering.
                </p>
                <p>
                  My journey started with simple HTML & CSS, but today my arsenal includes <strong className="text-red-500">React, Next.js, Tailwind CSS, Expo React Native,</strong> and automation tools like <strong className="text-red-500">n8n</strong>.
                </p>
                <p>
                  I don't just write code; I craft digital experiences. Whether it's a sleek landing page, a complex dashboard, or a cross-platform mobile app, I bring ideas to life with clean architecture and pixel-perfect design.
                </p>
              </div>

              {/* Stats / Tech Grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center hover:bg-red-50 transition-colors">
                  <h3 className="text-3xl font-black text-red-600">3+</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Years Exp</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center hover:bg-red-50 transition-colors">
                  <h3 className="text-3xl font-black text-red-600">100%</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Success Rate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center sm:col-span-1 col-span-2 hover:bg-red-50 transition-colors">
                  <h3 className="text-3xl font-black text-red-600">24/7</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase mt-1">Support</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
