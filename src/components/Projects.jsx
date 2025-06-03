import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LN from "/src/assets/images/loans.png";
import GT from "/src/assets/images/github.png";
import CN from "/src/assets/images/company.png";
import SN from "/src/assets/images/solar.png";
import VT from "/src/assets/images/vite.png";

const projects = [
  {
    id: 1,
    title: "Automated Student Bonding System",
    description: (
      <section className="text-center">
        <p>A Web-Based Application developed using</p>
        <p>Html, React, TailwindCss and NestJs</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {['React', 'Html', 'NestJs', 'Tailwind'].map((tech) => (
            <p key={tech} className="border px-2 text-[2vh]">{tech}</p>
          ))}
        </div>
      </section>
    ),
    logo: <img src={LN} alt="loans board" className="h-16 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <label className="border px-2 p-1 rounded-xl mt-2 text-[#009966] font-medium">public</label>
        <a href="https://github.com/Lusper04/personal.git">
          <img src={GT} className="mt-2 border rounded-full h-[4vh] hover:bg-[#009966]" />
        </a>
      </div>
    )
  },
  {
    id: 2,
    title: "HB-SpaceTL App",
    description: (
      <section className="text-center">
        <p>A Web-Based Application developed using</p>
        <p>Html, React, TailwindCss and NestJs</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {['React', 'Html', 'NestJs', 'Tailwind'].map((tech) => (
            <p key={tech} className="border px-2 text-[2vh]">{tech}</p>
          ))}
        </div>
      </section>
    ),
    logo: <img src={CN} alt="company" className="h-16 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <label className="border px-2 p-1 rounded-xl mt-2 text-[#009966] font-medium">public</label>
        <a href="https://github.com/Lusper04/personal.git">
          <img src={GT} className="mt-2 border rounded-full h-[4vh] hover:bg-[#009966]" />
        </a>
      </div>
    )
  },
  {
    id: 3,
    title: "Real-Time Solar System App",
    description: (
      <section className="text-center">
        <p>A Solar system Real-Time Application developed using</p>
        <p>OpenGl and C++</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {['OpenGL', 'C++'].map((tech) => (
            <p key={tech} className="border px-2 text-[2vh]">{tech}</p>
          ))}
        </div>
      </section>
    ),
    logo: <img src={SN} alt="solar" className="h-16 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <label className="border px-2 p-1 rounded-xl mt-2 text-[#009966] font-medium">public</label>
        <a href="https://github.com/Lusper04/personal.git">
          <img src={GT} className="mt-2 border rounded-full h-[4vh] hover:bg-[#009966]" />
        </a>
      </div>
    )
  },
  {
    id: 4,
    title: "Portifolio Website",
    description: (
      <section className="text-center">
        <p>A Web-Based Application developed using</p>
        <p>Html, TailwindCss and React + Vite</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {['Vite', 'Html', 'Tailwind'].map((tech) => (
            <p key={tech} className="border px-2 text-[2vh]">{tech}</p>
          ))}
        </div>
      </section>
    ),
    logo: <img src={VT} alt="vite" className="h-16 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <label className="border px-2 p-1 rounded-xl mt-2 text-[#009966] font-medium">public</label>
        <a href="https://github.com/Lusper04/personal.git">
          <img src={GT} className="mt-2 border rounded-full h-[4vh] hover:bg-[#009966]" />
        </a>
      </div>
    )
  }
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="min-h-screen px-4 mt-30 relative">
      <h2 id="Projects" className="md:text-4xl text-2xl text-neutral-50 font-semibold md:mb-20 mb-8 text-center">
        My Recent Projects
      </h2>

      <div className="md:w-full flex justify-center items-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] rounded-lg shadow-xl lg:w-screen  max-w-lg p-7 text-neutral-50 font-sans shadow-2xl border-t border-b border-white"
          >
            <div>{projects[current].logo}</div>
            <h3 className="text-md font-semibold mb-2 text-center mt-4">{projects[current].title}</h3>
            <div className="text-center">{projects[current].Repo}</div>
            <div className="mt-10">{projects[current].description}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-15 gap-8">
        <button onClick={prev} className="p-3 bg-[#00B578] rounded-lg hover:bg-[#009966] text-neutral-50">
          Prev
        </button>
        <button onClick={next} className="p-3 bg-[#00B578] rounded-lg hover:bg-[#009966] text-neutral-50">
          Next
        </button>
      </div>
    </section>
  );
}
