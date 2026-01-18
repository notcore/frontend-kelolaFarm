import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";

const ProductCard = ({ image, name,children }) => {
  const storage = import.meta.env.VITE_STORAGE_BASE_URL;

  return (
    <Card className="flex hover:border-green-600 flex-col group h-full cursor-pointer transition-all hover:text-green-600 duration-300 border border-slate-300">
      <div className="h-28 bg-gray-200 w-full relative overflow-hidden">
         {image ? (
            <img src={ storage + image } alt={name} className="w-full group-hover:brightness-110 transition-all duration-500 h-full object-cover" />
         ) : (
            <div className="w-full h-full bg-gradient-to-t from-gray-200 to-gray-100">
              
            </div>
         )}
      </div>
      <div className="p-3 border-t border-slate-200">
        <Typo Variant={"h2"} ClassName=" group-hover:text-green-600">
            {name}
        </Typo>
        {children}
      </div>
    </Card>
  );
};

export default ProductCard;