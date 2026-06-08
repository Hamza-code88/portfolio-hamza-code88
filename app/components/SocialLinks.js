"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const SocialLinks = () => {
  const containerRef = useRef(null);

  const links = [
    { name: "GitHub", url: "https://github.com/Hamza-code88", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z", color: "hover:bg-gray-800", ring: "hover:ring-gray-800" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hamza-khan-0a5419336", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", color: "hover:bg-[#0077B5]", ring: "hover:ring-[#0077B5]" },
    { name: "YouTube", url: "https://youtube.com/@hamza-code8887", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", color: "hover:bg-[#FF0000]", ring: "hover:ring-[#FF0000]" },
    { name: "WhatsApp", url: "https://wa.me/923494427822", icon: "M12.031 0c-6.627 0-12 5.373-12 12 0 2.107.545 4.088 1.503 5.819l-1.503 5.681 5.836-1.492c1.713.921 3.655 1.442 5.714 1.442 6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.275 17.135c-.297.838-1.718 1.6-2.385 1.666-.61.06-1.428.165-4.57-1.134-3.766-1.558-6.195-5.405-6.381-5.653-.186-.248-1.523-2.029-1.523-3.874 0-1.845.962-2.753 1.306-3.131.343-.379.743-.474.991-.474.248 0 .495.004.708.014.223.011.523-.086.82.632.372.9 1.326 3.238 1.444 3.473.118.235.197.511.049.808-.148.297-.223.474-.446.735-.223.261-.466.561-.669.764-.223.223-.463.472-.204.918.258.446 1.151 1.905 2.474 3.088 1.706 1.525 3.123 1.996 3.569 2.219.446.223.708.188.974-.083.266-.271 1.151-1.341 1.46-1.805.309-.464.618-.387 1.027-.233.409.155 2.585 1.218 3.031 1.441.446.223.743.344.852.535.109.191.109 1.115-.188 1.953z", color: "hover:bg-[#25D366]", ring: "hover:ring-[#25D366]" },
  ];

  useEffect(() => {
    // Initial slide-in animation for icons
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "back.out(1.5)", 
        delay: 1 
      }
    );

    // Subtle continuous vertical float animation for the entire container
    gsap.to(containerRef.current, {
      y: "-50%",
      marginTop: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div 
      className="fixed z-[100] flex flex-col gap-4 right-0 top-1/2 -translate-y-1/2 p-2 pointer-events-none"
      ref={containerRef}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`relative flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md rounded-l-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-200 border-r-0 text-gray-500 transition-all duration-300 transform translate-x-2 hover:translate-x-0 hover:w-16 hover:text-white ${link.color} group/icon pointer-events-auto hover:ring-2 ring-offset-2 ring-transparent ${link.ring}`}
        >
          <svg className="w-6 h-6 fill-current transition-transform duration-300 group-hover/icon:scale-110" viewBox="0 0 24 24">
            <path d={link.icon} />
          </svg>
          
          {/* Tooltip Popup on Hover */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg opacity-0 pointer-events-none group-hover/icon:opacity-100 group-hover/icon:-translate-x-2 transition-all duration-300 whitespace-nowrap shadow-xl">
            {link.name}
            {/* Tooltip Arrow */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-gray-900"></span>
          </span>
        </a>
      ))}
    </div>
  );
};
