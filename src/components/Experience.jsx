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
      className="flex flex-col justify-center mt-40 sm:mt-40 px-4 md:px-8 lg:px-0 relative"
      ref={ref}
    >
      <section id="Experiences" className="text-neutral-50 text-2xl sm:text-3xl md:text-[4vh] font-bold text-center mb-12 md:mb-16">
        Experiences
      </section>

      <motion.div
        className="absolute left-6 sm:left-2 md:left-12 lg:left-[22vh] top-[10vh] sm:top-[12vh] md:top-[12vh] bottom-0 w-0.5 sm:w-[2px] z-0 bg-gradient-to-b from-[#009966] shadow-lg"
        style={{ height }}
      />

      <div className="space-y-16 md:space-y-20">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row relative z-10"
          >
            {/* Circle icons */}
            <div className="flex items-start">
              <FiCircle
                size={24}
                color="gray"
                className="hidden md:block absolute left-2 md:left-1 lg:left-[20.5vh] mt-[2.5vh] border bg-white/[0.25] rounded-full"
              />
              
              <div className="flex items-center sm:items-start">
                <FiCircle
                  size={20}
                  color="gray"
                  className="md:hidden absolute left-0 mt-[0.1rem] border bg-white/[0.25] rounded-full"
                />
                <p className="ml-6 sm:ml-none md:ml-12 ml-12 lg:ml-12 sm:mt-[1.5vh] text-white/50 text-base sm:text-lg md:text-xl font-sans font-medium w-[180px] sm:w-auto">
                  {exp.date}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="ml-0 sm:ml-12 md:ml-16 lg:ml-[30vh] mt-4 sm:mt-0">
              <p className="text-neutral-50 text-lg md:ml-12 ml-12 lg:ml-12 sm:text-xl md:text-2xl">
                {exp.role}
              </p>
              <p className="text-white/70 md:ml-12 ml-12 lg:ml-12 text-base sm:text-lg md:text-xl mt-1">
                @{exp.company}
              </p>
              <div className="mt-4 space-y-2 font-sans text-neutral-50 text-base sm:text-lg md:ml-10 ml-10 lg:ml-10 leading-relaxed">
                {exp.details.map((detail, i) => (
                  <p key={i} className="flex items-start">
                    <span className="mr-2">•</span> 
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}