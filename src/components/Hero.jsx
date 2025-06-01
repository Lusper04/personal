import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="h-[20vh] md:h-fit relative flex items-center justify-center px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl -z-10"
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full relative z-10"
      >
        <div className="flex flex-col items-center hero-section px-2 sm:px-4">
          <div className="flex flex-row gap-2 md:gap-0 sm:flex-row sm:space-x-4 items-center hero-title">
            <h1 className="text-lg mt-1 md:mt-0 sm:text-5xl md:text-6xl font-[sans] font-bold mb-4 text-white">
              Hey there, I'm
            </h1>
            <div className="flex justify-center sm:ms-0">
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
              <a
                className="flex justify-center sm:py-2 py-3 text-neutral-50 text-sm sm:text-lg hover:rounded-lg hover:bg-[#009966] shadow-md"
                href="tel:0999916443"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className="text-white/90 mt-10 sm:mt-16 text-center">
            <label className="font-[sans] text-[2.4vh] sm:text-[3vh] font-medium social-label">
              Follow Me On:
            </label>
            <div className="flex justify-center mt-4">
              <div className="flex flex-wrap justify-center gap-4 social-links">
                
               
                <div className="hidden sm:flex gap-4">
                  <button
                    onClick={() => window.open("https://www.instagram.com/lusper_mhango", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1"
                  >
                    <FaInstagram size={35} />
                  </button>
                  <button
                    onClick={() => window.open("https://www.linkedin.com/in/lusungumhango", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1"
                  >
                    <FaLinkedin size={35} />
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/Lusper04/personal", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1"
                  >
                    <FaGithub size={35} />
                  </button>
                  <button
                    onClick={() => (window.location.href = "tel:0999916443")}
                    className="rounded-lg hover:bg-[#009966] border p-1"
                  >
                    <FiPhoneCall size={35} />
                  </button>
                </div>

                <div className="flex sm:hidden gap-4">
                  <button
                    onClick={() => window.open("https://www.instagram.com/lusper_mhango", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1 flex items-center justify-center w-fit h-fit"
                  >
                    <FaInstagram size={25} />
                  </button>
                  <button
                    onClick={() => window.open("https://www.linkedin.com/in/lusungumhango", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1 flex items-center justify-center w-fit h-fit"
                  >
                    <FaLinkedin size={25} />
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/Lusper04/personal", "_blank")}
                    className="rounded-lg hover:bg-[#009966] border p-1 flex items-center justify-center w-fit h-fit"
                  >
                    <FaGithub size={25} />
                  </button>
                  <button
                    onClick={() => (window.location.href = "tel:0999916443")}
                    className="rounded-lg hover:bg-[#009966] border p-1 flex items-center justify-center w-fit h-fit"
                  >
                    <FiPhoneCall size={25} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}