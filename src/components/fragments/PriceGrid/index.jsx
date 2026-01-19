import SkeletonCard from "@/components/molecules/SkeletonCard";
import PriceCard from "@/components/molecules/PriceCard";
import Lottie from "@/components/molecules/animate/lottie";
import Typo from "@/components/atoms/TypoGrafis";

const PriceGrid = ({ loading, data }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col  items-center justify-center py-20 text-gray-400">
        <Lottie url="/animate/rumah.json" className="w-48 h-48 md:w-64 md:h-64" />
        <Typo Variant="" ClassName="-mt-10 text-center">
          Data tanaman tidak ditemukan
        </Typo>
      </div>
    );
  }

  return (
    <div className="grid xl:grid-cols-5 grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {data.map((item, index) => (
        <PriceCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default PriceGrid;