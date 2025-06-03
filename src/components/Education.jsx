import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    date: 'Jun 2021-May 2026',
    degree: 'Bachelor of Science in Computer Sciences',
    school: 'University of Malawi (UNIMA)',
    location: 'Zomba, Malawi',
    address:'P.O Box 280'
  },
  {
    date: 'Jan 2019 - Jan 2021',
    degree: 'Malawi School Certificate of Education (MSCE)',
    school: 'Domasi Mission Secondary School (DMX)',
    location: 'Zomba, Malawi',
  },
];

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div 
      className="flex flex-col justify-center mt-20 md:mt-40 py-10 px-4 sm:px-6 relative"
      ref={ref}
    >
      <h2 id="Education" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-10 sm:mb-16">
        Education
      </h2>

    
      <motion.div
        className="absolute left-5.5 sm:left-10 md:left-9 lg:left-15 lg:top-[14vh] xl:left-[20.8vh]  md:top-[14vh] xl:top-[27vh] top-[24.5vh] bottom-[2rem] w-0.5 bg-gradient-to-b from-[#009966] shadow-lg z-0"
        style={{ 
          height,
          transform: 'translateX(-50%)'
        }}
      />

      <div className="max-w-4xl mx-auto w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col relative md:flex-row py-18 sm:py-10 md:py-12 relative z-10"
          >
          
            <div className="absolute block left-[0.7vh] md:left-3 lg:left-1 xl:left-[-22vh] top-[11vh] md:top-[4.5vh] lg:top xl:top-[8.5vh] transform -translate-x-1/2 -translate-y-1/2 z-20 ">
              <FiCircle 
                size={24}
                className="text-gray-400 bg-white/25 rounded-full border-2 border-gray-400 p-0.5"
              />
            </div>

          
            <div className="w-full md:w-fit flex justify-start md:justify-end pr-0 md:pr-16">
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-medium left-20 ml-12 sm:ml-12 md:ml-7 lg:ml-5 xl:ml-[-19vh]">
                {edu.date}
              </p>
            </div>

          
            <div className="w-full md:w-3/5 pl-0 xl:ml-[12vh] mt-3 md:mt-0">
              <p className="text-white text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 xl:ml-12 sm:text-lg md:text-xl font-medium">
                {edu.degree}
              </p>
              <p className="text-white/60 text-sm sm:text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 mt-1">
                @{edu.school}, {edu.location}
              </p>
              <p className="text-white/60 text-base ml-12 sm:ml-12 md:ml-12 lg:ml-20 xl:ml-12 sm:text-lg md:text-sm font-medium">
                {edu.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}