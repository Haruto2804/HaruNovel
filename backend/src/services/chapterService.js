import sql from "mssql";
class ChapterService {
  // 1. Tạo chương mới (CREATE)
  async createChapter(novelId, chapterData) {
    const { chapter_number, title, content } = chapterData;
    try {
      const request = new sql.Request(this.dbPool);
      request.input("novel_id", sql.Int, novelId);
      request.input("chapter_number", sql.Float, chapter_number); // Khớp kiểu float
      request.input("title", sql.NVarChar(255), title || null); // Cho phép null như DB định nghĩa
      request.input("content", sql.NVarChar(sql.MAX), content); // Khớp nvarchar(max)

      const result = await request.query(`
        INSERT INTO chapters (novel_id, chapter_number, title, content, chapter_views, created_at, updated_at)
        VALUES (@novel_id, @chapter_number, @title, @content, 0, GETDATE(), GETDATE())
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      throw new Error(`[Service] Lỗi tạo chương: ${err.message}`);
    }
  }

  // 2. Lấy danh sách chương của một bộ truyện (READ LIST)
  async getChaptersByNovel(novelId) {
    try {
      const request = new sql.Request(this.dbPool);
      request.input("novel_id", sql.Int, novelId);

      // Sắp xếp theo thứ tự số chương từ nhỏ đến lớn (Chương 1 -> Chương 2 -> Chương 10.5)
      const result = await request.query(`
        SELECT chapter_id, novel_id, chapter_number, title, chapter_views, created_at, updated_at
        FROM chapters 
        WHERE novel_id = @novel_id
        ORDER BY chapter_number ASC
      `);
      return result.recordset;
    } catch (err) {
      throw new Error(`[Service] Lỗi lấy danh sách chương: ${err.message}`);
    }
  }

  // 3. Lấy chi tiết nội dung 1 chương để đọc + Tăng lượt xem (READ DETAIL)
  async getChapterDetail(chapterId) {
    try {
      const request = new sql.Request(this.dbPool);
      request.input("chapter_id", sql.Int, chapterId);

      // Tự động tăng lượt xem (chapter_views) thêm 1 đơn vị mỗi khi có người đọc
      await request.query(`
        UPDATE chapters 
        SET chapter_views = ISNULL(chapter_views, 0) + 1 
        WHERE chapter_id = @chapter_id
      `);

      // Lấy toàn bộ thông tin bao gồm cả nội dung truyện (content)
      const result = await request.query(`
        SELECT * FROM chapters WHERE chapter_id = @chapter_id
      `);

      return result.recordset[0] || null;
    } catch (err) {
      throw new Error(`[Service] Lỗi lấy chi tiết chương: ${err.message}`);
    }
  }

  // 4. Sửa thông tin chương truyện (UPDATE)
  async updateChapter(chapterId, chapterData) {
    const { chapter_number, title, content } = chapterData;
    try {
      const request = new sql.Request(this.dbPool);
      request.input("chapter_id", sql.Int, chapterId);
      request.input("chapter_number", sql.Float, chapter_number);
      request.input("title", sql.NVarChar(255), title || null);
      request.input("content", sql.NVarChar(sql.MAX), content);

      const result = await request.query(`
        UPDATE chapters
        SET chapter_number = @chapter_number,
            title = @title,
            content = @content,
            updated_at = GETDATE()
        WHERE chapter_id = @chapter_id
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      throw new Error(`[Service] Lỗi cập nhật chương: ${err.message}`);
    }
  }

  // 5. Xóa chương truyện (DELETE)
  async deleteChapter(chapterId) {
    try {
      const request = new sql.Request(this.dbPool);
      request.input("chapter_id", sql.Int, chapterId);

      const result = await request.query(`
        DELETE FROM chapters WHERE chapter_id = @chapter_id
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      throw new Error(`[Service] Lỗi xóa chương: ${err.message}`);
    }
  }
}

export default new ChapterService();
