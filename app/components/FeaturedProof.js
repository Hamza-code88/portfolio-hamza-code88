"use client";
import React, { useEffect, useState } from 'react';
import { getProjects } from '@/app/actions/projects';

export const FeaturedProof = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  // Fallback data in case database is empty
  const fallbackProjects = [
    {
      id: "bharosa-lab",
      title: "Bharosa Lab",
      description: "A complete 3-way digital healthcare ecosystem bridging patients, riders, and pathology labs for seamless home-sample collection. Built with Next.js, React Native (Expo), and Supabase.",
      image_url: "https://asmnvwmbfkhnolfnzhym.supabase.co/storage/v1/object/public/project_images/0.237062382049244.png",
      demo_link: "https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab",
      github_link: ""
    },
    {
      id: "serene-legacy",
      title: "Serene Legacy Funeral Platform",
      description: "A full-stack funeral home management platform built with Next.js, Supabase, and Tailwind CSS — featuring public memorial/tribute pages with guestbook & candle-lighting, and a staff admin portal for case management, scheduling, and payment tracking.",
      image_url: "https://asmnvwmbfkhnolfnzhym.supabase.co/storage/v1/object/public/project_images/0.5280167685862901.png",
      demo_link: "https://serene-legacy-funeral-platform.vercel.app/",
      github_link: "https://github.com/Hamza-code88/serene-legacy-funeral-platform"
    },
    {
      id: "sedap-dashboard",
      title: "Sedap Food Delivery Dashboard",
      description: "Food Delivery Admin Dashboard built with Next.js, Tailwind CSS, and modern UI design. Manage orders, customers, restaurants, and delivery operations with an intuitive dashboard interface.",
      image_url: "https://i.postimg.cc/9Qf6FpNF/Screenshot-(333).png",
      demo_link: "https://sedap-food-delivery-dashboard-using.vercel.app/",
      github_link: ""
    },
    {
      id: "desi-order",
      title: "Desi Order Delivery App",
      description: "A Full-Stack Food Delivery Platform built with Next.js 14, Supabase, and TailwindCSS. Features Real-time Tracking (GPS), Admin Dashboard, Rider App, and Push Notifications.",
      image_url: "https://i.postimg.cc/PrtDJ3sr/desi-order.png",
      demo_link: "https://desi-order-delivery-app.vercel.app/",
      github_link: ""
    }
  ];

  useEffect(() => {
    const fetchDB = async () => {
      try {
        const res = await getProjects();
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error("DB Projects fetch error:", err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchDB();
  }, []);

  const displayList = projects.length > 0 ? projects : fallbackProjects;
  const currentShown = displayList.slice(0, visibleCount);
  const hasMore = visibleCount < displayList.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section id="proof" className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Featured Proof & Case Studies
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Real production systems, live client applications, and measurable engineering outcomes.
          </p>
        </div>

        {/* Dynamic Project Cards: Top 4 shown first */}
        <div className="space-y-12">
          {currentShown.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-red-200 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                
                {/* Visual Half */}
                <div className="lg:col-span-6 relative h-[300px] sm:h-[380px] lg:h-[430px] bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.image_url || "/projects/hero-slide-1.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />
                </div>

                {/* Content Half */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Standard Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Next.js", "React", "Supabase", "Tailwind CSS"].map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Links */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 items-center">
                    {item.demo_link && (
                      <a
                        href={item.demo_link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                      >
                        <span>Live Demo / App</span>
                        <span className="ml-2">&rarr;</span>
                      </a>
                    )}
                    {item.github_link && (
                      <a
                        href={item.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors"
                      >
                        GitHub Code &rarr;
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-base font-extrabold rounded-2xl text-red-600 bg-white hover:bg-red-600 hover:text-white shadow-md hover:shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Load More Projects</span>
              <span className="ml-2 font-mono text-lg">&darr;</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProof;
