import { api } from "@/lib/api"

export const fetchLahan = async () => {
  try {
    const res = await api.get("/lahan");
    return res.data;
  } catch (err) {
    console.error("Fetch lahan error:", err);
    throw err; 
  }
};

export const storeLahan = async (data) => {
  try {
    const res = await api.post("/lahan", data);
    return res.data;
  } catch (err) {
    console.error("Store Lahan error:", err);
    throw err;
  }
};

export const deleteLahan = async (id) => {
  try {
    const res = await api.delete(`/lahan/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete Lahan error:", err);
    throw err;
  }
};

export const showLahan = async (id) => {
  const res = await api.get(`/lahan/${id}`);
  return res.data; 
}

export const updateLahan = async (data) => {
  const res = await api.post(`/lahan`, data);
  return res.data;
};