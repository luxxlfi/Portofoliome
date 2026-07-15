import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".about-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

        .from(
          ".about-title span",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.3",
        )

        .from(
          ".about-content",
          {
            x: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.5",
        )

        .from(
          ".about-stats > div",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.5",
        );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-8 py-24 bg-[#1a1a1a] text-white"
    >
      <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Title */}
        <div>
          <p className="about-label mb-6 text-sm uppercase tracking-[0.3em] text-neutral-400">
            [ About Me ]
          </p>

          <h2 className="about-title text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-black uppercase tracking-tighter overflow-hidden">
            <span className="block">Building</span>

            <span className="block">Digital</span>

            <span className="block">Experiences</span>
          </h2>
        </div>

        {/* Content */}
        <div className="about-content max-w-xl">
          <p className="text-lg leading-relaxed text-neutral-300 mb-8">
            I am a Fullstack Developer focused on building modern, scalable, and
            interactive web applications. I enjoy turning ideas into digital
            products through clean code and thoughtful user experiences.
          </p>

          <p className="text-lg leading-relaxed text-neutral-400">
            Experienced with modern technologies such as React, TypeScript,
            Next.js, Node.js, and database systems. Passionate about creating
            responsive interfaces and efficient backend solutions.
          </p>

          {/* Stats */}
          <div className="about-stats mt-10 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold">3+</h3>

              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Fullstack</h3>

              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
