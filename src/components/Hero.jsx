import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiCircle, FiPhoneCall } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full"
      >
        <div className="flex flex-col items-center hero-section px-2 sm:px-4">
          <div className="flex flex-row sm:flex-row sm:space-x-4 items-center hero-title">
            <h1 className="text-md sm:text-5xl md:text-6xl font-[sans] font-bold mb-4 text-white">
              Hey there, i'am
            </h1>
            <div className="flex justify-center ms-2 sm:ms-0">
              <h1 className="text-2xl sm:text-5xl md:text-6xl font-[sans] font-bold mb-4 text-[#00B578] animate-pulse hero-name">
                Lusungu Mhango.
              </h1>
            </div>
          </div>
          <p className="font-[sans] text-base sm:text-lg md:text-xl text-white/60 hero-subtitle text-center">
            DevOps Engineer | CyberSecurity (Systems Analyst) | Software Engineer
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-10 sm:mt-20">
            <div className="font-sans border rounded-lg bg-[#00B578] w-[15vh] sm:w-[20vh]">
              <a className="flex justify-center sm:py-2 py-2 text-neutral-50 text-sm sm:text-lg hover:rounded-lg hover:bg-[#009966] shadow-md" href="tel:0999916443">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="text-white/90 mt-10 sm:mt-16 text-center">
            <label className="font-[sans] text-[2.4vh] sm:text-[2.5vh] font-medium social-label">
              Follow Me On:
            </label>
            <div className="flex justify-center mt-4">
              <div className="flex flex-wrap justify-center gap-4 social-links">
                <a href="https://www.instagram.com/lusper_mhango" className=" rounded-lg hover:bg-[#009966]">
                  <FaInstagram size={40} className="hidden sm:inline border p-1 rounded-lg"/>
                  <FaInstagram size={30} className="border p-1 rounded-lg sm:hidden"/>
                </a>
                <a href="https://www.linkedin.com/in/lusungumhango" className="rounded-lg hover:bg-[#009966]">
                  <FaLinkedin size={40} className="hidden sm:inline border p-1 rounded-lg " />
                  <FaLinkedin size={30} className="border p-1 rounded-lg sm:hidden"/>
                </a>
                <a href="https://github.com/" className="rounded-lg hover:bg-[#009966]">
                  <FaGithub size={40} className="hidden sm:inline border rounded-lg p-1"/>
                  <FaGithub size={30} className="border p-1 rounded-lg sm:hidden"/>
                </a>
                <a href="tel:0999916443" className=" rounded-lg  hover:bg-[#009966]">
                  <FiPhoneCall size={40} className="hidden sm:inline border rounded-lg p-1"/>
                  <FiPhoneCall size={30} className="border p-1 rounded-lg sm:hidden"/>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-20 sm:mt-40 education-section px-1 md:px-0">
            <section id="Education" className="text-neutral-50 text-2xl sm:text-[4vh] font-bold text-center">
              Education
            </section>
            
            <div className="flex flex-col sm:flex-row mt-8 sm:items-start md:gap-4 education-item">
              <FiCircle size={30} color="gray" className="md:inline hidden border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10vh]" />
              <div className="flex">
              <FiCircle size={25} color="gray" className="flex inline md:hidden mt-1 border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10vh]" />
              <p className="md:text-neutral-50 ms-6 md:ms-0 text-lg text-[3vh] text-white/50 md:text-2xl font-sans font-medium education-date md:mt-[10vh]">
                Jun 2021 - Jun 2026 ( Present )
              </p>
              </div>
              <div className="flex flex-col ml-5  sm:ml-[30vh] education-details">
                <p className="text-neutral-50 text-sm sm:text-xl mt-6 sm:mt-[10vh] ms-8 sm:ms-0 education-title">
                  Bachelor Of Science In Computer Sciences
                </p>
                <p className="text-sm sm:text-[2.3vh] sm:pr-25 text-white/70 sm:text-white/[0.60] education-school">
                  @University Of Malawi, Zomba, Malawi
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-8 sm:items-start sm:gap-4 education-item">
              <FiCircle size={30} color="gray" className="md:inline hidden border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10vh]" />
              <div className="flex mt-9 sm:mt-0">
              <FiCircle size={25} color="gray" className="flex inline md:hidden mt-1 border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10vh]" />
              <p className="md:text-neutral-50 ms-6 md:ms-0 text-lg text-[3vh] text-white/50 md:text-2xl font-sans font-medium education-date md:mt-[10vh]">
                Jan 2019 - Jan 2021
              </p>
              </div>
              
              <div className="flex flex-col sm:ml-6 education-details">
                <p className="text-neutral-50 text-sm sm:text-xl ms-6 sm:md:ms-[44vh] mt-6 sm:mt-[10.5vh] education-title">
                  Malawi School Certificate Of Education
                </p>
                <p className="text-sm sm:text-md text-white/60 ms-9 sm:ms-[31vh] sm:text-white/[0.60] education-school">
                  @Domasi Mission Sec xul, Zomba, Malawi
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
