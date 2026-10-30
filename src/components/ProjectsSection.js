"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTitle from "./ScrollTitle";
import { ExternalLink, ChevronRight, ChevronLeft, Check, Terminal, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const { t, isEthiopic } = useLanguage();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = t.projects.items;
  const currentProject = projects[activeProjectIndex] || projects[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#08090f] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient aura */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Drop-and-Settle Title */}
        <ScrollTitle
          label={t.projects.label}
          titlePart1={t.projects.titlePart1}
          titleHighlight={t.projects.titleHighlight}
          titlePart2={t.projects.titlePart2}
        />

        {/* Project Selector Navigation Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            {projects.map((proj, idx) => {
              const isSelected = idx === activeProjectIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] font-semibold"
                      : "bg-[#10121a] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                  }`}
                >
                  <span>{proj.number}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="truncate max-w-[140px]">{proj.title}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2 rounded-full bg-[#10121a] text-zinc-400 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] border border-white/[0.08] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-zinc-400 px-1">
              {currentProject.number} / {t.projects.counterTotal}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2 rounded-full bg-[#10121a] text-zinc-400 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] border border-white/[0.08] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Scene Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#0d0e16]/80 border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative"
          >
            {/* Subtle blue accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-tr-2xl pointer-events-none" />

            {/* Left Column: Project Narrative & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                {/* Scene Meta Header */}
                <div className="flex items-center gap-3 text-xs font-mono text-blue-400 mb-3">
                  <span className="font-bold text-sm tracking-widest">
                    PROJECT {currentProject.number}
                  </span>
                  <span>//</span>
                  <span className="text-zinc-400 uppercase tracking-wider text-[11px]">
                    {currentProject.category}
                  </span>
                </div>

                {/* Oversized Editorial Project Title */}
                <h3
                  className={`text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-3 leading-[1.12] ${
                    isEthiopic ? "font-ethiopic-text" : "font-editorial"
                  }`}
                >
                  {currentProject.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-mono text-blue-300 mb-5 font-light">
                  {currentProject.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {currentProject.description}
                </p>

                {/* Problem & Solution Accordion/Card */}
                <div className="space-y-3.5 mb-7">
                  <div className="p-3.5 rounded-lg bg-[#08080d] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">CHALLENGE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-normal">
                      {currentProject.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#08080d] border border-blue-500/20">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">ENGINEERING SOLUTION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-normal">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-2.5">
                    {t.projects.techStack}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#141622] border border-white/[0.08] text-xs font-mono text-slate-200 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Project Link CTA */}
              <div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                >
                  <span>{t.projects.viewProject}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Genuine Project Screenshot / Showcase Window */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full relative group">
                {/* Browser Frame Header */}
                <div className="w-full bg-[#131520] border-t border-l border-r border-white/[0.1] rounded-t-xl px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                    {currentProject.id}.bedasodersu.dev
                  </span>
                  <span className="text-[10px] font-mono text-blue-400">SSL SECURE</span>
                </div>

                {/* Screenshot Container */}
                <div className="relative aspect-[16/10] w-full rounded-b-xl overflow-hidden border border-white/[0.1] bg-[#07070a] shadow-2xl">
                  <Image
                    src={currentProject.image}
                    alt={`${currentProject.title} project screenshot`}
                    fill
                    className="object-cover object-top filter contrast-[1.05] group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />

                  {/* Fine gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Corner tag */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#070709]/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-zinc-300">
                    AUTHENTIC REPO ASSET
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
