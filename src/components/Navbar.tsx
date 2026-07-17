import { useEffect, useState } from "react";
import NavUse from "./Navbar/PillNavuse";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center pt-4 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#1a1a1a]/20"
          : "bg-transparent"
      }`}
    >
      <NavUse />
    </div>
  );
}