import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- MOCK DATA ---
const categories = [
  "Tất cả",
  "Tiên Hiệp",
  "Huyền Huyễn",
  "Đô Thị",
  "Hệ Thống",
  "Dị Giới",
  "Ngôn Tình",
];

const mockUpdates = [
  {
    id: "ta-tung-buoc-vo-dich",
    title: "Ta Từng Bước Vô Địch",
    author: "Thần Đông",
    chapter: "Chương 142",
    genre: "Tiên Hiệp",
    time: "5 phút trước",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU6MxykzxCwh5OggGR_XMuAaZmoVFqPXXqFQh3Lg3_ojDyb3PdpTuhYmEN2CMpgTiUs1_QsUtLf5AlcPvXTNagMO8Z16043k0K1te0zwhitZpLom6ucNf-eLv3wjSrSxbXGWlt25IGeGL_4vH0X-sTgaGaV8ZnbymOKstmczkB5A5TCifAlJ1nOATIx3OtGui_3m5bmCZFhPPr9yd2RDqJAWjorjXNl3t_-iRSVF7vTSqukzX9bGzSm1gxnj1aT7wEkf3FIAX9_fc",
  },
  {
    id: "tro-thanh-quan-gia-cho-ta-than",
    title: "Trở Thành Quản Gia Cho Tà Thần",
    author: "Hư Không Chi Nhãn",
    chapter: "Chương 89",
    genre: "Huyền Huyễn",
    time: "12 phút trước",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2yClGLDgMtkrbA5jTwQw9o_zJDYCfNkzoDWuecTPWrjjzOBScDagmxeu0g8jcQvsSPYHKEl6ZRc2Ya-VihHgATyT09V8jBKv5xau5me8IhvWtxVdscEWpE-hFa3dpzkj1tDiIf6vKvLsznVqoGRJwMuzLKJ_HVpWyq6NBBaY1orc1cFfYZaqvxRdDAcc-hCu0G7znTvDztD0oLlcxgh9PC8cgQdBn_yCpN3mM3S3nnc06UPDhadlE6-H3zKGanEqK9j3fJjhzyoA",
  },
  {
    id: "ty-phu-he-thong-sau-khi-pha-san",
    title: "Tỷ Phú Hệ Thống Sau Khi Phá Sản",
    author: "Lão Ma",
    chapter: "Chương 1205",
    genre: "Đô Thị",
    time: "25 phút trước",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5UXiVDn4k58pIlyDExftNbS1bg0VTly3h0gDwMnnyxFFMkWmIx0S1dKVue8eNzGSmwrfNiZXVQJwmTZ2cHzFN1AN4LN9MgLU8BNZBkV_yXYV3SW9DLJzK3pyP7O9Q15Z-anj1ApZQP4msy2svH9Br_STaljrSKv2Qj2r8gCatENoKSsk2nPzZ5NrtntE3hyO_ndKoWPkoHjjoBAesPL-yreD_GjAerkHFtvAG6AjemfVtRaHXkdzIUZ-BM2n2KuIbk18K5EdhIhk",
  },
  {
    id: "linh-khi-khoi-phuc-toan-cau-di-bien",
    title: "Linh Khí Khôi Phục: Toàn Cầu Dị Biến",
    author: "Thiên Hạ Đệ Nhất",
    chapter: "Chương 21",
    genre: "Dị Giới",
    time: "1 giờ trước",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBpLFmJXmvGItSqVLJaNbk7PDfIIGhcCOkvEDKVU8Gzizh3qU2enU4f1vCuiq3pbAtVA3rLCCR8UaHumbUcRqiMuKAQ_lhRR_KJZSwCYqQj0nynafp9Q1KNy6QY5M4I7YTTcrdemFNOrjPv7CZxCJQxLr4jXZseYv4_DYM7S477DhM3hPzianYdv3KngQr6xUmk8BD7OByWPMcQFillxXg83ZJPLTMMULAskWtd6kDYY-hVyvPgNKGpho1zONGValou5vUOcyd2Es",
  },
];

