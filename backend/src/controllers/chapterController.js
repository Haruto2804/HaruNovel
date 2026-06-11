import chapterService from "../services/chapterService.js";
class ChapterController {
  // 1. [POST] Thêm chương mới
  async createChapter(req, res) {
    const { novelId } = req.params; // Lấy novelId từ URL để biết chương này thuộc truyện nào
    const { chapter_number, content } = req.body;

    if (!chapter_number || !content) {
      return res.status(400).json({
        success: false,
        message: "Thiếu số chương hoặc nội dung chương!",
      });
    }

    try {
      const success = await chapterService.createChapter(novelId, req.body);
      if (success) {
        return res
          .status(201)
          .json({ success: true, message: "Thêm chương mới thành công!" });
      }
      return res
        .status(400)
        .json({ success: false, message: "Thêm chương thất bại." });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 2. [GET] Lấy danh sách chương của truyện
  async getChaptersByNovel(req, res) {
    const { novelId } = req.params;
    try {
      const chapters = await chapterService.getChaptersByNovel(novelId);
      return res.status(200).json({ success: true, data: chapters });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 3. [GET] Đọc chi tiết một chương
  async getChapterDetail(req, res) {
    const { chapterId } = req.params;
    try {
      const chapter = await chapterService.getChapterDetail(chapterId);
      if (!chapter) {
        return res
          .status(404)
          .json({ success: false, message: "Chương truyện không tồn tại!" });
      }
      return res.status(200).json({ success: true, data: chapter });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 4. [PUT] Cập nhật chương truyện
  async updateChapter(req, res) {
    const { chapterId } = req.params;
    try {
      const success = await chapterService.updateChapter(chapterId, req.body);
      if (success) {
        return res
          .status(200)
          .json({ success: true, message: "Cập nhật chương thành công!" });
      }
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy chương để cập nhật.",
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 5. [DELETE] Xóa một chương truyện
  async deleteChapter(req, res) {
    const { chapterId } = req.params;
    try {
      const success = await chapterService.deleteChapter(chapterId);
      if (success) {
        return res
          .status(200)
          .json({ success: true, message: "Đã xóa chương truyện thành công!" });
      }
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy chương để xóa." });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }
}

// Export một đối tượng (instance) đã được dựng sẵn từ Class
export default new ChapterController();
