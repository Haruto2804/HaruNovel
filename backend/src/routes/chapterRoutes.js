import express from "express";
import chapterController from "../controllers/chapterController.js";
const router = express.Router();
// 📌 NHÓM 1: Các hành động phụ thuộc vào Bộ truyện (Dùng novelId)
// Lấy danh sách toàn bộ các chương của một bộ truyện cụ thể
router.get("/novels/:novelId/chapters", chapterController.getChaptersByNovel);
// Đăng tải/Thêm một chương mới vào bộ truyện cụ thể
router.post("/novels/:novelId/chapters", chapterController.createChapter);

// 📌 NHÓM 2: Các hành động tác động đơn lẻ vào một Chương (Dùng chapterId)
// Đọc nội dung chi tiết của một chương (Hàm này tự tăng lượt xem)
router.get("/chapters/:chapterId", chapterController.getChapterDetail);
// Sửa đổi nội dung/tiêu đề của một chương truyện
router.put("/chapters/:chapterId", chapterController.updateChapter);
// Xóa hoàn toàn một chương truyện ra khỏi cơ sở dữ liệu
router.delete("/chapters/:chapterId", chapterController.deleteChapter);

export default router;
