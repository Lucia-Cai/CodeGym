import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Base URL for FastAPI backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
