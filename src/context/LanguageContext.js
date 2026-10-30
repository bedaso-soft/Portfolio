"use client";

import React, { createContext, useContext, useState } from "react";
import { en } from "@/locales/en";
import { am } from "@/locales/am";
import { om } from "@/locales/om";

const dictionaries = {
  EN: en,
  AM: am,
  OM: om,
};

const LanguageContext = createContext({
  language: "EN",
  setLanguage: () => {},
  t: en,
  isEthiopic: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") {
      return "EN";
    }

    try {
      const saved = window.localStorage.getItem("bd_portfolio_lang");
      if (saved && (saved === "EN" || saved === "AM" || saved === "OM")) {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }

    return "EN";
  });

  const setLanguage = (lang) => {
    if (lang === "EN" || lang === "AM" || lang === "OM") {
      setLanguageState(lang);
      try {
        localStorage.setItem("bd_portfolio_lang", lang);
      } catch {
        // Ignore localStorage errors
      }
    }
  };

  const t = dictionaries[language] || en;
  const isEthiopic = language === "AM";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isEthiopic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
