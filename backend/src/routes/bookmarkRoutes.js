import express from "express";
import bookmarkController from "../controllers/bookmarkController.js";

const router = express.Router();

// Lấy danh sách toàn bộ các thể loại truyện
router.post("/bookmark/:userId/:novelId", bookmarkController.addBookmark);
router.patch(
  "/bookmark/:userId/:novelId/:chapterId",
  bookmarkController.updateBookmark,
);
export default router;
