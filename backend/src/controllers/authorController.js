import authorService from "../services/authorService.js";
class AuthorController {
  async getAllAuthors(req, res) {
    try {
      const result = await authorService.getAllAuthors();
      if (!result || result.length === 0) {
        return res
          .status(404)
          .json({ message: "Không tìm thấy tác giả nào", result: false });
      }
      return res.status(200).json({
        result: result,
        message: "Lấy danh sách tác giả thành công!",
      });
    } catch (err) {
      console.error("Lỗi Controller:", err);
      return res
        .status(500)
        .json({ message: "Lỗi máy chủ nội bộ", error: err.message });
    }
  }
  async addAuthor(req, res) {
    try {
      const { authorName } = req.body;
      if (!authorName || authorName.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Tên tác giả không được để trống!",
        });
      }

      const result = await authorService.addAuthor(authorName);
      console.log(result);
      if (!result) {
        return res.status(400).json({
          success: false,
          message: "Thêm tác giả thất bại!",
        });
      }

      // Trả về 201 cho hành động tạo mới thành công
      return res.status(201).json({
        success: true,
        message: "Thêm tác giả thành công!",
        result: result,
      });
    } catch (err) {
      console.error("Lỗi Controller:", err);
      return res.status(500).json({
        success: false,
        message: "Lỗi hệ thống, không thể thêm tác giả!",
        error: err.message,
      });
    }
  }
}
export default new AuthorController();
