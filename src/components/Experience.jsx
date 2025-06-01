import { motion } from "framer-motion";
import { FiCircle } from 'react-icons/fi';

export default function Experiences() {
  return (
    <section className="h-full mt-[150vh] md:mt-15 relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl"
      />
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center"
      >
        <div className="flex flex-col">
          <div className="flex flex-col justify-center md:mt-15">
            <section id="Experiences" className="text-neutral-50 text-[4vh] font-bold">
              Experiences
            </section>

          
            <div className="flex flex-col mt-12 md:flex-row gap-2">
              <FiCircle size={30} color="gray" className="md:inline hidden border bg-white/[0.25] solid rounded-full mt-4 md:mt-20" />
              <p className="text-neutral-50 mt-[10.5vh] text-2xl font-sans font-medium md:inline hidden">May 2025 ( Present )</p>
              <div className="flex flex-row gap-1 md:hidden justify-center">
              <FiCircle size={20} color="gray" className="inline md:hidden border border-[#00B578] bg-white/[0.25] solid rounded-full mt-4.5 md:mt-20" />
              <p className="md:text-neutral-50 text-[#00B578] text-xl  font-sans font-semibold mt-[2vh]">May 2025 - Present</p>
              </div>
          
              <div className="flex-col ms-[2vh] md:inline hidden">
                <p className="text-neutral-50 text-xl mt-[10.5vh] pr-[35.2vh]">Junior DevOps Engineer</p>
                <p className="text-md text-white/[0.60] pr-[58vh]">@Plubirl</p>
                <div className="mt-8">
                  <p className="md:text-md text-neutral-50 ms-[5.5vh] leading-relaxed">- I manage CI/CD pipelines used by our development teams at Plubirl.</p>
                  <p className="text-md text-neutral-50 ms-[13.5vh] leading-relaxed">- I assist with automating cloud infrastructure within our Plubirl environments.</p>
                  <p className="text-md text-neutral-50 ms-[20vh] leading-relaxed">- I monitor systems and logs to ensure reliable performance across Plubirl services.</p>
                  <p className="text-md text-neutral-50 ms-[27.6vh] leading-relaxed">- I collaborate with teams and document DevOps processes specific to Plubirl's workflows.</p>
                </div>
              </div>

              
              <div className="flex flex-col md:hidden ms-2 mt-1">
                <p className="text-neutral-50 text-lg font-semibold mt-1">Junior DevOps Engineer</p>
                <p className="text-sm text-white/[0.60]">@Plubirl</p>
                <div className="mt-3 space-y-2 font-sans">
                  <p className="text-sm text-neutral-50 leading-relaxed">• I manage CI/CD pipelines used by our development teams at Plubirl.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I assist with automating cloud infrastructure within our Plubirl environments.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I monitor systems and logs to ensure reliable performance across Plubirl services.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I collaborate with teams and document DevOps processes specific to Plubirl's workflows.</p>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col mt-15 md:flex-row gap-2">
              <FiCircle size={30} color="gray" className="md:inline hidden border bg-white/[0.25] solid rounded-full mt-4 md:mt-20" />
              <p className="text-neutral-50 mt-[10.5vh] text-2xl font-sans font-medium md:inline hidden">June 2024 ( Present )</p>
              <div className="flex flex-row gap-1 md:hidden justify-center">
              <FiCircle size={20} color="gray" className="inline md:hidden border border-[#00B578] solid bg-white/[0.25] solid rounded-full mt-4.5 md:mt-20" />
              <p className="md:text-neutral-50 text-[#00B578] text-xl md:font-medium font-semibold mt-[2vh] font-sans">May 2025 - Present</p>
              </div>
              
              <div className="flex-col ms-[2vh] md:inline hidden font-sans">
                <p className="text-neutral-50 text-xl mt-[10.5vh] pr-[26vh]">Junior Software Engineer</p>
                <p className="text-md text-white/[0.60] pr-[42vh]">@HB Space TL</p>
                <div className="mt-8">
                  <p className="text-md text-neutral-50 ms-[25vh] leading-relaxed">- I contribute to building and maintaining web and mobile applications at HB Space TL.</p>
                  <p className="text-md text-neutral-50 ms-[14vh] leading-relaxed">- I write clean, efficient code and fix bugs as part of the development team.</p>
                  <p className="text-md text-neutral-50 ms-[17.2vh] leading-relaxed">- I collaborate with designers and senior engineers to implement new features.</p>
                  <p className="text-md text-neutral-50 ms-[27.5vh] leading-relaxed">- I participate in code reviews and continuously learn to improve my skills at HB Space TL.</p>
                </div>
              </div>

            
              <div className="flex flex-col md:hidden ms-2 mt-4 font-sans">
                <p className="text-neutral-50 text-lg font-semibold mt-1">Junior Software Engineer</p>
                <p className="text-sm text-white/[0.60]">@HB Space TL</p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-neutral-50 leading-relaxed">• I contribute to building and maintaining web and mobile applications at HB Space TL.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I write clean, efficient code and fix bugs as part of the development team.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I collaborate with designers and senior engineers to implement new features.</p>
                  <p className="text-sm text-neutral-50 leading-relaxed">• I participate in code reviews and continuously learn to improve my skills at HB Space TL.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
