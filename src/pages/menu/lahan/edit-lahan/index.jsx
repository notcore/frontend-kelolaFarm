import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, Save, X } from "lucide-react";
import toast from "react-hot-toast";

import Layout from "@/components/layouts";
import Typo from "@/components/atoms/TypoGrafis";
import Button from "@/components/atoms/Button";
import StyledInput from "@/components/atoms/StyledInput";
import MapPicker from "@/components/molecules/MapPicker";
import PlantGrid from "@/components/fragments/PlantGrid";
import ImageUpload from "@/components/molecules/ImageUpload/index.jsx";
import { showLahan, updateLahan } from "@/services/lahan";

const STORAGE_URL = import.meta.env.VITE_STORAGE_BASE_URL;

const EditLahanPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [mapPos, setMapPos] = useState({ lat: -7.891205, lng: 110.357666 });
  const [existingImage, setExistingImage] = useState(null);

  const [formData, setFormData] = useState({
    nama_lahan: "",
    luas_tanah: "",
    gambar_lahan: null,
    lokasi_lahan: "",
    tanaman_ids: [],
    tanah_id: "",
    daerah_id: "",
  });

  useEffect(() => {
    showLahan(id)
      .then((res) => {
        const data = res.data || res;
        setFormData({
          nama_lahan: data.nama_lahan || "",
          luas_tanah: data.luas || "",
          gambar_lahan: null,
          lokasi_lahan: `${data.lat}, ${data.lon}`,
          tanaman_ids: data.tanaman ? data.tanaman.map((t) => t.id) : [],
          tanah_id: data.tanah_id,
          daerah_id: data.daerah_id,
        });
        setMapPos({ lat: parseFloat(data.lat), lng: parseFloat(data.lon) });
        setExistingImage(data.gambar_lahan);
        setFetching(false);
      })
      .catch(() => {
        toast.error("Data tidak ditemukan");
        setFetching(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    const [lat, lon] = formData.lokasi_lahan.split(", ");

    data.append("_method", "PUT");
    data.append("nama_lahan", formData.nama_lahan);
    data.append("luas", formData.luas_tanah);
    data.append("lat", lat);
    data.append("lon", lon);
    data.append("tanah_id", formData.tanah_id);
    data.append("daerah_id", formData.daerah_id);

    if (formData.gambar_lahan) data.append("gambar_lahan", formData.gambar_lahan);
    formData.tanaman_ids.forEach((id) => data.append("tanaman_ids[]", id));

    try {
      await updateLahan(id, data);
      toast.success("Lahan berhasil diupdate");
      navigate("/menu/lahan");
    } catch (err) {
      toast.error("Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="animate-spin text-green-500" size={40} />
        <p>Memuat Data Lahan...</p>
      </div>
    );
  }

  return (
    <Layout>
      <main className="max-w-7xl mx-auto p-6 mt-20">
        <header className="mb-10">
          <Typo Variant="h1">Edit Lahan</Typo>
          <p className="text-slate-500">Ubah informasi lahan dan titik lokasi tanaman Anda.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* BARIS 1: NAMA & UPLOAD GAMBAR */}
          <div className="grid lg:grid-cols-2 gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="space-y-6">
              <Typo Variant="h2">Detail Informasi</Typo>
              <StyledInput
                label="Nama Lahan"
                value={formData.nama_lahan}
                onChange={(e) => setFormData({ ...formData, nama_lahan: e.target.value })}
              />
              <StyledInput
                label="Luas Tanah"
                type="number"
                suffix="meter"
                value={formData.luas_tanah}
                onChange={(e) => setFormData({ ...formData, luas_tanah: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <Typo Variant="h2">Foto Lahan</Typo>
              {existingImage && !formData.gambar_lahan && (
                <div className="relative w-full h-50 mb-2 overflow-hidden rounded-2xl border">
                  <img
                    src={`${STORAGE_URL}${existingImage}`}
                    className="w-full h-full object-cover"
                    alt="Current"
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded">Foto Saat Ini</div>
                </div>
              )}
              <ImageUpload
                selectedImage={formData.gambar_lahan}
                onImageChange={(file) => setFormData({ ...formData, gambar_lahan: file })}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm h-full">
              <Typo Variant="h2" ClassName="mb-4">Lokasi Lahan</Typo>
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <MapPicker 
                  position={mapPos} 
                  setPosition={(latlng) => {
                    setMapPos(latlng);
                    setFormData({...formData, lokasi_lahan: `${latlng.lat.toFixed(6)}, ${latlng.lng.toFixed(6)}`});
                  }} 
                />
              </div>
              <p className="mt-3 text-sm font-mono text-slate-500 bg-slate-50 p-2 rounded">
                Koordinat: {formData.lokasi_lahan}
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm h-full">
              <Typo Variant="h2" ClassName="mb-4">Daftar Tanaman/Sayuran</Typo>
              <div className="max-h-[450px] overflow-y-auto pr-2">
                <PlantGrid
                  selectedIds={formData.tanaman_ids}
                  onSelect={(ids) => setFormData({ ...formData, tanaman_ids: ids })}
                />
              </div>
            </div>
          </div>

          {/* TOMBOL AKSI */}
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
              {loading ? <Loader2 className="animate-spin" /> : <Save size={18} className="mr-2" />}
              simpan
            </Button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default EditLahanPage;