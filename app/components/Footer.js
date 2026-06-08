import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="bg-white mt-10 py-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hamza-Code88. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" className="text-black hover:text-red-500">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-black hover:text-red-500">
              LinkedIn
            </a>
            <a href="https://Youtube.com" className="text-black hover:text-red-500">
              Youtube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer