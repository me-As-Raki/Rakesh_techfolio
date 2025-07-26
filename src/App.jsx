import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";

const App = () => {
  return (
    <div className="bg-[#050414] relative">
      {/* Blurred Decorative Blob */}
      <BlurBlob
        position={{ top: "30%", left: "50%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 pt-20 space-y-24 scroll-smooth">
        <Navbar />

        {/* Sections with scroll margins */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="certifications" className="scroll-mt-24">
          <Certifications />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
