import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroimage from "../assets/hero.jpg";
import TextTypingEf from "./TextEfect/TypingUse";
import ShinyText from "./ShinyEf/Shiny";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-title span", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })

        .from(
          ".hero-info",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )

        .from(
          ".hero-image",
          {
            x: 100,
            scale: 1.2,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8",
        )

        .from(
          ".hero-tags span",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.6",
        )

        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden px-8 pt-24 bg-[#1a1a1a] text-white"
    >
      {/* Content */}
      <div className="relative z-10 w-full">
        <h1 className="hero-title text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-black uppercase tracking-tighter mb-12">
          <span className="block">
            <TextTypingEf />
          </span>

          <span className="block">
            <ShinyText
              text="Fullstack"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </span>

          <span className="block"> <ShinyText
              text="Developer"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            /></span>
        </h1>

        <div className="hero-info max-w-md">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-6">
            [ Indonesia · Available for Work ]
          </p>

          <p className="text-lg leading-relaxed text-neutral-300">
            Building modern web applications and interactive digital experiences
            with clean code, scalable systems, and creative solutions.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image absolute right-0 top-0 w-1/2 h-full opacity-30 grayscale">
        <img
          src={heroimage}
          alt="Luxfi Developer"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>

      {/* Tags & CTA */}
      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-4">
        <div className="hero-tags flex gap-2">
          {["React", "TypeScript", "GSAP", "Vite"].map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#projects"
          className="hero-button flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white"
        >
          View Projects →
        </a>
      </div>
    </section>
  );
}
