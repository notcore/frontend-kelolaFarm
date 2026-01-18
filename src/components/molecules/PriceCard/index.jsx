import { Link } from "react-router-dom";
import ProductCard from "@/components/molecules/ProductCard";
import Typo from "@/components/atoms/TypoGrafis";
import { MapPin, CirclePoundSterling } from "lucide-react";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const PriceCard = ({ item, index }) => {
  const formatRupiah = (num) =>
    num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "0";
  
    const formatDate = (timestamp) => {
      if (!timestamp) return "-";
      return dayjs(timestamp).format("DD MMM YYYY");
    };
  
  return (
    <ProductCard
      key={item.id}
      image={item.tanaman?.gambar_tanaman}
      name={item.tanaman?.nama_tanaman || "Nama Tanaman"}
      className="group"
    >
      <div className="mt-3 text-xs text-gray-600 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <MapPin
            size={14}
            className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
          />
          <span className="group-hover:text-gray-600 transition-colors duration-300">
            {item.daerah?.nama_daerah || "-"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CirclePoundSterling
            size={14}
            className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
          />
          <span className="group-hover:text-gray-600 transition-colors duration-300">
            Rp {formatRupiah(item.harga)}
          </span>
        </div>
        <div className="text-gray-400 ml-auto text-[10px] group-hover:text-green-600 transition-colors duration-300">
          {formatDate(item.created_at)}
        </div>
      </div>
    </ProductCard>
  );
};

export default PriceCard;
