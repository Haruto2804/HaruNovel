import express from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router();

// Lấy danh sách toàn bộ các thể loại truyện
router.get("/authors", AuthorController.getAllAuthors);
export default router;
