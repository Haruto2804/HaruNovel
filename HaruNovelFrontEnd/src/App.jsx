import React, { useState, useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import ChapterDetails from "./pages/ChapterDetails";
import NovelDetail from "./pages/NovelDetail";
import SettingsPanel from "./components/ui/SettingsPanel";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
// Mảng cấu hình đầy đủ các màu sắc hệ thống cho từng giao diện (Theme)
const themes = [
  {
    id: "cream",
    bg: "#FCF9F2",
    text: "#191c1b",
    primary: "#006a60",
    headerBg: "rgba(244, 240, 230, 0.8)",
    uiBg: "#EFEBE0",
    border: "#DCD8CD",
    buttonClass: "bg-[#FCF9F2]",
  },
  {
    id: "white",
    bg: "#ffffff",
    text: "#191c1b",
    primary: "#006a60",
    headerBg: "rgba(255, 255, 255, 0.8)",
    uiBg: "#f4f4f4",
    border: "#e5e5e5",
    buttonClass: "bg-white",
  },
  {
    id: "sepia",
    bg: "#F5F1E9",
    text: "#404944",
    primary: "#3b6455",
    headerBg: "rgba(240, 235, 226, 0.8)",
    uiBg: "#E6E0D4",
    border: "#D1C9BC",
    buttonClass: "bg-[#F5F1E9]",
  },
  {
    id: "dark",
    bg: "#191c1b",
    text: "#ffffff",
    primary: "#53dbc9",
    headerBg: "rgba(34, 38, 36, 0.8)",
    uiBg: "#2d312f",
    border: "#3f4441",
    buttonClass: "bg-[#191c1b]",
  },
];

const App = () => {
  // --- 1. CÁC STATE QUẢN LÝ CẤU HÌNH GIAO DIỆN ĐỌC ---
  const [theme, setTheme] = useState(themes[0]); // Mặc định dùng theme cream
  const [fontFamily, setFontFamily] = useState("font-serif");
  const [textSize, setTextSize] = useState("text-base");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // --- 2. CÁC STATE QUẢN LÝ TIẾN ĐỘ VÀ TRẠNG THÁI HEADER ---
  const [readingProgress, setReadingProgress] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sử dụng useRef để lưu vị trí cuộn trước đó mà không gây render lại giao diện vô ích
  const lastScrollY = useRef(0);

  // --- 3. LOGIC THEO DÕI SỰ KIỆN CUỘN CHUỘT (SCROLL) ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Tính toán phần trăm thanh tiến độ đọc (Progress Bar)
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setReadingProgress((currentScrollY / totalHeight) * 100);
      }

      // Logic ẩn Header khi cuộn xuống, hiện lại khi cuộn lên
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Cuộn xuống + đã cuộn qua chiều cao của Header -> Ẩn nó đi
        setShowHeader(false);
        // Đóng luôn menu mobile nếu người dùng đang mở mà cố tình cuộn xuống
        setIsMobileMenuOpen(false);
      } else {
        // Cuộn ngược lên -> Hiện lại Header
        setShowHeader(true);
      }

      // Cập nhật lại vị trí cuộn cũ
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event để tránh rò rỉ bộ nhớ (Memory Leak)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen font-body-md transition-colors duration-500 selection:bg-teal-200 selection:text-teal-900"
      style={{
        // Đồng bộ hóa toàn bộ biến CSS Variables cho các Component con sử dụng
        "--theme-bg": theme.bg,
        "--theme-text": theme.text,
        "--theme-primary": theme.primary,
        "--theme-header-bg": theme.headerBg,
        "--theme-ui-bg": theme.uiBg,
        "--theme-border": theme.border,
        backgroundColor: "var(--theme-bg)",
        color: "var(--theme-text)",
      }}
    >
      {/* COMPONENT BANNER ĐẦU TRANG & TIẾN ĐỘ ĐỌC */}
      <Header
        readingProgress={readingProgress}
        showHeader={showHeader}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />

      {/* COMPONENT BẢNG CÀI ĐẶT CHỮ / THEME (POPUP) */}
      <SettingsPanel
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        textSize={textSize}
        setTextSize={setTextSize}
        theme={theme}
        setTheme={setTheme}
        themes={themes}
      />

      {/* COMPONENT NỘI DUNG CHƯƠNG TRUYỆN CHÍNH */}
      <main className="pt-24 pb-12">
        <Routes>
          <Route
            path="/chapter/:chapterId"
            element={
              <ChapterDetails textSize={textSize} fontFamily={fontFamily} />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/novel/:novelId" element={<NovelDetail />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
