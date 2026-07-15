import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skils from "./components/Skills";
import Projects from "./components/Projects";
import Contac from "./components/Contact";

import "./App.css";
import Experience from "./components/Experience";

function App() {
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
