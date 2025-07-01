import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ||
    "https://back-sodam.jamkris.kro.kr",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["accessToken"] = token;
  }
  return config;
});

export default api;
