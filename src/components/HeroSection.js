"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Code2, Sparkles, MapPin } from "lucide-react";

export default function HeroSection() {
  const { t, isEthiopic } = useLanguage();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#070709] via-[#090a10] to-[#070709]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
          {/* Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10131f] border border-blue-500/20 w-fit mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-blue-300 font-medium">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main Headline: Animated downward from above its final position */}
          <motion.h1
            initial={{ opacity: 0, y: -38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal tracking-tight text-white mb-8 ${
              isEthiopic ? "font-ethiopic-text" : "font-editorial"
            }`}
          >
            <span>{t.hero.headlinePart1} </span>
            <span className="text-blue-400 italic font-normal bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent electric-text-glow">
              {t.hero.headlineHighlight1}
            </span>
            <br className="hidden sm:inline" />
            <span> {t.hero.headlinePart2} </span>
            <span className="text-white border-b-2 border-blue-500/60 pb-0.5">
              {t.hero.headlineHighlight2}
            </span>
          </motion.h1>

          {/* Supporting Bio Content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-light"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Location and Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-9"
          >
            <div className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.hero.location}</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.hero.statusBadge}</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="group px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] flex items-center gap-2.5"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="px-7 py-3.5 rounded-full bg-[#10121a] hover:bg-[#151824] text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/50 text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 shadow-sm"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right Column: Authentic Editorial Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[390px] group"
          >
            {/* Subtle blue accent frame behind image */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-transparent to-sky-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0d13] p-2 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/bedaso.jpg"
                  alt="Bedaso Dersu — Full-Stack Developer & AI Enthusiast"
                  fill
                  priority
                  className="object-cover object-center filter grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Subtle vignette gradient over portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-75" />

                {/* Floating identity pill at bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#070709]/80 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono font-bold tracking-wider text-white">
                      BEDASO DERSU
                    </p>
                    <p className="text-[10px] font-mono text-zinc-400">
                      Software Engineer
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial year & discipline stamp */}
            <div className="mt-3 flex items-center justify-between px-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
              <span>EDITION 2026</span>
              <span className="text-blue-400 font-semibold">PORTFOLIO // BD</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500">
          {t.hero.scrollPrompt}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <span className="w-1 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
