import api from "@/lib/api"

export const fetchWeather = (lat, lon) => api.get(`/weather?lat=${lat}&lon=${lon}`);