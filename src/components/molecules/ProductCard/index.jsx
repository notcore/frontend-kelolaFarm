import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";

const ProductCard = ({ image, name,children }) => {
  return (
    <Card className="flex flex-col h-full cursor-pointer transition-all hover:text-green-600 duration-300">
      <div className="h-28 bg-gray-200 w-full relative overflow-hidden">
         {image ? (
            <img src={`http://127.0.0.1:8000/storage/${image}`} alt={name} className="w-full h-full object-cover" />
         ) : (
            <div className="w-full h-full bg-gradient-to-t from-gray-200 to-gray-100">
              
            </div>
         )}
      </div>
      <div className="p-3 border-t border-gray-50">
        <Typo ClassName="text-xs md:text-sm font-semibold text-gray-800">
            {name}
        </Typo>
        {children}
      </div>
    </Card>
  );
};

export default ProductCard;