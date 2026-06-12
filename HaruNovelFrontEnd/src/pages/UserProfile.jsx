import React from "react";
import { Link } from "react-router-dom";

// --- MOCK DATA ---
const userProfile = {
  name: "Ngô Lưu Gia Bảo",
  username: "@haruto",
  joinDate: "Tháng 10, 2023",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc7Vf_1-iDhcKHKZaLwBL3yLhIu4O1L8C_vqO5SzLllhZuunPua4XLtNw6Ts0lW7RT9jysUvuO3A4YUkQZb60absvnT9PDmZv_dnsKythxbTIsCUa640RY9Fs2oiNoqL6nlFxWeA0fLuGgUzh2RVw-O1YuBt-OMgBTR_xxRZ6MdIfUw9Qi25KefwzD2aU9pxCyuWlqqslmFb_0n0cVE99qfiPmb3oXRWBBJndCgaX6YkCrgny0qj8MEVSl6ru1t4V0A8kFbg7Zemo",
  stats: [
    { id: "read", label: "Truyện đã đọc", value: "128", icon: "menu_book" },
    {
      id: "chapters",
      label: "Chương đã đọc",
      value: "4,502",
      icon: "auto_stories",
    },
    {
      id: "streak",
      label: "Chuỗi ngày đọc",
      value: "15",
      unit: "ngày",
      icon: "local_fire_department",
    },
    { id: "comments", label: "Bình luận", value: "86", icon: "chat_bubble" },
  ],
};

const recentlyRead = [
  {
    id: "the-emerald-archive",
    title: "The Emerald Archive",
    author: "Clara H. Vale",
    genre: "Fantasy",
    progress: 84,
    left: "Còn 24 chương",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw-qL8gI5rSvmagxsBnrTCa0N32UBJnb4Jso2N_HK1XQc5JmcxwKSxeNCRsc_Y14jI0zBdGT6-tBQ7-NTs6Y4snBeWXufd2ATfemNwwz-CYs6nXYCNZzb741IMc_Bq1merms5GVhAemT7h3wivk1e5Chb7bAuKYJaYVxj9l7RuJJAXMKV5_YWM6a7AWlzftXcJm_6HaXKHOoIcbR8AsqB6NqErNRwu-nXdTJshl0U_K-9YkHSsZTGt4CV_bid-AkD0l98n0v_K4Vg",
  },
  {
    id: "shadow-weaver",
    title: "Shadow Weaver",
    author: "Marcus Thorne",
    genre: "Mystery",
    progress: 12,
    left: "Đọc lần cuối 2 giờ trước",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoE6fzJKVPqh85f9g96CMgGWsQQ6RB9Y0CUmLk9CjAzY-XfijH0v9luzDwz8lSt3F_Q9U1udr8D3TLH-508ygEYEQZM6He7eery1s-vWlfISU-R7eEfrDXCgkAOBCmLLOTtgamKZhQCa4neMAGoBgAqzQVIEf5GRbJMbGClY9uV5phLExjPLLlwMUEse5Hm84J2xRPmkjzslGGULphcOm21WLJXu3HWNx0XUWAXwsUjEBpO7rGqmo8hP-x_AlNottF_g7HksIo5mA",
  },
];

const achievements = [
  {
    id: "bookworm",
    name: "Mọt Sách",
    icon: "menu_book",
    color: "bg-teal-100 text-teal-800",
    level: "Cấp 5",
    active: true,
  },
  {
    id: "fast",
    name: "Đọc Nhanh",
    icon: "bolt",
    color: "bg-amber-100 text-amber-600",
    level: "Mở khóa",
    active: true,
  },
  {
    id: "early",
    name: "Tiên Phong",
    icon: "star",
    color: "bg-blue-100 text-blue-700",
    level: "Mở khóa",
    active: true,
  },
  {
    id: "reviewer",
    name: "Nhà Phê Bình",
    icon: "history_edu",
    color: "bg-slate-100 text-slate-500",
    level: "Chưa mở khóa",
    active: false,
  },
  {
    id: "social",
    name: "Giao Tiếp",
    icon: "groups",
    color: "bg-slate-100 text-slate-500",
    level: "Chưa mở khóa",
    active: false,
  },
];

