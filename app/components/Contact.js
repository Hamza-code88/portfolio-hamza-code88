"use client";
import React, { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("connecthamzacode88@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "WhatsApp Direct",
      desc: "+92 349 4427822 &bull; Fast Response",
      link: "https://wa.me/923494427822",
      label: "Open Chat",
      color: "border-emerald-200 bg-emerald-50/50 hover:border-emerald-400 text-emerald-800"
    },
    {
      name: "Fiverr Gig / Profile",
      desc: "Custom Orders & Full-Stack Gig Consultation",
      link: "https://www.fiverr.com/s/L33GwPY",
      label: "Order on Fiverr",
      color: "border-green-200 bg-green-50/50 hover:border-green-400 text-green-900"
    },
    {
      name: "Upwork Profile",
      desc: "Top Rated Freelancer &bull; Direct Contract",
      link: "https://www.upwork.com/freelancers/~01df46cd7c20bc1397",
      label: "Hire on Upwork",
      color: "border-emerald-200 bg-emerald-50/30 hover:border-emerald-400 text-emerald-900"
    },
    {
      name: "LinkedIn",
      desc: "Professional Network & Recommendations",
      link: "https://www.linkedin.com/in/hamza-khan-0a5419336",
      label: "Connect on LinkedIn",
      color: "border-blue-200 bg-blue-50/50 hover:border-blue-400 text-blue-900"
    },
    {
      name: "GitHub",
      desc: "Open Source Codebases & Active Commits",
      link: "https://github.com/Hamza-code88",
      label: "Inspect GitHub",
      color: "border-gray-200 bg-gray-50/50 hover:border-gray-400 text-gray-900"
    },
    {
      name: "Google Play Store",
      desc: "Bharosa Lab & Mobile App Downloads",
      link: "https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab",
      label: "View on Play Store",
      color: "border-red-200 bg-red-50/50 hover:border-red-400 text-red-900"
    }
  ];

  return (
    <section id="contact" className="py-20 border-b border-gray-200 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Let's Connect & Work Together
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Choose your preferred platform below to discuss projects, timelines, and contract work.
          </p>
        </div>

        {/* Highlighted Direct Contact Cards: WhatsApp, Fiverr, Upwork, LinkedIn, GitHub, Play Store */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-2xl border-2 ${item.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                <span>{item.label}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Email Direct Action Banner */}
        <div className="p-8 rounded-3xl bg-white border-2 border-red-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase text-red-600 tracking-wider">Direct Email Communication</span>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
              connecthamzacode88@gmail.com
            </p>
            <p className="text-xs text-gray-500 mt-1">Guaranteed direct response within 2 hours.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="mailto:connecthamzacode88@gmail.com"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Compose Email &rarr;
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              title="Copy Email"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;