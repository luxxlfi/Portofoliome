import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Navbar entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          logoRef.current,
          {
            x: -30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          menuRef.current?.children,
          {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between ${
        isScrolled
          ? "bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        ref={logoRef}
        href="/"
        className="text-xl font-black uppercase tracking-tighter text-white"
      >
        Luxfi<span className="text-neutral-400">.</span>
      </a>

      {/* Navigation */}
      <div
        ref={menuRef}
        className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
      >
        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#experience">Experience</a>

        <a href="#projects">Projects</a>

        <a href="#contact" className="bg-white text-black px-6 py-3">
          Hire Me
        </a>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-0.5 bg-white" />
        <span className="w-6 h-0.5 bg-white" />
      </button>
    </nav>
  );
};

export default Navbar;
