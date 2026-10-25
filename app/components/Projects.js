"use client";
import React, { useEffect, useState } from 'react';
import { getProjects } from '@/app/actions/projects';

export const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        if (res.data && res.data.length > 0) {
          setDbProjects(res.data);
        }
      } catch (err) {
        console.error("Failed to load projects from DB:", err);
      }
    };
    fetchProjects();
  }, []);

  const supportingProjects = [
    {
      title: "Dine-Sync",
      subtitle: "QR Restaurant Table Ordering & Management",
      problem: "Restaurants faced slow order turnarounds and paper menu costs.",
      whatIBuilt: "Real-time table ordering flow with kitchen order display, bill calculation, and admin menu editor.",
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      demoLink: "https://dine-sync.vercel.app",
      demoLabel: "Live Demo",
      image: "/projects/img 2.PNG"
    },
    {
      title: "OrthoPulse",
      subtitle: "Mobile Appointment Booking for Specialists",
      problem: "Patients lacked a clean mobile flow to book specific medical specialist time slots.",
      whatIBuilt: "Mobile booking interface with doctor schedule calendar, appointment reminders, and patient intake forms.",
      stack: ["React Native (Expo)", "TypeScript", "Tailwind"],
      demoLink: null,
      demoLabel: "Case Study / Code on Request",
      image: "/projects/img 3.png"
    },
    {
      title: "Medical Billing AI Voice Agent",
      subtitle: "Real-Time Conversational Prototype",
      problem: "Clinic staff spent 40% of their workday answering routine billing and insurance eligibility questions.",
      whatIBuilt: "Voice agent prototype handling voice queries, querying patient records, and extracting intent with low latency.",
      stack: ["FastAPI", "Retell AI", "LangChain", "ChromaDB"],
      demoLink: null,
      demoLabel: "Demo Prototype / Code on Request",
      image: "/projects/img 4.png"
    },
    {
      title: "Lead-Hub",
      subtitle: "Lead Scraping, Enrichment & Filtering Dashboard",
      problem: "Sales pipelines needed automated lead qualification without expensive manual data entry.",
      whatIBuilt: "Automated webhook pipeline scraping candidate business profiles, validating emails, and serving a searchable filter UI.",
      stack: ["n8n", "React", "Node.js", "REST APIs"],
      demoLink: null,
      demoLabel: "Internal Tool / Code on Request",
      image: "/projects/img 5.png"
    },
    {
      title: "Codex",
      subtitle: "Local Voice-Controlled Desktop Assistant",
      problem: "Fast offline task navigation and voice commands without sending audio to cloud servers.",
      whatIBuilt: "Offline voice recognizer triggering local system commands, quick app launches, and desktop workflows.",
      stack: ["Python", "Eel", "Vosk Offline", "JavaScript"],
      demoLink: null,
      demoLabel: "Open Source / Code on Request",
      image: "/projects/img 6.png"
    }
  ];

  return (
    <section id="work" className="py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-red-600 mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Selected work
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Production products first. Demos second. Every project states the problem, what I built, and what is live.
          </p>
        </div>

        {/* 1. Flagship Full-Width Case Study: Bharosa Lab */}
        <div className="mb-14 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual */}
            <div className="lg:col-span-7 bg-gray-100 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200 p-6">
              <img
                src="/projects/img 1.png"
                alt="Bharosa Lab Healthcare Platform"
                className="w-full h-auto object-cover rounded-xl shadow-sm max-h-[420px]"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                    Flagship Product
                  </span>
                  <span className="text-xs font-medium text-emerald-600 font-mono">
                    &bull; Live on Google Play
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bharosa Lab
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-6">
                  End-to-End Diagnostic Healthcare Ecosystem
                </p>

                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">The Problem:</h4>
                    <p>
                      Diagnostic labs and patients had no simple, reliable way to schedule home sample collections, route phlebotomist riders, and track test reports in real time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">What I Built:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Patient App:</strong> Test directory, instant booking, and report downloads.</li>
                      <li><strong>Rider App:</strong> Real-time pickup dispatcher, route status, and specimen handover.</li>
                      <li><strong>Lab Partner Portal:</strong> Multi-tenant web dashboard managing incoming orders, billing, and report uploads.</li>
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">React Native (Expo)</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">Next.js</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">Supabase</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">PostgreSQL</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
                >
                  Live on Google Play &rarr;
                </a>
                <a
                  href="https://github.com/Hamza-code88"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                >
                  GitHub Profile &rarr;
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 2. Grid of Supporting Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Visual */}
                <div className="h-48 bg-gray-100 border-b border-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-red-600 mb-4">
                    {project.subtitle}
                  </p>

                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <p>
                      <strong className="text-gray-900 font-medium">Problem: </strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className="text-gray-900 font-medium">Delivered: </strong>
                      {project.whatIBuilt}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.stack.map((tag, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-medium">
                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 hover:text-red-800 font-bold flex items-center gap-1"
                  >
                    {project.demoLabel} &rarr;
                  </a>
                ) : (
                  <span className="text-gray-500 font-mono">
                    {project.demoLabel}
                  </span>
                )}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-red-600 transition"
                >
                  Inquire
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;