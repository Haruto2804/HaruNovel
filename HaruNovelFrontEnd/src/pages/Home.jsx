import React, { useState, useEffect } from "react";
import { TrendingBookCard } from "../components/ui/TrendingBookCard";
import { CategoryCard } from "../components/ui/CategoryCard";
import { RecentUpdateCard } from "../components/ui/RecentUpdateCard";
// --- MOCK DATA ---
const trendingBooks = [
  {
    id: 1,
    title: "Shadow Weaver",
    genre: "Action • Fantasy",
    views: "450k",
    rating: "4.8",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8S_LgHxSWPE8flEeO3iwdzox8WAni1HEDVA0cqWAmAgkzhukjdx5IYTlQp3SS-k_RKLV2z-dgmJtw_HgGst6Xab8e7ULyaROG_sNA57tnzpqunq1yTDJ1bToh3Cebq4MZKW2CyhduGGyDolBzJ8a5Tr-2DVrMm55EE57FbF_kfkT6tRrVzRRTeCToeAJY5-pGdFGJRP3vd_E6suc27N82v2CYe5pswNyZ0PImZ3AaRcNSYd0fPSgOSK-9S0L25FzpkXysGFCKHWg",
  },
  {
    id: 2,
    title: "Winter Blossom",
    genre: "Romance • Drama",
    views: "312k",
    rating: "4.9",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxLGc3j7DhDdlWqzeHNhGmLBeRO2S6ps2eSZ_gFylsrtBydXFAlQfSaI7235QI3nm1zSkGmG214PUvnrAeAmk4D5SnHvWgMGmEMk-Qh5PRrxV0cPEfGJPpefO0ICO7w2du7e52vsLInMgEExfTrl3-XUvQrXVEoq1bIqnVk8g4eRuaux2PZG-WGJr2kJSqVS9rVNRVq2mY_0DgfclA_6RxKR3WRXbpyBxZqE-A3DbnU7gf3NdyEpsV_3UAIbVMsHxT8A4WMznYVH0",
  },
  {
    id: 3,
    title: "The Last Cipher",
    genre: "Mystery • Thriller",
    views: "298k",
    rating: "4.7",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhWztD9ZfKVFuy57Nh3KtU_-gkw907dJ-4q5cfT7hKbUUrb75q-rctVzZODV4fgmCmy5G5BQ_sqh9CGUunuZ9hz9M5SiFYVoaDsa17Kbt06XWcH6C-jta86skflglEvBTPuXoHAVefGs6cb5gtAD1z0R1bcqbkaHODnvoaIsHUBIr4RJH4kjfI-8Jkz6KaYdGQFGIfd6sCfqAAboU9UN8a40wdyUgnL_IqRa42qNqu5CZwg_49r9O2ZBI-SwDrNufKu6aXV7-Ic4E",
  },
  {
    id: 4,
    title: "Nebula Protocol",
    genre: "Sci-Fi • Adventure",
    views: "185k",
    rating: "4.6",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAax_jQv8ATe7W7WGeFU0km7olw_hf2chu77zMESrQUolX7_a6oKvfXRLsXZiDIJzzHP4vo3oxA3mtq33tjl5IYJf5TajY0sr7ywbtNGzaXK1gdBbj095rHqHRztvOdU_qRqF9MFVwwsua9LXTEZrLQPvdNACOozx75vabcBYmz1xZWHccZeiHfg7Y14g5-SKWZNL7EFufjeSi8YQJFFE_HQVMlWPo9I7OLyZvagFI8-Ce7SqwH0ZwydCniUjD2UWTNzllr3TD-QJk",
  },
];

