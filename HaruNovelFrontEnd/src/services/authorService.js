import api from "./api.js";
class AuthorService {
  async getAllAuthors() {
    const response = await api.get("/authors");
    return response.data;
  }
  async addAuthor(authorName) {
    try {
      const response = await api.post("/authors", {
        authorName: authorName,
      });
      return response.data.result;
    } catch (err) {
      throw new Error(`Không thể thêm tác giả! ${err.response.message}`);
    }
  }
}
export default new AuthorService();
