import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import { CloudRain, Sprout, ArrowUpRight } from "lucide-react";

const WelcomeContent = () => {
  return (
    // WelcomeContent
    <div className="grid grid-cols-1 my-10 lg:mx-10 mx-5">
      <Atoms.Typo className="mb-3">produktifitas website</Atoms.Typo>
      <Atoms.Typo Variant={"h1"}>
        Website untuk sedikit membantu
        <br className="hidden sm:block"></br>
        <div className="sm:flex grid">
          <Atoms.Typo Variant={"h1"}>petani lokal</Atoms.Typo>
          <div className=" ml-3 hidden sm:block">
            <div className="flex">
              <Atoms.Typo Variant={"h1"} ClassName="text-green-600">
                Yogyakarta
              </Atoms.Typo>
              <img
                className="w-15 h-15 -ml-2 -mt-2 rotate-320"
                src="/icon/daun.svg"
              ></img>
            </div>
          </div>
          <div className="flex sm:hidden -ml-1">
            <Atoms.Typo Variant={"h1"} ClassName="text-green-600">
              Yogyakarta
            </Atoms.Typo>
            <img
              className="w-15 select-none drag-none pointer-events-none h-15 -ml-2 -mt-2 rotate-320"
              src="/icon/daun.svg"
            ></img>
          </div>
        </div>
      </Atoms.Typo>
      {/* images */}
<div className="mt-15 w-full md:h-[270px] h-[200px] rounded-2xl relative">
  <div className="w-full md:h-[270px] h-[200px] rounded-2xl relative overflow-hidden">
    {/* Marquee wrapper */}
    <div className="absolute bottom-5 flex animate-marquee z-20">
      <img
        className="select-none drag-none pointer-events-none mr-4 w-[400px] md:w-[700px]"
        src="/images/achivment.png"
      />
      <img
        className="select-none drag-none pointer-events-none mr-4  w-[400px] md:w-[700px]"
        src="/images/achivment.png"
      />
      <img
        className="select-none drag-none pointer-events-none mr-4  w-[400px] md:w-[700px]"
        src="/images/achivment.png"
      />
      {/* Bisa tambah duplikasi lagi biar terus menerus */}
    </div>

    {/* Background tetap sama */}
    <img
      className="absolute select-none drag-none pointer-events-none w-full object-cover h-full z-10"
      src="/images/sawah.png"
    />
  </div>

  {/* Character tetap sama */}
  <img
    className="z-30 max-w-[320px] md:max-w-[490px] select-none drag-none pointer-events-none absolute bottom-0 right-4"
    src="/images/character.png"
  />
</div>

    </div>
  );
};

export default WelcomeContent;
