import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    date: 'Jun 2021-May 2026',
    degree: 'Bachelor of Science in Computer Sciences',
    school: 'University of Malawi (UNIMA)',
    location: 'Zomba, Malawi',
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
      <h2 id="Education" className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
        Education
      </h2>

      {/* Timeline line - Responsive positioning */}
      <motion.div
        className="absolute left-5 sm:left-10 md:left-1/2 top-[28vh] bottom-[2rem] w-0.5 bg-gradient-to-b from-[#009966] shadow-lg z-0"
        style={{ 
          height,
          transform: 'translateX(-50%)'
        }}
      />

      <div className="max-w-4xl mx-auto w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row py-18 sm:py-10 md:py-12 relative z-10"
          >
            {/* Circle icon - Responsive positioning */}
            <div className="absolute left-1 md:left-1/2 top-[5.2rem] transform -translate-x-1/2 -translate-y-1/2 z-20">
              <FiCircle 
                size={24}
                className="text-gray-400 bg-white/25 rounded-full border-2 border-gray-400 p-0.5"
              />
            </div>

            {/* Date section - Responsive alignment */}
            <div className="w-full md:w-2/5 flex justify-start md:justify-end pr-0 md:pr-8">
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-medium ml-12 sm:ml-12 md:ml-12 lg:ml-12">
                {edu.date}
              </p>
            </div>

            {/* Content section - Responsive spacing */}
            <div className="w-full md:w-3/5 pl-0 md:pl-8 mt-3 md:mt-0">
              <p className="text-white text-base ml-12 sm:ml-12 md:ml-12 lg:ml-12 sm:text-lg md:text-xl font-medium">
                {edu.degree}
              </p>
              <p className="text-white/60 text-sm sm:text-base ml-12 sm:ml-12 md:ml-12 lg:ml-12 mt-1">
                @{edu.school}, {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}