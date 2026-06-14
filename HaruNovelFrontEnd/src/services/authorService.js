import api from "./api.js";
class AuthorService {
  async getAllAuthors() {
    const response = await api.get("/authors");
    return response.data;
  }
}
export default new AuthorService();
