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
  ...props
}) => {
  const isPassword = Type === "password";
  const [show, setShow] = useState(false);

  return (
    <div className={`relative mt-5 ${ClassName}`}>
      <label className="absolute -top-4 bg-white px-2 left-3" htmlFor={Name}>
        <Typo ClassName="font-bold">{Label}</Typo>
      </label>

      <input
        className={`w-full border-2 pt-3 pr-12 border-slate-200
        focus:outline-none focus:border-green-600 p-3 rounded-lg
        ${ClassNameInput}`}
        name={Name}
        id={Name}
        type={isPassword && show ? "text" : Type}
        placeholder={Placeholder}
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

      {Children}
    </div>
  );
};

export default FloatLabel;
