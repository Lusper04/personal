import PF from "/src/assets/images/prof.png";
import ED from "/src/assets/images/education.png";
import SE from "/src/assets/images/service.png";
import EX from "/src/assets/images/experience.png";
import SK from "/src/assets/images/skill.png";
import CT from "/src/assets/images/phone.png";
import PJ from "/src/assets/images/project.png";

const Nav = ({ isLightMode = false }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="About" className="flex justify-center mb-[40vh] scroll-smooth ">
      <div className="w-fit relative top-11 inset-x-0 mx-auto border border-white/[0.3] rounded-full backdrop-blur-sm z-[5000] transform-none px-4 py-3 shadow-2xl">
    
          <div className="relative hidden md:flex flex-row justify-center items-center gap-10 font-[sans-serif] transition duration-300 ease-in-out">
          <button className={`relative flex items-center space-x-1 mx-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("About")}>About</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Education")}>Education</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Services")}>Services</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Experiences")}>Expriences</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Skills")}>Skills</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Projects")}>Projects</button>
          <button className={`relative flex items-center space-x-1 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} group hover:text-[#009966]`} onClick={() => handleScroll("Contact")}>Contact</button>
        </div>

    
          <div className="flex md:hidden flex-row justify-center items-center gap-5 transform-none">
          <button onClick={() => handleScroll("About")}>
            <img src={PF} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Education")}>
            <img src={ED} alt="education" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-neutral-50'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Services")}>
           <img src={SE} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Experiences")}>
          <img src={EX} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Skills")}>
           <img src={SK} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Projects")}>
           <img src={PJ} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
          <button onClick={() => handleScroll("Contact")}>
           <img src={CT} alt="profile" className={`w-5 h-5 ${isLightMode ? 'text-gray-800' : 'text-white'} hover:text-[#009966]`}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
