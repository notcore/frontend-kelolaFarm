import { useEffect, useState } from "react";
import Typo from "@/components/atoms/TypoGrafis";
import ProductCard from "@/components/molecules/ProductCard";
import { fetchHarga } from "@/services/harga";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowRight,
  CirclePoundSterling,
  TrendingUp,
} from "lucide-react";
import dayjs from "dayjs";
import { Button } from "@/components/atoms";
import SalesSkeleton from '@/components/fragments/SalesSkeleton/index';

const SalesSection = () => {
  const [hargaList, setHargaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHarga = async () => {
      try {
        const data = await fetchHarga();
        if (Array.isArray(data)) setHargaList(data);
        else if (Array.isArray(data?.data)) setHargaList(data.data);
        else setHargaList([]);
      } catch (err) {
        console.error(err);
        setError(err.message || "Gagal mengambil data harga");
        setHargaList([]);
      } finally {
        setLoading(false);
      }
    };
    loadHarga();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    return dayjs(timestamp).format("DD MMM YYYY");
  };

  const formatRupiah = (number) => {
    if (!number) return "0";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  if (loading) return <SalesSkeleton/>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (hargaList.length === 0) return <p>Tidak ada data harga.</p>;

  return (
    <section className="px-4 md:px-10 py-6">
      <div className="">
        <div>
          <Typo
            Variant="h2"
            ClassName="text-base flex items-center gap-2 md:text-lg"
          >
            Harga hasil panen
            <TrendingUp className="text-green-600 -mt-[1px]" />
          </Typo>
          <Typo className="mb-5">
            pantau harga pasar hari ini secara langsung
          </Typo>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {hargaList.slice(0, 3).map((item) => (
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
        ))}
        <Link
          to="/harga-tanaman"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-green-600 bg-green-50/50 p-4 transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-green-200 active:scale-95"
        >
          <Typo className="font-semibold text-green-600 transition-colors group-hover:text-white">
            Lihat Lainnya
          </Typo>

          <ArrowRight className="text-green-600 group-hover:text-white transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default SalesSection;
