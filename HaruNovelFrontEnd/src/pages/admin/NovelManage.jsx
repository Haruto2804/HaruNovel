import React, { useState } from "react";

// --- MOCK DATA ---
const statsData = [
  {
    id: 1,
    label: "Total Titles",
    value: "1,284",
    icon: "book",
    color: "text-teal-700 bg-teal-100",
  },
  {
    id: 2,
    label: "Active Drafts",
    value: "142",
    icon: "edit_note",
    color: "text-blue-700 bg-blue-100",
  },
  {
    id: 3,
    label: "Total Views",
    value: "2.4M",
    icon: "visibility",
    color: "text-indigo-700 bg-indigo-100",
  },
  {
    id: 4,
    label: "Growth",
    value: "+12.5%",
    icon: "trending_up",
    color: "text-emerald-700 bg-emerald-100",
  },
];

const mockNovels = [
  {
    id: "LN-9021",
    title: "The Midnight Library",
    author: "Eleanor Vance",
    category: "Fantasy",
    status: "Published",
    views: "242,109",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHUzQmFfWncRYTwDnOuF5m66Hps9ERr1LsN-oSbKlJx2SIut_bZ4OL75rDc1ZYHPBxWjN4-hbtiIkPs4VrzQHnEbK9_jdB6uqXkoroysecJSUAnhJOUVQlfgsQpatXlyDoO_Z-c1Fh5X7SJQ2niVecgg36kdU3VNy1MPacwTyxpPstHxXZs68TZ6Qy6l8Qt5SHZiaGgFFe8XtvFMc-mZO2dbWqr8RrtQd84jpjLTreq-uuWhcPSUjSO1AWMomIFsyAZfe4uvL8dIw",
  },
  {
    id: "LN-8452",
    title: "Echoes of Tomorrow",
    author: "Julian Thorne",
    category: "Sci-Fi",
    status: "Draft",
    views: "1,024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfzMisK82UyHXSIQkTrJrFDIoTi2nZT0TZgqjYPWYW-SlEx9zT5XtKX4mVQnXqaCE-Cw2ZLKIVUFGPZsn8scca2ZhGyV8KTWcRdLGGmv1jwckvMW_nlhEnwXwk4c_mRFz9C-RVThUGSjitcbVtPTcGdthy3_mMsUsW4OoOszIleeoWnnzbkfQ6Mns130PtG4VC_9VJhPJtjgx_5w5Dn_Uwd4OqLCiGbJFxaRTDSSk2wvSFvAAGYb9kBXst8ZneonWM2AnSOSijK70",
  },
  {
    id: "LN-7721",
    title: "Whispers in the Rain",
    author: "Sarah J. Miller",
    category: "Romance",
    status: "Published",
    views: "88,432",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzwFobxTZ44ynjYIql3qmoKLWriretaLWA4DfdQ-vY4IaE2i8HEoc_eEAMN7E7dNx9Oh8AfqdGsfhAKb7Bs8s2jaMOR_IFeaAf8hFE2Fybwn5OVugA0UQ9nlZuQAue7Dc1DoV2bMxWXtcUOlzWUIV3nc94N_wSJYgz-lM8_NNP6eivnhdLsdYpS1IYhPCd1WUiZytIGK6wlC-KIRWx3GvOm7ClldgX55FyAJnPbK6gd7Dlec3cWQ_SCs-yDBFtJ0HBb35Ja3JPu2k",
  },
  {
    id: "LN-6211",
    title: "The Alchemist's Shadow",
    author: "Markus Wright",
    category: "Thriller",
    status: "Published",
    views: "15,772",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNTwk15JCfynwK4Cm4oa_cLrRXFfoT8AN7oa64somcYKBCoxVy47O4WeIcPH72SfPyvSlRF-MC553jSleaHKSRNcOkdxiZ4Js_5_zQuAv4DxFBruK30WqnHFUFFb63nZS6zKj_OlWAOCOCCuvxpu01rLAcXvHV2T-D4ikwanUTeOHpRWKNT_lGFkwBb0ZcpRwPiiJi1gjgBlzVgIrNzBBLgBOKBiK43uybtAB8mV3o3kp0HH_4uazjEtOzo_CMHrZDKTxmcie2BfQ",
  },
];

