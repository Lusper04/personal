import { motion } from "framer-motion";
import react from "/src/assets/images/react.png"
import css from "/src/assets/images/tailwind.svg"
import html from "/src/assets/images/html.png"
import JV from "/src/assets/images/java.png"
import TF from "/src/assets/images/terraform.svg"
import OS from "/src/assets/images/oracle.png"
import PS from "/src/assets/images/postgre.png"
import PT from "/src/assets/images/python.png"
import DK from "/src/assets/images/docker.png"
import SQ from "/src/assets/images/mysql.png"
import LX from "/src/assets/images/linux.png"
import JS from "/src/assets/images/js.png"
import CP from "/src/assets/images/c-.png"
import RD from "/src/assets/images/redux.png"
import NS from "/src/assets/images/nest.svg"
import TS from "/src/assets/images/typescript.png"
import AWS from "/src/assets/images/aws.png"
import UB from "/src/assets/images/ubuntu.png"
import PRM from "/src/assets/images/prometheus.svg"
import BS from "/src/assets/images/bash.svg"
import GT from "/src/assets/images/github.png"
import COLL from "/src/assets/images/collab.png"
import PB from "/src/assets/images/problem.png"
import PN from "/src/assets/images/planning.png"

export default function Skills() {
  return (
    <section className="bg-radial md:min-h-[125vh] h-full transform-none px-4 mt-80 bg-white/[0.02]">
      <section id="Skills" className="md:text-4xl text-3xl text-neutral-50 font-semibold mb-12 text-center pt-18">
        Skills
      </section>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-xl"
        />
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6">
            
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
              <SkillItem icon={PS} label="Postgres" />
              <SkillItem icon={SQ} label="MySQL" />
              <SkillItem icon={OS} label="Oracle" />
            </SkillCard>

            
            <SkillCard title="DevOps">
              <div className="flex flex-wrap justify-center gap-6">
                <SkillItem icon={AWS} label="AWS" />
                <SkillItem icon={DK} label="Docker" />
                <SkillItem icon={PRM} label="Prometheus" />
                <SkillItem icon={UB} label="Ubuntu" />
                <SkillItem icon={BS} label="Bash" />
                <SkillItem icon={TF} label="Terraform" />
                <SkillItem icon={LX} label="Linux" />
                <SkillItem icon={GT} label="GitHub" />
              </div>
            </SkillCard>

            
            <SkillCard title="Nontechnical Skills">
              <SkillItem icon={PN} label="Planning" tall />
              <SkillItem icon={COLL} label="Collaboration" tall />
              <SkillItem icon={PB} label="Problem Solving" tall />
            </SkillCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function SkillCard({ title, children }) {
  return (
    <div className="w-[90vw] md:w-[60vh] bg-[#00ff99]/[0.05] hover:bg-white/[0.05] rounded-xl shadow-xl mt-6 font-sans mx-auto">
      <section className="text-neutral-50 px-5 mb-5">
        <h1 className="font-semibold text-xl text-center pt-6">{title}</h1>
        <div className="flex justify-center flex-wrap gap-8 py-8">
          {children}
        </div>
      </section>
    </div>
  );
}

function SkillItem({ icon, label, tall = false }) {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt="icon" className={`h-[${tall ? "10vh" : "7vh"}]`} />
      <p className="text-neutral-50 text-sm mt-1 text-center">{label}</p>
    </div>
  );
}
