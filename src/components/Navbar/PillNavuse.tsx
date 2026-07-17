import PillNav from "./PillNav";
import logo from "../../../public/icons.svg";

export default function NavUse() {
  return (
    <PillNav
      logo={logo}
      logoAlt="Luxfi"
      items={[
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Hire Me", href: "#contact" },
      ]}
      activeHref="#about"
      className="custom-nav rounded-full"
      ease="power2.easeOut"
      baseColor="rgba(17, 17, 17, 0.55)"
      pillColor="rgba(255, 255, 255, 0.12)"
      pillTextColor="#f5f5f5"
      hoveredPillTextColor="#f5f5f5"
      initialLoadAnimation={false}
    />
  );
}
