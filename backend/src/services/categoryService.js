import sql from "mssql";

class CategoryService {
  constructor(dbPool) {
    this.dbPool = dbPool;
  }

  // 1. Lấy toàn bộ danh sách thể loại (READ ALL)
  async getAllCategories() {
    try {
      const request = new sql.Request(this.dbPool);
      const result = await request.query(`
        SELECT category_id, category_name, description, created_at 
        FROM categories
        ORDER BY category_name ASC
      `);
      return result.recordset;
    } catch (err) {
      throw new Error(`[Service] Lỗi lấy danh sách thể loại: ${err.message}`);
    }
  }

  // 2. Thêm một thể loại mới (CREATE)
  async createCategory(categoryData) {
    const { category_name, description } = categoryData;
    try {
      const request = new sql.Request(this.dbPool);
      request.input("category_name", sql.NVarChar(100), category_name);
      request.input("description", sql.NVarChar(500), description || null);

      const result = await request.query(`
        INSERT INTO categories (category_name, description, created_at)
        VALUES (@category_name, @description, GETDATE())
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      throw new Error(`[Service] Lỗi thêm thể loại: ${err.message}`);
    }
  }

  // 3. Cập nhật thông tin thể loại (UPDATE)
  async updateCategory(id, categoryData) {
    const { category_name, description } = categoryData;
    try {
      const request = new sql.Request(this.dbPool);
      request.input("category_id", sql.Int, id);
      request.input("category_name", sql.NVarChar(100), category_name);
      request.input("description", sql.NVarChar(500), description || null);

      const result = await request.query(`
        UPDATE categories
        SET category_name = @category_name,
            description = @description
        WHERE category_id = @category_id
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      throw new Error(`[Service] Lỗi cập nhật thể loại: ${err.message}`);
    }
  }

  // 4. Xóa một thể loại (DELETE)
  async deleteCategory(id) {
    try {
      const request = new sql.Request(this.dbPool);
      request.input("category_id", sql.Int, id);

      const result = await request.query(`
        DELETE FROM categories WHERE category_id = @category_id
      `);

      return result.rowsAffected[0] > 0;
    } catch (err) {
      if (err.message.includes("FOREIGN KEY")) {
        throw new Error(
          "Không thể xóa thể loại này vì đang có các bộ truyện thuộc thể loại này!",
        );
      }
      throw new Error(`[Service] Lỗi xóa thể loại: ${err.message}`);
    }
  }
}

// Thay đổi cách export sang chuẩn ES6
export default CategoryService;
