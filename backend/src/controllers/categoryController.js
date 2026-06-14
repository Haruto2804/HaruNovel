import CategoryService from "../services/categoryService.js";

const categoryService = new CategoryService(global.dbPool);

class CategoryController {
  // 1. [GET] Lấy tất cả thể loại
  async getAllCategories(req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      return res.status(200).json({ success: true, result: categories });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 2. [POST] Tạo thể loại mới
  async createCategory(req, res) {
    const { category_name } = req.body;
    if (!category_name) {
      return res
        .status(400)
        .json({ success: false, message: "Tên thể loại không được để trống!" });
    }

    try {
      const success = await categoryService.createCategory(req.body);
      if (success) {
        return res
          .status(201)
          .json({ success: true, message: "Tạo thể loại mới thành công!" });
      }
      return res
        .status(400)
        .json({ success: false, message: "Tạo thể loại thất bại." });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 3. [PUT] Cập nhật thể loại
  async updateCategory(req, res) {
    const { id } = req.params;
    const { category_name } = req.body;

    if (!category_name) {
      return res
        .status(400)
        .json({ success: false, message: "Tên thể loại không được để trống!" });
    }

    try {
      const success = await categoryService.updateCategory(
        parseInt(id, 10),
        req.body,
      );
      if (success) {
        return res
          .status(200)
          .json({ success: true, message: "Cập nhật thể loại thành công!" });
      }
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy thể loại để cập nhật.",
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 4. [DELETE] Xóa thể loại
  async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      const success = await categoryService.deleteCategory(parseInt(id, 10));
      if (success) {
        return res
          .status(200)
          .json({ success: true, message: "Xóa thể loại thành công!" });
      }
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy thể loại để xóa." });
    } catch (err) {
      if (err.message.includes("đang có các bộ truyện")) {
        return res.status(400).json({ success: false, message: err.message });
      }
      return res.status(500).json({ success: false, error: err.message });
    }
  }
}

export default new CategoryController();
