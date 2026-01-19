import React, { useState } from "react";
import { MapPin, TreeDeciduous } from "lucide-react";
import Layout from "@/components/layouts";
import Typo from "@/components/atoms/TypoGrafis";
import Button from "@/components/atoms/Button";

import StyledInput from "@/components/atoms/StyledInput";
import MapPicker from "@/components/molecules/MapPicker";
import PlantGrid from "@/components/fragments/PlantGrid";

const CreateLahanPage = () => {
  const [formData, setFormData] = useState({
    nama_lahan: "",
    luas_tanah: "",
    tanaman_ids: [],
  });
  const [mapPos, setMapPos] = useState({ lat: -6.2, lng: 106.8166 });

  return (
    <Layout paddingCondition={false}>
      <main className="min-h-screen bg-[#FDFDFD] pb-24">
        {/* Header menggunakan h1 (Font Komerik) */}
        <header className="bg-white border-b border-slate-100 py-16 px-6 md:px-20">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-green-600 text-white rounded-lg shadow-lg shadow-green-200">
                <TreeDeciduous size={18} />
              </div>
              <Typo ClassName="text-green-700 font-bold text-xs uppercase tracking-[0.2em]">
                Manajemen Agrikultur
              </Typo>
            </div>
            <Typo Variant="h1">Buat Lahan Baru</Typo>
            <Typo ClassName="max-w-2xl mt-2 text-slate-500 text-lg">
              Daftarkan lahan Anda untuk mendapatkan analisis cuaca dan
              rekomendasi harga jual secara presisi.
            </Typo>
          </div>
        </header>

        <section className="px-6 md:px-20 mt-12 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
                <Typo Variant="h2" ClassName="mb-4">
                  Informasi Lahan
                </Typo>

                <StyledInput
                  label="Nama Lahan"
                  placeholder="e.g. Kebun Sayur Sejahtera"
                  value={formData.nama_lahan}
                  onChange={(e) =>
                    setFormData({ ...formData, nama_lahan: e.target.value })
                  }
                />

                <StyledInput
                  label="Estimasi Luas"
                  type="number"
                  suffix="Hektar"
                  value={formData.luas_tanah}
                  onChange={(e) =>
                    setFormData({ ...formData, luas_tanah: e.target.value })
                  }
                />

                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/50 transition-all hover:bg-slate-100">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-red-500 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <Typo ClassName="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Titik Geografis
                    </Typo>
                    <Typo ClassName="font-mono font-bold text-slate-700">
                      {mapPos.lat.toFixed(6)}, {mapPos.lng.toFixed(6)}
                    </Typo>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-7">
              <MapPicker position={mapPos} setPosition={setMapPos} />
            </div>

            <div className="lg:col-span-12">
              <div className="lg:col-span-12">
                <PlantGrid
                  selectedIds={formData.tanaman_ids}
                  onSelect={(ids) =>
                    setFormData({ ...formData, tanaman_ids: ids })
                  }
                />
              </div>
            </div>

            <div className="lg:col-span-12 flex flex-col md:flex-row items-center justify-between gap-6 mt-12 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/40">
              <Typo ClassName="text-slate-400 text-sm italic">
                Pastikan seluruh data lokasi dan tanaman sudah benar sebelum
                menyimpan.
              </Typo>
              <Button className="w-full md:w-auto px-16 py-5 bg-green-600 hover:bg-green-700 text-white font-black text-xl rounded-2xl shadow-lg shadow-green-600/20 transition-all active:scale-95">
                Simpan Lahan
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CreateLahanPage;
