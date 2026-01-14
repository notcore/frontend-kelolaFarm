import {api} from "@/lib/api"

export const fetchHarga = async () => {
  try {
    const res = await api.get("/harga");
    return res.data;
  } catch (err) {
    console.error("Fetch Harga error:", err);
    throw err; 
  }
};

export const storeHarga = async (data) => {
  try {
    const res = await api.post("/harga", data);
    return res.data;
  } catch (err) {
    console.error("Store Harga error:", err);
    throw err;
  }
};

export const updateHarga = async (id, data) => {
  try {
    const res = await api.put(`/harga/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Update Harga error:", err);
    throw err;
  }
};

export const deleteHarga = async (id) => {
  try {
    const res = await api.delete(`/harga/${id}`);
    return res.data;
  } catch (err) {
    console.error("Delete Harga error:", err);
    throw err;
  }
};