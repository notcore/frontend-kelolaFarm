import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ value, onChange, placeholder = "Cari tanaman..." }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    // Memicu onChange dengan value kosong untuk membersihkan input
    onChange({ target: { value: "" } });
  };

  return (
    <div 
      className={`relative w-full transition-all duration-300 ease-in-out ${
        isFocused ? "md:max-w-md" : "md:max-w-sm"
      }`}
    >
      <Search
        size={18}
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 z-10 ${
          isFocused ? "text-green-600" : "text-slate-400"
        }`}
      />
      
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full pl-11 pr-12 py-3
          bg-white border-2 rounded-xl
          text-sm font-medium outline-none
          transition-all duration-300
          ${isFocused 
            ? "border-green-600 shadow-lg shadow-green-600/5 ring-4 ring-green-600/5" 
            : "border-slate-200 hover:border-slate-300 shadow-sm"
          }
        `}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all z-10"
          aria-label="Clear search"
        >
          <X size={14} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;