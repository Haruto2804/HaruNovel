import { createContext, useCallback, useState, useContext } from "react";
import novelService from "../services/novelService.js";
const NovelContext = createContext();
export const NovelProvider = ({ children }) => {
  const [novels, setNovels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statsData, setStatsData] = useState({
    totalTitles: 0,
    activeDrafts: 0,
    totalViews: 0,
  });
  const fetchNovels = useCallback(async () => {
    setLoading(true);
    try {
      const result = await novelService.getAllNovels();
      setNovels(result);
      setError(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Không thể tải danh sách truyện.",
      );
      console.error("Lỗi khi fetch novels:", err);
    } finally {
      setLoading(false);
    }
  });
  const fetchNovelStats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await novelService.getNovelDashboardStats();
      setStatsData(res);
      setError(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Không thể tải thống kê dashboard.",
      );
      console.error("Lỗi khi fetch novel stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);
  const value = {
    novels,
    statsData,
    loading,
    error,
    fetchNovels,
    fetchNovelStats,
  };
  return (
    <NovelContext.Provider value={value}>{children}</NovelContext.Provider>
  );
};
export const useNovel = () => {
  const context = useContext(NovelContext);
  if (!context) {
    throw new Error("useNovel phải được bọc trong NovelProvider");
  }
  return context;
};
