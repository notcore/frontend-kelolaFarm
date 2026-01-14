import {api} from "@/lib/api"

export const fetchWeather = async (lat, lon) => {
  try {
    const res = await api.get(`/weather?lat=${lat}&lon=${lon}`);
    return res.data;
  } catch (err) {
    console.error("Fetch weather error:", err);
    throw err; 
  }
};
