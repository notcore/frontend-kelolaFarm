import { useEffect, useState } from "react";
import SearchBar from "@/components/molecules/SearchBar"; // Import SearchBar kamu
import Card from "@/components/atoms/Card"; // Import Card kamu
import Typo from "@/components/atoms/TypoGrafis";
import { fetchTanaman } from "@/services/tanaman";
import { CheckCircle2 } from "lucide-react";

const PlantSelector = ({ onSelect, selectedPlantId }) => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchTanaman();
        // Asumsi response structure: { data: [...] }
        setPlants(Array.isArray(response?.data) ? response.data : []);
      } catch (error) {
        console.error("Gagal ambil data tanaman", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filter logic
  const filteredPlants = plants.filter((p) =>
    p.nama_tanaman?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Typo Variant="h3" ClassName="font-bold">Tanaman yang di tanam</Typo>
        <div className="w-full md:w-auto">
            {/* Menggunakan Component SearchBar Kamu */}
            <SearchBar 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari bibit tanaman..."
            />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-400">Memuat data tanaman...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPlants.map((plant) => {
             const isSelected = selectedPlantId === plant.id;
             return (
              <Card
                key={plant.id}
                className={`cursor-pointer transition-all relative group hover:shadow-lg ${
                  isSelected ? "ring-2 ring-green-600 bg-green-50/50" : "hover:border-green-300"
                }`}
                onClick={() => onSelect(plant)}
              >
                {/* Image Placeholder / Actual Image */}
                <div className="h-32 bg-slate-100 w-full overflow-hidden">
                   {/* Ganti src dengan plant.image jika ada di API */}
                   <img 
                    src={plant.image || "https://placehold.co/400x300/e2e8f0/94a3b8?text=No+Image"} 
                    alt={plant.nama_tanaman}
                    className="w-full h-full object-cover"
                   />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                        <Typo ClassName="font-bold text-lg">{plant.nama_tanaman}</Typo>
                        <Typo Variant="caption" ClassName="text-slate-500">
                            Panen: {plant.masa_panen || "-"} Hari
                        </Typo>
                    </div>
                    {isSelected && <CheckCircle2 className="text-green-600" size={24} />}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlantSelector;