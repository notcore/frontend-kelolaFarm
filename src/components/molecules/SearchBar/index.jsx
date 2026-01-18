import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full md:max-w-sm">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        placeholder="Cari tanaman..."
        value={value}
        onChange={onChange}
        className="w-full rounded-full border border-slate-200 border-2 pl-11 pr-5 py-3 
                   focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
      />
    </div>
  );
};

export default SearchBar;
