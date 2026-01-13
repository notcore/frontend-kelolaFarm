import api from "@/lib/api"

export const fetchDaerah = () => api.get("/daerah");
export const storeDaerah = (data) => api.post("/daerah", data);
export const updateDaerah = (id, data) => api.put(`/daerah/${id}`, data);
export const deleteDaerah = (id) => api.delete(`/harga/${id}`);