import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Core & Frameworks",
      skills: ["Next.js", "React", "React Native (Expo)", "TypeScript", "JavaScript (ES6+)"]
    },
    {
      category: "Backend & Data",
      skills: ["Supabase", "PostgreSQL", "Node.js", "Express", "FastAPI", "Clerk Auth"]
    },
    {
      category: "Styling & State",
      skills: ["Tailwind CSS", "NativeWind", "Zustand", "Monaco Editor"]
    },
    {
      category: "AI, Voice & Automation",
      skills: ["n8n", "Whisper", "Groq", "Gemini API", "Retell AI", "LangChain", "ChromaDB", "Vosk", "Eel"]
    },
    {
      category: "Embedded & Hardware",
      skills: ["ESP8266 NodeMCU", "IoT Webhooks"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-gray-200 bg-[#fbfbfa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-wide uppercase text-red-600 mb-2">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Skills & toolchain
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Production experience in core web, mobile, and backend architectures; working experience in AI voice agents and automation pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-[#fbfbfa] text-gray-700 text-xs font-medium rounded-md border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-500 text-center">
          <strong>Note:</strong> No arbitrary percentages or charts. I choose tools based on project constraints, team speed, and maintainability.
        </div>

      </div>
    </section>
  );
};

export default Skills;
