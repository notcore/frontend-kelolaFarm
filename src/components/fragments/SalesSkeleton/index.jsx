import Typo from "@/components/atoms/TypoGrafis";
import SkeletonCard from "@/components/molecules/SkeletonCard";
import { TrendingUp } from "lucide-react";

const SalesSkeleton = () => {
  return (
    <div className="px-4 md:px-10 py-6">
      {" "}
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      ;
    </div>
  );
};


export default SalesSkeleton;