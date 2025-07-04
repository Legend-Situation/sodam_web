import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || '';


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers = {
      ...config.headers,
      accessToken,
    } as any;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const { config, response } = error;
    const status = response?.status;
    if (status === 401 && config && !(config as any)._retry) {
      (config as any)._retry = true;
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axiosInstance.post('/jwt', {
          accessToken,
          refreshToken,
        });
        const newAccessToken = data?.data?.accessToken || data?.accessToken;
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
          (config.headers as any).accessToken = newAccessToken;
        }
        return axiosInstance(config);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
