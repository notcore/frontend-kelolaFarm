import api from "@/lib/api"

import api from "@/lib/api"

export const fetchTanaman = () => api.get("/tanaman");
export const storeTanaman = (data) => api.post("/tanaman", data);
export const updateTanaman = (id, data) => api.put(`/tanaman/${id}`, data);
export const deleteTanaman = (id) => api.delete(`/harga/${id}`);