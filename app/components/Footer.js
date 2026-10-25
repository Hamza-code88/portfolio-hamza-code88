import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Direct Action Box with signature red borders and warm subtle glow */}
        <div className="bg-gradient-to-b from-[#fbfbfa] to-red-50/20 border-2 border-red-100 rounded-3xl p-8 sm:p-12 mb-12 shadow-sm text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ready to build or scale your next product?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mt-3 mb-8">
            Zero intermediaries, zero recruiter friction. Connect with me directly via WhatsApp, Fiverr, Upwork, or Email for quick project estimates and scope breakdown.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923494427822"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Chat on WhatsApp &rarr;</span>
            </a>

            <a
              href="https://www.fiverr.com/s/L33GwPY"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-xl text-emerald-700 bg-emerald-50 border-2 border-emerald-200 hover:bg-emerald-100 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm"
            >
              <span>Order on Fiverr &rarr;</span>
            </a>

            <a
              href="mailto:connecthamzacode88@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-xl text-gray-800 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm"
            >
              <span>Send Direct Email &rarr;</span>
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-5 font-medium">
            Average response time: &lt; 2 hours &bull; Location: Pakistan &bull; Working remotely worldwide
          </p>
        </div>

        {/* Bottom bar & Verified Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
          <div className="text-center md:text-left">
            <p className="text-base font-extrabold text-gray-900">
              <span>Hamza-</span>
              <span className="text-red-600">Code88</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              &copy; {new Date().getFullYear()} Hamza-Code88. All Rights Reserved. Built with Next.js, Supabase, and Zero Bloatware.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-gray-600">
            <a
              href="https://github.com/Hamza-code88"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-khan-0a5419336"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01df46cd7c20bc1397"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Upwork
            </a>
            <a
              href="https://www.fiverr.com/s/L33GwPY"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Fiverr
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Play Store
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;