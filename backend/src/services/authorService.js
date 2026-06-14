import { sql } from "../config/db.js";
import { convertToSlug } from "../helpers/string.helpers.js";
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
      throw new Error(`[SERVICE]: ${err.message}`);
    }
  }
  async addAuthor(name) {
    try {
      const slug = convertToSlug(name);
      const request = new sql.Request();
      request.input("name", sql.NVarChar(255), name);
      request.input("slug", sql.VarChar(255), slug);
      const result = await request.query(
        `
          INSERT INTO authors (name,slug,created_at)
          VALUES (@name,@slug,GETDATE())

          SELECT * FROM authors WHERE id = SCOPE_IDENTITY();
        `,
      );
      console.log("result service", result);
      if (result.recordset && result.recordset.length > 0) {
        return result.recordset[0];
      }
      return null;
    } catch (err) {
      throw new Error(`[SERVICE]: ${err.message}`);
    }
  }
}
export default new AuthorService();
