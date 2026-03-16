"use client";

import { useEffect, useState, useMemo } from "react";
import { initParticlesEngine, Particles as TSParticles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/** Particles - subtle dots on dark background */
export default function Particles() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsInitialized(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    detectRetina: true,
    fpsLimit: 120,
    interactivity: { detectOn: "canvas", events: {}, modes: {} },
    particles: {
      number: { value: 200 },
      color: { value: "#FFFFFF" },
      opacity: {
        value: { min: 0.16, max: 0.8 },
        animation: { enable: true, sync: false, speed: 2 },
      },
      size: {
        value: { min: 0.4, max: 2 },
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 1.5 },
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
  }), []);

  if (!isInitialized) return null;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <TSParticles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
