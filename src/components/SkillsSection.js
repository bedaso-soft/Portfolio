"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTitle from "./ScrollTitle";
import { Layout, Server, Database, Brain, Wrench } from "lucide-react";

export default function SkillsSection() {
  const { t, isEthiopic } = useLanguage();

  const categoryIcons = [
    Layout,
    Server,
    Database,
    Brain,
    Wrench,
  ];

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Drop-and-Settle Title */}
        <ScrollTitle
          label={t.skills.label}
          titlePart1={t.skills.titlePart1}
          titleHighlight={t.skills.titleHighlight}
          titlePart2={t.skills.titlePart2}
        />

        {/* Editorial Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Wrench;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`p-7 rounded-xl bg-[#0c0d15] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] flex flex-col justify-between ${
                  idx === 0 || idx === 3 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-blue-400 uppercase font-semibold">
                      0{idx + 1} // DOMAIN
                    </span>
                    <div className="p-2 rounded-lg bg-[#141624] text-zinc-400 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-normal text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors ${
                      isEthiopic ? "font-ethiopic-text" : "font-editorial"
                    }`}
                  >
                    {cat.name}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans mb-6 font-light leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-[#131520] hover:bg-blue-900/30 border border-white/[0.07] hover:border-blue-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
