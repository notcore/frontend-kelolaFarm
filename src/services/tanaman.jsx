import api from "@/lib/api"

export const fetchTanaman = async () => {
  try {
    const res = await api.get("/tanaman");
    return res.data;
  } catch (err) {
    console.error("Fetch Tanaman error:", err);
    throw err; 
  }
};

export const storeTanaman = (data) => api.post("/tanaman", data);
export const updateTanaman = (id, data) => api.put(`/tanaman/${id}`, data);
export const deleteTanaman = (id) => api.delete(`/tanaman/${id}`);