import { motion } from "framer-motion";
import react from "/src/assets/images/react.png";
import css from "/src/assets/images/css.png";
import node from "/src/assets/images/nodejs.png";
import html from "/src/assets/images/html.png";
import TS from "/src/assets/images/typescript.png";
import TF from "/src/assets/images/terraform.svg";
import OS from "/src/assets/images/oracle.png";
import PS from "/src/assets/images/postgre.png";
import PT from "/src/assets/images/python.png";
import DK from "/src/assets/images/docker.png";
import SQ from "/src/assets/images/mysql.png";
import LX from "/src/assets/images/linux.png";
import AWS from "/src/assets/images/aws.png";

export default function Services() {
  return (
    <section className="bg-radial h-fit transform-none px-4 mt-80 bg-white/[0.02]">
      <section
        id="Services"
        className="md:text-4xl text-2xl text-neutral-50 font-semibold md:mb-12 text-center md:pt-18 pt-10"
      >
        Services
      </section>
      <div className="ml-0 md:ml-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl"
        />
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-t border-b rounded-xl shadow-xl md:mr-12 w-full md:w-[92vh] mt-6">
                <section className="text-neutral-50 font-sans px-5 mb-5 items-start">
                  <div className="flex justify-center py-8 space-x-1">
                    <img
                      src={css}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={react}
                      alt="icon"
                      className="h-[7vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={html}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                  </div>
                  <h1 className="text-[3.5vh] font-semibold text-[#00B578] mb-1">
                    Web Development
                  </h1>
                  <p className="text-neutral-50 leading-relaxed w-full">
                    I craft visually appealing, intuitive websites designed to
                    elevate your online presence. Whether it's a straightforward
                    site or a full-scale e-commerce platform, I offer customized
                    solutions built with the latest technologies to ensure a
                    smooth, mobile-friendly, and search-optimized experience.
                  </p>
                </section>
              </div>

              <div className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-t border-b rounded-xl shadow-xl w-full md:w-[92vh] mt-6">
                <section className="text-neutral-50 font-sans px-5 mb-5 items-start">
                  <div className="flex justify-center py-8 space-x-1">
                    <img
                      src={TS}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={node}
                      alt="icon"
                      className="h-[7vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={SQ}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                  </div>
                  <h1 className="text-[3.5vh] font-semibold text-[#00B578] mb-1">
                    Backend Development
                  </h1>
                  <p className="text-neutral-50 leading-relaxed w-full">
                    I build powerful, scalable backend systems that serve as the
                    engine behind your application. From crafting secure APIs to
                    managing databases and server logic, I ensure your app runs
                    smoothly, efficiently, and reliably.
                  </p>
                </section>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-t border-b rounded-xl shadow-xl md:mr-12 w-full md:w-[92vh] mt-6">
                <section className="text-neutral-50 font-sans px-5 mb-5 items-start">
                  <div className="flex justify-center py-8 space-x-1 flex-wrap">
                    <img
                      src={DK}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={TF}
                      alt="icon"
                      className="h-[7vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={AWS}
                      alt="icon"
                      className="h-[8vh] border-r border-l border-white/50 bg-white/[0.05] p-2 rounded-full"
                    />
                    <img
                      src={PT}
                      alt="icon"
                      className="h-[7vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={LX}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                  </div>
                  <h1 className="text-[3.5vh] font-semibold text-[#00B578] mb-1">
                    DevOps
                  </h1>
                  <p className="text-neutral-50 leading-relaxed w-full">
                    I streamline development and deployment workflows through
                    effective DevOps practices. From automating CI/CD pipelines to
                    configuring cloud infrastructure and monitoring systems, I help
                    ensure faster releases, improved reliability, and smoother
                    collaboration between teams.
                  </p>
                </section>
              </div>

              <div className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-t border-b rounded-xl shadow-xl w-full md:w-[92vh] mt-6">
                <section className="text-neutral-50 font-sans px-5 mb-5 items-start">
                  <div className="flex justify-center py-8 space-x-1">
                    <img
                      src={PS}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={OS}
                      alt="icon"
                      className="h-[7vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                    <img
                      src={SQ}
                      alt="icon"
                      className="h-[6vh] border-r border-l border-white/50 bg-white/[0.09] p-2 rounded-full"
                    />
                  </div>
                  <h1 className="text-[3.5vh] font-semibold text-[#00B578] mb-1">
                    Database Design
                  </h1>
                  <p className="text-neutral-50 leading-relaxed w-full">
                    I design and develop efficient, secure, and scalable databases
                    that power your applications. Whether it's SQL or NoSQL, I
                    ensure fast querying, strong data integrity, and smooth
                    integration with your backend.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
