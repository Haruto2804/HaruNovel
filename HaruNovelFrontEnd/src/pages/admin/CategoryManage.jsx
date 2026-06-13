import React, { useState } from "react";

// --- MOCK DATA ---
const mockCategories = [
  {
    id: "fantasy",
    name: "Fantasy",
    desc: "Epic tales of magic, legendary quests, and mythical worlds beyond human imagination.",
    count: 1248,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJAMc4-IJNkFfiM3nTd70uAyb32zgrGYmnx32EGVUXVDtdkW0ktSwhRPB5TBRs0JMRYvT2uAxSMVoTtTAkJEiGeP6gqfxARAg6VizgAu-sFlwro6p3V18yEA405R9CbfpKyAfzi-Z89e4y2o5tYRttdQ7R2902gDltmrm8l--WtyHaEUqPfjflXPMtGmkQ_XTqmOivMYyBdav6FUDb4PErJ0uOdOUhDU7igGLIYHF0gVGtGI1XfJDDNm6JFUv9rbZpT2hg8uE-dSY",
    status: "Active",
  },
  {
    id: "romance",
    name: "Romance",
    desc: "Stories of the heart, exploring emotional connections, passion, and the complexities of love.",
    count: 954,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZyFdyQOljutvJNgyp6Glf3YEZMq5tnL0sQmAKT8VC506vk9D9fpDp6VC6ksDEumVthyoeFmz63afJHJV6TNyGdj2VaSAuOJtgeBtjZIkY2IQfHD31L_jAF0N2dERkOfDMeAqmif9U73j18vZPFSGsThU6ZTLEoRhFzipcXMwtH3fI4CxME0xuazy4kB7EQ6NnKOUmIlEdWXiyWUPIEZPbSZ1BdnFnTdjMMb2FY33dmmFKQuhGqTGIAFiBvupQ9-ctr5T8tHPW7XM",
    status: "Active",
  },
  {
    id: "mystery",
    name: "Mystery",
    desc: "Intriguing puzzles, suspenseful investigations, and the thrill of uncovering hidden secrets.",
    count: 721,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx290bZVd3YPzXxpDh9JexdO72kG0X0772YLiBg6lVJU_uWr2X_6G_XhxNOHyV6xZ5UcX6_-iPJwqisyeO4JkEUgkQkvjMgB5IbPNAfNKALAP_-SCtllezBpCGKsUWhLX4JsKJOjiftGSF7HCL0jKjWoDGV6bgfmvtYwztMGAFpSFs83befw1Qv3IyGvaYKw2m4VZ0L2B6nNdiKpHA5_W53G8PSkOONU-3MElKNntXRq9VK4Qbx5Otuko3ws3Hnmo3MAOlMqZt2ho",
    status: "Active",
  },
  {
    id: "scifi",
    name: "Sci-Fi",
    desc: "Speculative futures, interstellar travel, and the profound impact of scientific discovery.",
    count: 589,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCPY-2smfHJhAsRB8uL3A2LpIaaiuVj-OubseGqEuzwqfuySLrMjlpwZ4zyquY_B7jYBayDuaD6UOb0yhmMaP6YSp9BclLXIMb6F2jHXwJHw8Ycrn9WOhje3fmAGisg8yO-mUZS0TaGNYi5cOUMaWd94wU94FPN8nTis0pZrfwaxVmgJA46n_P8lziwY6s-9cXw3EW1sACwUl-KkgtNecDAsjourGMq43Kv1fQj_FG0R9fVc1XLhfbJdSCOgQgAX6BGDroGzPggwA",
    status: "Active",
  },
  {
    id: "history",
    name: "History",
    desc: "Historical fiction and factual accounts of past eras...",
    count: 342,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHUzQmFfWncRYTwDnOuF5m66Hps9ERr1LsN-oSbKlJx2SIut_bZ4OL75rDc1ZYHPBxWjN4-hbtiIkPs4VrzQHnEbK9_jdB6uqXkoroysecJSUAnhJOUVQlfgsQpatXlyDoO_Z-c1Fh5X7SJQ2niVecgg36kdU3VNy1MPacwTyxpPstHxXZs68TZ6Qy6l8Qt5SHZiaGgFFe8XtvFMc-mZO2dbWqr8RrtQd84jpjLTreq-uuWhcPSUjSO1AWMomIFsyAZfe4uvL8dIw",
    status: "Active",
  },
  {
    id: "horror",
    name: "Horror",
    desc: "Thrilling and terrifying narratives that keep readers on edge...",
    count: 211,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfzMisK82UyHXSIQkTrJrFDIoTi2nZT0TZgqjYPWYW-SlEx9zT5XtKX4mVQnXqaCE-Cw2ZLKIVUFGPZsn8scca2ZhGyV8KTWcRdLGGmv1jwckvMW_nlhEnwXwk4c_mRFz9C-RVThUGSjitcbVtPTcGdthy3_mMsUsW4OoOszIleeoWnnzbkfQ6Mns130PtG4VC_9VJhPJtjgx_5w5Dn_Uwd4OqLCiGbJFxaRTDSSk2wvSFvAAGYb9kBXst8ZneonWM2AnSOSijK70",
    status: "Active",
  },
];

