// API endpoints configuration
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiEndpoints = {
  jobs: {
    getAll: () => `${BASE_URL}/api/jobs`,
    create: () => `${BASE_URL}/api/jobs`,
    update: (id: string) => `${BASE_URL}/api/jobs/${id}`,
    delete: (id: string) => `${BASE_URL}/api/jobs/${id}`,
    getById: (id: string) => `${BASE_URL}/api/jobs/${id}`,
    stats: () => `${BASE_URL}/api/jobs/stats`,
    chartStats: (range: string) => `${BASE_URL}/api/jobs/chart-stats/${range}`,
  },
  auth: {
    login: () => `${BASE_URL}/api/auth/login`,
    register: () => `${BASE_URL}/api/auth/register`,
    verifyOtp: () => `${BASE_URL}/api/auth/verify-otp`,
    logout: () => `${BASE_URL}/api/auth/logout`,
  },
  users: {
    getAll: () => `${BASE_URL}/api/users`,
    getById: (id: string) => `${BASE_URL}/api/users/${id}`,
    update: (id: string) => `${BASE_URL}/api/users/${id}`,
    delete: (id: string) => `${BASE_URL}/api/users/${id}`,
  },
  upload: {
    image: () => `${BASE_URL}/api/upload/image`,
  },
};
