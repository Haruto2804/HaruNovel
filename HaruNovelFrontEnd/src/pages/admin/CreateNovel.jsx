import React, { useEffect, useState } from "react";
import StoryEditor from "../../components/ui/StoryEditor";
import AuthorSelect from "../../components/ui/AuthorSelect";
import authorService from "../../services/authorService.js";
const CreateNovel = () => {
  // --- STATES CHO FORM DỮ LIỆU ---
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState(null);
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Fantasy");
  const [status, setStatus] = useState("Draft");
  //CREATE NOVEL DATA SENDER
  const [storyContent, setStoryContent] = useState(null);
  // --- STATES CHO TAGS ---
  const [tags, setTags] = useState(["High Fantasy", "Magic System"]);
  const [tagInput, setTagInput] = useState("");
  console.log(storyContent);
  // --- STATE CHO TOAST THÔNG BÁO ---
  const [showToast, setShowToast] = useState(false);

  // --- LOGIC XỬ LÝ TAGS ---
  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // --- LOGIC SUBMIT FORM ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây anh sẽ gọi API để gửi dữ liệu lên Backend
    console.log({
      title,
      author,
      description,
      genre,
      status,
      tags,
      allowComments,
      ageRestricted,
      premiumAccess,
    });

    // Hiển thị Toast thông báo thành công
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto font-['Inter'] relative min-h-full">
      {/* HEADER SECTION */}
      <header className="mb-10">
        <nav className="flex items-center gap-2 text-[12px] font-bold text-slate-400 mb-4 tracking-wider uppercase">
          <span className="hover:text-teal-700 cursor-pointer transition-colors">
            Manuscripts
          </span>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-teal-700">New Novel</span>
        </nav>
        <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
          Create New Novel
        </h2>
        <p className="text-[14px] font-medium text-slate-500">
          Begin a new journey in the HaruNovel Library. Fill in the details
          below to initialize your manuscript.
        </p>
      </header>

      {/* FORM BẮT ĐẦU */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: PRIMARY CONTENT */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section 1: Basic Information */}
            <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-slate-900">
                  Basic Information
                </h3>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Novel Title
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:font-normal placeholder:text-slate-400"
                    placeholder="e.g. The Weaver's Chronicles"
                  />
                </div>

                <div className="group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Author Identity
                  </label>
                  <AuthorSelect onChange={authors} />
                </div>

                <StoryEditor setStoryContent={setStoryContent} />
              </div>
            </section>

            {/* Section 2: Classification */}
            <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                  <span className="material-symbols-outlined">category</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-slate-900">
                  Classification
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Primary Genre
                  </label>
                  <div className="relative">
                    <select
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all cursor-pointer"
                    >
                      <option>Fantasy</option>
                      <option>Romance</option>
                      <option>Mystery</option>
                      <option>Sci-Fi</option>
                      <option>Historical Fiction</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-3.5 pointer-events-none text-slate-400">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Publication Status
                  </label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all cursor-pointer"
                    >
                      <option>Draft</option>
                      <option>Published</option>
                      <option>Scheduled</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-3.5 pointer-events-none text-slate-400">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Taxonomy Tags
                  </label>
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex flex-wrap gap-2 items-center focus-within:bg-white focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 transition-all">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-teal-50 text-teal-700 border border-teal-200 font-bold text-[12px] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="material-symbols-outlined text-[14px] hover:text-red-500 transition-colors"
                        >
                          close
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-[13px] font-semibold outline-none min-w-[120px] placeholder:text-slate-400 placeholder:font-normal"
                      placeholder="Type and press Enter..."
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: MEDIA & META */}
          <div className="lg:col-span-4 space-y-8">
            {/* Section 3: Cover Image */}
            <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-slate-900">
                  Cover Art
                </h3>
              </div>

              <div className="aspect-[2/3] w-full max-w-[240px] mx-auto rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center p-6 hover:border-teal-500 hover:bg-teal-50/30 transition-all group cursor-pointer relative overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 group-hover:scale-110 group-hover:text-teal-600 transition-transform">
                  upload_file
                </span>
                <p className="font-bold text-[13px] text-slate-600">
                  Drop image here or click to browse
                </p>
                <p className="text-[11px] font-semibold text-slate-400 mt-2">
                  Recommended: 1000x1500px JPG/PNG
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between pt-8 mt-4 border-t border-slate-200 gap-4">
          <button
            type="button"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-teal-700 border border-teal-200 bg-teal-50 rounded-xl font-bold text-[14px] hover:bg-teal-100 transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Draft
          </button>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              className="px-6 py-3 text-slate-500 font-bold text-[14px] hover:text-slate-800 transition-colors"
            >
              Discard
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-teal-700 text-white rounded-xl font-bold text-[14px] hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/20 transition-all active:scale-95"
            >
              Create Novel
              <span className="material-symbols-outlined text-[20px]">
                auto_stories
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* TOAST THÔNG BÁO THÀNH CÔNG */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white py-3.5 px-6 rounded-2xl flex items-center gap-3 shadow-xl transition-all duration-300 z-50 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-teal-400">
          check_circle
        </span>
        <span className="font-bold text-[13px]">
          Manuscript drafted successfully.
        </span>
      </div>
    </div>
  );
};

export default CreateNovel;
