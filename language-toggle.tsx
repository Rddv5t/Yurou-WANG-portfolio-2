"use client";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") === "en" ? "en" : "zh";
    document.documentElement.dataset.lang = saved;
    document.documentElement.lang = saved === "zh" ? "zh-CN" : "en";
    const frame = window.requestAnimationFrame(() => setLang(saved));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  function switchLanguage(next: "zh" | "en") { setLang(next); window.localStorage.setItem("portfolio-language", next); document.documentElement.dataset.lang = next; document.documentElement.lang = next === "zh" ? "zh-CN" : "en"; }
  return <div className="language-toggle" aria-label="Language selector"><button className={lang === "zh" ? "active" : ""} onClick={() => switchLanguage("zh")}>中</button><span>/</span><button className={lang === "en" ? "active" : ""} onClick={() => switchLanguage("en")}>EN</button></div>;
}
