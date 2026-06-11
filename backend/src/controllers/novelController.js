import novelService from "../services/novelService.js";
class NovelController {
  async fetchAllNovels(req, res) {
    try {
      const result = await novelService.fetchAllNovels();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi lấy danh sách truyện rồi anh Bảo ơi!",
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
}
export default new NovelController();
