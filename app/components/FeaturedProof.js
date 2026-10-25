"use client";
import React, { useEffect, useState } from 'react';
import { getProjects } from '@/app/actions/projects';

export const FeaturedProof = () => {
  const [dbProjects, setDbProjects] = useState([]);

  useEffect(() => {
    const fetchDB = async () => {
      try {
        const res = await getProjects();
        if (res.data && res.data.length > 0) {
          setDbProjects(res.data);
        }
      } catch (err) {
        console.error("DB Projects fetch error:", err);
      }
    };
    fetchDB();
  }, []);

  // Approved real production products per updated brief
  const staticFeatured = [
    {
      id: "bharosa-lab",
      title: "Bharosa Lab",
      subtitle: "3-Way Diagnostic Healthcare Platform & Mobile Apps",
      badge: "Flagship &bull; Live on Google Play",
      description:
        "Full-scale production healthcare ecosystem operating with active patients and lab specimen collection orders. Features a cross-platform Patient mobile app for home sample booking, a Rider logistics dispatcher app, and a multi-tenant laboratory partner web portal.",
      outcomes: [
        "Patient mobile app: live test directory, home sample scheduling, and digital PDF report downloads.",
        "Rider logistics app: real-time pickup dispatcher, route navigation, and specimen handover tracking.",
        "Supabase PostgreSQL synchronization keeping mobile apps and web portals updated in real time."
      ],
      stack: ["React Native (Expo)", "Next.js", "Supabase", "PostgreSQL"],
      primaryLink: {
        label: "Live on Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab"
      },
      image: "/projects/hero-slide-1.jpg"
    },
    {
      id: "dine-sync",
      title: "Dine-Sync",
      subtitle: "QR Restaurant Table Ordering & Live Kitchen Management",
      badge: "Commercial SaaS &bull; Deployed on Vercel",
      description:
        "Contactless dining web platform eliminating paper menu costs and accelerating kitchen turnaround. Guests scan a table QR code to browse categorized digital menus and place live orders directly received on the kitchen manager screen.",
      outcomes: [
        "Live table-specific session ordering with instant kitchen display board synchronization.",
        "Real-time bill calculation, tax breakdown, and customizable dish modifiers.",
        "Comprehensive restaurant manager dashboard for live menu pricing and inventory updates."
      ],
      stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Vercel"],
      primaryLink: {
        label: "Visit Dine-Sync Web App",
        url: "https://dine-sync.vercel.app"
      },
      image: "/projects/img 2.PNG"
    },
    {
      id: "sedap",
      title: "Sedap",
      subtitle: "Restaurant Analytics & Multi-Branch Management Portal",
      badge: "Production Web App",
      description:
        "Complete commercial food & beverage operations portal designed for multi-branch tracking. Provides restaurant owners with real-time sales metrics, staff shift schedules, and branch order performance summaries.",
      outcomes: [
        "Centralized sales and revenue analytics tracking across multiple restaurant branches.",
        "Visual order fulfillment pipeline and daily operational performance metrics.",
        "Fast server-side rendered dashboard built for high data throughput."
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
      primaryLink: {
        label: "Case Study & Live Preview",
        url: "https://github.com/Hamza-code88"
      },
      image: "/projects/img 1.png"
    },
    {
      id: "serene-legacy",
      title: "Serene Legacy",
      subtitle: "Boutique Hospitality & Luxury Booking Platform",
      badge: "Live Web Experience",
      description:
        "Modern hospitality web platform featuring room reservation scheduling, dynamic amenity showcases, and seamless guest inquiry workflows built with optimized performance.",
      outcomes: [
        "Interactive room selection showcase with responsive high-resolution galleries.",
        "Direct reservation request workflows with automated availability validation.",
        "Polished editorial design architecture optimized for zero layout shift."
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      primaryLink: {
        label: "Case Study & Live Preview",
        url: "https://github.com/Hamza-code88"
      },
      image: "/projects/img 3.png"
    }
  ];

  return (
    <section id="proof" className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Featured Proof & Production Work
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Real production systems and working client platforms with verified human titles and tech tags.
          </p>
        </div>

        {/* Real Working Products Grid */}
        <div className="space-y-12">
          {staticFeatured.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-red-200 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                
                {/* Visual Half */}
                <div className="lg:col-span-6 relative h-[300px] sm:h-[380px] lg:h-[430px] bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                </div>

                {/* Content Half */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200"
                        dangerouslySetInnerHTML={{ __html: item.badge }}
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-red-600 mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="space-y-2 mb-6 bg-red-50/40 p-4 rounded-2xl border border-red-100/60">
                      <span className="block text-xs font-bold uppercase tracking-wider text-red-700">
                        Key Outcomes:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                        {item.outcomes.map((out, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">&bull;</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={item.primaryLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                      <span>{item.primaryLink.label}</span>
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}

          {/* Dynamic projects from Admin Dashboard */}
          {dbProjects.length > 0 && (
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                More Production Projects (Managed via Dashboard)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dbProjects.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {p.image_url && (
                        <div className="h-44 w-full mb-4 rounded-xl overflow-hidden bg-gray-100">
                          <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">{p.description}</p>
                    </div>
                    {p.demo_link && (
                      <a
                        href={p.demo_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProof;
