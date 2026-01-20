import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Save, X } from "lucide-react";
import toast from "react-hot-toast";

import Layout from "@/components/layouts";
import Typo from "@/components/atoms/TypoGrafis";
import Button from "@/components/atoms/Button";
import StyledInput from "@/components/atoms/StyledInput";
import MapPicker from "@/components/molecules/MapPicker";
import PlantGrid from "@/components/fragments/PlantGrid";
import ImageUpload from "@/components/molecules/ImageUpload";
import { storeLahan } from "@/services/lahan";

const UploadLahanPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [mapPos, setMapPos] = useState({
    lat: -7.891205,
    lng: 110.357666,
  });

  const [formData, setFormData] = useState({
    nama_lahan: "",
    luas_tanah: "",
    gambar_lahan: null,
    lokasi_lahan: "-7.891205, 110.357666",
    tanaman_ids: [],
    tanah_id: 1,
    daerah_id: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      const [lat, lon] = formData.lokasi_lahan
        .split(",")
        .map(v => v.trim());

      data.append("nama_lahan", formData.nama_lahan);
      data.append("luas", Number(formData.luas_tanah));
      data.append("lat", lat);
      data.append("lon", lon);
      data.append("tanah_id", Number(formData.tanah_id));
      data.append("daerah_id", Number(formData.daerah_id));

      if (formData.gambar_lahan) {
        data.append("gambar_lahan", formData.gambar_lahan);
      }

      formData.tanaman_ids.forEach(id => {
        data.append("tanaman_ids[]", id);
      });

      await storeLahan(data);

      toast.success("Lahan berhasil dibuat");
      navigate("/lahan");
    } catch (err) {
      console.error(err.response?.data);
      toast.error(
        Object.values(err.response?.data?.errors || {})[0] ||
        "Gagal menyimpan lahan"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="max-w-7xl mx-auto p-6 mb-10">
        <header className="mb-10">
          <Typo Variant="h1">Buat Lahan Baru</Typo>
          <p className="text-slate-500">Isi informasi lahan dengan benar.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* INFORMASI + FOTO */}
          <div className="grid lg:grid-cols-2 gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-6">
              <Typo Variant="h2">Detail Informasi</Typo>

              <StyledInput
                label="Nama Lahan"
                value={formData.nama_lahan}
                onChange={(e) =>
                  setFormData({ ...formData, nama_lahan: e.target.value })
                }
              />

              <StyledInput
                label="Luas Tanah"
                type="number"
                suffix="meter"
                value={formData.luas_tanah}
                onChange={(e) =>
                  setFormData({ ...formData, luas_tanah: e.target.value })
                }
              />
            </div>

            <div className="space-y-4">
              <Typo Variant="h2">Foto Lahan</Typo>
              <ImageUpload
                selectedImage={formData.gambar_lahan}
                onImageChange={(file) =>
                  setFormData({ ...formData, gambar_lahan: file })
                }
              />
            </div>
          </div>

          {/* MAP + TANAMAN */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <Typo Variant="h2" ClassName="mb-4">
                Lokasi Lahan
              </Typo>

              <div className="h-[400px] rounded-2xl overflow-hidden">
                <MapPicker
                  position={mapPos}
                  setPosition={(latlng) => {
                    setMapPos(latlng);
                    setFormData({
                      ...formData,
                      lokasi_lahan: `${latlng.lat.toFixed(
                        6
                      )}, ${latlng.lng.toFixed(6)}`,
                    });
                  }}
                />
              </div>

              <p className="mt-3 text-sm font-mono text-slate-500 bg-slate-50 p-2 rounded">
                Koordinat: {formData.lokasi_lahan}
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <Typo Variant="h2" ClassName="mb-4">
                Daftar Tanaman / Sayuran
              </Typo>

              <div className="max-h-[450px] overflow-y-auto pr-2">
                <PlantGrid
                  selectedIds={formData.tanaman_ids}
                  onSelect={(ids) =>
                    setFormData({ ...formData, tanaman_ids: ids })
                  }
                />
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-4 pb-20">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              className="px-10 py-4 rounded-2xl border-slate-200"
            >
              <X size={18} className="mr-2" /> Batal
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="px-12 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Save size={18} className="mr-2" />
              )}
              Simpan
            </Button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default UploadLahanPage;
