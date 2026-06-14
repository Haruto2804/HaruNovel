import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/layout/Header";
import SettingsPanel from "./components/ui/SettingsPanel";
import ChapterDetails from "./pages/ChapterDetails";
import NovelDetail from "./pages/NovelDetail";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Explore from "./pages/Explore";
import NewReleases from "./pages/NewReleases";
import UserProfile from "./pages/UserProfile";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NovelManage from "./pages/admin/NovelManage";
import ChapterManage from "./pages/admin/ChapterManage";
import CategoryManage from "./pages/admin/CategoryManage";
import UserManage from "./pages/admin/UserManage";
import AdminSettings from "./pages/admin/AdminSettings";
import CreateNovel from "./pages/admin/CreateNovel";
import EditChapter from "./pages/admin/EditChapter";
import EditCategory from "./pages/admin/EditCategory";
import EditUser from "./pages/admin/EditUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { NovelProvider } from "./contexts/NovelContext";

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

// =========================================
// COMPONENT MỚI: CLIENT LAYOUT
// Cách ly toàn bộ State cuộn chuột và Theme vào đây
// =========================================
const ClientLayout = () => {
  const [theme, setTheme] = useState(themes[0]);
  const [fontFamily, setFontFamily] = useState("font-serif");
  const [textSize, setTextSize] = useState("text-base");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [readingProgress, setReadingProgress] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        setReadingProgress((currentScrollY / totalHeight) * 100);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
        setIsMobileMenuOpen(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen font-body-md transition-colors duration-500 selection:bg-teal-200 selection:text-teal-900"
      style={{
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
      <Header
        readingProgress={readingProgress}
        showHeader={showHeader}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />
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
      <main className="pt-24 pb-12">
        {/* Render các trang Client (Home, Novel, Chapter...) tại đây */}
        <Outlet context={{ textSize, fontFamily }} />
      </main>
    </div>
  );
};

// =========================================
// APP CHÍNH (Rất gọn nhẹ, không còn State gây giật)
// =========================================
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* CỤM 1: CLIENT SẼ DÙNG CLIENT LAYOUT */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        {/* Lưu ý: Để truyền textSize và fontFamily xuống trang Chapter, 
            bạn có thể dùng thẻ tự đóng kèm theo hook useOutletContext() ở trang con, 
            hoặc giữ cấu trúc gốc nếu nó không phụ thuộc props quá nhiều */}
        <Route path="/chapter/:chapterId" element={<ChapterDetails />} />
        <Route path="/novel/:novelId" element={<NovelDetail />} />
        <Route path="/library" element={<Library />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Route>

      {/* CỤM 2: ADMIN LAYOUT BÌNH YÊN, KHÔNG BỊ RERENDER NỮA */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          element={
            <NovelProvider>
              <Outlet />
            </NovelProvider>
          }
        >
          <Route path="novels" element={<NovelManage />} />
          <Route path="novels/create" element={<CreateNovel />} />
        </Route>

        <Route path="chapters" element={<ChapterManage />} />
        <Route path="chapters/edit" element={<EditChapter />} />
        <Route path="categories" element={<CategoryManage />} />
        <Route path="categories/edit" element={<EditCategory />} />
        <Route path="users" element={<UserManage />} />
        <Route path="users/edit" element={<EditUser />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
