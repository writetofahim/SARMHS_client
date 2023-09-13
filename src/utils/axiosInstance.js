import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8800/api/",
  // baseURL: "https://aksesdpbackend.onrender.com/api",
  // baseURL: "https://aksesdpmhs.itstorm.xyz/api",
});
export default axiosInstance;
