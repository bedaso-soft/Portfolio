"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Reusable editorial title that drops down from above its final position
 * and settles into place with selective blue highlights.
 */
export default function ScrollTitle({
  label,
  titlePart1,
  titleHighlight,
  titlePart2,
  align = "left",
  className = "",
}) {
  const { isEthiopic } = useLanguage();

  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-blue-400 font-mono font-medium">
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] ${
          isEthiopic ? "font-ethiopic-text" : "font-editorial"
        }`}
      >
        <span>{titlePart1} </span>
        {titleHighlight && (
          <span className="text-blue-400 italic font-normal bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent electric-text-glow">
            {titleHighlight}{" "}
          </span>
        )}
        {titlePart2 && <span>{titlePart2}</span>}
      </motion.h2>
    </div>
  );
}
