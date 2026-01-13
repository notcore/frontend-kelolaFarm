import React from "react";
import Typo from "../../atoms/TypoGrafis";
import { useNavigate } from "react-router-dom";
import {
  CloudSun,
  Calculator,
  Sprout,
  TrendingUp,
  Search,
  ShoppingBasket,
  LayoutTemplate,
} from "lucide-react";

// Hapus fungsi redirect lama

const FeatureItem = ({ Icon, label, to }) => {
  const navigate = useNavigate(); // hook navigate

  return (
    <button
      onClick={() => navigate(to)} // langsung pakai navigate
      className="flex flex-col items-center gap-2 group cursor-pointer w-20 flex-shrink-0"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 transition-all duration-300 group-hover:bg-green-100 group-hover:text-green-600 border border-gray-50 group-hover:border-green-600">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <Typo
        ClassName="text-center text-[10px] md:text-xs font-medium group-hover:text-green-700 transition-colors"
      >
        {label}
      </Typo>
    </button>
  );
};

const FeatureGrid = () => {
  const features = [
    { icon: CloudSun, to: "/cuaca", label: "Cuaca" },
    { icon: Calculator, to: "/tanaman", label: "Prediksi bibit" },
    { icon: Sprout, to: "/tanah", label: "Cek Tanah" },
    { icon: TrendingUp, to: "/harga-tanaman", label: "Harga pasar" },
    { icon: ShoppingBasket, to: "/", label: "Jual hasil" },
    { icon: LayoutTemplate, to: "/", label: "rancangan lahan" },
  ];

  return (
    <section className="px-4 md:px-10 py-4">
      <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">
        Fitur Utama
      </Typo>
      <div className="grid grid-cols-4 sm:flex sm:gap-10 sm:overflow-x-auto horizontal-scroll">
        {features.map((f, i) => (
          <FeatureItem key={i} Icon={f.icon} label={f.label} to={f.to} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
