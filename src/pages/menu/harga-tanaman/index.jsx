import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/layouts";
import Typo from "@/components/atoms/TypoGrafis";
import { TrendingUp } from "lucide-react";
import { fetchHarga } from "@/services/harga";
import { fetchDaerah } from "@/services/daerah";

import SearchBar from "@/components/molecules/SearchBar";
import RegionFilter from "@/components/molecules/RegionFilter";
import PriceGrid from "@/components/fragments/PriceGrid";

const HargaTanamanPage = () => {
  const [hargaList, setHargaList] = useState([]);
  const [daerahList, setDaerahList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDaerah, setActiveDaerah] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const initData = async () => {
      setLoading(true);
      try {
        const dataHarga = await fetchHarga();
        const dataDaerah = await fetchDaerah();
        setDaerahList(Array.isArray(dataDaerah?.data) ? dataDaerah?.data : []);
        setHargaList(Array.isArray(dataHarga?.data) ? dataHarga?.data : []);
        console.log(daerahList)
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    initData();

  }, []);

  const filteredHarga = hargaList.filter((item) => {
    const matchDaerah =
      activeDaerah === "all" || item.daerah?.id === activeDaerah;
    const matchSearch = item.tanaman?.nama_tanaman
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return matchDaerah && matchSearch;
  });

  return (
    <Layout paddingCondition={false}>
      <section className="px-4 md:px-10 mx-auto relative min-h-screen max-w-screen pb-20">
        <div className="xl:mx-20">
<div className="max-w-2xl mt-30 mb-10 mx-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <Typo ClassName="text-green-700 font-bold tracking-wider text-xs uppercase">hasil tani</Typo>
              </div>
              <Typo Variant="h1" ClassName="text-4xl md:text-5xl font-black text-slate-900 mb-4">
               Harga pasar
              </Typo>
              <Typo className="text-slate-500 text-lg leading-relaxed">
              pantau harga pasar tanaman secara realtime
              </Typo>
            </div>

          <div className="flex px-5 max-w-full w-full relative flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="w-[100%] relative md:max-w-[500px]">
              <RegionFilter
                regions={daerahList}
                activeId={activeDaerah}
                onSelect={setActiveDaerah}
              />
            </div>
          </div>
        </div>

        <hr className="mx-5 my-3" />
        <PriceGrid loading={loading} data={filteredHarga} />
      </section>
    </Layout>
  );
};

export default HargaTanamanPage;
