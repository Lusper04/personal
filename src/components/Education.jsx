import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    date: 'Jun 2021-May 2026',
    degree: 'Bachelor of Science in Computer Sciences',
    school: 'University of Malawi ( UNIMA )',
    location: 'Zomba, Malawi',
  },
  {
    date: ' Jan 2019 - Jan 2021',
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
      className="flex flex-col justify-center mt-40 sm:mt-40 education-section px-1 md:px-0 relative"
      ref={ref}
    >
     
      <section id="Education" className="text-neutral-50 text-2xl sm:text-[4vh] font-bold text-center">
        Education
      </section>

     
      <motion.div
        className="absolute left-[2.4rem] sm:left-[26vh] md:top-[20vh] top-[15vh]  bottom-0 w-[3px] z-0 bg-gradient-to-b from-[#009966] shadow-lg"
        style={{ height }}
      />

     
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex py-10 md:py-0 flex-col sm:flex-row mt-8 sm:items-start md:gap-3 education-item relative z-10"
        >
        
          <FiCircle
            size={30}
            color="gray"
            className="md:inline hidden md:ml-[24vh] border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10.3vh]"
          />

         
          <div className="flex ml-6 md:ml-0">
            <FiCircle
              size={25}
              color='gray'
              className="flex inline md:hidden mt-1 border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 education-icon md:mt-[10vh]"
            />
            <p className="md:text-white/[0.5] ms-[2.7vh] md:ms-0 text-lg text-[2.5vh] text-white/50 md:text-2xl font-sans font-medium education-date md:mt-[10vh]">
              {edu.date}
            </p>
          </div>

        
          <div className="flex flex-col ml-5 sm:ml-[40vh] education-details">
            <p className="text-neutral-50 text-sm sm:text-xl mt-2 sm:mt-[10vh] ms-[7.2vh] sm:ms-0 education-title">
              {edu.degree}
            </p>
            <p className="text-sm sm:text-[2.3vh] ms-[7.2vh] md:ms-0 md:pr-24 text-white/70 sm:text-white/[0.60] education-school">
              @{edu.school}, {edu.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
