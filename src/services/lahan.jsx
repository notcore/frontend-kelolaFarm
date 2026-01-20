import { api } from "@/lib/api";

export const fetchLahan = () => {
  return api.get("/lahan");
};

export const storeLahan = (data) => {
  return api.post("/lahan", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const showLahan = (id) => {
  return api.get(`/lahan/${id}`);
};

export const updateLahan = (id, data) => {
  data.append("_method", "PUT");

  return api.post(`/lahan/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
