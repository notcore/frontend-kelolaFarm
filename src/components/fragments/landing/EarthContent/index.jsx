import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import {
  CloudRain,
  Sprout,
  ArrowUpRight
} from "lucide-react";


const EarthContent = () => {
  return (
    //   EarthContent
    <div className="grid relative mx-10 my-20 place-items-center md:grid-cols-2">
      <div className="md:ml-10 order-1 md:order-2">
        <Atoms.Typo Variant={"h1"}>
          Lihat jenis <span className="text-amber-600">tanah</span> daerahmu
        </Atoms.Typo>
        <Atoms.Typo className="mt-10">
          Kenali jenis tanah di daerahmu untuk memahami karakteristik lahan
          secara lebih mendalam. Informasi ini membantu menentukan jenis tanaman
          yang paling sesuai serta metode pengolahan tanah yang tepat.
          <div className="my-5" />
          Dengan data tanah yang akurat dan mudah diakses, kamu dapat mengambil
          keputusan pertanian yang lebih cerdas, efisien, dan berkelanjutan
          sesuai kondisi lingkungan setempat.
        </Atoms.Typo>
        {/* TODO: PR */}
        <Link to="/tanah" className="text-amber-600 mt-2 flex items-center">
          coba sekarang
          <ArrowUpRight size={"20"} className="mt-1" />
        </Link>
      </div>
      <div className="mt-20 md:mt-10 order-2 md:order-1">
        <div className="absolute">
          <div className="h-20 relative w-[300px] p-3 -left-5 -mt-10 rounded-xl border bg-white">
            <div className="flex w-full items-center">
              <div>
                <Atoms.Typo Variant={"h2"}>Tanah Aluvial</Atoms.Typo>
                <Atoms.Typo ClassName="text-sm">
                  Jagung, Padi, Kangung, Sawi
                </Atoms.Typo>
              </div>
              <Sprout size={50} className="text-amber-600 ml-auto" />
            </div>
          </div>
        </div>
        <img
          className="w-[400px] h-auto select-none drag-none pointer-events-none max-h-[500px] rounded-2xl"
          src="/images/tanah.png"
        ></img>
      </div>
    </div>
  );
};

export default EarthContent;
