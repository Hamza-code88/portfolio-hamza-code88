import React from 'react'

export const Hire = () => {
  return (
    <div className='w-[96%] mx-auto mt-12 overflow-hidden bg-red-600 rounded-lg py-4 shadow-lg border-2 border-white/20'>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className='animate-marquee cursor-pointer'>
        {/* First Set */}
        <div className='flex justify-around w-1/2'>
            <a href="https://www.upwork.com/freelancers/~01df46cd7c20bc1397?mp_source=share" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>Upwork</a>
            <a href="https://www.linkedin.com/in/hamza-khan-0a5419336" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>LinkedIn</a>
            <a href="https://wa.me/923494427822" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>WhatsApp</a>
            <a href="mailto:hamza@example.com" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>Email</a>
        </div>
        {/* Second Set (Duplicate for seamless loop) */}
        <div className='flex justify-around w-1/2'>
            <a href="https://www.upwork.com/freelancers/~01df46cd7c20bc1397?mp_source=share" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>Upwork</a>
            <a href="https://www.linkedin.com/in/hamza-khan-0a5419336" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>LinkedIn</a>
            <a href="https://wa.me/923494427822" target="_blank" rel="noreferrer" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>WhatsApp</a>
            <a href="mailto:hamza@example.com" className='text-white text-2xl font-bold mx-8 hover:text-gray-200 transition'>Email</a>
        </div>
      </div>
    </div>
  )
}
