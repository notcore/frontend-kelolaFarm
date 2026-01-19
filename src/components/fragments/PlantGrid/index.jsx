import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
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
    // Cek apakah ID sudah ada di array
    if (selectedIds.includes(id)) {
      // Jika ada, hapus (Deselect)
      onSelect(selectedIds.filter((item) => item !== id));
    } else {
      // Jika tidak ada, tambah ke array (Select)
      onSelect([...selectedIds, id]);
    }
  };

  const filtered = tanamanList.filter((t) =>
    t.nama_tanaman?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
        <div>
          <Typo Variant="h2" ClassName="text-2xl text-slate-900">Pilih Komoditas</Typo>
          <Typo ClassName="text-slate-500 text-sm mt-1">
            Pilih satu atau lebih tanaman yang akan ditanam di lahan ini.
          </Typo>
        </div>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          [1, 2, 3, 4].map((i) => <div key={i} className="h-64 bg-slate-50 animate-pulse rounded-[2rem]" />)
        ) : (
          filtered.map((plant) => {
            const isActive = selectedIds.includes(plant.id);
            return (
              <Card
                key={plant.id}
                onClick={() => handleToggleTanaman(plant.id)}
                className={`group cursor-pointer border-2 transition-all duration-300 overflow-hidden relative
                  ${isActive 
                    ? "border-green-600 bg-green-50 shadow-xl shadow-green-600/10 scale-[1.02]" 
                    : "border-transparent hover:border-green-300"
                  }`}
              >
                <div className="relative h-44 overflow-hidden -m-4 mb-2"> {/* -m-4 untuk offset padding default Card jika ada */}
                  <img 
                    src={plant.image} 
                    alt={plant.nama_tanaman} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {isActive && (
                    <div className="absolute top-4 right-4 bg-white text-green-600 p-1.5 rounded-xl shadow-lg z-10">
                      <CheckCircle2 size={20} fill="currentColor" className="text-white bg-green-600 rounded-full" />
                    </div>
                  )}
                </div>
                
                <div className="py-2">
                  <Typo ClassName="font-black text-lg text-slate-800">{plant.nama_tanaman}</Typo>
                  <Typo ClassName="text-green-600 font-bold text-xs mt-1 uppercase">
                    Masa Panen: {plant.masa_panen} Hari
                  </Typo>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PlantGrid;