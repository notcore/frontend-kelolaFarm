import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import { CloudRain, Sprout, ArrowUpRight } from "lucide-react";

const WheaterContent = () => {
  return (
    // WheaterContent
    <div className="grid relative gap-10 mx-10 my-20 place-items-center md:grid-cols-2">
      <div className="md:ml-10">
        <Atoms.Typo Variant={"h1"}>
          Membantu Prediksi <span className="text-blue-600">cuaca</span>
        </Atoms.Typo>
        <Atoms.Typo className="mt-10">
          Prediksi Cuaca membantu pengguna mengetahui kondisi cuaca terkini dan
          perkiraan cuaca beberapa hari ke depan secara lebih akurat.
          <div className="my-5" />
          Informasi ini sangat berguna untuk perencanaan aktivitas, terutama
          bagi petani yang bergantung pada kondisi alam seperti hujan, suhu, dan
          tingkat kelembapan udara.
        </Atoms.Typo>
        {/* TODO: PR */}
        <Link to="/cuaca" className="text-blue-600 mt-2 flex items-center">
          coba sekarang
          <ArrowUpRight size={"20"} className="mt-1" />
        </Link>
      </div>
      <div className="mt-20 md:mt-10">
        <div className="absolute">
          <div className="h-23 relative w-[300px] p-4 -left-5 -mt-10 rounded-xl border bg-white">
            <div className="flex w-full items-center">
              <div>
                <Atoms.Typo Variant={"h2"}>cuaca hari ini hujan</Atoms.Typo>
                <Atoms.Typo ClassName="text-sm">2 januari 2025</Atoms.Typo>
              </div>
              <CloudRain size={50} className="text-blue-600 ml-auto" />
            </div>
          </div>
        </div>
        <img className="w-[400px] select-none drag-none pointer-events-none h-auto" src="/images/tanggal.png"></img>
      </div>
    </div>
  );
};

export default WheaterContent;
