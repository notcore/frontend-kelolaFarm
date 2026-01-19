import { useState } from "react";
import Typo from "@/components/atoms/TypoGrafis";
import { Eye, EyeOff } from "lucide-react";

const FloatLabel = ({
  ClassName = "",
  ClassNameInput = "",
  Label,
  Name,
  Type = "text",
  Placeholder = "",
  Children,
  children,
  value,  
  ...props  
}) => {
  const isPassword = Type === "password";
  const [show, setShow] = useState(false);

  return (
    <div className={`relative mt-6 ${ClassName}`}>
      <label className="absolute -top-3 bg-white px-2 left-3 z-10" htmlFor={Name}>
        <Typo ClassName="font-bold text-sm">{Label}</Typo>
      </label>

      <div className="relative">
        <input
          className={`w-full border-2 pt-3 pr-12 border-slate-200
          focus:outline-none focus:border-green-600 p-3 rounded-lg bg-transparent
          ${ClassNameInput}`}
          name={Name}
          id={Name}
          type={isPassword && show ? "text" : Type}
          placeholder={Placeholder}
          value={value ?? ""} // Handle agar tidak null/undefined
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
          >
            {show ? <EyeOff className="text-green-600" size={20} /> : <Eye size={20} />}
          </button>
        )}

        {/* Render children (seperti teks "Hektar") di sini, bukan di dalam input */}
        {children} 
        {Children}
      </div>
    </div>
  );
};

export default FloatLabel;