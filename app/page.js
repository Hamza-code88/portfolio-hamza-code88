"use client";

import React from 'react';
import { Header } from "./components/Header";
import { Hire } from './components/Hire';
import { FeaturedProof } from './components/FeaturedProof';
import Services from "./components/Services";
import Process from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-[#fbfbfa] text-[#111827]">
      {/* 1. Hero with 16:9 Mockups & Direct Action CTAs */}
      <Header />

      {/* 2. Top Social Proof / Tech Strip */}
      <Hire />

      {/* 3. Featured Proof & Case Studies (Bharosa Lab, AirDart, Autonomous AI) */}
      <FeaturedProof />

      {/* 4. Services */}
      <Services />

      {/* 5. 4-Step Process */}
      <Process />

      {/* 6. About */}
      <About />

      {/* 7. Dedicated Contact & Social Platforms Hub (WhatsApp, Upwork, Fiverr, LinkedIn, GitHub, Email) */}
      <Contact />
    </div>
  );
}
