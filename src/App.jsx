import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/services";
import Experiences from "./components/experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = ()=> {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="bg-grid min-h-screen">
        <Nav/>
        <Hero />
        <Services />
        <Experiences />
        <Skills/>
        <Projects />
        <Contact />
      </div>
     
      </motion.div>
    </AnimatePresence>
  );
}
export default App;