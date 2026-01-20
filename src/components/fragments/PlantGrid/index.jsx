import { useState, useEffect } from "react";
import { CheckCircle2, Sprout, Search } from "lucide-react";
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card"; 
import SearchBar from "@/components/molecules/SearchBar";
import { fetchTanaman } from "@/services/tanaman";

const PlantGrid = ({ selectedIds = [], onSelect }) => {
  const [tanamanList, setTanamanList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTanaman().then((res) => {
      setTanamanList(Array.isArray(res?.data) ? res.data : []);
      setLoading(false);
    });
  }, []);

  const handleToggleTanaman = (id) => {
    if (selectedIds.includes(id)) {
      onSelect(selectedIds.filter((item) => item !== id));
    } else {
      onSelect([...selectedIds, id]);
    }
  };

  const filtered = tanamanList.filter((t) =>
    t.nama_tanaman?.toLowerCase().includes(search.toLowerCase())
  );

  const storage = import.meta.env.VITE_STORAGE_BASE_URL;

  return (
    <div className="mt-12 space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-100 pb-8">
        <div className="space-y-1">
          <Typo Variant="h2" ClassName="text-2xl font-bold tracking-tight text-slate-900">
            Tanaman yang ditanam
          </Typo>
          <Typo ClassName="text-slate-500 text-sm max-w-md">
            Pilih tanaman di lahan ini untuk mendapatkan analisis harga pasar yang akurat.
          </Typo>
        </div>
        <div className="w-full lg:w-72">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 bg-slate-100 animate-pulse rounded-[1.5rem]" />
          ))
        ) : (
          filtered.map((plant) => {
            const isActive = selectedIds.includes(plant.id);
            return (
              <div
                key={plant.id}
                onClick={() => handleToggleTanaman(plant.id)}
                className={`relative flex flex-col cursor-pointer rounded-[1.5rem] border-2 transition-colors duration-200 overflow-hidden
                  ${isActive 
                    ? "border-green-600 bg-white" 
                    : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
              >
                {/* Image Section */}
                <div className="relative h-40 bg-slate-50">
                  <img 
                    src={storage + plant.gambar_tanaman} 
                    alt={plant.nama_tanaman} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Status Overlay */}
                  <div className={`absolute inset-0 transition-colors duration-200 
                    ${isActive ? "bg-green-600/10" : "bg-transparent group-hover:bg-slate-900/5"}`} 
                  />

                  {isActive && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white p-1 rounded-lg">
                      <CheckCircle2 size={18} />
                    </div>
                  )}
                </div>
                
                {/* Info Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2">
                    <Typo ClassName={`font-bold text-base leading-tight ${isActive ? "text-green-700" : "text-slate-800"}`}>
                      {plant.nama_tanaman}
                    </Typo>
                  </div>
                  
                  <div className="mt-auto pt-3 flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${isActive ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"}`}>
                      <Sprout size={14} />
                    </div>
                    <Typo ClassName="text-xs font-helvetica">
                      {plant.tanah?.jenis_tanah || "Semua Tanah"}
                    </Typo>
                  </div>
                </div>
                {isActive && <div className="h-1.5 w-full bg-green-600" />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PlantGrid;