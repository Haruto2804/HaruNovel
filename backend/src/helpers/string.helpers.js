export const convertToSlug = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD") // Tách dấu ra khỏi chữ gốc
    .replace(/[\u0300-\u036f]/g, "") // Xóa các ký tự dấu
    .replace(/[đĐ]/g, "d") // Xử lý riêng chữ đ, Đ
    .replace(/([^a-z0-9\s- ]+)/g, "") // Xóa ký tự đặc biệt
    .replace(/[\s-]+/g, "-") // Thay khoảng trắng/gạch ngang trùng lặp thành single-dash
    .trim(); // Xóa khoảng trắng thừa ở 2 đầu
};
