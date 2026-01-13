import api from "@/lib/api"

export const fetchLahan = () => api.get("/lahan");
export const storeLahan = (data) => api.post("/lahan", data);
export const updateLahan = (id, data) => api.put(`/lahan/${id}`, data);
export const deleteLahan = (id) => api.delete(`/lahan/${id}`);
