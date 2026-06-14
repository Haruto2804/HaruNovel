import api from "./api.js";
class NovelService {
  async getAllNovels() {
    const response = await api.get("/novels");
    return response.data;
  }
  async addNovel(formData) {
    console.log("truoc khi gui", formData);
    const response = await api.post("/novels", formData);
  }

  async getNovelDashboardStats() {
    const response = await api.get("/dashboard/stats");
    return response.data.data;
  }
}
export default new NovelService();
