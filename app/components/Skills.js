"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip,
  AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { subject: 'HTML/CSS', A: 95, fullMark: 100 },
  { subject: 'Tailwind', A: 90, fullMark: 100 },
  { subject: 'JavaScript', A: 85, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'Next.js', A: 75, fullMark: 100 },
  { subject: 'React Native', A: 70, fullMark: 100 },
  { subject: 'n8n', A: 60, fullMark: 100 },
  { subject: 'UI/UX', A: 80, fullMark: 100 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

  useEffect(() => {
    // Section Header Fade Up
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    // Charts Fade Up and Slide
    gsap.fromTo(chart1Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
    );

    gsap.fromTo(chart2Ref.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
    );
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="mx-auto mt-12 w-[96%] relative overflow-hidden"
    >
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border-t-4 border-red-600 relative z-10 min-h-[600px]">
        
        {/* Animated Background Waves (SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-[0.03] pointer-events-none z-0">
          <svg className="relative block w-[calc(100%+1.3px)] h-[300px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#DC2626"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.82V0Z" fill="#DC2626"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#DC2626"></path>
          </svg>
        </div>
        
        <div className="text-center mb-12 relative z-10" ref={headerRef}>
          <div className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-sm border border-red-100">
            Tech Analytics
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            My <span className="text-red-600">Skill Waves</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive charts representing my proficiency across different technologies. Hover over the graphs for detailed insights.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          
          {/* Radar Chart Container */}
          <div 
            ref={chart1Ref}
            className="w-full lg:w-1/2 h-[450px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col hover:shadow-[0_8px_30px_rgba(220,38,38,0.1)] transition-shadow duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">Tech Stack Radar</h3>
            <p className="text-sm text-gray-500 text-center mb-4">Multi-dimensional skill mapping</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                <PolarGrid stroke="#f3f4f6" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 13, fontWeight: '600' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #fee2e2', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }} 
                  itemStyle={{ color: '#dc2626' }}
                />
                <Radar name="Proficiency" dataKey="A" stroke="#DC2626" strokeWidth={3} fill="#ef4444" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart Container (Waves) */}
          <div 
            ref={chart2Ref}
            className="w-full lg:w-1/2 h-[450px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col hover:shadow-[0_8px_30px_rgba(220,38,38,0.1)] transition-shadow duration-500 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-50 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">Proficiency Flow</h3>
            <p className="text-sm text-gray-500 text-center mb-6">Smooth wave representation of technical expertise</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={skillsData}
                margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12, fontWeight: '500' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #fee2e2', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  itemStyle={{ color: '#dc2626' }}
                />
                {/* type="monotone" creates the smooth wave curve */}
                <Area type="monotone" dataKey="A" stroke="#DC2626" strokeWidth={4} fillOpacity={1} fill="url(#colorPv)" activeDot={{ r: 8, strokeWidth: 0, fill: '#DC2626' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
