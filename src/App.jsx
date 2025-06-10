import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Experiences from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { useState } from "react";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="grid"> 
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={toggleMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-800 text-yellow-300"
          aria-label="Toggle radial background mode"
        >
          {isLightMode ? (
            <FiMoon className="w-5 h-5" />
          ) : (
            <FiSun className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-gray-900" 
        >
          <div className="bg-grid min-h-screen relative z-10">
            <Nav />
            <Hero />
            <Education />
            <Services isLightMode={isLightMode} /> {/* Only these 3 get the mode prop */}
            <Experiences />
            <Skills isLightMode={isLightMode} />
            <Projects />
            <Contact isLightMode={isLightMode} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;