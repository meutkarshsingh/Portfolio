import About from './components/About';
import AIChat from './components/AIChat';
import Background from './components/Background';
import Contact from './components/Contact';
import CustomCursor from './components/Cursor';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Github from './components/Github';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import PhotoSection from './components/PhotoSection';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Workflow from './components/Workflow';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-white">
      <Background />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PhotoSection />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Experience />
        <Education />
        <Github />
        <Terminal />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