const categories = [
  {
    name: "Fantasy",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6P7YT_CL0_nTGA5q1uljCKSw5nMnDmvzbzdZeo9n81POYRgVJ2IFsJHY-mlVpkzhzR5lH3drxKLEmNlacmv3kGImUkncf5CAxT2zVZGbWsh_Vfd-iemwNrcq6Qj1chrhZSEThJMBZF2iRHlSVvsqAYBM8L8Eos6ZJHmiRMK1BcCGs2FSAU_bzlOngUnV3rF2RI2XL9dajkYaP3DMi8MlhNQhGFC1SJWFtOFvgrsOLDZYarGOVp5raxrbVQLdnVeUD4AGNSBVHsaY",
    bgClass: "bg-primary-container",
  },
  {
    name: "Romance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4A8DV_QJyD6z3GG9lGqrI4jqislWKbG_PhSyKtPOBafidpZRQrWLYi6NkgEt_SEBC7cikAbdZMWc5mIHDG0_N3RjQp0VQb-OXef8VdMGWR1KLqu5NeRnO4yHSmFm15W3KpSNMqNPpmnTJIpWxf0sGetg4VObdoqH3nwMiHy3o-Gwd10dvC3v6IWVuXBbPqADO7kTt9NyOSrU95GPqmvv2aXlDiJ2W_B0RM96YgwVg84Czibii7wxf-VyGGZmYeaUfM5OKxL_Hynk",
    bgClass: "bg-secondary-container",
  },
  {
    name: "Mystery",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxDYAeZ16FdKZN48jru7ZAR2hbe7roO3BqGEeIkeXMSN7iVgZaTDuejP58Q4tj7m7hrrWx3aBij0msMkPGBRs_RaNCcdpPgijSxaSpbZDkEOwNYUoblAlbeJ71sgZDlNbEF78SjOlWoMW6ERBYUbx2P71n-JTPCAe6q0vWsJ1wWbtvmmhQHReckOZEHPPaCY8l9UUBKRJAfQynVkU4D9TFG582E4bFQk7ofCt4EBjH9Rz_BeVA1MBsN6pLjxGoVidGtCpxFR1EhQA",
    bgClass: "bg-tertiary-container",
  },
  {
    name: "Sci-Fi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB-xEvUPL7dWueyAk5GqEyTS6lDvt-T0i912UUfIj7W6H7cqWOdB8Z-NDTmhM9-jOY3EqN10WBnBgjNEaGfkHePD7SWDOlL80FhPRb9BN4nyAX2h-hjlDW0GfMqOebdZo6toKrenYKriGA0EFrwJYrZEL7tXha9Uzyd_YcsTpFXiR0iv82Ddt2Z65p7sRDyAnezEPt3aqEC9By1GtV4rJgWIUMRC1K_BRPeZscLpCgWQIJKfjPSltJ_WWZSuDgl_DwEoUPQd1nyV8",
    bgClass: "bg-surface-variant",
  },
];

const recentUpdates = [
  {
    title: "Path of the Wanderer",
    chapter: "Ch. 142",
    time: "5 mins ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Luje6KHqxSnjvx5_SjG_37zr8AOpPypDIHTj3P7lfukIASquhtM3frAW8FTeEkOY44FVgFBwkduuTWs9E7pMW2bq3Xa_Gk3sYBLcV4-bhZFkbIUiEPikWHbTADJEFj3TNGE7dsci9iDfQ_g3qv0GR4yeCwS_GuPE892NsVHoc3Po9h14gPvuQEpfaKL0AyGEVxL9EQpV3dYsVgLc6ZnWtllYE0YRpQejlPR6BD92OBJG1dol-l9SYQPz6P5FYt7ofOELzgLpf3Y",
  },
  {
    title: "Glitch in the Grid",
    chapter: "Ch. 24",
    time: "18 mins ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfiOaxONL7yHvmUT1FNPHSMfpEtV2DtT_wbLjckVzLl9g_h6zrf2E6b2gYXmnf5BILnrl8h1iSBFCZ5_sgCXDgZNA-mrxyx4WsWxWp6lYakre2hGnGMcTFCju9a6IhILICm7TYNMSYeZ8EgqqRcT3h4mMUSTJFFyk9--8FNCRazd4xi6dc-KtHSAzJAdNhPe6XuXzj_F3GnnBZxFAGP5Tf1FVQQ-W1LFVgUvgKwzxu7bzqA-MBi8JJ_rGuByBuIAVjem4JGS2U4_o",
  },
  {
    title: "Echoes of History",
    chapter: "Ch. 89",
    time: "1 hour ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv1oPy-rKYtUTkkvRdeeptcnJ1-K8jxCD0cdwnl289dQo4H1XG2_CWCi9AbwYz0K7r-btMq02LV7lTTfM-plAT13AQejZXhtOtzJUVvS1k9bJyan6K27Tu7kmy2jtD2Ofg-qWXc53E4W7cX-alZjkQqi_seQVQsZeQ2Y59sV6miXITIl_n2hBWju3wx_KkC68rd1dQWStVEG3YSXoeySVx1yvTeLQx91d1Ap6I44sHDzCFWxEA-tBp96E7VXKKhUzeaZz4Hhl0lE4",
  },
  {
    title: "Midnight Waltz",
    chapter: "Ch. 12",
    time: "2 hours ago",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Rhxzt_gmD7e5r4xnyQ8LGV_W31x_KyN6wQTyoXH8D9ODuRvW_0idXa8IK3MYWhFkvj9R9ZfBL8Zpv6crMn3hnih-KYrU3bWELCud1T9xhvEwiW9O1oHF2lOdhHK2WuOApM9a5w3hg9Ym94eKkMfiWvOvWpgTcNeRdEJfLNcY19h630nV6C5DFMKYSkB8B4AXQhc3yFJbXFVe9WRk2WcrCS-KhnF5FF7rYqz-40Uj3qe7gaEEXL9kf7j1lDlyDSVTuwT6WUdcZ5A",
  },
];

