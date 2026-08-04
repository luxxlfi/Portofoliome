import Circle from "@/assets/Projects/CircleWeb.png";
import CircleMobileApp from "@/assets/Projects/MyorbitApp.png";
import ApiCircle from "@/assets/Projects/ApiCircle.png"
import PisutjayaPt from "@/assets/Projects/PisutjayaPt.png"
import Sky from "@/assets/Projects/SkyIsland.png"
import doang from "@/assets/Projects/Doang.png"

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "ORBIT",
    category: "Circle Web / 2026",
    image: Circle,
    description: "Aplikasi web modern yang terintegrasi penuh dengan Orbit API untuk menghadirkan pengalaman pengguna yang cepat dan responsif. Mendukung autentikasi, manajemen data, serta antarmuka yang bersih dengan struktur frontend yang mudah dikembangkan.",
    github: "https://github.com/luxxlfi/Client-Orbit-V1",
    demo: "",
  },

  {
    title: "MY ORBIT",
    category: "Analisis Mobile App / 2026",
    image: CircleMobileApp,
    description: "Aplikasi mobile analitik yang membantu kreator memantau performa akun dan konten dalam satu tempat. Menyediakan insight mengenai engagement, pertumbuhan audiens, dan performa konten melalui integrasi langsung dengan Orbit API.",
    github: "https://github.com/luxxlfi/MyOrbit.V1-app/tree/main",
    demo: "https://github.com/luxxlfi/MyOrbit.V1-app/tree/main",
  },

  {
    title: "Orbit API (Backend)",
    category: "Backend REST API / 2026",
    image: ApiCircle,
    description: "Backend REST API yang menjadi fondasi ekosistem Orbit untuk mendukung aplikasi web dan mobile. Dibangun dengan fokus pada autentikasi, pengelolaan data, dan arsitektur yang scalable sehingga dapat digunakan kembali di berbagai platform.",
    github: "https://github.com/luxxlfi/Circle-API",
    demo: "https://github.com/luxxlfi/Circle-API",
  },

   {
    title: "PT Pisutjaya Mandiri",
    category: "Company Profile / 2026",
    image: PisutjayaPt,
    description: "Website company profile yang dikembangkan untuk memperkenalkan perusahaan, layanan, dan nilai bisnis secara profesional. Dibangun dengan fokus pada performa, desain responsif, dan kemudahan navigasi agar memberikan kesan terpercaya kepada calon klien.",
    github: "https://github.com/luxxlfi/Company-Profile",
    demo: "https://pisutjayamandiri.com/",
  },

    {
    title: "Sky Island",
    category: "Fantasy Adventure Exploration Game / 2025",
    image: Sky,
    description: "Sebuah game fantasy exploration yang menggabungkan petualangan, ekonomi, dan social hangout dalam dunia pulau langit yang penuh dengan visual unik. Pemain dapat menjelajahi area dengan berbagai tantangan untuk mencapai puncak, mengumpulkan reward, dan menggunakan hasil tersebut untuk membeli item, aura, serta perlengkapan yang membantu perjalanan mereka. Fokus utama dalam project ini adalah menciptakan pengalaman eksplorasi dengan environment fantasy yang imersif melalui desain map, pembuatan 3D model, dan pengembangan visual yang menjadi daya tarik utama game.",
    github: "#",
    demo: "https://www.roblox.com/games/137662656457012/SKY-ISLAND",
  },


  {
    title: "Mountain Doang",
    category: "Adventure Exploration Game / 2025",
    image: doang,
    description: "Sebuah game adventure bertema pegunungan yang menghadirkan pengalaman eksplorasi dengan berbagai obstacle dan tantangan. Pemain dapat menjelajahi area gunung yang luas, melewati jalur berbahaya, serta menghadapi berbagai rintangan yang membutuhkan ketangkasan dan strategi untuk mencapai puncak.",
    github: "#",
    demo: "https://www.roblox.com/games/118807785568786/GUNUNG-DOANG",
  },


];
