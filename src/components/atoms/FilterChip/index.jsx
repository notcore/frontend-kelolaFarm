import { motion } from "framer-motion";
import Typo from "@/components/atoms/TypoGrafis";

const FilterChip = ({ label, isActive, onClick,ClassName="" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-5 py-2 rounded-full border-2 transition-colors flex items-center justify-center transition-all duration-500 ${ClassName}
        ${
          isActive
            ? "bg-green-600 border-green-600 text-white"
            : "bg-white border-slate-200 text-gray-600 hover:border-green-600 hover:text-green-600"
        }`}
    >
      <Typo Variant="caption" ClassName={`font-medium whitespace-nowrap  rounded-full transition-all duration-300 ${
          isActive
            ? "bg-green-600 border-green-600 text-white"
            : "bg-white border-slate-200 text-gray-600 hover:border-green-600 hover:text-green-600"
        } `}>
        {label}
      </Typo>
    </motion.button>
  );
};

export default FilterChip;