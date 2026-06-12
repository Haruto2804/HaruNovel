import bookmarkService from "../services/bookmarkService.js";
class BookmarkController {
  async addBookmark(req, res) {
    const { userId, novelId } = req.params;
    const chapterInfo = req.body;

    try {
      if (!userId || !novelId) {
        return res.status(400).json({
          result: false,
          message: "Novel id và User id không được để trống!",
        });
      }

      const result = await bookmarkService.addBookMark(
        Number(userId),
        Number(novelId),
      );

      if (!result) {
        return res.status(500).json({
          result: false,
          message: "Lỗi không thể thêm Bookmark vào hệ thống!",
        });
      }

      return res.status(200).json({
        result: true,
        message: "Thêm thành công bookmark!!!",
      });
    } catch (err) {
      console.error("Error in addBookmark:", err);
      return res.status(500).json({
        result: false,
        message: err.message || "Lỗi hệ thống, không thể thêm Bookmark!!!",
      });
    }
  }
  async updateBookmark(req, res) {
    const { userId, novelId, chapterId } = req.params;

    try {
      if (!userId || !novelId || !chapterId) {
        return res.status(400).json({
          result: false,
          message: "User id, Novel id và Chapter id không được để trống!",
        });
      }

      // 2. Gọi Service xử lý và ép kiểu sang Number để đảm bảo an toàn dữ liệu
      const result = await bookmarkService.updateBookMark(
        Number(userId),
        Number(novelId),
        Number(chapterId),
      );

      // 3. Nếu Service trả về false (không có hàng nào được update)
      if (!result) {
        return res.status(500).json({
          result: false,
          message: "Lỗi không thể cập nhật Bookmark!",
        });
      }

      // 4. Trả về thông báo thành công cho Client
      return res.status(200).json({
        result: true,
        message: "Cập nhật tiến trình đọc truyện thành công!",
      });
    } catch (err) {
      console.error("Error in updateBookmark Controller:", err);

      return res.status(500).json({
        result: false,
        message:
          err.message ||
          "[CONTROLLER] Lỗi hệ thống, không thể cập nhật Bookmark!!!",
      });
    }
  }
}
export default new BookmarkController();
