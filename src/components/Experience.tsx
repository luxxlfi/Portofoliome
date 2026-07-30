import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      year: "2025 — SEKARANG",
      role: "FULLSTACK DEVELOPER",
      company: "Personal Projects & Development",
      description:
        "Membangun aplikasi web fullstack menggunakan teknologi modern seperti React, Next.js, TypeScript, Node.js, dan database. Fokus pada pengembangan sistem yang scalable dan user experience yang baik.",
    },
    {
      year: "2026 — 2026",
      role: "WEB DEVELOPER BOOTCAMP",
      company: "Fullstack Development Program",
      description:
        "Mempelajari pengembangan aplikasi web end-to-end mulai dari frontend, backend, database, API, authentication, hingga deployment.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".experience-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

        .from(
          ".experience-title span",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.3",
        )

        .from(
          ".experience-desc",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )

        .from(
          ".experience-item",
          {
            y: 100,
            opacity: 0,
            stagger: 0.25,
            duration: 0.9,
          },
          "-=0.4",
        )

        .from(
          ".experience-icon",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5",
        );
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="py-32 px-8 bg-[#1a1a1a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <span className="experience-label text-xs text-neutral-500 uppercase tracking-[0.3em] font-bold">
            // Experience
          </span>

          <h2 className="experience-title mt-4 text-[clamp(3rem,6vw,5rem)] leading-[0.9] font-black uppercase tracking-tighter overflow-hidden">
            <span className="block">Professional</span>

            <span className="block">Journey</span>
          </h2>

          <p className="experience-desc mt-8 max-w-xl text-neutral-400 leading-relaxed">
            Building digital products through modern technologies, combining
            frontend interfaces with reliable backend systems.
          </p>
        </div>

        {/* Experience List */}
        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {/* Year */}
              <div className="text-xs font-bold text-neutral-500 tracking-widest">
                {exp.year}
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">
                  {exp.role}
                </h3>

                <p className="text-lg font-bold text-neutral-300 mb-6">
                  {exp.company}
                </p>

                <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex md:justify-end items-start">
                <div className="experience-icon w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">
                    {" "}
                    <ArrowRight size={24} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
