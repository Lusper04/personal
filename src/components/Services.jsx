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
import AZ from "/src/assets/images/azure.png";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I craft visually appealing, intuitive websites designed to elevate your online presence. Whether it's a straightforward site or a full-scale e-commerce platform, I offer customized solutions built with the latest technologies to ensure a smooth, mobile-friendly, and search-optimized experience.",
      icons: [css, react, html],
      color: "#00B578",
    },
    {
      title: "Backend Development",
      description:
        "I build powerful, scalable backend systems that serve as the engine behind your application. From crafting secure APIs to managing databases and server logic, I ensure your app runs smoothly, efficiently, and reliably.",
      icons: [TS, node, SQ],
      color: "#00B578",
    },
    {
      title: "DevOps",
      description:
        "I streamline development and deployment workflows through effective DevOps practices. From automating CI/CD pipelines to configuring cloud infrastructure and monitoring systems, I help ensure faster releases, improved reliability, and smoother collaboration between teams.",
      icons: [DK, TF, AZ, PT, LX],
      color: "#00B578",
    },
    {
      title: "Database Design",
      description:
        "I design and develop efficient, secure, and scalable databases that power your applications. Whether it's SQL or NoSQL, I ensure fast querying, strong data integrity, and smooth integration with your backend.",
      icons: [PS, OS, SQ],
      color: "#00B578",
    },
  ];

  return (
    <section className="bg-radial h-fit transform-none px-4 sm:px-6 lg:px-12 py-12 md:py-24 bg-white/[0.02]">
      <h2
        id="Services"
        className="text-neutral-50 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-12 md:mb-16"
      >
        Services
      </h2>

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
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto font-sans">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#00ff99]/[0.05] hover:bg-white/[0.05] border-t border-b border-white/80 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-5 transition-all duration-300 w-ful xl:w-[85vh] xl:h-[30vh] l lg:min-h-[350px] xl:h-[10vh]"
            >
              <div className="flex justify-center py-4 md:py-6 md:gap-4 gap-2 flex-wrap">
                {service.icons.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    src={icon}
                    alt="icon"
                    className="h-12 shadow-2xl md:h-14 border-r border-l border-white/80 p-2 bg-white/[0.09] rounded-full"
                  />
                ))}
              </div>

              <h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>

              <p className="text-neutral-50 leading-relaxed text-sm md:text-base lg:text-lg xl:text-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
