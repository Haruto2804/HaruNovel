import { sql } from "../config/db.js";
class NovelService {
  async fetchAllNovels() {
    const result = await sql.query("SELECT * FROM novels");
    return result.recordset;
  }
  async addNovel(novelData) {
    console.log(novelData);
    const { title, author, description, cover_image } = novelData;
    const request = new sql.Request();
    request.input("tieuDeTruyen", sql.NVarChar, title);
    request.input("tacGia", sql.NVarChar, author);
    request.input("moTa", sql.NVarChar, description);
    request.input("anhBia", sql.NVarChar, cover_image);
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
}
export default new NovelService();
