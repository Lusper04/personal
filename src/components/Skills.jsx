import { motion } from "framer-motion";
import react from "/src/assets/images/react.png";
import css from "/src/assets/images/tailwind.svg";
import html from "/src/assets/images/html.png";
import JV from "/src/assets/images/java.png";
import TF from "/src/assets/images/terraform.svg";
import OS from "/src/assets/images/oracle.png";
import PS from "/src/assets/images/postgre.png";
import PT from "/src/assets/images/python.png";
import DK from "/src/assets/images/docker.png";
import SQ from "/src/assets/images/mysql.png";
import LX from "/src/assets/images/linux.png";
import JS from "/src/assets/images/js.png";
import CP from "/src/assets/images/c-.png";
import RD from "/src/assets/images/redux.png";
import NS from "/src/assets/images/nest.svg";
import TS from "/src/assets/images/typescript.png";
import AWS from "/src/assets/images/aws.png";
import UB from "/src/assets/images/ubuntu.png";
import PRM from "/src/assets/images/prometheus.svg";
import BS from "/src/assets/images/bash.svg";
import GT from "/src/assets/images/github.png";
import COLL from "/src/assets/images/collab.png";
import PB from "/src/assets/images/problem.png";
import PN from "/src/assets/images/planning.png";

export default function Skills() {
  return (
    <section className="bg-radial lg:mt-14 md:mt-14 sm:mt-14 mt-14 min-h-screen h-full w-full transform-none px-4 md:px-8 lg:px-16 py-12 md:py-24">
  
      <motion.section 
        id="Skills" 
        className="text-3xl sm:text-4xl md:text-xl lg:text-[2rem] text-neutral-50 font-semibold mb-8 md:mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.section>

    
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full"
      />

      
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
          
          <SkillCard title="Programming Languages">
            <SkillItem icon={JS} label="JavaScript" />
            <SkillItem icon={PT} label="Python" />
            <SkillItem icon={JV} label="Java" />
            <SkillItem icon={CP} label="C++" />
          </SkillCard>

          <SkillCard title="FrontEnd Development">
            <SkillItem icon={react} label="React" />
            <SkillItem icon={html} label="HTML" />
            <SkillItem icon={css} label="TailwindCSS" />
            <SkillItem icon={RD} label="Redux" />
          </SkillCard>

          <SkillCard title="BackEnd Development">
            <SkillItem icon={TS} label="TypeScript" />
            <SkillItem icon={NS} label="NestJS" />
            <SkillItem icon={SQ} label="MySQL" />
          </SkillCard>

      
          <SkillCard title="Database Design">
            <SkillItem icon={PS} label="PostgreSQL" />
            <SkillItem icon={SQ} label="MySQL" />
            <SkillItem icon={OS} label="Oracle" />
          </SkillCard>

            <SkillCard title="DevOps & Tools">
            <div className="md:flex md: flex-col md:items-center ">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-4">
              <SkillItem  icon={AWS} label="AWS" />
              <SkillItem icon={DK} label="Docker" />
              <SkillItem icon={PRM} label="Prometheus" />
              <SkillItem icon={UB} label="Ubuntu" />
               <SkillItem icon={BS} label="Bash" />
              <SkillItem icon={TF} label="Terraform" />
              <SkillItem icon={LX} label="Linux" />
              <SkillItem icon={GT} label="GitHub" />
              
            </div>
            <div className="flex xl:flex-row xl:mt-14 hidden">
              <SkillItem icon={BS} label="Bash" />
              <SkillItem icon={TF} label="Terraform" />
              <SkillItem icon={LX} label="Linux" />
              <SkillItem icon={GT} label="GitHub" />
            </div>
            </div>
          </SkillCard>

          <SkillCard title="Nontechnical Skills">
            <SkillItem icon={PN} label="Planning" />
            <SkillItem icon={COLL} label="Collaboration" />
            <SkillItem icon={PB} label="Problem Solving" />
          </SkillCard>

        
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ title, children }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full md:h-[40vh] bg-[#00ff99]/[0.05] border-t border-b border-white shadow-2xl hover:bg-white/[0.08] rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
    >
      <section className="px-4 py-6 sm:px-6 sm:py-8 h-full flex flex-col">
        <h1 className="font-semibold text-xl sm:text-2xl text-neutral-50 text-center mb-4 sm:mb-6">
          {title}
        </h1>
        <div className=" md:flex-row md:mt-20 lg:mt-40 xl:mt-0 flex justify-center items-center gap-4 sm:gap-6">
          {children}
        </div>
      </section>
    </motion.div>
  );
}

function SkillItem({ icon, label }) {
  return (
    <motion.div 
      className="flex flex-col items-center p-2 sm:p-3 w-[80px] md:w-fit md:h-[5vh] "
      whileHover={{ scale: 1.05 }}
    >
      <img 
        src={icon} 
        alt={label} 
        className="h-12 sm:h-16 md:h-10 w-auto object-contain"
      />
      <p className="text-neutral-50 text-xs sm:text-sm md:text-base mt-2 text-center font-medium">
        {label}
      </p>
    </motion.div>
  );
}