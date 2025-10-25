"use client";

import * as React from "react";

export type Lang = "en" | "hi" | "bn";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "nt3_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  // Load once on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "hi" || saved === "bn") {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LanguageProvider>");
  return ctx;
}

// Helper for brand text
export function brandByLang(l: Lang) {
  switch (l) {
    case "hi":
      return { a: "नारायणी", b: "विचार" }; // Narayani Thoughts (Hindi)
    case "bn":
      return { a: "নারায়ণী", b: "ভাবনা" }; // Narayani Bhavna (Bengali)
    default:
      return { a: "Narayani", b: "Thoughts" }; // English
  }
}
