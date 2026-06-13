import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditChapter = () => {
  // --- STATES QUẢN LÝ DỮ LIỆU FORM ---
  const [chapterNumber, setChapterNumber] = useState(142);
  const [chapterTitle, setChapterTitle] = useState("The Whisper of Embers");
  const [content, setContent] = useState(
    'The sky above the Jade Citadel was no longer blue. It was the color of a bruised plum, streaked with veins of incandescent gold that pulsed with every breath the Great Alchemist took. Master Lin stood at the precipice of the balcony, his fingers trembling as he clutched the vial of Embers.\n\n"You shouldn\'t have come here," he whispered, though the wind carried no voice but the roar of the converging elements. "The transition has already begun."\n\nBehind him, the massive bronze doors creaked. Elara stepped into the light, her armor scorched and her spirit weary. "I didn\'t come to stop the transition, Master. I came to witness the end of the lie. The Embers were never yours to command, and the silence that follows will be the only truth we have left."\n\nA ripple of heat distorted the air between them. Master Lin turned, his eyes reflecting a thousand years of failed experiments and lost dreams. The vial glowed with a sickening intensity, the liquid within swirling like a trapped star. For a moment, the entire world seemed to hold its breath, caught in the friction between what was and what was about to become.\n\nThen, the first ember fell.\n\nIt didn\'t drift like ash. It pierced the stone floor with the sound of a chime, leaving a glowing pit that smoked with the scent of ozone and ancient parchment. Master Lin let out a strangled laugh. "Then witness it, child of the sun. Witness the birth of a new era, or the funeral pyre of the old."',
  );
  const [status, setStatus] = useState("Live"); // "Live", "Draft", "Scheduled"
  const [visibility, setVisibility] = useState("Public - All Readers");

  // --- STATES QUẢN LÝ TƯƠNG TÁC (UI) ---
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  // --- LOGIC TÍNH TOÁN SỐ CHỮ & THỜI GIAN ĐỌC ---
  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    setWordCount(words);
    setReadingTime(Math.max(1, Math.ceil(words / 250))); // Trung bình 250 chữ/phút
  }, [content]);

  // --- LOGIC LƯU DỮ LIỆU ---
  const handleSave = () => {
    setIsSaving(true);
    // Giả lập gọi API lưu dữ liệu mất 1.5 giây
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);

      // Tắt thông báo thành công sau 2.5 giây
      setTimeout(() => setSaveSuccess(false), 2500);
    }, 1500);
  };

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto font-['Inter'] pb-32">
      {/* BREADCRUMBS */}
      <nav className="flex mb-4 gap-2 items-center text-slate-400 text-[13px] font-bold uppercase tracking-wider">
        <Link to="/admin" className="hover:text-teal-700 transition-colors">
          Admin
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <Link
          to="/admin/chapters"
          className="hover:text-teal-700 transition-colors"
        >
          Chapters
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span className="text-teal-700">Edit Chapter</span>
      </nav>

      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
            Edit: {chapterTitle || "Untitled Chapter"}
          </h2>
          <p className="text-slate-500 font-medium text-[14px]">
            Refining the narrative flow of Volume 4, Part II.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 border border-slate-200 bg-white text-slate-600 font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            Discard Changes
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2.5 bg-teal-700 text-white font-bold text-[13px] rounded-xl hover:bg-teal-800 shadow-sm transition-all flex items-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-[18px]">
              publish
            </span>
            Update Chapter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: DETAILS & EDITOR */}
        <div className="lg:col-span-8 space-y-8">
          {/* Chapter Details Card */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-teal-600">
                info
              </span>
              Chapter Details
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  Linked Novel
                </label>
                <div className="relative">
                  <select
                    disabled
                    className="w-full bg-slate-50 text-slate-500 font-semibold text-[14px] rounded-xl border border-slate-200 p-3 cursor-not-allowed appearance-none"
                  >
                    <option>The Chronicles of the Jade Alchemist</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400">
                    lock
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] font-semibold text-slate-400 italic">
                  Novel association cannot be changed once a chapter is created.
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  Chapter Number
                </label>
                <input
                  type="number"
                  value={chapterNumber}
                  onChange={(e) => setChapterNumber(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  Chapter Title
                </label>
                <input
                  type="text"
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
                />
              </div>
            </div>
          </section>

          {/* Chapter Content Editor */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[700px] overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-600">
                  edit_note
                </span>
                Chapter Content
              </h3>
              <div className="flex items-center gap-4 text-slate-500 text-[13px] font-medium">
                <span className="flex items-center gap-1">
                  <span className="font-bold text-teal-700">
                    {wordCount.toLocaleString()}
                  </span>{" "}
                  words
                </span>
                <span className="w-px h-4 bg-slate-300"></span>
                <span className="flex items-center gap-1">
                  Reading time:{" "}
                  <span className="font-bold text-teal-700">
                    {readingTime} min
                  </span>
                </span>
              </div>
            </div>

            {/* Editor Toolbar */}
            <div className="flex flex-wrap gap-1 p-2 bg-white border-b border-slate-100">
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_bold
                </span>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_italic
                </span>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_underlined
                </span>
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1 self-center"></div>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_align_left
                </span>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_align_center
                </span>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  format_align_right
                </span>
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1 self-center"></div>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  link
                </span>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  image
                </span>
              </button>

              <div className="ml-auto flex items-center gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold bg-slate-50 text-slate-600 border border-slate-200 rounded-lg hover:bg-white hover:text-teal-700 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">
                    history
                  </span>{" "}
                  History
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold bg-slate-50 text-slate-600 border border-slate-200 rounded-lg hover:bg-white hover:text-teal-700 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">
                    fullscreen
                  </span>{" "}
                  Focus
                </button>
              </div>
            </div>

            {/* Textarea Workspace */}
            <div className="flex-1 bg-[#FCF9F2] relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="absolute inset-0 w-full h-full bg-transparent border-none focus:ring-0 p-8 text-[16px] text-slate-800 leading-relaxed custom-scrollbar outline-none resize-none font-['Inter']"
                placeholder="Write your chapter content here..."
              />
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SETTINGS */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-teal-600">
                settings_suggest
              </span>
              Publication
            </h3>

            <div className="space-y-6">
              {/* Status Radio Buttons */}
              <div>
                <label className="block text-[13px] font-bold text-slate-500 mb-3 uppercase tracking-wider">
                  Current Status
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      id: "Live",
                      label: "Live / Published",
                      desc: "Visible to all readers immediately.",
                    },
                    {
                      id: "Draft",
                      label: "Draft",
                      desc: "Only visible to administrators.",
                    },
                    {
                      id: "Scheduled",
                      label: "Scheduled",
                      desc: "Publish at a specific future date.",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                        status === opt.id
                          ? "border-teal-500 bg-teal-50/50"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={opt.id}
                        checked={status === opt.id}
                        onChange={() => setStatus(opt.id)}
                        className="mt-0.5 text-teal-600 focus:ring-teal-500 cursor-pointer"
                      />
                      <div className="flex flex-col">
                        <span
                          className={`font-bold text-[14px] ${status === opt.id ? "text-teal-800" : "text-slate-700"}`}
                        >
                          {opt.label}
                        </span>
                        <span className="text-[12px] font-medium text-slate-500 mt-0.5">
                          {opt.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Visibility Select */}
              <div>
                <label className="block text-[13px] font-bold text-slate-500 mb-3 uppercase tracking-wider">
                  Visibility Setting
                </label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] font-semibold text-slate-700 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none cursor-pointer"
                >
                  <option>Public - All Readers</option>
                  <option>Premium - Paid Only</option>
                  <option>Early Access - Tier 1</option>
                  <option>Archived - Reference Only</option>
                </select>
              </div>

              {/* Quick Stats Meta */}
              <div className="p-4 bg-slate-50 rounded-xl space-y-3 border border-slate-100">
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500 font-medium">
                    First Published:
                  </span>
                  <span className="font-bold text-slate-800">Oct 12, 2023</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500 font-medium">
                    Last Modified:
                  </span>
                  <span className="font-bold text-slate-800">
                    Oct 24, 2023 - 2:15 PM
                  </span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500 font-medium">Author:</span>
                  <span className="font-bold text-slate-800">
                    C. J. Sterling
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-3">
                <button className="w-full py-3 bg-slate-800 text-white font-bold text-[13px] rounded-xl hover:bg-slate-900 transition-all flex justify-center items-center gap-2 shadow-sm active:scale-95">
                  <span className="material-symbols-outlined text-[18px]">
                    visibility
                  </span>
                  Preview as Reader
                </button>
                <button className="w-full py-3 border border-red-200 text-red-600 bg-white font-bold text-[13px] rounded-xl hover:bg-red-50 transition-all flex justify-center items-center gap-2 active:scale-95">
                  <span className="material-symbols-outlined text-[18px]">
                    delete_outline
                  </span>
                  Delete Chapter
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* STICKY BOTTOM SAVE BAR */}
      <footer className="fixed bottom-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] bg-white border-t border-slate-200 p-4 px-6 md:px-8 z-40 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2 text-slate-500 font-medium text-[13px]">
          <span className="flex items-center justify-center w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
          Autosaved at 2:48 PM
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-slate-500 font-bold text-[13px] hover:text-teal-700 transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              analytics
            </span>
            View Analytics
          </button>
          <div className="hidden sm:block w-px h-6 bg-slate-200"></div>

          <button className="px-6 py-2.5 border border-teal-200 text-teal-700 font-bold text-[13px] rounded-xl hover:bg-teal-50 transition-all active:scale-95">
            Preview
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`min-w-[160px] px-8 py-2.5 text-white font-bold text-[13px] rounded-xl shadow-sm transition-all flex justify-center items-center gap-2 active:scale-95 ${
              saveSuccess
                ? "bg-green-600 hover:bg-green-700"
                : "bg-teal-700 hover:bg-teal-800"
            }`}
          >
            {isSaving ? (
              <span className="material-symbols-outlined text-[18px] animate-spin">
                progress_activity
              </span>
            ) : saveSuccess ? (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Saved!
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  save
                </span>
                Save Changes
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default EditChapter;
