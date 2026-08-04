import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppImage from "@/assets/Projects/MyorbitApp.jpg";
import WebCircle from "@/assets/Projects/CircleWeb.png";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "ORBIT",
      category: "Circle web / 2026",
      image: WebCircle,
    },
    {
      title: "MY ORBIT",
      category: "Analisis Mobile App / 2026",
      image: AppImage,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".projects-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

        .from(
          ".projects-title span",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
          },
          "-=0.3",
        )

        .from(
          ".project-card",
          {
            y: 100,
            opacity: 0,
            stagger: 0.25,
            duration: 1,
          },
          "-=0.5",
        )

        .from(
          ".project-image",
          {
            scale: 1.15,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
          },
          "-=0.8",
        )

        .from(
          ".project-info",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.5",
        );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-32 px-8 bg-[#1a1a1a] text-white"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-8">
        <div>
          <span className="projects-label text-xs text-neutral-500 uppercase tracking-[0.3em] font-bold">
            // Projects
          </span>

          <h2 className="projects-title text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter mt-4 overflow-hidden">
            <span className="block">Selected</span>

            <span className="block">Works</span>
          </h2>
        </div>

        <p className="text-xs text-neutral-500 font-bold mt-6 md:mt-0">
          2025 — 2026
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card ${index === 1 ? "md:mt-24" : ""}`}
          >
            <div className="project-image aspect-[4/3] overflow-hidden bg-neutral-900 mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="project-info flex justify-between items-start">
              <h3 className="text-3xl font-bold uppercase tracking-tighter">
                {project.title}
              </h3>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
