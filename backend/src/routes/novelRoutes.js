import express from "express";
import novelController from "../controllers/novelController.js";
const router = express.Router();
router.get("/novels", novelController.fetchAllNovels);
router.post("/novels", novelController.addNovel);
router.delete("/novels/:id", novelController.deleteNovel);
router.patch("/novels/:id", novelController.updateNovel);
router.put("/novels/:id/categories", novelController.addCategories);
export default router;
