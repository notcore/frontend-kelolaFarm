import React, { useRef } from "react";
import { ImagePlus, X, UploadCloud } from "lucide-react";
import Typo from "@/components/atoms/TypoGrafis";

const ImageUpload = ({ label, selectedImage, onImageChange, error }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageChange(file);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <Typo ClassName="text-lg font-helvetica-bold ml-1">
          {label}
        </Typo>
      )}
      
      <div 
        className={`group relative w-full h-60 rounded-2xl overflow-hidden transition-all duration-300
        ${!selectedImage ? "cursor-pointer border-2 border-dashed border-slate-200 hover:border-green-400 hover:bg-green-50/30" : "border-2 border-slate-200 bg-white"}`}
        onClick={() => !selectedImage && fileInputRef.current.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
        />

        {selectedImage ? (
          <div className="relative w-full h-full">
            <img 
              src={URL.createObjectURL(selectedImage)} 
              alt="Preview Lahan" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <button
              onClick={handleRemove}
              type="button"
              className="absolute top-3 right-3 p-2 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-red-500 hover:border-red-200 transition-all z-10"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 group-hover:scale-110 group-hover:border-green-600 transition-transform duration-300">
              <ImagePlus size={24} className="text-slate-300 group-hover:text-green-500 transition-colors" />
            </div>
            <div className="text-center px-4">
              <Typo ClassName="text-sm font-bold text-slate-500 group-hover:text-green-600 transition-colors">
                Klik untuk upload foto lahan
              </Typo>
              <Typo ClassName="text-xs text-slate-400 mt-1 font-helvetica">
                Format: JPG, PNG (Max 5MB)
              </Typo>
            </div>
          </div>
        )}
      </div>
      {error && <Typo ClassName="text-xs text-red-500 ml-1">{error}</Typo>}
    </div>
  );
};

export default ImageUpload;