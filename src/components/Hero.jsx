import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[4vh] lg:min-h-[20vh] relative flex items-center justify-center px-4 sm:px-6 md:px-0 py-8">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center w-full max-w-6xl relative z-10"
      >
        <div className="flex flex-col items-center hero-section">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
            Hey there, I'm{" "}
            <motion.span
              key={animationKey}
              className="text-[#00B578] inline-flex"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {"Lusungu Mhango".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            DevOps Engineer | CyberSecurity (Systems Analyst) | Software Engineer
          </p>

          <div className="mt-6 sm:mt-8">
            <div className="font-sans rounded-lg bg-[#00B578] w-36 sm:w-44">
              <a
                className="flex justify-center py-2 sm:py-3 text-white text-sm sm:text-base hover:rounded-lg hover:bg-[#009966] shadow-md transition-all"
                href="tel:0999916443"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-white/90">
            <label className="font-sans text-sm sm:text-base md:text-lg font-medium">
              Follow Me On:
            </label>
            <div className="flex justify-center mt-3">
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={() => window.open("https://www.instagram.com/lusper_mhango", "_blank")}
                  className="rounded-lg hover:bg-[#009966] border p-1.5 sm:p-2 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl sm:text-2xl md:text-3xl" />
                </button>
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/lusungumhango", "_blank")}
                  className="rounded-lg hover:bg-[#009966] border p-1.5 sm:p-2 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl sm:text-2xl md:text-3xl" />
                </button>
                <button
                  onClick={() => window.open("https://github.com/Lusper04/personal", "_blank")}
                  className="rounded-lg hover:bg-[#009966] border p-1.5 sm:p-2 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                </button>
                <button
                  onClick={() => (window.location.href = "tel:0999916443")}
                  className="rounded-lg hover:bg-[#009966] border p-1.5 sm:p-2 transition-colors"
                  aria-label="Phone"
                >
                  <FiPhoneCall className="text-xl sm:text-2xl md:text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
