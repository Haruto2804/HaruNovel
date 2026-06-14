import { sql } from "../config/db.js";
class AuthorService {
  async getAllAuthors() {
    try {
      const request = new sql.Request();
      const query = `
        SELECT id,name,slug FROM authors
      `;
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      throw new Error("[SERVICE]: ", err.message);
    }
  }
}
export default new AuthorService();
