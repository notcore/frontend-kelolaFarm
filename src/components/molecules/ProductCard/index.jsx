import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";

const ProductCard = ({ image, name }) => {
  return (
    <Card className="flex flex-col h-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="h-28 md:h-36 bg-gray-200 w-full relative overflow-hidden">
         {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
         ) : (
            <div className="w-full h-full bg-gradient-to-t from-gray-200 to-gray-100" />
         )}
      </div>
      <div className="p-3 border-t border-gray-50">
        <Typo ClassName="text-xs md:text-sm font-semibold text-gray-800">
            {name}
        </Typo>
      </div>
    </Card>
  );
};

export default ProductCard;