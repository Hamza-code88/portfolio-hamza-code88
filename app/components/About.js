import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Context - Red Subtitle Removed */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              About Hamza-Code88
            </h2>
            
            {/* Verifiable Stats Block with red touches */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="p-4 rounded-2xl bg-[#fbfbfa] border-2 border-gray-100 hover:border-red-200 transition">
                <span className="text-xs font-mono font-bold text-red-600 uppercase">Since Nov 2022</span>
                <p className="text-base font-bold text-gray-900 mt-1">Full-Stack & Mobile Development</p>
                <p className="text-xs text-gray-500 mt-0.5">Continuous engineering across web, mobile, and APIs.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fbfbfa] border-2 border-gray-100 hover:border-red-200 transition">
                <span className="text-xs font-mono font-bold text-red-600 uppercase">Live on Play Store</span>
                <p className="text-base font-bold text-gray-900 mt-1">Bharosa Lab Patient + Rider Apps</p>
                <p className="text-xs text-gray-500 mt-0.5">Active mobile applications downloaded and used daily.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fbfbfa] border-2 border-gray-100 hover:border-red-200 transition">
                <span className="text-xs font-mono font-bold text-red-600 uppercase">3-Way Platform Architecture</span>
                <p className="text-base font-bold text-gray-900 mt-1">Patient, Rider, and Lab/Admin Portal</p>
                <p className="text-xs text-gray-500 mt-0.5">Cross-synchronized data using Supabase PostgreSQL.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6 text-base text-gray-600 leading-relaxed pt-2">
            
            <p className="text-xl text-gray-900 font-semibold">
              I am a full-stack and mobile developer working since November 2022.
            </p>

            <p>
              I co-founded <strong className="text-gray-900">Bharosa Lab</strong>, a healthcare platform where patients book home sample collection, riders pick up samples, and labs manage orders through a web portal.
            </p>

            <p>
              I work mainly in <strong className="text-gray-900">Next.js, React Native (Expo), TypeScript, and Supabase</strong>, with <strong className="text-gray-900">FastAPI</strong> and automation tools (like n8n and LangChain) where they fit.
            </p>

            <p>
              I prefer shipping a working, production-grade product over an unfinished or polished demo. Every app I take on is designed for maintainability, speed, and real users.
            </p>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-sm font-bold">
              <a
                href="https://github.com/Hamza-code88"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 hover:text-red-600 transition"
              >
                Inspect my GitHub &rarr;
              </a>
              <span className="text-gray-300">&middot;</span>
              <a
                href="https://www.linkedin.com/in/hamza-khan-0a5419336"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 hover:text-red-600 transition"
              >
                LinkedIn Profile &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