// --- MAIN COMPONENT ---
const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main>
        {/* HERO SECTION */}
        <section className="relative w-full h-150 bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMEq6M6u0BPcbmD8OTOg5ATWz_4ExIH0muxgCMMcIVUPL6j4Il8GkgXDhjVDVp06_2VQhJDFQI8DDitukX9oDc3-etPnRGjM-xV_xBhg7LNsmrc3hgQKnTTqQGzJhi43UymlLctmN-3jOtGw4HlKqvLCPWAUZrgmh6txEkNnwjO3SMZ7NazFqy7IDZlK3FI455cOvlsGcJRe4nixxU_nmH4KY79tRygG1lzWEoZVInXTNZ_-y2lmKb2E6X1ChtbsNgh-MdYhw-bMo"
              alt="Hero Background"
            />
            {/* Cần cấu hình class 'hero-gradient' trong CSS hoặc dùng style trực tiếp */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #FCF9F2 30%, rgba(252, 249, 242, 0.8) 60%, transparent 100%)",
              }}
            ></div>
          </div>
          <div className="relative z-10 h-full flex items-center px-4 md:px-12 max-w-[1200px] mx-auto">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md mb-6 uppercase tracking-widest shadow-sm">
                Featured Novel
              </span>
              <h1 className="font-display-lg text-[48px] font-bold text-primary mb-4 leading-tight">
                The Alchemist's Silence
              </h1>
              <p className="font-body-lg text-[18px] text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                In a world where magic is measured by the clarity of one's
                voice, Elara is born into the Silence. As the empire teeters on
                the brink of collapse, her hidden gift may be the only thing
                that can restore the balance—or shatter it forever.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-4 bg-primary text-on-primary font-label-md text-[14px] rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  <span className="material-symbols-outlined">menu_book</span>{" "}
                  Read Now
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary font-label-md text-[14px] rounded-lg hover:bg-primary/5 transition-colors active:scale-95">
                  Add to Library
                </button>
              </div>
              <div className="mt-12 flex gap-8">
                <div>
                  <div className="font-headline-sm text-[24px] font-bold text-primary">
                    4.9
                  </div>
                  <div className="font-label-md text-[14px] text-on-surface-variant">
                    Rating
                  </div>
                </div>
                <div className="w-px h-12 bg-outline-variant/30"></div>
                <div>
                  <div className="font-headline-sm text-[24px] font-bold text-primary">
                    1.2M
                  </div>
                  <div className="font-label-md text-[14px] text-on-surface-variant">
                    Readers
                  </div>
                </div>
                <div className="w-px h-12 bg-outline-variant/30"></div>
                <div>
                  <div className="font-headline-sm text-[24px] font-bold text-primary">
                    342
                  </div>
                  <div className="font-label-md text-[14px] text-on-surface-variant">
                    Chapters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRENDING & CATEGORIES */}
        <section className="py-20 px-4 md:px-12 max-w-300 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Trending Now */}
            <div className="lg:col-span-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="font-headline-md text-[32px] font-bold text-primary">
                    Trending Now
                  </h2>
                  <p className="font-body-md text-on-surface-variant">
                    Stories capturing the imagination of readers today.
                  </p>
                </div>
                <a
                  className="text-primary font-label-md text-[14px] font-semibold hover:underline"
                  href="#"
                >
                  View All
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingBooks.map((book) => (
                  <TrendingBookCard book={book} />
                ))}
              </div>
            </div>

            {/* Categories Bento Grid */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <h2 className="font-headline-md text-[32px] font-bold text-primary mb-8">
                Categories
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <CategoryCard cat={cat} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RECENT UPDATES */}
        <section className="py-20 bg-surface-container-low border-t border-outline-variant/10">
          <div className="px-4 md:px-12 max-w-300 mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-md text-[32px] font-bold text-primary">
                  Recent Updates
                </h2>
                <p className="font-body-md text-on-surface-variant">
                  Stay up to date with the latest chapters from your favorite
                  authors.
                </p>
              </div>
              <button className="hidden sm:flex items-center gap-2 px-6 py-2 border border-outline-variant rounded-full text-[14px] font-bold text-primary hover:bg-surface-container transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">
                  filter_list
                </span>{" "}
                Filter
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentUpdates.map((update) => (
                <RecentUpdateCard update={update} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-auto bg-surface-dim dark:bg-inverse-surface border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-12 max-w-[1200px] mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display-lg text-[32px] font-bold text-primary dark:text-primary-fixed-dim tracking-tighter">
              LuminaBooks
            </span>
            <p className="font-body-md text-on-surface-variant dark:text-surface-variant max-w-xs text-center md:text-left">
              Bringing the world of web novels to life with a focused, premium
              reading experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <span className="font-label-md text-[14px] font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider mb-1">
                Company
              </span>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                About Us
              </a>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <span className="font-label-md text-[14px] font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider mb-1">
                Community
              </span>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Author Dashboard
              </a>
              <a
                className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Discord Community
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined">forum</span>
              </a>
            </div>
            <p className="font-label-md text-[14px] text-on-surface-variant dark:text-surface-variant">
              © 2026 LuminaBooks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-primary/40 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined text-[32px] group-hover:animate-pulse">
          auto_stories
        </span>
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background">
          !
        </span>
      </button>
    </div>
  );
};

export default Home;
