"use client";
import React, { useEffect, useState, useRef } from 'react';
import { getProjects } from '@/app/actions/projects';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await getProjects();
      if (res.data) setDbProjects(res.data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    if (cards.length > 0) {
      gsap.fromTo(cards, 
        { opacity: 0, y: 100, rotationX: 45, transformPerspective: 1000 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, [dbProjects]);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="bg-white shadow-md mx-auto mt-12 rounded-lg w-[96%] "
      >
        <div className="text-center py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">My Projects</h2>
          <p className="text-lg text-gray-700 mb-8">
            Here are some of the projects I’ve built using the skills I’ve mastered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5" style={{ perspective: "1000px" }}>
            
            {/* Supabase Dynamic Projects */}
            {dbProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group hover:bg-gray-200 cursor-pointer border-2 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Container */}
                <div className="overflow-hidden bg-gray-100 flex items-center justify-center h-48 border-b-4 border-silver-700">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:object-contain group-hover:scale-95 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  </div>
                  {project.demo_link && (
                    <a href={project.demo_link} target="_blank" rel="noreferrer" className="inline-block mt-auto bg-red-600 text-white font-bold py-2 px-4 rounded text-center hover:bg-red-800 transition duration-200">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;