import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
//import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";
//import Experiences from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Education from "./components/Education";
import BackgroundLighting from "./components/Background";
import { useState } from "react";

const App = () => {
  const [isLit, setIsLit] = useState(false);

  return (
    <div className="dark">
      <div className="relative min-h-screen bg-black text-white transition-colors duration-500">
        <BackgroundLighting isLit={isLit} />
        <div className="fixed mt-1 right-1 ms-1 z-30 bg-white/10 p-2 rounded-lg">
          <label className="flex items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              checked={isLit}
              onChange={(e) => setIsLit(e.target.checked)}
              className="form-checkbox h-4 w-4"
            />
            Light
          </label>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-grid min-h-screen relative z-10">
              <Nav />
              <Hero />
              {/*<Education />*/}
              <Services />
              {/*<Experiences />*/}
              <Skills />
              <Projects />
              {/*<Contact />*/}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
