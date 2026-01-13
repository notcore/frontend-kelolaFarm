import api from "@/lib/api"

import api from "@/lib/api"

export const fetchTanah = async () => {
  try {
    const res = await api.get("/tanah");
    return res.data;
  } catch (err) {
    console.error("Fetch tanah error:", err);
    throw err; 
  }
};

export const storeTanah = (data) => api.post("/tanah", data);
export const updateTanah = (id, data) => api.put(`/tanah/${id}`, data);
export const deleteTanah = (id) => api.delete(`/harga/${id}`);