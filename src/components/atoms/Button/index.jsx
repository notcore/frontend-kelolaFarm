
import { Plus } from "lucide-react";

const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium transition-all hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;