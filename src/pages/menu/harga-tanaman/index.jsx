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
    const controller = new AbortController();

    const initData = async () => {
      setLoading(true);
      try {
        const dataHarga = await fetchHarga();
        const dataDaerah = await fetchDaerah();
        console.log("dataHarga:", dataHarga);
        console.log("dataDaerah:", dataDaerah);
        setDaerahList(Array.isArray(dataDaerah) ? dataDaerah : []);
        setHargaList(Array.isArray(dataHarga) ? dataHarga : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    initData();

    return () => {
      controller.abort();
    }
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
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <Typo Variant="h2">Harga Hasil Panen</Typo>
            <TrendingUp className="text-green-600 w-6 h-6" />
          </div>
          <Typo Variant="body" ClassName="text-gray-500">
            Pantau harga pasar hari ini secara real-time di berbagai daerah
          </Typo>
        </div>

        <div className="flex px-5 max-w-full w-full relative flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
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
        <hr className="mx-5 my-3" />
        <PriceGrid loading={loading} data={filteredHarga} />
      </section>
    </Layout>
  );
};

export default HargaTanamanPage;
