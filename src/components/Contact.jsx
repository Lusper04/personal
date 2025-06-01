import { motion } from "framer-motion";



export default function Hero() {
  return (
    <section className="bg-radial h-screen relative flex items-center justify-center">
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
      <div className="flex flex-col justify-center mt-15">
       <section id="Contact" className="text-neutral-50 text-[4vh] font-bold">Get In Touch</section>
      </div>
      </motion.div>
    </section>  
  );
}