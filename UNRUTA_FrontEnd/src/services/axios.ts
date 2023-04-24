import axios, { AxiosInstance } from "axios";

const axiosinstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosinstance;
