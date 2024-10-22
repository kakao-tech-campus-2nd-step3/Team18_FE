import axios, { AxiosError, AxiosInstance } from 'axios';
import { QueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.BASE_URL;

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => {
      console.log('interceptor > error', error);
      Promise.reject(error);
    },
  );
};

const createInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  setInterceptors(instance);

  return instance;
};

export const queryClient = new QueryClient();

export const clientInstance = createInstance();
