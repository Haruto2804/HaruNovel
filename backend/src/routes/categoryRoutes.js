import express from "express";
import categoryController from "../controllers/categoryController.js"; // Nhớ thêm đuôi .js

const router = express.Router();

// Lấy danh sách toàn bộ các thể loại truyện
router.get("/categories", categoryController.getAllCategories);

// Tạo một thể loại truyện mới
router.post("/categories", categoryController.createCategory);

// Thay đổi tên hoặc mô tả của thể loại dựa vào ID
router.put("/categories/:id", categoryController.updateCategory);

// Xóa một thể loại truyện dựa vào ID
router.delete("/categories/:id", categoryController.deleteCategory);

export default router; // Đổi từ module.exports sang export default
