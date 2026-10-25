import React from 'react';

export const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Scope & Architecture",
      desc: "Problem, user roles, requirements, and deliverables — documented in clear writing before any code."
    },
    {
      num: "02",
      title: "Prototype & Flow",
      desc: "Clickable flow or first working UI to align on user journey, APIs, and data models."
    },
    {
      num: "03",
      title: "Iterative Build",
      desc: "Weekly working builds with progress videos, clean git commits, and zero last-minute surprises."
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Google Play Store / Vercel release, clean handover, documentation, and dedicated post-launch support."
    }
  ];

  return (
    <section id="process" className="py-20 border-b border-gray-200 bg-[#fbfbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Subtitle removed */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            How I work
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            A battle-tested 4-step delivery pipeline designed for reliability and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-extrabold text-red-600 tracking-wider">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
