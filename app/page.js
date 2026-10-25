"use client";

import React from 'react';
import { Header } from "./components/Header";
import { Hire } from './components/Hire';
import { FeaturedProof } from './components/FeaturedProof';
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import Services from "./components/Services";
import Process from "./components/Process";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#fbfbfa] text-[#111827]">
      {/* 1. Hero with Balanced Headline & Responsive Mockups */}
      <Header />

      {/* 2. Platform Chips (GitHub, LinkedIn, Upwork, Fiverr, Google Play) */}
      <Hire />

      {/* 3. Featured Proof (Bharosa Lab, Dine-Sync, Sedap, Serene Legacy) */}
      <FeaturedProof />

      {/* 4. About Hamza-Code88 */}
      <About />

      {/* 5. Technical Stack (Dedicated Section after About, before Services) */}
      <Stack />

      {/* 6. Services & Capabilities */}
      <Services />

      {/* 7. 4-Step Process */}
      <Process />

      {/* 8. Direct Contact Hub (Strictly NO form) */}
      <Contact />
    </div>
  );
}
