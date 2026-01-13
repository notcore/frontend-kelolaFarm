import api from "@/lib/api";

export const getHelloWorld = () => api.get('/helloWorld');