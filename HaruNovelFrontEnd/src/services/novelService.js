import api from "./api.js";
class NovelService {
  async getAllNovels() {
    const response = await api.get("/novels");
    return response.data;
  }
  async addNovel() {
    const response = await api.post("/novels/create");
  }

  async getNovelDashboardStats() {
    const response = await api.get("/dashboard/stats");
    return response.data.data;
  }
}
export default new NovelService();
