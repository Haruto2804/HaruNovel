import api from "./api.js";
class CategorySerive {
  async getAllCategories() {
    const response = await api.get("/categories");
    return response.data;
  }
}
export default new CategorySerive();
