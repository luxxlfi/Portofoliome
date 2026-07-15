import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LanyardUse from "./3dCard/LanyardUse";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".contact-label", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

        .from(
          ".contact-title span",
          {
            y: 100,
            opacity: 0,
            stagger: 0.15,
            duration: 0.9,
          },
          "-=0.3",
        )

        .from(
          ".contact-info",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )

        .from(
          ".contact-form",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "-=0.7",
        )

        .from(
          ".form-field",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.5",
        )

        .from(
          ".contact-button",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )

        .from(
          ".footer-bottom",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2",
        );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={contactRef}
      id="contact"
      className="relative overflow-hidden pt-32 pb-12 px-8 border-t border-white/10 bg-[#1a1a1a] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        {/* Heading */}
        <div className="max-w-xl">
          <span className="contact-label text-xs text-neutral-500 uppercase tracking-[0.3em] font-bold">
            // Contact
          </span>

          <h2 className="contact-title mt-6 text-[clamp(3rem,7vw,6rem)] leading-[0.9] font-black uppercase tracking-tighter overflow-hidden">
            <span className="block">Let's Build</span>

            <span className="block">Something</span>

            <span className="block">Great</span>
          </h2>

          <div className="contact-info mt-12 flex flex-col gap-4 text-sm font-bold">
            <a
              href="mailto:abyanluxfi@gmail.com"
              className="text-neutral-400 underline underline-offset-8"
            >
              abyanluxfi@gmail.com
            </a>

            <p className="text-neutral-500">
              Available for freelance & collaboration
            </p>
          </div>

          {/* FOR */}

          <form className="flex flex-col gap-8">
            <div className="form-field border-b border-white/10 pb-4">
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent w-full outline-none text-sm placeholder:text-neutral-600"
              />
            </div>

            <div className="form-field border-b border-white/10 pb-4">
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="email@example.com"
                className="bg-transparent w-full outline-none text-sm placeholder:text-neutral-600"
              />
            </div>

            <div className="form-field border-b border-white/10 pb-4">
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                Message
              </label>

              <textarea
                placeholder="Tell me about your project..."
                className="bg-transparent w-full outline-none text-sm resize-none h-24 placeholder:text-neutral-600"
              />
            </div>

            <button className="contact-button bg-white text-black py-4 text-xs font-black uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>

        {/* 3D */}

        <div className="contact-form w-full ">
          <LanyardUse  />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 gap-8">
        <div className="text-lg font-black tracking-tighter">
          LUXFI<span className="text-neutral-500">.</span>
        </div>

        <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
          © 2026 LUXFI. ALL RIGHTS RESERVED.
        </div>

        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          <a href="https://github.com/luxxlfi">Github</a>

          <a href="https://www.linkedin.com/in/abyan-luthfi/">LinkedIn</a>

          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