const settingsLinks = [
  {
    id: "account",
    label: "Cài đặt tài khoản",
    desc: "Email, mật khẩu và bảo mật",
    icon: "manage_accounts",
  },
  {
    id: "noti",
    label: "Tùy chọn thông báo",
    desc: "Thông báo cập nhật và tin nhắn",
    icon: "notifications_active",
  },
  {
    id: "logout",
    label: "Đăng xuất",
    desc: "Thoát khỏi phiên đăng nhập",
    icon: "logout",
    isDanger: true,
  },
];

function UserProfile() {
  return (
    <main className="flex-grow max-w-[1200px] mx-auto px-4 md:px-12 py-12 w-full font-['Inter']">
      {/* HERO SECTION: PROFILE INFO */}
      <section className="mt-4 mb-10 p-8 rounded-2xl bg-[var(--theme-ui-bg)] border border-[var(--theme-border)] flex flex-col md:flex-row items-center md:items-end justify-between gap-6 overflow-hidden relative shadow-sm">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[180px] text-[var(--theme-primary)]">
            menu_book
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 relative z-10">
          <div className="relative group">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl border-4"
              style={{ borderColor: "var(--theme-bg)" }}
            >
              <img
                alt={userProfile.name}
                className="w-full h-full object-cover"
                src={userProfile.avatar}
              />
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-[var(--theme-primary)] text-[var(--theme-bg)] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity active:scale-95">
              <span className="material-symbols-outlined text-[20px]">
                photo_camera
              </span>
            </button>
          </div>

          <div className="text-center md:text-left text-[var(--theme-text)]">
            <h1 className="font-['Playfair_Display'] text-[32px] md:text-[40px] font-bold text-[var(--theme-primary)] mb-1 leading-tight">
              {userProfile.name}
            </h1>
            <p className="opacity-70 font-medium flex items-center justify-center md:justify-start gap-2 text-[14px]">
              {userProfile.username}
              <span className="w-1 h-1 bg-[var(--theme-text)] opacity-40 rounded-full"></span>
              <span className="font-normal">
                Thành viên từ {userProfile.joinDate}
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] rounded-full text-xs font-bold tracking-wide">
                Hạng Học Giả
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-bold tracking-wide">
                Verified Reviewer
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <button className="flex items-center gap-2 px-6 py-3 bg-[var(--theme-primary)] text-[var(--theme-bg)] rounded-xl font-bold text-[14px] hover:brightness-110 shadow-md shadow-[var(--theme-primary)]/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            Chỉnh sửa hồ sơ
          </button>
        </div>
      </section>

      {/* STATISTICS ROW */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {userProfile.stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-transparent border border-[var(--theme-border)] p-6 rounded-2xl hover:border-[var(--theme-primary)]/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[80px] text-[var(--theme-primary)]">
                {stat.icon}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <span className="material-symbols-outlined text-[var(--theme-primary)] group-hover:scale-110 transition-transform">
                {stat.icon}
              </span>
              <span className="text-[var(--theme-text)] opacity-70 font-bold text-[12px] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <div className="flex items-end gap-1.5 relative z-10">
              <span className="font-['Playfair_Display'] text-[36px] font-bold text-[var(--theme-primary)] leading-none">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="text-[var(--theme-text)] opacity-70 font-medium mb-1">
                  {stat.unit}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: RECENTLY READ */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 border-b border-[var(--theme-border)] pb-4">
            <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)]">
              Đọc Gần Đây
            </h2>
            <Link
              to="/library"
              className="text-[var(--theme-primary)] font-semibold text-[14px] hover:underline"
            >
              Xem toàn bộ Thư viện
            </Link>
          </div>

          <div className="space-y-4">
            {recentlyRead.map((book) => (
              <div
                key={book.id}
                className="flex gap-5 p-4 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-ui-bg)]/30 group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--theme-primary)]/5 hover:border-[var(--theme-primary)]/30"
              >
                <div className="w-24 h-36 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                  <img
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={book.img}
                  />
                </div>
                <div className="flex-grow py-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-['Playfair_Display'] text-[18px] font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors line-clamp-1">
                          {book.title}
                        </h3>
                        <p className="text-[var(--theme-text)] opacity-60 text-[13px] font-medium mt-0.5">
                          Tác giả: {book.author}
                        </p>
                      </div>
                      <span className="bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border border-[var(--theme-primary)]/20">
                        {book.genre}
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="flex justify-between text-[12px] mb-1.5 font-medium">
                        <span className="text-[var(--theme-text)] opacity-70">
                          Tiến độ:{" "}
                          <span className="text-[var(--theme-primary)] font-bold">
                            {book.progress}%
                          </span>
                        </span>
                        <span className="text-[var(--theme-text)] opacity-50 italic">
                          {book.left}
                        </span>
                      </div>
                      <div className="w-full bg-[var(--theme-text)]/10 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[var(--theme-primary)] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-3 pt-3 border-t border-[var(--theme-border)]/50">
                    <Link
                      to={`/chapter/${book.id}`}
                      className="text-[13px] font-bold text-[var(--theme-primary)] flex items-center gap-1 hover:brightness-110 active:scale-95 transition-transform"
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_circle
                      </span>
                      Đọc tiếp
                    </Link>
                    <button className="text-[13px] font-bold text-[var(--theme-text)] opacity-60 hover:opacity-100 flex items-center gap-1 active:scale-95 transition-all">
                      <span className="material-symbols-outlined text-[18px]">
                        bookmark
                      </span>
                      Đánh dấu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: BADGES & SETTINGS */}
        <div className="lg:col-span-4 space-y-10">
          {/* Achievements Section */}
          <div>
            <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] mb-6 border-b border-[var(--theme-border)] pb-4">
              Thành Tựu
            </h2>
            <div className="bg-[var(--theme-ui-bg)]/30 p-6 rounded-2xl border border-[var(--theme-border)]">
              <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                {achievements.map((badge) => (
                  <div
                    key={badge.id}
                    className={`flex flex-col items-center gap-2 ${!badge.active ? "opacity-40 grayscale" : ""}`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center relative group cursor-pointer shadow-sm ${badge.active ? badge.color : "bg-[var(--theme-text)]/10 text-[var(--theme-text)]"}`}
                    >
                      <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
                        {badge.icon}
                      </span>
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-lg">
                        {badge.name} ({badge.level})
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[var(--theme-text)] opacity-80 text-center uppercase tracking-tight">
                      {badge.name}
                    </span>
                  </div>
                ))}

                {/* View More Badges */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-[var(--theme-text)]/20 flex items-center justify-center text-[var(--theme-text)]/40 hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)]/50 transition-colors cursor-pointer active:scale-95">
                    <span className="material-symbols-outlined text-[24px]">
                      add
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--theme-text)] opacity-60 text-center uppercase tracking-tight">
                    Thêm
                  </span>
                </div>
              </div>
              <button className="w-full mt-6 py-2.5 border border-[var(--theme-border)] rounded-xl text-[13px] font-bold text-[var(--theme-text)] opacity-80 hover:bg-[var(--theme-text)]/5 hover:opacity-100 transition-all active:scale-[0.98]">
                Xem tiến trình thành tựu
              </button>
            </div>
          </div>

          {/* Account & Preferences */}
          <div>
            <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] mb-6 border-b border-[var(--theme-border)] pb-4">
              Tài Khoản & Cài Đặt
            </h2>
            <div className="bg-[var(--theme-ui-bg)]/30 rounded-2xl border border-[var(--theme-border)] overflow-hidden">
              {settingsLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className={`flex items-center gap-4 px-5 py-4 hover:bg-[var(--theme-text)]/5 transition-colors border-b border-[var(--theme-border)] last:border-b-0 ${link.isDanger ? "text-red-500 hover:bg-red-500/10" : "text-[var(--theme-text)]"}`}
                >
                  <span className="material-symbols-outlined opacity-80">
                    {link.icon}
                  </span>
                  <div className="flex-grow">
                    <p
                      className={`text-[14px] font-bold ${link.isDanger ? "text-red-500" : ""}`}
                    >
                      {link.label}
                    </p>
                    <p
                      className={`text-[12px] opacity-60 ${link.isDanger ? "text-red-400" : ""}`}
                    >
                      {link.desc}
                    </p>
                  </div>
                  {!link.isDanger && (
                    <span className="material-symbols-outlined opacity-30">
                      chevron_right
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
