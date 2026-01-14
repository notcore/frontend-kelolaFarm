import React from "react";
import Typo from "@/components/atoms/TypoGrafis";
import LandCard from "@/components/molecules/LandCard";
import { fetchLahan } from "@/services/lahan";

const LandSection = () => {
  const [lahanList, setLahanList] = fetchLahan();

  const data = async () => {
    try{
      const lahanData = await fetchLahan();
      setLahanList(lahanData);
      console.log("Lahan data fetched:", lahanData);
    }catch(err){
      console.error("Error fetching lahan data:", err);
    }
  }

  return (
    <section className="px-4 md:px-10 py-4">
      <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">
        Prototype Lahan
      </Typo>

      <div className="flex h-[270px] gap-4 overflow-x-auto relative pb-6 no-scrollbar snap-x">
        <LandCard isNew />
        {lahanList.map((item, index) => (
          <LandCard
            key={"dummy"}
            image={"dummy"}
            title={"dummy"}
            subtitle={"item.subtitle"}
            meta={{
              tanaman: "item.tanaman",
              hektar: "item.hektar",
              tanah: "item.tanah",
              createdAt: "item.createdAt",
            }}
          />
        ))}

        <LandCard
          image="/images/sawah-1.jpg"
          title="Summer Template"
          subtitle="Padi, Jagung"
          meta={{
            tanaman: "2 Jenis",
            hektar: "5 Ha",
            tanah: "Alluvial",
            createdAt: "5 Feb 2026",
          }}
        />
      </div>
    </section>
  );
};

export default LandSection;
