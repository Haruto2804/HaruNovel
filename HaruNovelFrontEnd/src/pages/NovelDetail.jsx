import React, { useState, useEffect } from "react";

// --- MOCK DATA ---
const tags = ["Epic Fantasy", "Magic Systems", "Nobility", "Mystery"];

const stats = [
  { label: "Views", value: "524,032" },
  { label: "Bookmarks", value: "12,890" },
  { label: "Rating", value: "4.9", icon: "star" },
  { label: "Chapters", value: "142" },
];

const volumes = [
  {
    id: 1,
    title: "Volume 1: The Scribe's Awakening",
    chaptersInfo: "Chapters 1-50",
    chapters: [
      {
        num: "001",
        title: "Chapter 1: The Golden Inkwell",
        date: "Oct 12, 2023",
      },
      {
        num: "002",
        title: "Chapter 2: Runes of the Old King",
        date: "Oct 14, 2023",
      },
      {
        num: "003",
        title: "Chapter 3: The Shadow in the Archive",
        date: "Oct 17, 2023",
      },
    ],
    hasMore: true,
  },
  {
    id: 2,
    title: "Volume 2: Whispers of the High Court",
    chaptersInfo: "Chapters 51-100",
    chapters: [
      {
        num: "051",
        title: "Chapter 51: Arrival at the Spire",
        date: "Jan 05, 2024",
      },
      {
        num: "052",
        title: "Chapter 52: The Emerald Banquet",
        date: "Jan 08, 2024",
      },
    ],
    hasMore: false,
  },
];

const recommendations = [
  {
    id: 1,
    title: "Echoes of the Void",
    author: "M.K. Sterling",
    rating: "4.8",
    bookmarks: "15k",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5MqqWQ4GjWtw9Qm5qm5sNKuXW9IwyVUpsizd6-GiPlsDrKvj-PUal3WqCcwZn95ADyACdsTkuMKcGiO5fGOWkRKOnv1vDQK_3EtTkfNqa8WBvWxf6FE86mheGTk3YxjH2Fixh3VRFckHTLG1fn6X1HeEL8B33MtFlKQn3rw-pl3N25ByyiIq6kqxsVhQN2BwpgXJfM92HSV3rCVNUX3LGIHbyOXLwkmQNAiphoQ6Ng84gNzElgUHKWIzfV7N1KwbjRZX9CLvL9-s",
  },
  {
    id: 2,
    title: "The Alchemist's Shadow",
    author: "Seraphina Moon",
    rating: "4.7",
    bookmarks: "8k",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8AxrVpMpSjUU0TUCd6pHaL4eZymUo0BkklM5DCfTwreXIGzzSqecHuXR3d2uLOneRUK2BdZgMoizHI0cbrTWpKE0pGN8odQtjX80gznS-UTBdjXre_ANF8x4LAQWwMBufHxvCTM7OnWjzlOlsMP2h5v2dgauCHCmV36LN6bI9aZ1MwU730gLhXFEZcirvTfJkKegmER8e1NFOd0WeHoe1w730tltme6DQoQTkdhSMHLmkVqQ_psQP6Yi0QsDmmwNXHlNuOKb8jD8",
  },
  {
    id: 3,
    title: "Winds of Change",
    author: "Julian Vance",
    rating: "4.9",
    bookmarks: "22k",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmmHKfZzaqKOZ3Wxgs8zDrdM8NLHqt1k7-mGQ31c46Z_357PRshDFDhpx5UG6n-qGWaVoNbwBSLPatVW-xpm7olY0n4VwVC2Xk_2onNeEgCAJX2WGVtv5FMy0mHttyMCTVtY6SlubqYgnBRyVz0BY4sXl6E3l-ZBybl66b5LTO-Y1SloShRTAC7_RuK0AyPRkr6R7DktwMp52YwY1rFJpHK4YF9uQTxDnlHOzj2bB129-Y0wVnDry-4BeMEM1y8I6A8o4L5O8ZA5Y",
  },
];

