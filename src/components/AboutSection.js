"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTitle from "./ScrollTitle";
import { GraduationCap, Layers, Cpu, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { t, isEthiopic } = useLanguage();

  const highlightIcons = [
    Layers,
    Cpu,
    GraduationCap,
    CheckCircle2,
  ];

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-700/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Drop-and-Settle Editorial Title */}
        <ScrollTitle
          label={t.about.label}
          titlePart1={t.about.titlePart1}
          titleHighlight={t.about.titleHighlight}
          titlePart2={t.about.titlePart2}
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-blue-400 first-letter:mr-2 first-letter:float-left">
              {t.about.paragraph1}
            </p>

            <p className="text-slate-400">
              {t.about.paragraph2}
            </p>

            <p className="text-slate-400">
              {t.about.paragraph3}
            </p>

            {/* University & Focus Callout */}
            <div className="mt-4 p-5 rounded-xl bg-[#0d0f17] border border-blue-500/20 flex items-start gap-4 shadow-inner">
              <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Software Engineer — Full-Stack & AI Product Builder
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal font-sans">
                  Building dependable digital products, scalable systems, and practical AI-powered experiences with a strong focus on clean engineering and real-world impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Highlight Indicators */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.stats.map((stat, idx) => {
              const Icon = highlightIcons[idx] || CheckCircle2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 rounded-xl bg-[#0c0d14] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-zinc-500">
                      0{idx + 1} //
                    </span>
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors ${
                        isEthiopic ? "font-ethiopic-text" : "font-mono"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1.5 font-sans leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
