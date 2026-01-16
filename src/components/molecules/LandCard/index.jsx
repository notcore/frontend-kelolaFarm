import React from "react";
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";
import {
  Plus,
  Leaf,
  Ruler,
  Layers,
  Calendar
} from "lucide-react";

const LandCard = ({ isNew, image, title, subtitle, meta, children }) => {
  
  if (isNew) {
    return (
      <div className="w-60 h-full md:w-72 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all duration-300 group flex-shrink-0">
        <div className="bg-gray-200 rounded-full p-2 mb-2 group-hover:bg-green-200 transition-colors">
          <Plus size={24} className="text-gray-500 group-hover:text-green-700" />
        </div>
        <Typo ClassName="text-xs font-medium text-gray-500 group-hover:text-green-700">
          Buat Baru
        </Typo>
      </div>
    );
  }

  return (
    <Card className="w-60 md:w-72 flex-shrink-0 border-2 cursor-pointer transition-all duration-300 group">
      <div className="h-24 md:h-32 w-full overflow-hidden bg-gray-200 relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
      </div>

      <div className="p-3 space-y-2">
        <Typo
          Variant="h2"
          ClassName="text-sm md:text-base font-bold text-gray-800 leading-tight group-hover:text-green-600 transition-all"
        >
          {title}
        </Typo>

        <Typo ClassName="text-[10px] text-gray-400 block">
          {subtitle}
        </Typo>
        {meta && (
          <div className="grid grid-cols-2 gap-2 mt-2 text-[10px] text-gray-600">
            <MetaItem icon={Leaf} label="Tanaman" value={meta.tanaman} />
            <MetaItem icon={Ruler} label="Luas" value={meta.hektar} />
            <MetaItem icon={Layers} label="Tanah" value={meta.tanah} />
            <MetaItem icon={Calendar} label="Dibuat" value={meta.createdAt} />
          </div>
        )}

        {children}
      </div>
    </Card>
  );
};

const MetaItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-1">
    <Icon size={12} className="text-green-600" />
    <span className="text-gray-500">{label}:</span>
    <span className="font-medium text-gray-700 truncate">{value}</span>
  </div>
);

export default LandCard;