const NovelManage = () => {
  // --- STATES CHO TÌM KIẾM VÀ LỌC ---
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("Status: All");

  // --- LOGIC LỌC DỮ LIỆU ---
  const filteredNovels = mockNovels.filter((novel) => {
    const matchesSearch =
      novel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      novel.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      novel.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All Categories" || novel.category === categoryFilter;
    const matchesStatus =
      statusFilter === "Status: All" || novel.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto font-['Inter']">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <nav className="flex items-center gap-2 text-slate-400 mb-2">
            <span className="font-bold text-[11px] tracking-wider">ADMIN</span>
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="font-bold text-[11px] tracking-wider text-teal-700">
              NOVEL MANAGEMENT
            </span>
          </nav>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900">
            Library Catalog
          </h2>
          <p className="text-slate-500 font-medium text-[14px] mt-1">
            Manage, edit, and curate the literary collection of HaruNovel.
          </p>
        </div>
        <a href="/admin/novels/create">
          <button className="bg-teal-700 text-white px-6 py-3 rounded-xl font-bold text-[13px] flex items-center gap-2 shadow-sm hover:bg-teal-800 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create New Novel
          </button>
        </a>
      </div>

      {/* QUICK STATS (BENTO STYLE) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-slate-400 font-bold text-[11px] tracking-wider uppercase">
              {stat.label}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-['Playfair_Display'] text-[28px] font-bold text-slate-900">
                {stat.value}
              </span>
              <div className={`p-2.5 rounded-xl ${stat.color}`}>
                <span className="material-symbols-outlined text-[20px]">
                  {stat.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN DATA TABLE CONTAINER */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {/* TABLE FILTERS & SEARCH */}
        <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 transition-all w-full sm:w-64">
              <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2">
                search
              </span>
              <input
                type="text"
                placeholder="Search title, author, ID..."
                className="bg-transparent border-none focus:ring-0 text-[13px] font-medium text-slate-700 outline-none w-full placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
              <span className="material-symbols-outlined text-slate-400 text-[20px] mr-1">
                filter_list
              </span>
              <select
                className="bg-transparent border-none focus:ring-0 text-[13px] font-bold text-slate-600 outline-none cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option>All Categories</option>
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
                <option>Thriller</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
              <select
                className="bg-transparent border-none focus:ring-0 text-[13px] font-bold text-slate-600 outline-none cursor-pointer w-full"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>Status: All</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <p className="text-slate-400 text-[12px] font-bold italic">
            Showing {filteredNovels.length} results
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[11px] font-bold tracking-wider uppercase">
                <th className="px-6 py-4">Novel Details</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredNovels.length > 0 ? (
                filteredNovels.map((novel) => (
                  <tr
                    key={novel.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-16 rounded-md shadow-sm overflow-hidden flex-shrink-0 bg-slate-200">
                          <img
                            src={novel.img}
                            alt={novel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-['Playfair_Display'] font-bold text-[16px] text-slate-900 group-hover:text-teal-700 transition-colors">
                            {novel.title}
                          </h4>
                          <p className="text-slate-400 text-[11px] font-bold tracking-wider mt-1">
                            ID: {novel.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[14px] text-slate-700">
                      {novel.author}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-600 font-bold text-[11px] uppercase tracking-wider">
                        {novel.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${novel.status === "Published" ? "bg-teal-500" : "bg-slate-400"}`}
                        ></span>
                        <span
                          className={`font-bold text-[12px] ${novel.status === "Published" ? "text-teal-700" : "text-slate-500"}`}
                        >
                          {novel.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[14px] text-slate-600">
                      {novel.views}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1.5">
                        <button
                          className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                        <button
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Archive"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            archive
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    <span className="material-symbols-outlined text-[40px] opacity-50 mb-2">
                      search_off
                    </span>
                    <p className="font-medium text-[14px]">
                      No novels found matching your filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button className="flex items-center gap-1 font-bold text-[13px] text-slate-500 hover:text-teal-700 transition-colors disabled:opacity-50">
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
            Previous
          </button>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-lg bg-teal-700 text-white font-bold text-[13px] shadow-sm">
              1
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-[13px] transition-colors">
              2
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-[13px] transition-colors">
              3
            </button>
            <span className="px-1 text-slate-400 font-bold">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-[13px] transition-colors">
              128
            </button>
          </div>
          <button className="flex items-center gap-1 font-bold text-[13px] text-slate-500 hover:text-teal-700 transition-colors">
            Next
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovelManage;
