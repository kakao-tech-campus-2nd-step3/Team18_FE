import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  return instance;
};
export const BASE_URL = 'http://localhost:5173';
export const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': BASE_URL,
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const fetchInstanceWithAuth = (token: string) =>
  initInstance({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': BASE_URL,
      'Access-Control-Allow-Credentials': 'true',
    },
  });
