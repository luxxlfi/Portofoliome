import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoUse from "./LoopTech/LogoUse";
import { DatabaseBackup, SwitchCamera } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".skills-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })

        .from(
          ".skills-title span",
          {
            y: 70,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.3",
        )

        .from(
          ".skill-card",
          {
            y: 80,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5",
        )

        .from(
          ".skill-item",
          {
            x: -20,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
          },
          "-=0.3",
        )

        .from(
          ".logo-section",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2",
        );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-32 px-8 bg-[#1a1a1a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="skills-label text-xs text-neutral-500 uppercase tracking-[0.3em] font-bold">
              // Skills
            </span>

            <h2 className="skills-title text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-black uppercase tracking-tighter mt-4 overflow-hidden">
              <span className="block">What</span>
              <span className="block">I Build</span>
            </h2>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="skill-card border-t border-white/10 pt-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl"><SwitchCamera/></span>

                <h3 className="text-xl font-bold uppercase tracking-widest">
                  Frontend
                </h3>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Creating modern, responsive, and interactive interfaces with
                clean architecture and great user experience.
              </p>

              <ul className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 flex flex-col gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "GSAP Animation",
                  "Three.js",
                ].map((skill) => (
                  <li key={skill} className="skill-item">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="skill-card border-t border-white/10 pt-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl"><DatabaseBackup/></span>

                <h3 className="text-xl font-bold uppercase tracking-widest">
                  Backend
                </h3>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Building scalable backend systems, APIs, authentication, and
                database management.
              </p>

              <ul className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 flex flex-col gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "Supabase",
                  "REST API",
                  "Authentication",
                ].map((skill) => (
                  <li key={skill} className="skill-item">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Technology Stack */}
        <div className="logo-section mt-24 border-t border-white/10 pt-12 ">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <span className="text-xs text-neutral-500 uppercase tracking-[0.3em] font-bold">
                // Technologies
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tighter">
                Technologies
                <br />I Use
              </h3>
            </div>

            <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
              My daily stack for building modern web applications, interactive
              interfaces, scalable backend systems, and smooth user experiences.
            </p>
          </div>

          <div className="mt-12 text-white">
                <LogoUse/>
          </div>
        
        </div>
      </div>
    </section>
  );
}
