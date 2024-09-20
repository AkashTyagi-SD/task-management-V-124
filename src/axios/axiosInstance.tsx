import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response data
    return response;
  },
  (error) => {
    // Handle errors like 401, 500, etc.
    if (error.response && error.response.status === 401) {
      // For example, redirect to login page on 401 status
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
