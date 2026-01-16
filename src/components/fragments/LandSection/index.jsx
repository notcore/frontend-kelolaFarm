import { useEffect, useState } from "react";
import Typo from "@/components/atoms/TypoGrafis";
import LandCard from "@/components/molecules/LandCard";
import { fetchLahan } from "@/services/lahan";

const LandSection = () => {
  const [lahanList, setLahanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLahan = async () => {
      try {
        const data = await fetchLahan();

        if (!Array.isArray(data)) {
          throw new Error("API /lahan harus return array");
        }

        setLahanList(data);
      } catch (err) {
        setError(err.message || "Gagal mengambil data lahan");
      } finally {
        setLoading(false);
      }
    };

    loadLahan();
  }, []);


  return (
    <section className="px-4 md:px-10 py-4">
      <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">
        Prototype Lahan
      </Typo>

      <div className="flex h-[270px] gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
        <LandCard isNew />

        {lahanList.map((item) => (
          <LandCard
            key={item.id}
            image={item.image}
            title={item.nama}
            subtitle={item.tanaman?.join(", ")}
            meta={{
              tanaman: item.tanaman?.length ?? 0,
              hektar: `${item.luas} Ha`,
              tanah: item.jenis_tanah,
              createdAt: item.created_at,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LandSection;
