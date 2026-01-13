import api from "@/lib/api"

export const fetchHarga = () => api.get("/harga");
export const storeHarga = (data) => api.post("/harga", data);
export const updateHarga = (id, data) => api.put(`/harga/${id}`, data);
export const deleteHarga = (id) => api.delete(`/harga/${id}`);