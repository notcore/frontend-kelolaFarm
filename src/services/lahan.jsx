import React, { useState, useEffect } from "react";
import { fetchLahan } from "@/lib/fetchLahan";
import LandCard from "@/components/LandCard";

const LahanList = () => {
  const [lahanList, setLahanList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const lahanData = await fetchLahan(); 
        console.log("Lahan data fetched:", lahanData);
      } catch (err) {
        console.error("Error fetching lahan data:", err);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex gap-4 overflow-x-auto">
      {lahanList.map((item) => (
        <LandCard
          key={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          meta={{
            tanaman: item.tanaman,
            hektar: item.hektar,
            tanah: item.tanah,
            createdAt: item.createdAt,
          }}
        />
      ))}
    </div>
  );
};

export default LahanList;