const mockNewSeries = [
  {
    id: "van-co-than-de",
    title: "Vạn Cổ Thần Đế",
    author: "Phi Thiên",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb0O-rjYZlOuxqPQKlT7aWrp7GcVdm7KBHl0j5tGfI96-_jnO3yN6A2lK2apMf1r6CP-ZsRB2Qsjr8TZKI6emKaACO8s77lsyBIj25ksvBoSGfKMu3nqqzTsqtSpekdWW87b8sLC_b-x8VI4LTG_CqW8ndMGv7aOXD8OLS5VDuPABTmgpe4AGmei5rt7NJGeP_SxvATVl5LZN8aH9plZ0ENPWiuZbcSpG9X8OYy9mrVNZVN_38CR8MAguYwjjlGgSFjaJCDO2G44A",
  },
  {
    id: "kiem-dao-doc-ton",
    title: "Kiếm Đạo Độc Tôn",
    author: "Thanh Sam",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Nq1xYCy4h4qsAm6Ru53lwZkiJjZ-PRd6VR-ACXghl0a8RzPK5hFeimOe9rahBH165l18qM6zB-xwLs9f970HEgNc_zG6kv21nmnuFkHTLVc6SDV9vLR-ztw4eUl2q0dvBAROMr7zqRlFv79cOwSSbbOsUgr41tH9pe8XbITdOSe_YzpQ0aDefK3OtlAdsA0dSyc7OchFjEldYE9aOWuEObGZ9sT7-esEZA8sBM6giGUNsSbC1XFYehCjQWvp00XWOBuoNlKkvYs",
  },
  {
    id: "vo-thuong-than-vuong",
    title: "Vô Thượng Thần Vương",
    author: "Tịnh Vô Ngân",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8yh8kPCHOLXmMOYOd33MyuygB2Bc8fHt_C9-KkSlxpPrqvmpF0z1Ikhg3H7fdvQNEiCgQJHCbBBIO8zU0-pDTwt0qeSYoHpbaHV2-pGPHhTNsA3j5FKrEkuId1Qha5QeuDFGTd5o-kPuzRA0VqSychl2tRM9Uobrlit5SV10zfJ-xwNDUsgtTc801Yq9Md-CjJY2EKksTkujSG0mVBxR7VlujA3x5lflm3zYVSwDjCL4ou1YSYgxTiNPqWgifJY4oIArC20lxHBY",
  },
  {
    id: "dai-duong-song-long-truyen",
    title: "Đại Đường Song Long Truyện",
    author: "Huỳnh Dị",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfjmYz4f8RIW0nB20RlInXa18uvmf4gs3YL3Np0clHbH4m6edZo-UU1tPXC4D6uRbsqOMoYuH2R5RXC12GLziFSgKI_mZ7FZoXS_M2ws72-M4WbI_1RNXkqqPZ57N1OOTwd3VpmKi_16s0cZjcbjGxXaHEcy23dtweHACcc39Y-9ClVno5mkLA5wMDK-5y4hELBs4wFF4Tm0Bs-_crIrGJUSk3d6cLGH6kjLw4uGf9OXKmUqxx6uc8BGmT14QsWfsUQle9hklPFm8",
  },
];

