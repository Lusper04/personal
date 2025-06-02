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
        className="text-center"
      >
      <div className="flex flex-col justify-center mx-auto shadow">
       <section id="Contact" className="text-neutral-50 md:text-[4vh] text-[3vh] font-bold">Lets Connect</section>
       <div className="text-neutral-50 font-sans ">
        <section className="flex flex-col justify-center h-fit mt-18">
          <div className="flex md:flex-row flex-col items-center gap-8">
            <a href="https://www.linkedin.com/in/lusungumhango" className="flex justify-center gap-2 text-md md:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] md:w-[70vh] w-full mx-4 md:mx-0 rounded-lg hover:bg-[#009966]"><FaLinkedin className="md:w-6 md:h-6 w-4 h-4 mt-1"/>Lusungu Mhango</a>
            <a href="https://www.mhangolusungu2003@gmail.com" className="flex justify-center gap-2 text-md md:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] md:w-[70vh] w-full rounded-lg hover:bg-[#009966] "><MdEmail className="md:w-6 md:h-6 w-4 h-4 mt-1"/>mhangolusungu2003@gmail.com</a>
          </div>
           <div className="flex md:flex-row flex-col items-center mx-auto gap-8 mt-8">
            <a href="https://github.com/Lusper04/personal.git" className="flex justify-center gap-2 md:text-xl text-md p-3 bg-white/15 backdrop-blur-[0.02vh] md:w-[70vh] w-screen rounded-lg hover:bg-[#009966] "><FaGithub className="md:w-6 md:h-6 w-4 h-4 mt-1"/>Lusungu Mhango</a>
            <a  href="https://wa.me/+265894446848?text=Hy Lusungu!"target="_blank"rel="noopener noreferrer" className="flex justify-center gap-2 text-md md:text-xl p-3 bg-white/15 backdrop-blur-[0.02vh] md:w-[70vh] w-screen rounded-lg hover:bg-[#009966] "><FaWhatsapp className="md:w-6 md:h-6 w-4 h-4 mt-1"/>Lusper Mhango</a>
          </div>
           <div className="flex justify-center mx-auto mt-8">
            <a href="tel:0999916443" className="flex justify-center gap-2 md:text-xl text-md p-3 bg-white/15 backdrop-blur-[0.02vh] md:w-[70vh] w-full rounded-lg hover:bg-[#009966] "><FaPhone className="md:w-6 md:h-6 mt-1"/>0999916443</a>
          </div>
        </section>
       </div>
      </div>
      </motion.div>
    </section>  
  );
}