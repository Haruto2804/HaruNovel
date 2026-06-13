import React, { useState } from "react";

// --- MOCK DATA ---
const mockChapters = [
  {
    id: "01",
    title: "The Emerald Awakening",
    novel: "Whispers of the Eternal Forest",
    date: "Oct 12, 2023",
    status: "Published",
    statusColor: "bg-teal-100 text-teal-700",
  },
  {
    id: "14",
    title: "Echoes of the Void",
    novel: "The Silent Archive",
    date: "Oct 15, 2023",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-600",
  },
  {
    id: "05",
    title: "The Alchemist's Secret",
    novel: "The Alchemist's Debt",
    date: "Nov 02, 2023",
    status: "Published",
    statusColor: "bg-teal-100 text-teal-700",
  },
  {
    id: "02",
    title: "Chromium Dreams",
    novel: "Midnight in Neo-London",
    date: "Dec 20, 2023",
    status: "Scheduled",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

const helpTips = [
  {
    icon: "info",
    title: "Batch Actions",
    desc: "Select multiple chapters to bulk update their status or move them to different novels.",
  },
  {
    icon: "auto_awesome",
    title: "AI Proofreading",
    desc: "Run the automated scanner on new chapters to find common syntax or grammar issues before publishing.",
  },
  {
    icon: "history",
    title: "Version Control",
    desc: "Access the history of any chapter to revert to previous drafts or compare editorial changes.",
  },
];

const ChapterManage = () => {
  const [filterNovel, setFilterNovel] = useState("All Novels");
  const [filterStatus, setFilterStatus] = useState("All");

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto font-['Inter']">
      {/* PAGE HEADER & STATS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
            Chapter Management
          </h2>
          <p className="text-slate-500 max-w-xl text-[14px]">
            Oversee and organize individual chapters across all published and
            draft novels in your library.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-5 py-2.5 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-colors shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              file_download
            </span>
            Export List
          </button>
          <button className="flex items-center gap-2 bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-teal-800 shadow-sm transition-all active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              add_circle
            </span>
            Add New Chapter
          </button>
        </div>
      </div>

      {/* FILTERS & BENTO CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <label className="block font-bold text-[12px] text-slate-400 uppercase tracking-wider mb-2">
            Filter by Novel
          </label>
          <select
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-[13px] font-semibold text-slate-700 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none cursor-pointer transition-all"
            value={filterNovel}
            onChange={(e) => setFilterNovel(e.target.value)}
          >
            <option>All Novels</option>
            <option>Whispers of the Eternal Forest</option>
            <option>The Alchemist's Debt</option>
            <option>Midnight in Neo-London</option>
            <option>The Silent Archive</option>
          </select>
        </div>

        <div className="md:col-span-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <label className="block font-bold text-[12px] text-slate-400 uppercase tracking-wider mb-2">
            Status
          </label>
          <div className="flex gap-2">
            {["All", "Draft", "Live"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`flex-1 rounded-xl py-2 text-[13px] font-bold transition-colors ${
                  filterStatus === status
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[28px] font-bold text-slate-900 leading-none">
                1,284
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                Total Chapters
              </p>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div className="text-center">
              <p className="font-['Playfair_Display'] text-[28px] font-bold text-amber-500 leading-none">
                42
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                Pending Review
              </p>
            </div>
          </div>
          <div className="flex -space-x-2">
            <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[11px] font-bold text-slate-600 shadow-sm">
              JD
            </div>
            <div className="w-9 h-9 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-teal-700 shadow-sm">
              AS
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[11px] font-bold text-blue-700 shadow-sm">
              +3
            </div>
          </div>
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Chapter Title
              </th>
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Novel Name
              </th>
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider text-center">
                No.
              </th>
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Created Date
              </th>
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 font-bold text-[11px] text-slate-400 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockChapters.map((chapter, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-teal-600 transition-colors cursor-grab">
                      drag_indicator
                    </span>
                    <span className="font-bold text-[14px] text-slate-800">
                      {chapter.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-[14px] font-medium text-slate-500">
                  {chapter.novel}
                </td>
                <td className="px-6 py-4 text-center font-bold text-[14px] text-teal-700">
                  {chapter.id}
                </td>
                <td className="px-6 py-4 text-[13px] font-medium text-slate-500">
                  {chapter.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${chapter.statusColor}`}
                  >
                    {chapter.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <a href="/admin/chapters/edit">
                      <button
                        className="p-2 cursor-pointer text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
                      </button>
                    </a>

                    <button
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      title="View"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      title="Delete"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-slate-500 text-[12px] font-medium">
            Showing 1 to 4 of 1,284 chapters
          </p>
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors text-slate-500">
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-teal-700 text-white text-[13px] font-bold shadow-sm">
              1
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 text-[13px] font-bold transition-colors">
              2
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 text-[13px] font-bold transition-colors">
              3
            </button>
            <span className="px-1 text-slate-400 font-bold">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 text-[13px] font-bold transition-colors">
              321
            </button>
            <button className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors text-slate-500">
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTEXTUAL HELP / TIPS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {helpTips.map((tip, index) => (
          <div
            key={index}
            className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 flex gap-4"
          >
            <span
              className="material-symbols-outlined text-teal-600"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {tip.icon}
            </span>
            <div>
              <h4 className="font-bold text-teal-800 text-[14px] mb-1">
                {tip.title}
              </h4>
              <p className="text-[13px] text-teal-700/70 leading-relaxed font-medium">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterManage;