function NewReleases() {
  // --- STATES ---
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [email, setEmail] = useState("");

  // --- LOGIC HÀM LỌC TRUYỆN ---
  const filteredUpdates = mockUpdates.filter(
    (item) => selectedCategory === "Tất cả" || item.genre === selectedCategory,
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Đăng ký thành công tin nhận chương mới cho email: ${email}`);
      setEmail("");
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-12 py-12 w-full font-['Inter']">
      {/* HERO SECTION */}
      <section className="mb-12">
        <h1 className="font-['Playfair_Display'] text-[40px] font-bold text-[var(--theme-primary)] mb-4 tracking-tight">
          Mới phát hành
        </h1>
        <p className="text-[16px] text-[var(--theme-text)] opacity-80 max-w-2xl leading-relaxed">
          Cập nhật nhanh nhất những chương mới của các bộ truyện đang "hot".
          Khám phá hành trình mới mỗi ngày cùng các tác giả hàng đầu.
        </p>
      </section>

      {/* HORIZONTAL CATEGORY FILTERS (Đồng bộ Theme) */}
      <section className="mb-10 flex flex-wrap items-center gap-3 border-b border-[var(--theme-border)] pb-6">
        <span className="text-[13px] font-bold tracking-widest uppercase mr-2 opacity-60 flex items-center gap-1 text-[var(--theme-text)]">
          <span className="material-symbols-outlined text-[18px]">
            filter_list
          </span>
          Thể loại:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 active:scale-95 border ${
                  isActive
                    ? "bg-[var(--theme-primary)] text-[var(--theme-bg)] border-[var(--theme-primary)] shadow-md shadow-[var(--theme-primary)]/10 font-bold scale-105"
                    : "bg-[var(--theme-text)]/5 text-[var(--theme-text)] border-[var(--theme-border)] hover:bg-[var(--theme-text)]/10 hover:border-[var(--theme-primary)]/40 opacity-80 hover:opacity-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* TWO COLUMNS LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT BLOCK: LATEST CHAPTER UPDATES LIST */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] flex items-center gap-2">
              <span className="material-symbols-outlined text-[26px]">
                update
              </span>
              Chương mới cập nhật
            </h2>
          </div>

          <div className="space-y-1">
            {/* List Header (Desktop Only) */}
            <div className="hidden md:grid grid-cols-12 px-6 py-3 border-b border-[var(--theme-border)] text-[13px] font-bold tracking-wider text-[var(--theme-text)] opacity-70">
              <div className="col-span-5">TÊN TRUYỆN</div>
              <div className="col-span-2">CHƯƠNG</div>
              <div className="col-span-2">THỂ LOẠI</div>
              <div className="col-span-3 text-right">THỜI GIAN</div>
            </div>

            {/* List Rows */}
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((book) => (
                <Link
                  to={`/chapter/${book.id}`}
                  key={book.id}
                  className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-4 bg-transparent hover:bg-[var(--theme-text)]/5 transition-all border-b border-[var(--theme-border)] group cursor-pointer rounded-xl md:rounded-none"
                >
                  <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                    <div className="w-10 h-14 bg-[var(--theme-ui-bg)] rounded overflow-hidden flex-shrink-0 shadow-sm border border-[var(--theme-border)]">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={book.img}
                        alt={book.title}
                      />
                    </div>
                    <div>
                      <h3 className="font-['Playfair_Display'] font-bold text-[16px] text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors leading-snug line-clamp-1">
                        {book.title}
                      </h3>
                      <p className="text-[12px] text-[var(--theme-text)] opacity-70 font-medium mt-0.5">
                        Tác giả: {book.author}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 md:col-span-2 mt-2 md:mt-0">
                    <span className="px-2.5 py-1 bg-[var(--theme-text)]/5 text-[var(--theme-text)] rounded-md font-semibold text-[12px] border border-[var(--theme-border)]">
                      {book.chapter}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-2 mt-2 md:mt-0">
                    <span className="text-[14px] text-[var(--theme-text)] opacity-80 font-medium">
                      {book.genre}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 text-left md:text-right mt-1 md:mt-0">
                    <span className="text-[13px] text-[var(--theme-text)] opacity-60 italic flex items-center gap-1 md:justify-end">
                      <span className="material-symbols-outlined text-[15px] md:hidden">
                        schedule
                      </span>
                      {book.time}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              /* Fallback rỗng */
              <div className="text-center py-12 bg-[var(--theme-text)]/5 rounded-xl border border-dashed border-[var(--theme-border)] text-[var(--theme-text)]">
                <span className="material-symbols-outlined text-4xl opacity-30 mb-2">
                  find_in_page
                </span>
                <p className="text-sm opacity-60">
                  Chưa có bản cập nhật mới nào thuộc thể loại này.
                </p>
              </div>
            )}
          </div>

          {/* Load More Updates */}
          {filteredUpdates.length > 0 && (
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-3 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] font-bold text-[14px] rounded-xl hover:bg-[var(--theme-primary)]/10 transition-all active:scale-95">
                Xem thêm cập nhật
              </button>
            </div>
          )}
        </div>

        {/* RIGHT BLOCK: SIDEBAR (SERIES MỚI & NEWSLETTER) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Ép cứng màu sáng cho thẻ Sidebar để không lỗi hiển thị text/ảnh */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-slate-900">
            <h2 className="font-['Playfair_Display'] text-[22px] font-bold text-teal-800 mb-6 flex items-center gap-2">
              <span
                className="material-symbols-outlined text-amber-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              Series Mới
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {mockNewSeries.map((series) => (
                <Link
                  to={`/chapter/${series.id}`}
                  key={series.id}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-sm border border-slate-100 aspect-[2/3] mb-2.5">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={series.img}
                      alt={series.title}
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#d4af37] text-white font-bold text-[9px] rounded shadow flex items-center gap-0.5 tracking-wider">
                      <span
                        className="material-symbols-outlined text-[11px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        bookmark
                      </span>{" "}
                      NEW
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-[14px] leading-snug text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
                    {series.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 font-medium mt-0.5">
                    {series.author}
                  </p>
                </Link>
              ))}
            </div>

            <a
              className="mt-6 pt-4 border-t border-slate-100 text-center font-bold text-[13px] text-teal-700 hover:underline underline-offset-4 flex items-center justify-center gap-1 group"
              href="#"
            >
              Tất cả series mới
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Newsletter Box (Cố định nền tối bật tông) */}
          <div className="p-6 bg-teal-800 rounded-2xl text-white shadow-md">
            <h3 className="font-['Playfair_Display'] text-[22px] font-bold mb-2">
              Đăng ký nhận tin
            </h3>
            <p className="text-[13px] opacity-80 mb-5 leading-relaxed">
              Nhận ngay thông báo qua email khi có chương mới của các bộ truyện
              bạn đang theo dõi.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[14px] focus:ring-1 focus:ring-white focus:border-white outline-none placeholder:text-white/50 text-white transition-all"
                placeholder="Nhập địa chỉ email của bạn..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-teal-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all text-[14px] shadow-sm active:scale-[0.98]"
              >
                Đăng ký ngay
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default NewReleases;
