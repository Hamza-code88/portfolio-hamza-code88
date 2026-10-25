import React from 'react';

export const Hire = () => {
  const trustPlatforms = [
    {
      name: "GitHub",
      metric: "Open Source Codebases",
      link: "https://github.com/Hamza-code88",
      icon: (
        <svg className="w-5 h-5 text-gray-900 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      metric: "Professional Network",
      link: "https://www.linkedin.com/in/hamza-khan-0a5419336",
      icon: (
        <svg className="w-5 h-5 text-[#0077b5] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Upwork",
      metric: "Top Rated Freelancer",
      link: "https://www.upwork.com/freelancers/~01df46cd7c20bc1397",
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#14a800] text-white flex items-center justify-center font-bold text-xs">
          up
        </span>
      )
    },
    {
      name: "Fiverr",
      metric: "Custom Web & App Gigs",
      link: "https://www.fiverr.com/s/L33GwPY",
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#1dbf73] text-white flex items-center justify-center font-bold text-xs">
          fi
        </span>
      )
    },
    {
      name: "Google Play",
      metric: "Bharosa Lab Verified",
      link: "https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab",
      icon: (
        <svg className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.926V2.74c0-.342.21-.68.609-.926zm11.233 11.235l2.259-2.259-10.74-6.208 8.481 8.467zm0-2.098L6.36 2.484l10.741 6.208-2.259 2.259zm1.05 1.05l3.292 1.902c.983.568.983 1.493 0 2.061l-3.292 1.902-2.311-2.31 2.311-2.311zM6.36 21.516l8.482-8.467 2.259 2.259-10.741 6.208z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-6 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Pill Badge Strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left: Availability Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50/70 border border-red-200 text-xs font-bold text-red-700 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Contract & Freelance Projects</span>
          </div>

          {/* Right: Modern Glass Social Chips with Hover Lift */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
            {trustPlatforms.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-red-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </span>
                  <span className="block text-[10px] text-gray-500 font-medium">
                    {item.metric}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hire;
