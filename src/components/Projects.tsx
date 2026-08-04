import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./Projects/ProjectsList";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const projectsRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  const projectGroups = [];

  for (let i = 0; i < projects.length; i += 2) {
    projectGroups.push(projects.slice(i, i + 2));
  }

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarousel = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateCarousel();

    emblaApi.on("select", updateCarousel);
    emblaApi.on("reInit", updateCarousel);

    return () => {
      emblaApi.off("select", updateCarousel);
      emblaApi.off("reInit", updateCarousel);
    };
  }, [emblaApi]);

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
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projectGroups.map((group, pageIndex) => (
            <div key={pageIndex} className="min-w-full">
              {/* Grid lama kamu pindah ke sini */}
              <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {group.map((project, index) => (
                  <div
                    key={project.title}
                    className={`project-card group ${index === 1 ? "md:mt-24" : ""}`}
                  >
                    <div className="project-image relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 mb-8">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0

                          translate-y-0
                          md:translate-y-full
                           md:group-hover:translate-y-0

                          transition-all
                          duration-500

                        bg-[#141414]/75
                          backdrop-blur-lg
                          p-6
                          "
                      >
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex gap-5 mt-6 text-xs uppercase tracking-[0.2em]">
                          <a href={project.demo}>Show</a>

                          <a href={project.github}>GitHub</a>

                          <a href={project.demo}>Live Demo</a>
                        </div>
                      </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center gap-8">
        {canScrollPrev ? (
          <button
            onClick={scrollPrev}
            className="text-neutral-500 hover:text-white transition-all duration-300"
          >
            <MoveLeft size={20} strokeWidth={1.5} />
          </button>
        ) : (
          <div className="w-5" />
        )}

        <span className="text-sm tracking-[0.3em] text-neutral-500">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(projectGroups.length).padStart(2, "0")}
        </span>

        {canScrollNext ? (
          <button
            onClick={scrollNext}
            className="text-neutral-500 hover:text-white transition-all duration-300"
          >
            <MoveRight size={20} strokeWidth={1.5} />
          </button>
        ) : (
          <div className="w-5" />
        )}
      </div>
    </section>
  );
}
