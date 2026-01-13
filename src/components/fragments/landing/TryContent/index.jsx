import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import { CloudRain, Sprout, ArrowUpRight } from "lucide-react";

const TryContent = () => {
  return (
    //   TryContent
    <div className="grid relative mx-10 my-20">
      <div className="flex gap-5 items-center h-[200px] w-full relative">
        <div className="flex gap-5 items-center h-[200px] w-full mr-10 md:mr-0 relative group">
          <img
            src="/images/sawah-1.jpg"
            className="bg-gray-600 object-cover h-full rounded-2xl 
                  transition-all duration-300 ease-in-out 
                  w-[60%] hover:w-[60%] group-hover:w-[20%]"
          ></img>
          <img
            src="/images/sawah-2.jpg"
            className="bg-gray-600 object-cover h-full rounded-2xl 
                  transition-all duration-300 ease-in-out 
                  w-[20%] hover:w-[60%]"
          ></img>
          <img
            src="/images/sawah-3.jpg"
            className="bg-gray-600 object-cover h-full rounded-2xl 
                  transition-all duration-300 ease-in-out 
                  w-[20%] hover:w-[60%]"
          ></img>
        </div>
      </div>
            <div className="md:ml-10 gap-10 mt-10 md:mt-10 grid md:flex order-1 md:order-2">
              <Atoms.Typo Variant={"h1"}>
                Coba sekarang
              </Atoms.Typo>
              <div>
                <Atoms.Typo className="">
                  project by HyumaDev
                </Atoms.Typo>
                <Link to="/login" className="text-green-600 mt-2 flex items-center">
                  login
                  <ArrowUpRight size={"20"} className="mt-1" />
                </Link>
                {/* TODO: PR */}
              </div>
            </div>
    </div>
  );
};

export default TryContent;
