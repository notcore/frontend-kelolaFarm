import { Skeleton } from "@/components/molecules/skeleton";
import Card from "@/components/atoms/Card";

export const HeaderSkeleton = () => {
  return (
    <section className="relative mb-12">
      <div className="h-48 md:h-64 w-full bg-gray-300 md:rounded-b-[2rem] animate-pulse" />

      <div className="absolute -bottom-8 left-4 right-4 md:left-10 md:right-10 flex justify-center">
        <Card className="w-full max-w-4xl p-3 md:p-4 flex items-center justify-between shadow-lg bg-white">
          
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          <Skeleton className="w-9 h-9 rounded-xl" />
        </Card>
      </div>
    </section>
  );
};
