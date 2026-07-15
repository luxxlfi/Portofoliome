import LogoLoop from "./LogoLoop";

import blender from "../../assets/blender.svg";
import express from "../../assets/express.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import javascript from "../../assets/javascript.svg";
import nextjs from "../../assets/nextjs.svg";
import nodejs from "../../assets/nodejs.svg";
import postgresql from "../../assets/postgresql.svg";
import prisma from "../../assets/prisma.svg";
import react from "../../assets/react.svg";
import supabase from "../../assets/supabase.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import typescript from "../../assets/typescript.svg";


const techLogos = [
  { src: react, alt: "React" },
  { src: nextjs, alt: "Next.js" },
  { src: typescript, alt: "TypeScript" },
  { src: javascript, alt: "JavaScript" },
  { src: tailwindcss, alt: "Tailwind CSS" },
  { src: nodejs, alt: "Node.js" },
  { src: express, alt: "Express.js" },
  { src: postgresql, alt: "PostgreSQL" },
  { src: prisma, alt: "Prisma" },
  { src: supabase, alt: "Supabase" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: blender, alt: "Blender" },
];

export default function LogoUse() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={55}
          gap={60}
          hoverSpeed={0}
          fadeOut
          scaleOnHover
        />

      </div>
    </section>
  );
}