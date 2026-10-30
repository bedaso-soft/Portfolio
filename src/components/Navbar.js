"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, t, isEthiopic } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 flex items-center justify-center text-white font-mono font-bold text-xs tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_22px_rgba(59,130,246,0.7)] transition-all duration-300">
            BD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-widest uppercase text-white font-mono group-hover:text-blue-400 transition-colors">
              BEDASO DERSU
            </span>
            <span className="text-[10px] tracking-wider text-zinc-500 uppercase font-mono">
              CREATIVE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative text-xs tracking-[0.18em] uppercase transition-all duration-200 py-1 ${
                  isActive
                    ? "text-blue-400 font-medium"
                    : "text-zinc-400 hover:text-white"
                } ${isEthiopic ? "font-ethiopic-text text-sm" : "font-mono"}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Language Switcher & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-[#10121a] border border-white/[0.08] rounded-full p-1 shadow-inner">
            <div className="pl-2 pr-1 text-zinc-500">
              <Globe className="w-3.5 h-3.5" />
            </div>
            {["EN", "AM", "OM"].map((lang) => {
              const isSelected = language === lang;
              return (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-label={`Switch to ${lang}`}
                  className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 ${
                    isSelected
                      ? "bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Compact language switcher on mobile */}
          <div className="flex items-center bg-[#10121a] border border-white/[0.08] rounded-full p-0.5">
            {["EN", "AM", "OM"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-[10px] font-mono rounded-full transition-all ${
                  language === lang
                    ? "bg-blue-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 text-zinc-300 hover:text-white bg-[#10121a] border border-white/[0.08] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070709]/98 border-b border-white/[0.08] px-6 py-8 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-base tracking-wider uppercase py-1 border-b border-white/[0.04] flex items-center justify-between ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-zinc-300 hover:text-white"
                  } ${isEthiopic ? "font-ethiopic-text" : "font-mono"}`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
