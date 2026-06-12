import React, { useState } from "react";
import { Link } from "react-router-dom";

function Library() {
  const [activeTab, setActiveTab] = useState("reading");

  // Giữ nguyên Data mẫu của anh Bảo
  const mockNovels = {
    reading: [
      {
        id: "whispers-emerald-isle",
        title: "Whispers of the Emerald Isle",
        coverImg:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAer1oxGXSe290JsOrztcUKHg8fKGrT14XSl8QugLsthYcPExMmBFTydWAnKR4LTf1FgtUOAe5TagbHQNm6gkZR89rjakTwrj9imul-UHFZDWRue3Q7Tq1n7wpfYtRxSuaP58BIxOT6nZkubldg_xBaZ02xSFHVHn4eH89BXJsSdPTCbINGY8mnEkJvOYESyN5DkOutBsngAh094mFPD7scJYWKRAemCysdVyYt2mTVow6Zro7mZALE9JCqRujuovNilSExFAV_wGc",
        currentChapter: 45,
        progress: 82,
        lastRead: "2 giờ trước",
        isBookmarked: true,
      },
      {
        id: "architects-of-silence",
        title: "Architects of Silence",
        coverImg:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBIYZe1hlLG5BL8CSrUUSbPVjlW2RnnPH1BEFK1XGy0YwClOPfEUnWsRbrXJ3zJ1lm4ib250Og9NGOVmYIhkS2k72rcjW5D_aR8JICHTJCbFPxGNUZQ-3xbnSx-9RYEKmj3zanPbEoWeXebiodrDHdg67Ih73rgdaMe-m7owciUKFZq5V6myuGrWqAm8rYmoysCgJccR-wkDP1Z1_gtaQz1GV5v8-NHDlGhzSjA1wNz-fNrC--TcuKVPq15qlyPjKkbTWeT1M6diUw",
        currentChapter: 12,
        progress: 15,
        lastRead: "Hôm qua",
        isBookmarked: false,
      },
    ],
    planToRead: [],
    completed: [],
    favorites: [],
  };

  const tabs = [
    {
      id: "reading",
      label: "Đang đọc",
      count: mockNovels.reading?.length || 0,
    },
    {
      id: "planToRead",
      label: "Kế hoạch đọc",
      count: mockNovels.planToRead?.length || 0,
    },
    {
      id: "completed",
      label: "Đã hoàn thành",
      count: mockNovels.completed?.length || 0,
    },
    {
      id: "favorites",
      label: "Yêu thích",
      count: mockNovels.favorites?.length || 0,
    },
  ];

  const currentNovels = mockNovels[activeTab] || [];

  return (
    <main className="flex-grow max-w-[1200px] mx-auto w-full px-4 md:px-12 py-12 font-['Inter'] text-on-surface">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="font-['Playfair_Display'] text-[40px] font-bold text-primary tracking-tight mb-2">
            Thư Viện Của Tôi
          </h1>
          <p className="text-on-surface-variant max-w-xl text-[15px] leading-relaxed">
            Không gian lưu trữ cá nhân. Theo dõi tiến trình đọc, quản lý các bộ
            truyện yêu thích và sắp xếp lịch trình của riêng bạn.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all font-semibold text-[14px] active:scale-95 group self-start md:self-auto">
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-90">
            add
          </span>
          Sáng tác truyện mới
        </button>
      </div>

      {/* FILTER TABS */}
      <div className="flex border-b border-outline-variant/30 mb-10 overflow-x-auto no-scrollbar gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3.5 whitespace-nowrap text-[15px] font-semibold transition-all relative border-b-2 -mb-[2px] ${
              activeTab === tab.id
                ? "text-primary border-primary font-bold"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 text-xs px-2 py-0.5 rounded-full transition-colors ${
                activeTab === tab.id
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-surface-container text-on-surface-variant"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* NOVELS CONTAINER */}
      {currentNovels.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {currentNovels.map((novel) => (
            <Link
              to={`/chapter/${novel.id}`}
              key={novel.id}
              className="group flex flex-col bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Ảnh bìa */}
              <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden shadow-inner bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={novel.coverImg}
                  alt={novel.title}
                />
                {novel.isBookmarked && (
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      bookmark
                    </span>
                  </div>
                )}

                {/* Phần trăm tiến độ góc dưới ảnh bìa */}
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                  Ch. {novel.currentChapter}
                </div>
              </div>

              {/* Thông tin truyện */}
              <div className="flex flex-col flex-grow pt-4 px-1 justify-between">
                <div>
                  <h3 className="font-['Playfair_Display'] font-bold text-[16px] text-primary group-hover:text-primary-container transition-colors line-clamp-2 min-h-[44px] leading-snug">
                    {novel.title}
                  </h3>
                  <p className="text-[12px] text-on-surface-variant opacity-70 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    {novel.lastRead}
                  </p>
                </div>

                {/* Thanh Progress Bar trực quan */}
                <div className="mt-4 pt-2 border-t border-outline-variant/10">
                  <div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-1">
                    <span>Tiến độ</span>
                    <span>{novel.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-primary transition-all duration-500"
                      style={{ width: `${novel.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Ô Thêm truyện dạng Grid Card đẩy về cuối danh sách nếu có truyện */}
          <Link
            to="/browse"
            className="flex flex-col items-center justify-center aspect-[2/3] bg-surface-container-low/40 border-2 border-dashed border-outline-variant/60 rounded-2xl hover:border-primary/50 hover:bg-surface-container-low transition-all group active:scale-[0.98] p-6 text-center"
          >
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary group-hover:scale-110 transition-all mb-3">
              add_circle
            </span>
            <span className="font-bold text-[14px] text-on-surface-variant group-hover:text-primary">
              Khám phá thêm truyện
            </span>
          </Link>
        </div>
      ) : (
        /* EMPTY STATE HOÀN CHỈNH (Khi mục trống) */
        <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-outline-variant/50 rounded-2xl bg-surface-container-low/20 min-h-[350px] max-w-2xl mx-auto mt-6">
          <div className="w-16 h-16 bg-surface-container-low text-on-surface-variant/70 rounded-full flex items-center justify-center mb-4 shadow-inner">
            <span className="material-symbols-outlined text-[32px]">
              auto_stories
            </span>
          </div>
          <h3 className="font-['Playfair_Display'] font-bold text-[20px] text-primary mb-2">
            Chưa có tác phẩm nào ở đây
          </h3>
          <p className="text-on-surface-variant text-[14px] max-w-sm mb-6 leading-relaxed">
            Hạng mục này của bạn hiện đang trống. Hãy tìm kiếm những câu chuyện
            tuyệt vời khác để lấp đầy tủ sách của mình nhé.
          </p>
          <Link
            to="/browse"
            className="px-6 py-3 bg-primary text-white font-semibold text-[14px] rounded-xl hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            Đi tìm truyện ngay
          </Link>
        </div>
      )}
    </main>
  );
}

export default Library;
