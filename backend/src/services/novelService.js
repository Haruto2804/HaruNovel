import { sql } from "../config/db.js";
class NovelService {
  async fetchAllNovels() {
    const query = `
    SELECT *
    FROM novels n JOIN novel_categories nc ON n.novel_id = nc.novel_id
    JOIN categories c ON c.category_id = nc.category_id
`;
    const result = await sql.query(query);
    return result.recordset;
  }
  async addNovel(novelData) {
    console.log(novelData);
    const { title, author, description, cover_image } = novelData;
    const request = new sql.Request();
    request.input("tieuDeTruyen", sql.NVarChar, title);
    request.input("tacGia", sql.NVarChar, author);
    request.input("moTa", sql.NVarChar, description);
    request.input("anhBia", sql.VarChar, cover_image);
    const checkDuplicateTitle = await request.query(
      "SELECT * FROM novels WHERE title = @tieuDeTruyen",
    );
    if (checkDuplicateTitle.recordset.length > 0) {
      throw new Error("Tên bộ truyện này đã tồn tại trên hệ thống!");
    }
    // Thêm vào SQL Server chống SQL Injection

    await request.query(
      " INSERT INTO novels (title,author,description,cover_image) VALUES (@tieuDeTruyen,@tacGia,@moTa,@anhBia)",
    );
    return true;
  }
  async deleteNovel(id) {
    try {
      const request = new sql.Request();
      request.input("id", sql.Int, id);
      const result = await request.query(
        `
        DELETE FROM novel_categories WHERE novel_id = @id; 
        DELETE FROM novels WHERE novel_id = @id;
        `,
      );
      return result.rowsAffected[1] > 0;
    } catch (err) {
      throw new Error(err);
    }
  }
  async updateNovel(id, novelData) {
    const { title, author, description } = novelData;
    try {
      const request = new sql.Request();
      request.input("id", sql.NVarChar, id);
      request.input("title", sql.NVarChar, title);
      request.input("author", sql.NVarChar, author);
      request.input("description", sql.NVarChar, description);
      const result = await request.query(
        ` 
          UPDATE novels
          SET title = @title, 
              author = @author, 
              description = @description,
              updated_at = GETDATE()
          WHERE novel_id = @id
        `,
      );
      if (result && result.rowsAffected && result.rowsAffected.length > 0) {
        return result.rowsAffected[0] > 0;
      }
      return false;
    } catch (err) {
      throw new Error(err);
    }
  }
  async addCategories(id, categoryIds) {
    const trans = new sql.Transaction();

    try {
      await trans.begin();

      const request = new sql.Request(trans);

      request.input("id", sql.Int, id);

      // Thực hiện xóa danh mục cũ
      await request.query(`
      DELETE FROM novel_categories
      WHERE novel_id = @id
    `);

      if (categoryIds && categoryIds.length > 0) {
        for (const categoryId of categoryIds) {
          // Tạo một Request mới cho mỗi lượt chèn dữ liệu để tránh ghi đè tham số
          const insertRequest = new sql.Request(trans);
          insertRequest.input("id", sql.Int, id);
          insertRequest.input("category_id", sql.Int, categoryId);

          await insertRequest.query(`
          INSERT INTO novel_categories (category_id, novel_id)
          VALUES (@category_id, @id)
        `);
        }
      }

      await trans.commit();
      return true;
    } catch (err) {
      // Nếu có bất kỳ lỗi nào, hủy bỏ toàn bộ
      await trans.rollback();
      throw new Error(`Lỗi gán danh mục: ${err.message}`);
    }
  }
  async getNovelDashboardStats() {
    try {
      const request = new sql.Request();
      const result = await request.query(`
         SELECT 
          COUNT (novel_id) AS totalTitles,
          COUNT(CASE WHEN novel_status = 1 THEN 1 ELSE NULL END) AS activeDrafts,
          SUM(CASE WHEN novel_status = 1 THEN ISNULL(view_count, 0) ELSE 0 END) AS totalViews
          FROM novels;
       `);
      return result.recordset[0];
    } catch (err) {
      throw new Error(`Lỗi khi lấy thống kê truyện: ${err.message}`);
    }
  }
}
export default new NovelService();
