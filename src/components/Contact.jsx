import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="bg-radial h-screen transform-none relative flex items-center justify-center">
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
        className="text-center w-full max-w-6xl px-4"
      >
        <div className="flex flex-col justify-center mx-auto w-full">
          <section id="Contact" className="text-neutral-50 text-[3vh] md:text-[4vh] font-bold">
            Lets Connect
          </section>
          
          <div className="text-neutral-50 font-sans">
            <section className="flex flex-col justify-center h-fit mt-12 space-y-6 md:space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <a 
                  href="https://www.linkedin.com/in/lusungumhango" 
                  className="flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] w-full rounded-lg hover:bg-[#009966] transition-colors"
                >
                  <FaLinkedin className="text-lg md:text-xl"/>
                  Lusungu Mhango
                </a>
                
                <a 
                  href="mailto:mhangolusungu2003@gmail.com" 
                  className="flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] w-full rounded-lg hover:bg-[#009966] transition-colors"
                >
                  <MdEmail className="text-lg md:text-xl"/>
                  mhangolusungu2003@gmail.com
                </a>
              </div>
              
              
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <a 
                  href="https://github.com/Lusper04/personal.git" 
                  className="flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] w-full rounded-lg hover:bg-[#009966] transition-colors"
                >
                  <FaGithub className="text-lg md:text-xl"/>
                  Lusungu Mhango
                </a>
                
                <a 
                  href="https://wa.me/+265894446848?text=Hy Lusungu!" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] w-full rounded-lg hover:bg-[#009966] transition-colors"
                >
                  <FaWhatsapp className="text-lg md:text-xl"/>
                  Lusper Mhango
                </a>
              </div>
              
            
              <div className="flex justify-center">
                <a 
                  href="tel:0999916443" 
                  className="flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] w-full md:w-auto md:min-w-[50%] rounded-lg hover:bg-[#009966] transition-colors"
                >
                  <FaPhone className="text-lg md:text-xl"/>
                  0999916443
                </a>
              </div>
              <div className="text-neutral-50 flex justify-center space-x-1 mt-12 lg:text-2xl lg:mt-20 text-lg sm:text-sm">
               <strong className="flex-row">Iam</strong>
                <strong className="flex-row">Open to</strong>
                 <strong className="flex-row text-[#009966]"> FreeLancing</strong>
                  <strong className="flex-row">Opportunities</strong>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </section>  
  );
}