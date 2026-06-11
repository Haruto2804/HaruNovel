import express from "express";
import novelController from "../controllers/novelController.js";
const router = express.Router();
router.get("/novels", novelController.fetchAllNovels);
router.post("/novels", novelController.addNovel);
export default router;
