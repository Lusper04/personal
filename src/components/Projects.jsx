import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PT from "/src/assets/images/potholes.jpg";
import GT from "/src/assets/images/github.png";
import CN from "/src/assets/images/company.png";
import ED from "/src/assets/images/LMS.jpg";
import RC from "/src/assets/images/racing.jpg";
import LN from "/src/assets/images/loans.png";



/* =======================
   PROJECT DATA
======================= */
const projects = [
  {
    id: 1,
    title: "Automated Student Bonding System",
    description: (
      <section className="text-center">
        <p>A Web-Based Application developed using</p>
        <p>HTML, React, Tailwind CSS and NestJS</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["React", "HTML", "NestJS", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={LN} alt="Loans Board" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="https://github.com/lusungu-skillset/BondingSystem.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 2,
    title: "HB-SpaceTL App",
    description: (
      <section className="text-center">
        <p>A Web-Based Application developed using</p>
        <p>HTML, React, Tailwind CSS and NestJS</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["React", "HTML", "NestJS", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={CN} alt="Company" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 3,
    title: "Pothole Reporter Web App",
    description: (
      <section className="text-center">
        <p>A GIS-based web app using Next.js and NestJS</p>
        <p>for real-time pothole location tracking</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["Next.js", "NestJS", "PostGIS", "PostgreSQL", "Docker", "Kubernetes"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={PT} alt="Pothole Reporter" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="https://github.com/lusungu-skillset/Porthole-Reporting-WebApp-.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 4,
    title: "EduVibe LMS",
    description: (
      <section className="text-center">
        <p>Learning Management System with microservices</p>
        <p>React frontend, NestJS backend, CI/CD pipelines</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["React", "NestJS", "Docker", "Kubernetes", "Jenkins", "CI/CD"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={ED} alt="EduVibe" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          in progress
        </span>
        <a href="https://github.com/lusungu-skillset/EduVibe.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 6,
    title: "EduVibe Backend",
    description: (
      <section className="text-center">
        <p>Backend microservices for EduVibe LMS</p>
        <p>Built with NestJS, PostgreSQL and Docker</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["NestJS", "PostgreSQL", "Docker", "CI/CD"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={ED} alt="EduVibe Backend" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="https://github.com/lusungu-skillset/Eduvibe-backend.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 7,
    title: "Pothole Reporter Backend",
    description: (
      <section className="text-center">
        <p>Backend services for the Pothole Reporter app</p>
        <p>API, geospatial storage and processing</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["NestJS", "PostGIS", "PostgreSQL", "Docker"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={PT} alt="Pothole Backend" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="https://github.com/lusungu-skillset/porthole-backend.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
  {
    id: 5,
    title: "Godot Racing Game",
    description: (
      <section className="text-center">
        <p>A racing game developed using</p>
        <p>Godot Game Engine and GDScript</p>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {["Godot", "GDScript", "Game Dev"].map((tech) => (
            <span
              key={tech}
              className="border border-emerald-500/20 bg-emerald-500/5 
                         px-3 py-1 rounded-md text-xs text-emerald-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    ),
    logo: <img src={RC} alt="Racing Game" className="h-14 mx-auto" />,
    Repo: (
      <div className="flex flex-col items-center gap-2">
        <span className="border border-emerald-400/30 px-3 py-1 rounded-full text-xs text-emerald-400">
          public
        </span>
        <a href="https://github.com/lusungu-skillset/Racing-Game.git" target="_blank">
          <img
            src={GT}
            className="h-9 rounded-full border border-emerald-400/30 
                       hover:bg-emerald-500/10 transition"
          />
        </a>
      </div>
    ),
  },
];

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-emerald-500/5
        backdrop-blur-sm
        border border-emerald-500/20
        rounded-xl
        p-8
        w-80 md:w-96
        text-neutral-100
        transition-all duration-300
        hover:translate-y-[-4px]
        hover:border-emerald-400/40
        hover:bg-emerald-500/10
      "
    >
      <div className="flex justify-center mb-6 opacity-90">
        {project.logo}
      </div>

      <h3 className="text-xl font-semibold mb-4 text-center text-emerald-100">
        {project.title}
      </h3>

      <div className="text-center mb-6">
        {project.Repo}
      </div>

      <div className="text-sm text-emerald-100/70">
        {project.description}
      </div>
    </div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = (current - 1 + projects.length) % projects.length;
  const next = (current + 1) % projects.length;

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          id="Projects"
          className="text-2xl md:text-4xl font-semibold mb-14 text-center
                     text-emerald-100"
        >
          My Recent Projects
        </h2>

        <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={prev}
              initial={{ opacity: 0, scale: 0.6, x: -80 }}
              animate={{ opacity: 0.55, scale: 0.9, x: 0 }}
              exit={{ opacity: 0, scale: 0.6, x: -80 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={projects[prev]} />
            </motion.div>

            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={projects[current]} />
            </motion.div>

            <motion.div
              key={next}
              initial={{ opacity: 0, scale: 0.6, x: 80 }}
              animate={{ opacity: 0.55, scale: 0.9, x: 0 }}
              exit={{ opacity: 0, scale: 0.6, x: 80 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={projects[next]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => setCurrent(prev)}
            className="
              px-6 py-3 rounded-lg font-semibold
              bg-emerald-600/80 text-white
              hover:bg-emerald-600
              transition active:scale-95
            "
          >
            ← Previous
          </button>

          <button
            onClick={() => setCurrent(next)}
            className="
              px-6 py-3 rounded-lg font-semibold
              bg-emerald-600/80 text-white
              hover:bg-emerald-600
              transition active:scale-95
            "
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
