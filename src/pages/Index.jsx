
import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link } from "react-router-dom";
import * as Sections from "@/components/fragments/landing";
import {
  CloudRain,
  Sprout,
  ArrowUpRight,
  Headset
} from "lucide-react";

function App() {  

  return (
    <Layout>
    <div className="xl:mx-[10%]">
      <Sections.WelcomeContent />
      <Sections.WheaterContent />
      <Sections.EarthContent />
      <Sections.PlanContent />
      <Sections.PriceContent />
      <Sections.TryContent />
    </div>

      <div className="fixed rela bottom-10 group z-40 flex justify-center border items-center w-15 h-15 bg-white rounded-full right-5">
        <div className="relative">
          <Headset />
          <div className="absolute hidden transition-all group-hover:block -top-12 -right-1 w-[64px] px-2 py-2 bg-black text-white rounded-xl">
            <div className="relative">
              <div className="absolute -z-10 right-0 w-5 h-5 bg-black rotate-45 -bottom-3"></div>
              <Atoms.Typo className="z-20">chat ai</Atoms.Typo>
            </div>
          
          </div>
        </div>
        
        
      </div>
    </Layout>
  )
}

export default App;
