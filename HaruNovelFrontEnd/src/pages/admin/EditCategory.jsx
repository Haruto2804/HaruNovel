import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditCategory = () => {
  // --- STATES QUẢN LÝ DỮ LIỆU FORM ---
  const [categoryName, setCategoryName] = useState("High Fantasy");
  const [slug, setSlug] = useState("high-fantasy");
  const [description, setDescription] = useState(
    'Epic tales set in meticulously constructed secondary worlds. Often featuring magic systems, mythical creatures, and grand geopolitical struggles. High Fantasy emphasizes the "high stakes" of a world-spanning conflict.',
  );

  // --- LOGIC AUTO-GENERATE SLUG ---
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCategoryName(newName);

    // Tự động chuyển đổi tên thành slug (chữ thường, thay khoảng trắng bằng gạch ngang, bỏ ký tự đặc biệt)
    const generatedSlug = newName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setSlug(generatedSlug);
  };

  // --- LOGIC KIỂM TRA SEO CHECKLIST ---
  const isDescValid = description.length > 150;

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto font-['Inter']">
      {/* BREADCRUMBS */}
      <nav className="flex items-center gap-2 text-slate-400 font-bold text-[12px] uppercase tracking-wider mb-8">
        <Link
          to="/admin/categories"
          className="hover:text-teal-700 transition-colors"
        >
          Category Management
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span className="text-teal-700">Edit Category</span>
      </nav>

      {/* PAGE HEADER */}
      <header className="mb-10">
        <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
          Edit Category
        </h2>
        <p className="text-slate-500 font-medium text-[14px] max-w-xl">
          Update the metadata and visual identity for the "
          {categoryName || "Category"}" genre. Changes will reflect across all
          associated novel listings.
        </p>
      </header>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* STATS HIGHLIGHT CARD */}
        <div className="md:col-span-12 bg-teal-800 text-white p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <span className="material-symbols-outlined text-[28px]">
                auto_stories
              </span>
            </div>
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-100/70 mb-1">
                Category Usage
              </h4>
              <p className="font-['Playfair_Display'] text-[24px] font-bold">
                1,248 Novels in this Category
              </p>
            </div>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] px-5 py-2.5 rounded-xl transition-colors active:scale-95">
            View List
          </button>
        </div>

        {/* MAIN FORM SECTION */}
        <div className="md:col-span-8 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          {/* Category Name & Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="cat_name"
                className="font-bold text-[13px] text-slate-500 uppercase tracking-wide group-focus-within:text-teal-700 transition-colors"
              >
                Category Name
              </label>
              <input
                id="cat_name"
                type="text"
                value={categoryName}
                onChange={handleNameChange}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] font-semibold text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 group">
              <label
                htmlFor="cat_slug"
                className="font-bold text-[13px] text-slate-500 uppercase tracking-wide group-focus-within:text-teal-700 transition-colors"
              >
                Slug
              </label>
              <input
                id="cat_slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[14px] text-slate-600 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none font-mono"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 group">
            <label
              htmlFor="cat_desc"
              className="font-bold text-[13px] text-slate-500 uppercase tracking-wide group-focus-within:text-teal-700 transition-colors"
            >
              Description
            </label>
            <textarea
              id="cat_desc"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-[14px] leading-relaxed text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none custom-scrollbar"
            ></textarea>
            <p
              className={`text-[11px] font-bold mt-1 text-right ${isDescValid ? "text-teal-600" : "text-slate-400"}`}
            >
              {description.length} characters
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-100">
            <Link
              to="/admin/categories"
              className="px-6 py-3 border border-slate-200 text-slate-600 font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors active:scale-95"
            >
              Cancel
            </Link>
            <button className="px-8 py-3 bg-teal-700 text-white font-bold text-[13px] rounded-xl shadow-md hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/20 transition-all active:scale-95">
              Update Category
            </button>
          </div>
        </div>

        {/* VISUAL MEDIA & SEO SECTION */}
        <div className="md:col-span-4 space-y-6">
          {/* Visual Icon/Image */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <label className="font-bold text-[13px] text-slate-500 uppercase tracking-wide block mb-4">
              Visual Banner
            </label>
            <div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer mb-4 border-2 border-dashed border-slate-200 hover:border-teal-500 transition-colors flex items-center justify-center bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQUuLGoN5CuHho7o8tiQ2aoEFlqj90TWQcU17jj59644kpRxk2kbZnzFJmsLo1xD4X-bqFuXhct-AaQVwELQ2BxDQUtt5tueLgJ6OcYboP3jnQcQKE8pjnZL04cixD1CLPVdPY9a4dc07SiroUFDuaDGsERC4bNDl8nR0Np1O-JrmotkCapRYw_DIOlOlEEONrumWLGPCi3VFchR_lcRPE1u-sX_Hv-XHb43mx8XbKXcUfnBRNAf1dw8yyhdwYFftKKWr-imhOhFI"
                alt="Category Banner Preview"
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-col gap-2">
                <span className="material-symbols-outlined text-teal-700 text-[32px]">
                  upload
                </span>
                <span className="text-teal-800 font-bold text-[13px] bg-white/90 px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm">
                  Change Image
                </span>
              </div>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 text-center">
              Recommended size: 600x800px. JPG, PNG or WebP.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <h5 className="font-bold text-[13px] text-slate-500 uppercase tracking-wide mb-3">
                Live Preview Chip
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200 font-bold text-[12px] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    auto_stories
                  </span>
                  {categoryName || "Category Name"}
                </span>
              </div>
            </div>
          </div>

          {/* SEO Checklist */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 text-slate-800 mb-4">
              <span className="material-symbols-outlined text-[20px] text-teal-600">
                info
              </span>
              <h5 className="font-bold text-[14px]">SEO Checklist</h5>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span
                  className={`material-symbols-outlined text-[18px] ${slug ? "text-green-600" : "text-slate-300"}`}
                >
                  {slug ? "check_circle" : "radio_button_unchecked"}
                </span>
                Slug is unique
              </li>
              <li className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span
                  className={`material-symbols-outlined text-[18px] ${isDescValid ? "text-green-600" : "text-slate-300 transition-colors"}`}
                >
                  {isDescValid ? "check_circle" : "radio_button_unchecked"}
                </span>
                Description &gt; 150 characters
              </li>
              <li className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span className="material-symbols-outlined text-[18px] text-slate-300">
                  radio_button_unchecked
                </span>
                Alt text for visual missing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
