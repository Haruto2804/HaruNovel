import { sql } from "../config/db.js";
class BookmarkService {
  async addBookMark(userId, novelId) {
    try {
      const request = new sql.Request();
      request.input("userId", sql.Int, userId);
      request.input("novelId", sql.Int, novelId);

      // kiểm tra truyện đã có trong bookmark chưa
      const checkResult = await request.query(`
        SELECT bookmark_id FROM dbo.bookmarks WHERE user_id = @userId AND novel_id = @novelId
      `);
      if (checkResult.recordset.length > 0) {
        throw new Error("Bộ truyện này đã có trong tủ sách rồi!");
      }
      const insertQuery = `
      INSERT INTO dbo.bookmarks (user_id, novel_id, last_chapter_id, saved_at)
      VALUES (@userId, @novelId, NULL, GETDATE())
    `;
      await request.query(insertQuery);
      return true;
    } catch (err) {
      throw new Error("[SERVICE] Lỗi không thể thêm bookmark!!!");
    }
  }
  async updateBookMark(userId, novelId, chapterId) {
    try {
      const request = new sql.Request();
      request.input("userId", sql.Int, userId);
      request.input("novelId", sql.Int, novelId);
      request.input("chapterId", sql.Int, chapterId);
      const updatedQuery = `
        UPDATE bookmarks
        SET last_chapter_id = @chapterId
        WHERE user_id = @userId AND novel_id = @novelId
      `;
      const result = await request.query(updatedQuery);
      if (result.rowsAffected && result.rowsAffected[0] > 0) {
        return true;
      }
      return false;
    } catch (err) {
      throw new Error("[SERVICE]: Lỗi không thể cập nhật bookmark!!!");
    }
  }
}
export default new BookmarkService();
