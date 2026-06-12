import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- MOCK DATA ---
const genres = [
  "Tất cả",
  "Kỳ ảo",
  "Lãng mạn",
  "Kinh dị",
  "Trinh thám",
  "Xuyên không",
];

const mockBooks = [
  {
    id: "bong-dem-thu-vien",
    title: "Bóng Đêm Thư Viện",
    author: "Eleanor Vance",
    genre: "Kỳ ảo",
    status: "Full",
    rating: 4.8,
    desc: "Một thủ thư phát hiện ra những cuốn sách trong tầng hầm bí mật có khả năng thay đổi thực tại của người đọc...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCVdKG1qVy1ArWhg544m3QWyue9NaFadt9n1fyowDheduJe4EzhCyntmU2h88btgnerSr0rp6tfa8jflWWvKh6hJTBA5Xkjh2nXhMREM4rf6iSHAknhUta1yfgA732vTJnRfHvdmJ3EbgyrHxyLfpTZt8jxbJbnnvOr9SFBO4AhVYh12AAYjqd9wa1gxD8LFjJvXm6TBg7ifdEf-Gu7BybTfMhEVQVT6oT3V6tNFqOSohVyo_raYa1d--vEBrHaDeoYIukAengOCU",
    isBookmarked: true,
  },
  {
    id: "nhung-loi-nhac-cuoi",
    title: "Những Lời Nhắc Cuối",
    author: "Julian Blackwood",
    genre: "Trinh thám",
    status: "Đang tiến hành",
    rating: 5.0,
    desc: "Thám tử nghỉ hưu được mời tham gia một vụ án bí ẩn thông qua những mẩu giấy cũ trong thư viện trung tâm thành phố...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMm1-r3tLxajhrTxL78Ifci6nj8iSvDNis8AXiGZm5IYf21heK3t_ue9kmLmPUWiDt36KYbfXVvZ8MxsF1LhWyKNfasZeNnXQcJ03ZVp9vsvOPrXLXGtWjRfyQCLA1PdfZVP0SECgYdMCRuJ9iji_v7zwNzZ2p1JJvTvvN7vaNOnUO39zVgx34_kg9e34Z9j7qsFWOJzdXKsQZ4TJUSwwk9C1Ym4nEU-IjEhBrukBGRU3SyFOA2Nh6QGk9P3rZGaPK9DGKe-KGXQs",
    isBookmarked: false,
  },
  {
    id: "vong-am-thoi-gian",
    title: "Vọng Âm Thời Gian",
    author: "Sarah Chen",
    genre: "Lãng mạn",
    status: "Full",
    rating: 4.5,
    desc: "Hai người xa lạ gặp nhau qua những bức thư cổ tình cờ tìm thấy trong một nhà sách cũ, họ nhận ra mình sống cách nhau 50 năm...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvI6LJloMDiS6aXcZIm1Z-glrRi39hLOxxT4ZI9JwpgEjyHxBw9fsHEE-Sqi7vJrs755YzwlaKT-Ghbx3xOTqiBMFb4fNWaIdBOOaQN4tPh1xLroekOCqQNlIwxaeilWgY8GHjEFtmGnjI4d7ROlqLAZRFTDk0lYc2IAhU2eozX_v8dMRYQKpZSLE5sSXrJFWPGxgNVQhMJX-SsAgta_i8xaKrgd780L371Ar8OtD588q-ma3K1ENrc9CVZ_6fuf-DLLQntvdBr2s",
    isBookmarked: true,
  },
  {
    id: "tieng-goi-luc-nua-dem",
    title: "Tiếng Gọi Lúc Nửa Đêm",
    author: "Marcus Thorne",
    genre: "Kinh dị",
    status: "Đang tiến hành",
    rating: 4.2,
    desc: "Câu chuyện về một ngôi làng bị nguyền rủa nơi không ai được phép nói chuyện sau khi mặt trời lặn...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbHNabB7z1H_Lbm9YqjazMyeNnsq2L30jTKSLbFLVEXAZg0nI9jliXgS3oiTArhTsKpwGSS5Fs525vOljSwNv0DSKyF1CbvFjUd1VM2tknNI5Y4ISmuwPg7M9qzTIXkWgyPTGShWhrbdXqBkcK3_a_saOu13XVJyUG5zVyyXBVNN4hr3s5EI6noAIq6Tt6WX1ODZfk_tfPsz-2Yzgidcv63igeqeyG7fflrden6vr8YpmQVOb6GP5pkcGo-0RHBElvNAKCh0eIPzc",
    isBookmarked: false,
  },
  {
    id: "luu-tru-thoi-gian",
    title: "Lưu Trữ Thời Gian",
    author: "Lin Zhao",
    genre: "Xuyên không",
    status: "Full",
    rating: 4.9,
    desc: "Một kỹ sư công nghệ vô tình bị kéo về một triều đại không có trong sử sách, nơi cô phải sử dụng kiến thức hiện đại để tồn tại...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7yzlXcZaaFDS3viZFfHGTNKhW2kHrric9AzaCPd3D9jzvzicpWMC5UKCC-DAi8YsVUYwh1r_bV03800C8MTs4ZQ6T5U30SV6r13LPtWA22o5s2d40rC0r2FX5sEi7T1UWyFk_S7lePdQ6YfxLDBQu-1H7bYn7kgYDzTtpBAKiIpAKp8VbACMXTXnDO--gybmKFyfD54mccTKglCHxQV9VtYvCPcphZRtdRSEP0YsnopF1fz6T96TYtkFhM6f6ip125BZ0kvFrzME",
    isBookmarked: false,
  },
  {
    id: "hanh-trinh-vo-tan",
    title: "Hành Trình Vô Tận",
    author: "Owen Reed",
    genre: "Kỳ ảo",
    status: "Đang tiến hành",
    rating: 4.0,
    desc: "Cuộc phiêu lưu của một cậu bé qua các thế giới song song được kết nối bằng những cánh cửa vô hình trong rừng già...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCteADDnS9lxTsa3udtqF1T8B6AEqBz_z98nsFxX9p3dR4i9NHpCD5jYRycJJJ-GZFZgvrEVQzfQDg_2N4STlckdECNkCbEwwdIEXZzH5DukvM0pYKWxNRkcRjXANl_qzTGvZee7G4jEP4RG2-4uVIIELiLYwxNM_rejJGzrSx1hh1KHnfslZ-3xalzsS4Bpo8hNxygfSZA6YeXX1aXdLTr8-GxLGUpUKT_RUAAtGnkuO-e8O22Cr0Oj_0GkocCHpBbrRLL_hJOGOE",
    isBookmarked: false,
  },
];

