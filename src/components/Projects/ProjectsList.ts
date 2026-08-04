import Circle from "@/assets/Projects/CircleWeb.png";
import CircleMobileApp from "@/assets/Projects/MyorbitApp.png";
import ApiCircle from "@/assets/Projects/ApiCircle.png"
import PisutjayaPt from "@/assets/Projects/PisutjayaPt.png"

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

];
