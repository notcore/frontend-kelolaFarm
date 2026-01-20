import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/layouts";
import Typo from "@/components/atoms/TypoGrafis";
import { TrendingUp } from "lucide-react";
import { fetchLahan } from "@/services/lahan";
import { fetchDaerah } from "@/services/daerah";
import { useNavigate } from "react-router-dom";

import Button from "@/components/atoms/Button";
import SearchBar from "@/components/molecules/SearchBar";
import RegionFilter from "@/components/molecules/RegionFilter";
import PriceGrid from "@/components/fragments/PriceGrid";
import { Plus, SlidersHorizontal } from "lucide-react";

const LahanPage = () => {
  const navigate = useNavigate();
  const [LahanList, setLahanList] = useState([]);
  const [daerahList, setDaerahList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDaerah, setActiveDaerah] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const initData = async () => {
      setLoading(true);
      try {
        const dataLahan = await fetchLahan();
        const dataDaerah = await fetchDaerah();
        setDaerahList(Array.isArray(dataDaerah?.data) ? dataDaerah?.data : []);
        setLahanList(Array.isArray(dataLahan?.data) ? dataLahan?.data : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    initData();

  }, []);

  const filteredLahan = LahanList.filter((item) => {
    const matchDaerah =
      activeDaerah === "all" || item.daerah?.id === activeDaerah;
    const matchSearch = item.tanaman?.nama_tanaman
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return matchDaerah && matchSearch;
  });

  return (
<Layout paddingCondition={false}>
      <section className="px-4 md:px-10 mx-auto relative min-h-screen max-w-screen-2xl pb-20">
        
        <div className="xl:mx-20 mt-24 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-5">
            <div className="space-y-1">
              <Typo Variant="h1" ClassName="tracking-tight">schema Lahan Anda</Typo>
              <Typo Variant="body" ClassName="text-gray-500">
                Pantau kondisi dan perkembangan lahan secara real-time.
              </Typo>
            </div>
            
            <Button 
              className="hidden gap-3 md:justify-center md:items-center md:flex"
              onClick={()=>navigate('/buat-lahan')}
            >
              <Plus size={18} strokeWidth={3} />
              <span>Tambah Lahan</span>
            </Button>
          </div>
        </div>

        <div className="xl:mx-20 mb-8 space-y-6">
          <div className="px-5">
            <div className="relative max-w-2xl">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari lahan anda..."
              />
            </div>
          </div>

          <div className="px-5">
            <div className="flex items-center gap-3 mb-2 text-gray-400">
              <SlidersHorizontal size={14} />
              <Typo className="font-helvetica">Filter Wilayah</Typo>
            </div>
            <div className="w-[300px] md:w-[600px] xl:w-[75%] border-b border-gray-100 pb-2">
              <RegionFilter
                regions={daerahList}
                activeId={activeDaerah}
                onSelect={setActiveDaerah}
              />
            </div>
          </div>
        </div>

        <div className="xl:mx-20">
          <PriceGrid loading={loading} data={filteredLahan} />
        </div>

        <div className="fixed bottom-6 right-6 md:hidden z-50">
          <Button 
            className="w-16 h-16 rounded-full shadow-2xl bg-black flex items-center justify-center p-0"
            onClick={() => {navigate('/buat-lahan')}}
          >
            <Plus size={32} strokeWidth={2.5} />
          </Button>
        </div>

      </section>
    </Layout>
  );
};

export default LahanPage;
