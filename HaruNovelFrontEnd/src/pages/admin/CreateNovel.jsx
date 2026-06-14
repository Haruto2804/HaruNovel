import React, { useEffect, useState } from "react";
import StoryEditor from "../../components/ui/StoryEditor";
import AuthorSelect from "../../components/ui/AuthorSelect";
import authorService from "../../services/authorService.js";
import CategorySelect from "../../components/ui/CategorySelect.jsx";
import StatusSelect from "../../components/ui/StatusSelect.jsx";
import novelService from "../../services/novelService.js";
const CreateNovel = () => {
  // --- STATES CHO FORM DỮ LIỆU ---
  const [title, setTitle] = useState("");

  const [authors, setAuthors] = useState(null);
  const [description, setDescription] = useState("");
  // Đã sửa: Để mặc định genre là null (chưa chọn)
  const [genre, setGenre] = useState(null);
  // Đã sửa: Status mặc định là 1 (Đang tiến hành) khớp với StatusSelect
  const [status, setStatus] = useState(1);
  //CREATE NOVEL DATA SENDER
  const [storyContent, setStoryContent] = useState(null);
  // --- STATES CHO TAGS ---
  const [tags, setTags] = useState(["High Fantasy", "Magic System"]);
  const [tagInput, setTagInput] = useState("");
  // --- STATE CHO TOAST THÔNG BÁO ---
  const [showToast, setShowToast] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
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
  // Nhớ thêm từ khóa async vào đây
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate cơ bản: Đảm bảo không bị bỏ trống các trường bắt buộc
    if (!title || !authors) {
      alert("Vui lòng nhập tên truyện và chọn tác giả!");
      return;
    }

    // 2. Chuyển đổi dữ liệu cho khớp với những gì Backend đang chờ (addNovel)
    const formData = {
      title: title,
      author_id: typeof authors === "object" ? authors.value : authors,
      description: description || "Chưa có mô tả",
      novel_status: status, // Đổi tên 'status' thành 'novel_status'
      // Tạm thời fix cứng link ảnh (vì giao diện Upload ảnh của bạn chưa gắn logic)
      cover_image:
        "https://res.cloudinary.com/ddvotq2cg/image/upload/v1781411115/1_lqnwkt.jpg",
    };
    console.log(formData);
    try {
      await novelService.addNovel(formData);
      // In ra để kiểm tra cục dữ liệu cuối cùng chuẩn bị bay lên Server
      console.log("Dữ liệu búng lên API:", formData);
      // 4. Hiển thị Toast thông báo thành công
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Chi tiết lỗi 400 từ Backend:",
        error.response?.data || error.message,
      );
      alert("Có lỗi xảy ra, vui lòng mở F12 tab Console để xem chi tiết!");
    }
  };
  // ✅ ĐÃ SỬA TẠM: Xử lý giá trị value khi tạo mới thành SỐ
  const handleCreate = async (inputValue) => {
    setIsLoading(true);
    try {
      const newAuthor = await authorService.addAuthor(inputValue);

      const formattedAuthor = {
        value: newAuthor.id,
        label: newAuthor.name || inputValue,
      };
      setOptions((prev) => [...prev, formattedAuthor]);
      setAuthors(formattedAuthor);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
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
          Begin a new journey in the Library. Fill in the details below to
          initialize your manuscript.
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
                  {/* Đã sửa: Truyền value và onChange vào AuthorSelect */}
                  <AuthorSelect
                    value={authors}
                    onChange={(selected) => setAuthors(selected)}
                    handleCreate={handleCreate}
                    options={options}
                    setOptions={setOptions}
                  />
                </div>

                <textarea
                  required
                  rows="10"
                  placeholder="Nhập mô tả truyện tại đây..."
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-[15px] font-medium text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none custom-scrollbar"
                />
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
                  {/* Đã sửa: Truyền value và onChange vào CategorySelect */}
                  <CategorySelect
                    value={genre}
                    onChange={(selected) => setGenre(selected)}
                  />
                </div>

                <div className="group">
                  <label className="block text-[13px] font-bold text-slate-500 mb-2 group-focus-within:text-teal-700 transition-colors uppercase tracking-wide">
                    Publication Status
                  </label>
                  {/* Đã sửa: Truyền value và onChange vào StatusSelect */}
                  <StatusSelect
                    value={status}
                    onChange={(selected) => setStatus(selected)}
                  />
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
