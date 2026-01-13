import api from "@/lib/api"

import api from "@/lib/api"

export const fetchTanah = () => api.get("/tanah");
export const storeTanah = (data) => api.post("/tanah", data);
export const updateTanah = (id, data) => api.put(`/tanah/${id}`, data);
export const deleteTanah = (id) => api.delete(`/harga/${id}`);