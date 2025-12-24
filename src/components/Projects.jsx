import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PT from "/src/assets/images/potholes.jpg";
import GT from "/src/assets/images/github.png";
import ED from "/src/assets/images/LMS.jpg";
import RC from "/src/assets/images/racing.jpg";
import LN from "/src/assets/images/loans.png";

/* =======================
   PROJECT DATA
======================= */
const projects = [
  {
    title: "Automated Student Bonding System Backend",
    subtitle:
      "Backend system for student bonding verification\nBuilt using NestJS and MySQL",
    tech: ["NestJS", "MySQL", "Postman"],
    image: LN,
    repo: "https://github.com/lusungu-skillset/BondingSystem",
  },
  {
    title: "Pothole Reporter Frontend",
    subtitle:
      "GIS-based Next.js application\nVisualizing potholes on Google Maps",
    tech: ["Next.js", "PostGIS", "Google Maps"],
    image: PT,
    repo: "https://github.com/lusungu-skillset/Pothole-Reporter-frontend",
  },
  {
    title: "Pothole Reporter Backend",
    subtitle:
      "Geospatial backend with PostGIS\nAccurate pothole location processing",
    tech: ["NestJS", "PostGIS", "Docker"],
    image: PT,
    repo: "https://github.com/lusungu-skillset/porthole-backend",
  },
  {
    title: "EduVibe LMS Backend",
    subtitle:
      "Microservices backend for LMS\nCI/CD, Docker & Kubernetes ready",
    tech: ["NestJS", "Docker", "CI/CD"],
    image: ED,
    repo: "https://github.com/lusungu-skillset/Eduvibe-backend",
  },
  {
    title: "Godot Racing Game",
    subtitle:
      "3D racing game built with Godot\nVehicle physics & game mechanics",
    tech: ["Godot", "GDScript"],
    image: RC,
    repo: "https://github.com/lusungu-skillset/Racing-Game",
  },
];

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project, isLightMode = false }) => (
  <div
    className={`
      w-full
      max-w-[360px]
      md:w-[480px]
      md:max-w-none
      min-h-[480px]
      md:min-h-[620px]
      rounded-2xl
      p-6 md:p-8
      flex flex-col justify-between
      transition-all duration-300
      hover:-translate-y-1
      ${isLightMode ? 'bg-white border border-gray-200 hover:shadow-lg' : 'bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/10'}
    `}
  >
    {/* TOP CONTENT */}
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="h-16 md:h-20 mx-auto mb-6 object-contain"
      />

      <h3 className={`text-lg md:text-2xl font-semibold text-center mb-4 ${isLightMode ? 'text-gray-900' : 'text-emerald-100'}`}>
        {project.title}
      </h3>

      <p className={`text-sm md:text-base text-center whitespace-pre-line mb-8 leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-emerald-100/70'}`}>
        {project.subtitle}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="
              border border-emerald-500/30
              px-4 py-1.5
              rounded-full
              text-xs md:text-sm
              text-emerald-300
            "
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* BOTTOM ICON */}
    <div className="flex justify-center mt-10">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full transition ${isLightMode ? 'border border-gray-200 hover:bg-gray-50' : 'border border-emerald-400/40 hover:bg-emerald-500/10'}`} 
      >
        <img src={GT} className="h-8 md:h-9" />
      </a>
    </div>
  </div>
);

/* =======================
   MAIN COMPONENT
======================= */
export default function Projects({ isLightMode = false }) {
  const [current, setCurrent] = useState(0);
  const prev = (current - 1 + projects.length) % projects.length;
  const next = (current + 1) % projects.length;

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2
          id="Projects"
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-20 text-center ${isLightMode ? 'text-gray-900' : 'text-emerald-100'}`}
        >
          My Recent Projects
        </h2>

        {/* MOBILE (1 CARD) */}
        <div className="md:hidden mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mb-16"
            >
              <ProjectCard project={projects[current]} isLightMode={isLightMode} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP (UNIFORM SIZE CARDS) */}
        <div className="hidden md:flex justify-center items-center gap-14 mb-24">
          <AnimatePresence mode="wait">
            {[prev, current, next].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.45,
                  scale: i === 1 ? 1 : 0.92,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={projects[idx]} isLightMode={isLightMode} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setCurrent(prev)}
            className="px-7 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            ← Previous
          </button>

          <button
            onClick={() => setCurrent(next)}
            className="px-7 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
