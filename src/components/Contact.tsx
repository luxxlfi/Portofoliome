import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LanyardUse from "./3dCard/LanyardUse";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

          <div className="contact-info mt-12">
            <p className="max-w-md text-neutral-500 leading-relaxed">
              Ready to turn your vision into an exceptional digital experience?
              Let's build it together.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="mailto:abyanluxfi@gmail.com"
                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail
                  size={18}
                  className="text-neutral-500 group-hover:text-white"
                />
                <span>abyanluxfi@gmail.com</span>
              </a>

              <a
                href="https://github.com/luxxlfi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
              >
                <FaGithub
                  size={18}
                  className="text-neutral-500 group-hover:text-white"
                />
                <span>github.com/luxxlfi</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abyan-luthfi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
              >
                <FaLinkedin
                  size={18}
                  className="text-neutral-500 group-hover:text-white"
                />
                <span>Abyan Luthfi</span>
              </a>

              <a
                href="https://wa.me/6282238589905"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
              >
                <MessageCircle
                  size={18}
                  className="text-neutral-500 group-hover:text-white"
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3D */}

        <div className="contact-form w-full ">
          <LanyardUse />
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
