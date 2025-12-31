import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Project";
import Skills from "./component/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 max-w-6xl mx-auto px-4">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