const CategoryManage = () => {
  // --- STATES ---
  const [viewMode, setViewMode] = useState("grid"); // "grid" hoặc "list"
  const [searchTerm, setSearchTerm] = useState("");

  // --- LOGIC LỌC TÌM KIẾM ---
  const filteredCategories = mockCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto font-['Inter'] flex flex-col min-h-full">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
            Category Management
          </h2>
          <p className="text-slate-500 font-medium text-[14px]">
            Organize and curate the digital library shelves of HaruNovel.
          </p>
        </div>
        <button className="bg-teal-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-[13px] hover:bg-teal-800 shadow-sm active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px]">
            add_circle
          </span>
          Add Category
        </button>
      </div>

      {/* DASHBOARD STATS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <div>
            <p className="text-slate-400 font-bold text-[11px] uppercase tracking-wider">
              Total Categories
            </p>
            <p className="font-['Playfair_Display'] text-[24px] font-bold text-slate-900 leading-tight">
              24
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined">trending_up</span>
          </div>
          <div>
            <p className="text-slate-400 font-bold text-[11px] uppercase tracking-wider">
              Top: Fantasy
            </p>
            <p className="font-['Playfair_Display'] text-[24px] font-bold text-slate-900 leading-tight">
              1.2k
            </p>
          </div>
        </div>
      </div>

      {/* TOOLBAR: SEARCH & VIEW TOGGLE */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-96 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-transparent rounded-lg text-[13px] font-semibold text-slate-700 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-md flex items-center justify-center transition-all ${viewMode === "grid" ? "bg-white text-teal-700 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            title="Grid View"
          >
            <span className="material-symbols-outlined text-[20px]">
              grid_view
            </span>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-md flex items-center justify-center transition-all ${viewMode === "list" ? "bg-white text-teal-700 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            title="List View"
          >
            <span className="material-symbols-outlined text-[20px]">list</span>
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      {viewMode === "grid" ? (
        /* --- GRID VIEW (BENTO STYLE) --- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="/admin/categories/edit">
                    <button
                      className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-teal-600 transition-colors"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        edit
                      </span>
                    </button>
                  </a>
                  <button
                    className="p-1.5 hover:bg-red-50 hover:text-red-600 rounded-lg text-slate-400 transition-colors"
                    title="Delete"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>

              <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-2">
                {cat.name}
              </h3>
              <p className="text-slate-500 font-medium text-[13px] mb-6 flex-grow leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                  {cat.count} Novels
                </span>
                <button className="text-teal-700 font-bold text-[13px] flex items-center gap-0.5 hover:underline active:scale-95 transition-all">
                  Manage
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          ))}

          {/* Add New Category Placeholder Card */}
          <button className="border-2 border-dashed border-slate-300 hover:border-teal-500 hover:bg-teal-50/50 rounded-2xl p-6 transition-all duration-300 flex flex-col items-center justify-center group gap-4 min-h-[260px] active:scale-[0.98]">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:bg-teal-100 transition-all">
              <span className="material-symbols-outlined text-[28px]">add</span>
            </div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[18px] font-bold text-slate-500 group-hover:text-teal-800 transition-colors">
                New Category
              </p>
              <p className="text-slate-400 font-medium text-[12px] mt-1">
                Expand your library's reach
              </p>
            </div>
          </button>
        </div>
      ) : (
        /* --- LIST VIEW --- */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-grow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 font-bold text-[11px] text-slate-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 font-bold text-[11px] text-slate-500 uppercase tracking-wider w-full">
                    Description
                  </th>
                  <th className="px-6 py-4 font-bold text-[11px] text-slate-500 uppercase tracking-wider text-center">
                    Novels
                  </th>
                  <th className="px-6 py-4 font-bold text-[11px] text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 font-bold text-[11px] text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCategories.map((cat) => (
                  <tr
                    key={cat.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-8 h-8 rounded-lg object-cover shadow-sm border border-slate-200"
                      />
                      <span className="font-bold text-[14px] text-slate-900">
                        {cat.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-[13px] truncate max-w-[300px]">
                      {cat.desc}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-slate-700 text-[13px]">
                      {cat.count}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                        {cat.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-1.5 text-slate-400 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            more_vert
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCategories.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <span className="material-symbols-outlined text-[40px] opacity-50 mb-2">
                search_off
              </span>
              <p className="font-medium text-[14px]">
                No categories found matching your search.
              </p>
            </div>
          )}
        </div>
      )}

      {/* FOOTER META */}
      <footer className="mt-auto pt-8 text-center text-slate-400">
        <p className="font-bold text-[11px] uppercase tracking-widest">
          © 2026 HaruNovel Management System • v2.4.0-release
        </p>
      </footer>
    </div>
  );
};

export default CategoryManage;