// --- MAIN COMPONENT ---
const NovelDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hiệu ứng cuộn cho header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="max-w-300 mx-auto px-4 md:px-12 py-8">
        {/* BREADCRUMBS */}
        <nav className="flex items-center gap-2 mb-12 text-[14px] font-semibold text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            Fantasy
          </a>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <span className="text-on-surface">The Chronicles of Aethelgard</span>
        </nav>

        {/* HERO SECTION (Thông tin Truyện) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative group">
              <img
                alt="Book Cover"
                className="w-full aspect-[2/3] object-cover rounded-lg shadow-[0_10px_30px_-5px_rgba(6,78,59,0.12)] border border-black/5 transition-transform duration-300 group-hover:scale-[1.02]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnP5PynKQtUkAIjkTmiNso4UD0PGQmb6ETTRk-cbDFu7veq2JTMnADNio6vI_uUyb_1VIDCctSJfFq3knRkVJkEm0094p2k-kIvr3b3t4YTb6T8oI_5akzhk9cS799ZIkJpHoo914Ms98zbyrARN-XPPxHJXcZALWRs1qQiDWZ7W6wyS7I8IlKPsCOINBAD0QjidGNeg7dhlESdGyumPgK6NF81Hx4TcfR6K-Vc-wQB3dmBk6qKAU3gwXOENQkKt3DJJKdAxb8qrg"
              />
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${
                  isBookmarked
                    ? "bg-[#D4AF37] text-white"
                    : "bg-white/90 text-on-surface-variant hover:text-[#D4AF37]"
                }`}
                title="Bookmark"
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: isBookmarked
                      ? "'FILL' 1"
                      : "'FILL' 0",
                  }}
                >
                  bookmark
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <h1 className="font-display-lg text-[48px] font-bold text-on-surface leading-tight">
                The Chronicles of Aethelgard
              </h1>
              <p className="font-display-lg text-[24px] text-[#555f6f] italic">
                by Alistair Thorne
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-primary-container/10 text-primary border border-primary/20 text-[14px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10 border-y border-outline-variant/30 py-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <p className="text-on-surface-variant text-[14px] font-semibold uppercase tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p className="font-display-lg text-[24px] font-bold flex items-center justify-center md:justify-start gap-1">
                    {stat.value}
                    {stat.icon && (
                      <span
                        className="material-symbols-outlined text-[#D4AF37]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {stat.icon}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-[#D4AF37] text-[#121212] font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">auto_stories</span>{" "}
                Start Reading
              </button>
              <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2 active:scale-95">
                <span className="material-symbols-outlined">list</span> Jump to
                Latest
              </button>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT & SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Synopsis & Chapters */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="font-display-lg text-[32px] font-bold mb-6 border-l-4 border-[#D4AF37] pl-4">
                Synopsis
              </h2>
              <div className="space-y-4 text-[18px] text-on-surface-variant leading-relaxed">
                <p>
                  In a world where the sun never sets on the floating spires of
                  Aethelgard, the balance of the Great Ether is shifting. Young
                  Valerius, a scribe's apprentice with an uncanny knack for
                  decoding forbidden runes, discovers a secret that has been
                  buried for three millennia.
                </p>
                <p>
                  As the ancient seals begin to crack, Valerius must navigate
                  the treacherous waters of the High Court and the shadowed
                  alleys of the Lower Reaches. With a disgraced knight and a
                  mysterious weaver of winds by his side, he embarks on a
                  journey that will determine whether the world remains in
                  perpetual light or falls into an age of unyielding shadow.
                </p>
                <p>
                  The Chronicles of Aethelgard is a sweeping epic of political
                  intrigue, forgotten magic, and the heavy price of truth in a
                  kingdom built on lies.
                </p>
              </div>
            </section>

            <section id="chapters">
              <div className="flex justify-between items-end mb-8">
                <h2 className="font-display-lg text-[32px] font-bold border-l-4 border-[#D4AF37] pl-4">
                  Chapter List
                </h2>
                <button className="text-primary text-[14px] font-semibold hover:underline">
                  Reverse Order
                </button>
              </div>

              {volumes.map((vol) => (
                <div key={vol.id} className="mb-10">
                  <div className="bg-surface-container/30 px-6 py-3 rounded-t-lg border-b border-outline-variant/30 flex justify-between items-center">
                    <h3 className="font-bold text-on-surface-variant text-[14px] uppercase tracking-widest">
                      {vol.title}
                    </h3>
                    <span className="text-on-surface-variant/60 text-xs">
                      {vol.chaptersInfo}
                    </span>
                  </div>
                  <div className="bg-white border border-t-0 border-outline-variant/20 rounded-b-lg overflow-hidden">
                    {vol.chapters.map((ch, idx) => (
                      <React.Fragment key={idx}>
                        <a
                          className="flex justify-between items-center p-5 hover:bg-primary/5 transition-colors group"
                          href="#"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-on-surface-variant/40 font-mono text-sm w-8">
                              {ch.num}
                            </span>
                            <span className="font-medium group-hover:text-primary">
                              {ch.title}
                            </span>
                          </div>
                          <span className="text-on-surface-variant/60 text-sm">
                            {ch.date}
                          </span>
                        </a>
                        {idx < vol.chapters.length - 1 && (
                          <div className="h-px bg-outline-variant/10 mx-5"></div>
                        )}
                      </React.Fragment>
                    ))}
                    {vol.hasMore && (
                      <div className="p-4 bg-surface-container/10 text-center border-t border-outline-variant/10">
                        <button className="text-primary text-[14px] font-semibold hover:underline">
                          View 47 more chapters
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column: Recommendations */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-surface-container/20 p-8 rounded-xl border border-outline-variant/20">
              <h3 className="font-display-lg text-[24px] font-bold mb-8 text-on-surface">
                Readers also liked
              </h3>
              <div className="space-y-8">
                {recommendations.map((rec) => (
                  <a key={rec.id} className="flex gap-4 group" href="#">
                    <div className="w-20 shrink-0">
                      <img
                        alt={rec.title}
                        className="w-full aspect-[2/3] object-cover rounded shadow-md group-hover:scale-105 transition-transform"
                        src={rec.img}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                        {rec.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm mb-1">
                        {rec.author}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className="material-symbols-outlined text-xs text-[#D4AF37]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="text-xs font-semibold">
                          {rec.rating}
                        </span>
                        <span className="text-xs text-on-surface-variant/60">
                          • {rec.bookmarks} Bookmarks
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <button className="w-full mt-10 py-3 text-primary font-bold border-2 border-primary/20 rounded-lg hover:bg-primary/5 active:scale-95 transition-all">
                Explore Similar Novels
              </button>
            </div>

            {/* Banner Forum */}
            <div className="relative overflow-hidden rounded-xl p-8 bg-primary text-white shadow-lg">
              <div className="relative z-10 text-black">
                <h4 className="font-display-lg text-[24px] font-bold mb-2">
                  Join the Discussion
                </h4>
                <p className="text-black text-sm mb-6">
                  Connect with 5,000+ other readers in the Aethelgard Community
                  Hub.
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded font-bold text-sm shadow-sm hover:bg-[#D4AF37] hover:text-white transition-colors active:scale-95">
                  Go to Forum
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12 pointer-events-none">
                <span className="material-symbols-outlined text-[120px]">
                  forum
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-24 bg-[#e1e3e0]/30 border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-start py-12 px-4 md:px-12 max-w-[1200px] mx-auto gap-8">
          <div className="space-y-4 max-w-xs">
            <span className="font-display-lg text-[32px] font-bold text-primary tracking-tighter">
              LuminaBooks
            </span>
            <p className="text-on-surface-variant text-[16px]">
              Curating the finest digital reading experiences for seekers of
              knowledge and lovers of lore.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
            <div className="space-y-4">
              <h5 className="font-bold text-primary uppercase text-xs tracking-widest">
                Platform
              </h5>
              <ul className="space-y-2 text-on-surface-variant text-[14px] font-semibold">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Browse
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    New Releases
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-primary uppercase text-xs tracking-widest">
                Community
              </h5>
              <ul className="space-y-2 text-on-surface-variant text-[14px] font-semibold">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Author Dashboard
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Forum
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-primary uppercase text-xs tracking-widest">
                Legal
              </h5>
              <ul className="space-y-2 text-on-surface-variant text-[14px] font-semibold">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/20 py-8 px-4 md:px-12 max-w-[1200px] mx-auto">
          <p className="text-on-surface-variant text-[14px] font-semibold text-center md:text-left">
            © 2024 LuminaBooks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NovelDetails;
