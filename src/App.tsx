import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skils from "./components/Skills";
import Projects from "./components/Projects";
import Contac from "./components/Contact";

import "./App.css";
import Experience from "./components/Experience";
import LoadingPage from "./components/Loading/LoadingPage";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skils />
        <Experience />
        <Projects />
        <Contac /> 
      </div>
    </>
  );
}

export default App;
