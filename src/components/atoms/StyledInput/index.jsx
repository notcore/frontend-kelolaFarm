import React from "react";
import Typo from "@/components/atoms/TypoGrafis";

const StyledInput = ({ label, name, value, onChange, placeholder, type = "text", suffix, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="ml-1">
          <Typo ClassName="text-lg font-helvetica-bold text-black">
            {label}
          </Typo>
        </label>
      )}
      <div className="relative group">
        <input
          id={name}
          name={name}
          type={type}
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full  [appearance:textfield]
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none px-5 py-4 bg-white border-2 border-slate-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all placeholder:text-slate-300 font-medium text-slate-900"
          {...props}
        />
        {suffix && (
          <div className="absolute bg-white pl-5 border-l-2 border-slate-200 right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <Typo ClassName="font-bold text-sm text-slate-400 group-focus-within:text-green-600 transition-colors">
              {suffix}
            </Typo>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyledInput;