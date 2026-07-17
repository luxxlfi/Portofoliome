import { useEffect, useState } from "react";
import Particles from "./Particles";

import TextType from "../TextEfect/Typing";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  const loadingTexts = [
    "Initializing...",
    "Loading Assets...",
    "Preparing Portfolio...",
    "Almost Ready...",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 6 + 2, 100);
        return next;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1a1a1a]">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center">
        <h1 className="text-7xl font-black tracking-[0.35em] text-white">
          <TextType
            text={["Luthfi"]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-white/60">
          {loadingTexts[textIndex]}
        </p>

        <div className="mt-14 w-[340px]">
          <div className="h-[2px] overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.3em] text-white/40">
            <span>Loading</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
