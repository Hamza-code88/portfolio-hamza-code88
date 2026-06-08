
"use client"

import React, { useState, useEffect } from 'react';
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Hire } from './components/Hire';

export default function Home() {

  const [bgGradient, setBgGradient] = useState(
    'linear-gradient(to left, hsl(41.78deg 86.43% 56.67%) 80%, hsl(9.25deg 81.38% 51.57%) 30%)'
  );

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');

     // Get scroll position and sections' top positions
     const scrollPosition = window.scrollY + window.innerHeight / 2;

     if (aboutSection.offsetTop <= scrollPosition && skillsSection.offsetTop > scrollPosition) {
       setBgGradient(
         'linear-gradient(to right, hsl(41.78deg 86.43% 56.67%) 80%, hsl(9.25deg 81.38% 51.57%) 30%)'
       ); // About Gradient
     } else if (skillsSection.offsetTop <= scrollPosition && projectsSection.offsetTop > scrollPosition) {
       setBgGradient(
         'linear-gradient(to left, hsl(41.78deg 86.43% 56.67%) 80%, hsl(9.25deg 81.38% 51.57%) 30%)'
       ); // Skills Gradient
     } else if (projectsSection.offsetTop <= scrollPosition) {
       setBgGradient(
         'linear-gradient(to right, hsl(41.78deg 86.43% 56.67%) 80%, hsl(9.25deg 81.38% 51.57%) 30%)'
       ); // Projects Gradient
      } else {
        setBgGradient(
          'linear-gradient(to left, hsl(41.78deg 86.43% 56.67%) 80%, hsl(9.25deg 81.38% 51.57%) 30%)'
        ); // Default Header Gradient
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    // <>
    
    
    // <Navbar/>
    // <Header />
    // <About/>
    // <Skills/>
    // <Projects/>
    // <Contact/>
    // <Footer/>
    
    
    // </>


    <div style={{ background: bgGradient, transition: 'background 0.5s ease' }} className="min-h-screen">
 
      <Header />
      <Hire/>
      <section id="about" >
        <About />
      </section>
      <section id="skills" >
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    
    </div>
  );
}