// --- SUB-COMPONENT: EXPLORE BOOK CARD ---
const ExploreBookCard = ({ book }) => {
  const [bookmarked, setBookmarked] = useState(book.isBookmarked);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,53,39,0.06)] border border-outline-variant/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_-5px_rgba(0,53,39,0.15)] flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={book.img}
          alt={book.title}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setBookmarked(!bookmarked);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md backdrop-blur-sm transition-colors active:scale-95 z-10 ${
            bookmarked
              ? "bg-teal-700 text-white"
              : "bg-white/90 text-teal-900 hover:bg-teal-700 hover:text-white"
          }`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{
              fontVariationSettings: bookmarked ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            bookmark
          </span>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between bg-white text-slate-900">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="px-2 py-0.5 bg-teal-50 text-teal-800 border border-teal-100 text-[10px] font-bold uppercase tracking-wider rounded">
              {book.genre}
            </span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold uppercase tracking-wider rounded">
              {book.status}
            </span>
          </div>

          <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1 line-clamp-1">
            {book.title}
          </h3>
          <p className="text-slate-500 text-[13px] font-medium mb-3">
            Tác giả: {book.author}
          </p>

          <div className="flex items-center gap-1 mb-4 text-[#FFD700]">
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-slate-600 text-[13px] font-bold">
              {book.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3 mb-6">
            {book.desc}
          </p>
        </div>

        <Link
          to={`/chapter/${book.id}`}
          className="w-full text-center py-2.5 bg-slate-50 text-teal-800 font-bold text-[14px] rounded-xl hover:bg-teal-700 hover:text-white transition-all border border-teal-700/20 active:scale-[0.97]"
        >
          Đọc ngay
        </Link>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
function Explore() {
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [statusFilter, setStatusFilter] = useState({
    ongoing: false,
    completed: false,
  });
  const [sortBy, setSortBy] = useState("Phổ biến nhất");

  // --- LOGIC HÀM LỌC TRUYỆN THỰC TẾ ---
  const filteredBooks = mockBooks.filter((book) => {
    // 1. Lọc theo thể loại
    const matchGenre =
      selectedGenre === "Tất cả" || book.genre === selectedGenre;

    // 2. Lọc theo trạng thái checkbox
    if (statusFilter.ongoing && statusFilter.completed) return matchGenre;
    if (statusFilter.ongoing)
      return matchGenre && book.status === "Đang tiến hành";
    if (statusFilter.completed) return matchGenre && book.status === "Full";

    return matchGenre;
  });

  return (
    <main className="flex-grow max-w-[1200px] mx-auto px-4 md:px-12 py-12 w-full font-['Inter']">
      {/* Hero Title Section */}
      <div className="mb-12">
        <h1 className="font-['Playfair_Display'] text-[40px] font-bold text-[var(--theme-primary)] mb-3 tracking-tight">
          Khám phá Thư viện
        </h1>
        <p className="text-[var(--theme-text)] opacity-80 max-w-2xl text-[16px] leading-relaxed">
          Đắm chìm trong thế giới ngôn từ. Tìm kiếm những câu chuyện tuyệt vời
          nhất từ các tác giả tài năng trên khắp thế giới.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          {/* Ép cứng nền trắng text đen cho panel filter để tránh mất màu chữ khi chuyển dark theme */}
          <div className="bg-white text-slate-900 p-6 rounded-2xl border border-slate-200 space-y-8 sticky top-28 shadow-sm">
            {/* Filter: Category */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-800 mb-4 flex items-center justify-between border-b border-slate-100 pb-2">
                Thể loại
              </h3>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-3.5 py-1.5 rounded-full border text-[13px] font-semibold transition-all active:scale-95 ${
                      selectedGenre === genre
                        ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                        : "border-slate-200 text-slate-600 hover:border-teal-600 hover:text-teal-700"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter: Status */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                Trạng thái
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={statusFilter.ongoing}
                    onChange={(e) =>
                      setStatusFilter({
                        ...statusFilter,
                        ongoing: e.target.checked,
                      })
                    }
                    className="rounded border-slate-300 text-teal-600 focus:ring-teal-500/20 w-5 h-5 transition-all"
                  />
                  <span className="text-[14px] font-medium text-slate-600 group-hover:text-teal-700 transition-colors">
                    Đang tiến hành
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={statusFilter.completed}
                    onChange={(e) =>
                      setStatusFilter({
                        ...statusFilter,
                        completed: e.target.checked,
                      })
                    }
                    className="rounded border-slate-300 text-teal-600 focus:ring-teal-500/20 w-5 h-5 transition-all"
                  />
                  <span className="text-[14px] font-medium text-slate-600 group-hover:text-teal-700 transition-colors">
                    Đã hoàn thành
                  </span>
                </label>
              </div>
            </div>

            {/* Filter: Sort */}
            <div>
              <h3 className="text-[16px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                Sắp xếp
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[14px] font-semibold text-slate-600 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all cursor-pointer"
              >
                <option>Phổ biến nhất</option>
                <option>Mới cập nhật</option>
                <option>Đánh giá cao</option>
                <option>Nhiều bình luận</option>
              </select>
            </div>

            <button className="w-full py-3.5 bg-teal-700 text-white rounded-xl font-bold text-[14px] hover:bg-teal-800 transition-all shadow-md active:scale-[0.98]">
              Áp dụng bộ lọc
            </button>
          </div>
        </aside>

        {/* Main Grid Content */}
        <section className="grow">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <ExploreBookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            /* Empty State khi không tìm thấy truyện phù hợp */
            <div className="text-center py-20 bg-white/5 border border-dashed border-(--theme-border) rounded-2xl">
              <span className="material-symbols-outlined text-4xl opacity-40 mb-3">
                search_off
              </span>
              <p className="text-[15px] font-medium opacity-60">
                Không tìm thấy bộ truyện nào khớp với bộ lọc.
              </p>
            </div>
          )}

          {/* Pagination / Load More */}
          <div className="mt-16 flex flex-col items-center gap-5">
            <button className="px-10 py-3.5 bg-teal-700 text-white rounded-full font-bold text-[14px] hover:bg-teal-800 transition-all active:scale-95 flex items-center gap-2 group shadow-md">
              <span className="material-symbols-outlined text-[20px] transition-transform duration-500 group-hover:rotate-180">
                refresh
              </span>
              Xem thêm tác phẩm
            </button>

            <div className="flex items-center gap-4 font-semibold text-[14px] text-[var(--theme-text)]">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <span>Trang 1 / 24</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Explore;
