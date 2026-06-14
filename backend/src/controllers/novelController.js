import novelService from "../services/novelService.js";
class NovelController {
  async fetchAllNovels(req, res) {
    try {
      const result = await novelService.fetchAllNovels();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi lấy danh sách truyện!",
        error: err.message,
      });
    }
  }
  async addNovel(req, res) {
    try {
      const result = await novelService.addNovel(req.body);
      return res.status(201).json({
        message: "Thêm bộ truyện mới thành công!",
        data: result,
      });
    } catch (err) {
      return res.status(400).json({
        message: "Lỗi thêm truyện mới!",
        error: err.message,
      });
    }
  }
  async deleteNovel(req, res) {
    try {
      const { id } = req.params;
      const result = await novelService.deleteNovel(id);
      if (!result) {
        return res.status(404).json({
          success: false,
          result: result,
          message: `Xóa thất bại thất bại! Không tìm thấy novel có mã id là ${id}`,
        });
      }
      return res.status(200).json({
        result: result,
        message: `Xóa thành công novel có mã id là ${id}`,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Xóa thất bại novel!! ",
        error: err.message,
      });
    }
  }
  async updateNovel(req, res) {
    try {
      const { id } = req.params;
      const result = await novelService.updateNovel(id, req.body);
      if (!result) {
        return res.status(404).json({
          result: result,
          message: `Cập nhật thất bại! Không tìm thấy novel có mã id là ${id}`,
        });
      }
      return res.status(200).json({
        result: result,
        message: `Cập nhật thành công novel có mã id là ${id}`,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Cập nhật novel thất bại!!! ",
        error: err.message,
      });
    }
  }
  async addCategories(req, res) {
    // 1. Lấy novelId từ URL Params (Ví dụ: /novels/1/categories -> id = 1)
    const { id } = req.params;

    // 2. Lấy mảng ID danh mục từ Request Body
    const { categoryIds } = req.body;

    // 3. KIỂM TRA DỮ LIỆU ĐẦU VÀO (Validation) - Rất quan trọng để bảo vệ Server
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Mã ID của novel không hợp lệ hoặc không phải là số!",
      });
    }

    if (!categoryIds || !Array.isArray(categoryIds)) {
      return res.status(400).json({
        success: false,
        message: "Dữ liệu 'categoryIds' gửi lên bắt buộc phải là một mảng []!",
      });
    }

    try {
      const result = await novelService.addCategories(
        parseInt(id, 10),
        categoryIds,
      );

      // 5. Nếu Service xử lý thành công và trả về true
      if (result) {
        return res.status(200).json({
          success: true,
          message: `Đồng bộ danh mục thành công cho novel có mã ID là ${id}.`,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Xử lý đồng bộ danh mục thất bại ở tầng cơ sở dữ liệu!",
      });
    } catch (err) {
      // 6. Xử lý lỗi hệ thống hoặc lỗi ném lên từ khối catch/rollback của Service
      return res.status(500).json({
        success: false,
        message: "Đã xảy ra lỗi hệ thống trong quá trình cập nhật danh mục!",
        error: err.message,
      });
    }
  }
  async getNovelDashboardStats(req, res) {
    try {
      // 1. Gọi service để lấy dữ liệu thống kê từ database
      const stats = await novelService.getNovelDashboardStats();

      // 2. Trả về response thành công kèm dữ liệu cho Frontend
      return res.status(200).json({
        success: true,
        message: "Lấy thống kê dashboard thành công",
        data: stats,
      });
    } catch (err) {
      // 3. Xử lý khi có lỗi xảy ra ở tầng Database hoặc Service
      console.error("Error in getNovelDashboardStats controller:", err);

      return res.status(500).json({
        success: false,
        message: "Đã có lỗi xảy ra khi lấy thống kê dashboard",
        error: err.message,
      });
    }
  }
}
export default new NovelController();
