import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";

const BottomSection = () => {
  return (
    <section className="px-4 md:px-10 py-4 space-y-8 pb-20">
      
      <div className="w-full h-32 md:h-48 bg-gray-200 rounded-3xl overflow-hidden shadow-sm relative animate-pulse">
         <div className="absolute bottom-4 left-6">
             <Typo Variant="h2" ClassName="text-gray-500 text-lg">Promo Bibit</Typo>
         </div>
      </div>

      <div>
        <Typo Variant="h2" ClassName="mb-4 text-base md:text-lg">Top Tier Hasil Tanam</Typo>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Card className="h-48 relative bg-gray-50">
               <div className="absolute top-4 right-4 w-28 h-20 rounded-lg overflow-hidden border-2 border-white shadow-sm z-10">
                 <img src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d9?auto=format&fit=crop&w=300" className="w-full h-full object-cover" alt="Tomat" />
               </div>
               <div className="absolute bottom-0 w-full p-4">
                   <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <Typo ClassName="font-bold text-gray-800">Tomat Cherry</Typo>
                   </div>
               </div>
            </Card>

            <Card className="h-48 relative bg-gray-200">
               <div className="absolute bottom-0 w-full p-4">
                   <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <Typo ClassName="font-bold text-gray-800">Jagung Manis</Typo>
                   </div>
               </div>
            </Card>

        </div>
      </div>
    </section>
  );
};

export default BottomSection;