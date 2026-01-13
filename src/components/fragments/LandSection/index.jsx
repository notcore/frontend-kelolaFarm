import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import LandCard from "@/components/molecules/LandCard";

const LandSection = () => {
  return (
    <section className="px-4 md:px-10 py-4">
      <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">Prototype Lahan</Typo>
      
      <div className="flex h-[220px] gap-4 overflow-x-auto relative horizontal-scroll pb-6 no-scrollbar snap-x">
        <LandCard isNew />
        <LandCard 
          image="/images/sawah-2.jpg" 
          title="Self Resource" 
          subtitle="Kangkung, Tomat, Cabai" 
        />
        <LandCard 
          image="/images/sawah-1.jpg"
          title="Summer Template" 
          subtitle="Padi, Jagung" 
        />
      </div>
    </section>
  );
};

export default LandSection;