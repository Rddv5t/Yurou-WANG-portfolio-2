"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-heading, .project-card, .about-grid, .timeline article, .tools-row, .contact-inner > *, .project-title-row, .project-hero-image, .project-intro > *, .project-gallery figure, .next-project-link > *"
    ));

    targets.forEach((element, index) => {
      element.classList.add("motion-item");
      element.style.setProperty("--motion-delay", `${(index % 4) * 70}ms`);
    });

    document.body.classList.add("motion-enabled");
    if (reduced) targets.forEach((element) => element.classList.add("is-visible"));

    const observer = reduced ? null : new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((element) => observer?.observe(element));

    let ticking = false;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(max > 0 ? window.scrollY / max : 0));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer?.disconnect(); window.removeEventListener("scroll", onScroll); document.body.classList.remove("motion-enabled"); };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
