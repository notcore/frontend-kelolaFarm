import {api} from "@/lib/api"

export const fetchDaerah = async () => {
  try {
    const res = await api.get("/daerah");
    return res.data;
  } catch (err) {
    console.error("Fetch daerah error:", err);
    throw err; 
  }
};


export const storeDaerah = (data) => api.post("/daerah", data);
export const updateDaerah = (id, data) => api.put(`/daerah/${id}`, data);
export const deleteDaerah = (id) => api.delete(`/harga/${id}`);