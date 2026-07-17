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
      if (!navRef.current || !logoRef.current || !menuRef.current) return;

      const menuItems = Array.from(menuRef.current.children);

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Navbar muncul
      tl.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.6,
      });

      // Logo & menu muncul bersamaan
      tl.from(
        logoRef.current,
        {
          opacity: 0,
          x: -15,
          duration: 0.45,
        },
        "-=0.35",
      ).from(
        menuItems,
        {
          opacity: 0,
          y: -12,
          stagger: 0.08,
          duration: 0.35,
        },
        "<",
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
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#1a1a1a]/90 py-4 backdrop-blur-md"
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
        className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white md:flex"
      >
        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#experience">Experience</a>

        <a href="#projects">Projects</a>

        <a
          href="#contact"
          className="bg-white px-6 py-3 text-black transition-colors duration-300 hover:bg-neutral-200"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu */}
      <button className="flex flex-col gap-1.5 md:hidden">
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
      </button>
    </nav>
  );
};

export default Navbar;
