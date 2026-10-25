import React from 'react';

export const Stack = () => {
  const stackGroups = [
    {
      group: "Web & Core",
      skills: ["Next.js", "React", "TypeScript", "JavaScript"]
    },
    {
      group: "Mobile",
      skills: ["React Native (Expo)", "NativeWind"]
    },
    {
      group: "Backend & Data",
      skills: ["Supabase", "PostgreSQL", "Node.js", "Express", "FastAPI", "Clerk"]
    },
    {
      group: "Styling & State",
      skills: ["Tailwind CSS", "Zustand", "Monaco Editor"]
    },
    {
      group: "AI, Voice & Automation",
      skills: ["n8n", "Whisper", "Groq", "Gemini API", "Retell AI", "LangChain", "ChromaDB", "Vosk", "Eel"]
    },
    {
      group: "Hardware",
      skills: ["ESP8266 NodeMCU"]
    }
  ];

  return (
    <section id="stack" className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean title, no subtitle */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Technical Stack
          </h2>
          <p className="text-sm font-semibold text-red-600 mt-2">
            Production experience in the first three groups; working experience in AI/voice and automation.
          </p>
        </div>

        {/* Structured Stack Grid: No charts, no percentages, no hover-only values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackGroups.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border-2 border-gray-100 bg-[#fbfbfa] shadow-xs hover:border-red-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center justify-between">
                  <span>{item.group}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-white text-gray-800 text-xs font-semibold rounded-lg border border-gray-200 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;
