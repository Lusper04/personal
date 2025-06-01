import { FiCircle } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceData = [
  {
    date: 'May 2025 - Present',
    role: 'Junior DevOps Engineer',
    company: 'Plubirl',
    details: [
      'I manage CI/CD pipelines used by our development teams at Plubirl.',
      'I assist with automating cloud infrastructure within our Plubirl environments.',
      'I monitor systems and logs to ensure reliable performance across Plubirl services.',
      'I collaborate with teams and document DevOps processes specific to Plubirl\'s workflows.'
    ]
  },
  {
    date: 'June 2024 - Present',
    role: 'Junior Software Engineer',
    company: 'HB Space TL',
    details: [
      'I contribute to building and maintaining web and mobile applications at HB Space TL.',
      'I write clean, efficient code and fix bugs as part of the development team.',
      'I collaborate with designers and senior engineers to implement new features.',
      'I participate in code reviews and continuously learn to improve my skills at HB Space TL.'
    ]
  }
];

export default function Experiences() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

  return (
    <div
      className="flex flex-col justify-center mt-40 sm:mt-40 px-1 md:px-0 relative"
      ref={ref}
    >
      <section id="Experiences" className="text-neutral-50 text-2xl sm:text-[4vh] font-bold text-center">
        Experiences
      </section>

     
      <motion.div
        className="absolute left-[2.4rem] sm:left-[22vh] md:top-[21vh] top-[15vh] bottom-0 w-[3px] z-0 bg-gradient-to-b from-[#009966] shadow-lg"
        style={{ height }}
      />

      {experienceData.map((exp, index) => (
        <div
          key={index}
          className="flex py-10 md:py-0 flex-col sm:flex-row mt-8 sm:items-start md:gap-3 relative z-10"
        >
        
          <FiCircle
            size={30}
            color="gray"
            className="md:inline hidden md:ml-[20vh] border bg-white/[0.25] rounded-full sm:mt-[20vh] md:mb-0 md:mt-[10.5vh]"
          />

          
          <div className="flex ml-6 md:ml-0">
            <FiCircle
              size={25}
              color="gray"
              className="inline md:hidden mt-1 border bg-white/[0.25] rounded-full"
            />
            <p className="md:ms-0 ms-[2.7vh] text-lg text-[2.5vh] text-white/50 md:text-2xl font-sans font-medium md:mt-[10vh]">
              {exp.date}
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col ml-5 sm:ml-[30vh]">
            <p className="text-neutral-50 text-sm sm:text-xl mt-2 sm:mt-[10vh] ms-[7.2vh] sm:ms-0">
              {exp.role}
            </p>
            <p className="text-sm sm:text-[2.3vh] ms-[7.2vh] md:ms-0 md:pr-24 text-white/70">
              @{exp.company}
            </p>
            <div className="mt-3 space-y-2 font-sans text-sm text-neutral-50 leading-relaxed ms-[7.2vh] sm:ms-0">
              {exp.details.map((detail, i) => (
                <p key={i}>• {detail}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
