import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import {
  CloudRain,
  Sprout,
  ArrowUpRight,
  CircleDollarSign
} from "lucide-react";


const PriceContent = () => {
  return (
    //   PriceContent
    <div className="grid gap-10 relative mx-10 my-20 place-items-center md:grid-cols-2">
      <div className="md:ml-10 md:order-2 order-1">
        <Atoms.Typo Variant={"h1"}>
          Lihat <span className="text-yellow-600">harga</span> tanaman atau <span className="text-yellow-600">hasil tani</span>
        </Atoms.Typo>
        <Atoms.Typo className="mt-10">
          Pantau harga tanaman dan hasil panen secara praktis dalam satu platform. Dengan informasi yang mudah diakses, petani bisa menyesuaikan strategi jual beli secara lebih efisien.
          <div className="my-5" />
          Dari perkiraan harga hingga tren pasar, semua bisa dilihat dengan cepat. Solusi ini membantu petani merencanakan penjualan dan mengelola hasil tani dengan lebih percaya diri.
        </Atoms.Typo>
        {/* TODO: PR */}
        <Link to="/harga-tanaman" className="text-yellow-600 mt-2 flex items-center">
          coba sekarang
          <ArrowUpRight size={"20"} className="mt-1" />
        </Link>
      </div>
      <div className="mt-20 md:order-1 order-2 md:mt-10">
        <div className="absolute">
          <div className="h-20 relative w-[300px] p-3 -right-5 -mt-10 rounded-xl border bg-white">
            <div className="flex w-full items-center">
              <div>
                <Atoms.Typo Variant={"h2"}>harga tomat</Atoms.Typo>
                <Atoms.Typo ClassName="!text-gray-400">
                  Rp 26.000 <span className="">- kenaikan</span>
                </Atoms.Typo>
              </div>
              <CircleDollarSign size={50} className="text-yellow-600 ml-auto" />
            </div>
          </div>
        </div>
        <img
          className="w-[400px] h-auto select-none drag-none pointer-events-none max-h-[500px] rounded-2xl"
          src="/images/map-DIY.png"
        ></img>
      </div>
    </div>
  );
};

export default PriceContent;
