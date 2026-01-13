import api from "@/lib/api"

export const fetchHarga = async () => {
  try {
    const res = await api.get("/harga");
    return res.data;
  } catch (err) {
    console.error("Fetch harga error:", err);
    throw err; 
  }
};


export const storeHarga = (data) => api.post("/harga", data);
export const updateHarga = (id, data) => api.put(`/harga/${id}`, data);
export const deleteHarga = (id) => api.delete(`/harga/${id}`);