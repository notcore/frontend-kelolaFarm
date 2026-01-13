import api from "@/lib/api"

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

export const updateLahan = async (id, data) => {
  try {
    const res = await api.put(`/lahan/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update Lahan error:", err);
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