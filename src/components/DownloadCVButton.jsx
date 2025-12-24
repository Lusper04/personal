import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function DownloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/LUSUNGU_MHANGO_CV.txt";
    link.download = "LUSUNGU_MHANGO_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#00B578] to-[#009966] hover:from-[#009966] hover:to-[#008855] text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(0,181,120,0.5)] transition-all duration-300 flex items-center justify-center group"
      aria-label="Download CV"
    >
      <FiDownload className="text-2xl group-hover:animate-bounce" />
      <span className="absolute bottom-full mb-3 bg-[#00B578] text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Download CV
      </span>
    </motion.button>
  );
}
