"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, GitBranch, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#050608] border-t border-white/[0.06] text-zinc-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-[11px]">
            BD
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-300 font-bold tracking-wider">
              BEDASO DERSU
            </span>
            <span className="text-[10px] text-zinc-600">
              {currentYear ? `© ${currentYear} ${t.footer.rights}` : null}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-zinc-400 font-sans text-xs">
          {t.footer.tagline}
        </p>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/bedaso-soft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <GitBranch className="w-4 h-4" />
          </a>
          <a
            href="mailto:bedasodersu2@gmail.com"
            aria-label="Email Bedaso"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10121a] hover:bg-blue-600 hover:text-white text-zinc-400 border border-white/[0.08] transition-all duration-200"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
