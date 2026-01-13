import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import { CloudRain, Sprout, ArrowUpRight } from "lucide-react";

const PlanContent = () => {
  return (
    // PlanContent
    <div className="grid relative mx-10 my-20 place-items-center md:grid-cols-1">
      <div className="md:ml-10 gap-10 md:mt-10 grid md:grid-cols-2 order-1 md:order-2">
        <Atoms.Typo Variant={"h1"}>
          Bantu menentukan jumlah
          <span className="text-green-600 ml-2">tanaman</span>.
        </Atoms.Typo>
        <div>
          <Atoms.Typo className="">
            Dapatkan perkiraan jumlah tanaman yang optimal sesuai kondisi tanah
            Anda dengan mudah. Sistem ini membantu petani menyesuaikan jumlah
            tanaman agar hasil panen lebih maksimal dan efisien.
          </Atoms.Typo>
          {/* TODO: PR */}
          <Link to="/tanaman" className="text-green-600 mt-2 flex items-center">
            coba sekarang
            <ArrowUpRight size={"20"} className="mt-1" />
          </Link>
        </div>
      </div>
      <div className="mt-20 md:mt-10 order-2 md:order-1">
        <div className="absolute">
          <div className="h-20 relative w-[300px] p-3 -left-5 bottom-3 rounded-xl border bg-white">
            <div className="flex w-full items-center">
              <div>
                <Atoms.Typo Variant={"h2"}>Tentukan tanaman</Atoms.Typo>
                <Atoms.Typo ClassName="">
                  Jagung, Padi, Kangung, Sawi
                </Atoms.Typo>
              </div>
              <Sprout size={50} className="text-green-600 ml-auto" />
            </div>
          </div>
        </div>
        <img
          className="w-full h-auto md:hidden select-none drag-none pointer-events-none rounded-2xl"
          src="/images/hektar-sm.png"
        ></img>
        <img
          className="w-full hidden select-none drag-none pointer-events-none md:block h-auto rounded-2xl"
          src="/images/hektar-md.png"
        ></img>
      </div>
    </div>
  );
};

export default PlanContent;
