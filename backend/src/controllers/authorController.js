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
}
export default new AuthorController();
