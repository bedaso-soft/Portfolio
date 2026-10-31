import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#070709] text-slate-100 selection:bg-blue-600/40 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
        <AIChat />
    </div>
  );
}