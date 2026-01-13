import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import ProductCard from "@/components/molecules/ProductCard";

const SalesSection = () => {
  return (
    <section className="px-4 md:px-10 py-4">
      <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">Tanaman Dijual</Typo>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductCard name="Tomat Merah" />
        <ProductCard name="Cabai Rawit" />
        <ProductCard name="Terong Ungu" />
        <ProductCard name="Bayam Hijau" />
      </div>
    </section>
  );
};

export default SalesSection;