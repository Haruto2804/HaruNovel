import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Địa chỉ Backend
  timeout: 10000, // Timeout 10 giây nếu server chậm
});

// --- INTERCEPTORS (Cái này cực kỳ quan trọng) ---

// 1. Tự động thêm Token vào mỗi request (nếu người dùng đã đăng nhập)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Lấy token từ local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. Tự động xử lý lỗi tập trung
api.interceptors.response.use(
  (response) => response, // Trả về dữ liệu nếu thành công
  (error) => {
    if (error.response?.status === 401) {
      // Ví dụ: Lỗi 401 (hết hạn login) thì đá về trang đăng nhập
      console.log("Token hết hạn, logout thôi!");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
