import React from 'react';

export const Services = () => {
  const services = [
    {
      title: "Healthcare & Booking Platforms",
      target: "Diagnostic labs, specialized clinics, and on-demand care providers.",
      deliverable: "Multi-party platforms covering patient appointment scheduling, live dispatching, order handling, and clinical report management.",
      example: "Bharosa Lab",
      exampleLink: "https://play.google.com/store/apps/details?id=com.hamzacode.bharosalab"
    },
    {
      title: "Cross-Platform Mobile Apps",
      target: "Founders and businesses needing iOS & Android apps from one robust codebase.",
      deliverable: "Production-ready React Native (Expo) applications with push notifications, offline support, authentication, and Google Play release.",
      example: "Patient & Rider Apps",
      exampleLink: "#proof"
    },
    {
      title: "Web Apps & Admin Dashboards",
      target: "Operations teams, SaaS startups, and internal business tooling.",
      deliverable: "Fast Next.js web applications backed by PostgreSQL/Supabase, role-based access control, analytics tables, and drag-and-drop workflows.",
      example: "Dine-Sync & Lab Partner Portal",
      exampleLink: "#proof"
    },
    {
      title: "AI Voice Agents & Automations",
      target: "Customer support desks, lead generation teams, and manual data pipelines.",
      deliverable: "Conversational voice prototypes (Retell AI, FastAPI, LangChain) and self-hosted n8n workflows that eliminate hours of routine staff busywork.",
      example: "Medical Billing Voice Agent & Lead-Hub",
      exampleLink: "#proof"
    }
  ];

  return (
    <section id="services" className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Subtitle removed */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Services & Capabilities
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            What I deliver end to end, with predictable scope, clean architecture, and direct developer communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border-2 border-gray-100 bg-[#fbfbfa] flex flex-col justify-between hover:border-red-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6 leading-relaxed">
                  <p>
                    <strong className="text-gray-900 font-semibold">Who it is for: </strong>
                    {item.target}
                  </p>
                  <p>
                    <strong className="text-gray-900 font-semibold">What is delivered: </strong>
                    {item.deliverable}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  Example: <strong className="text-gray-900">{item.example}</strong>
                </span>
                <a
                  href={item.exampleLink}
                  className="font-bold text-red-600 hover:text-red-700 transition"
                >
                  View proof &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
