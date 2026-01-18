import React from 'react';
import Typo from "@/components/atoms/TypoGrafis";

const FeatureItem = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer w-20 flex-shrink-0">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 transition-all duration-300 shadow-sm border border-gray-50 group-hover:border-green-600">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <Typo ClassName="text-center  group-hover:text-green-700 transition-colors">
        {label}
      </Typo>
    </div>
  );
};

export default FeatureItem;