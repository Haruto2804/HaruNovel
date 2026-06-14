import React, { useEffect, useRef, useState } from "react";
// Import Quill và CSS đúng theo tài liệu bạn vừa đọc
import Quill from "quill";
import "quill/dist/quill.snow.css";
const formats = [
  "bold",
  "italic",
  "underline", // Chữ
  "list",
  "bullet", // Danh sách
  "link",
  "image", // Liên kết, hình ảnh
];
export default function StoryEditor({ setStoryContent }) {
  const editorRef = useRef(null);
  // Tham chiếu để lưu lại instance của Quill, tránh khởi tạo nhiều lần
  const quillInstance = useRef(null);

  useEffect(() => {
    // 2. Kiểm tra xem thẻ div đã tồn tại chưa và Quill đã được khởi tạo chưa
    if (editorRef.current && !quillInstance.current) {
      // 3. Khởi tạo Quill giống hệt tài liệu
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Enter the story's soul here...",
        modules: {
          toolbar: "#custom-toolbar",
        },
        formats: formats, // Chỉ những định dạng này mới được giữ lại
      });

      quillInstance.current.on("text-change", () => {
        setStoryContent(quillInstance.current.getContents());
      });
    }
  }, []);
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">
        Synopsis & Description
      </h2>
      <div
        id="custom-toolbar"
        className="bg-slate-50 flex items-center px-3 py-2 border-b border-gray-200 gap-1"
      >
        {/* Nút In đậm */}
        <button className="ql-bold hover:bg-gray-200 p-1 rounded transition-colors"></button>
        {/* Nút In nghiêng */}
        <button className="ql-italic hover:bg-gray-200 p-1 rounded transition-colors"></button>
        <button className="ql-underline hover:bg-gray-200 p-1 rounded transition-colors"></button>{" "}
        {/* Thanh dọc ngăn cách (Giống thiết kế của bạn) */}
        <div className="h-5 w-px bg-gray-300 mx-2"></div>
        {/* Nút Danh sách chấm */}
        <button
          className="ql-list hover:bg-gray-200 p-1 rounded transition-colors"
          value="bullet"
        ></button>
        {/* Nút Chèn link */}
        <button className="ql-link hover:bg-gray-200 p-1 rounded transition-colors"></button>
      </div>
      <div className="bg-gray-50 rounded-lg overflow-hidden pb-12 h-50">
        {/* 4. Gắn tham chiếu vào thẻ div này */}
        <div ref={editorRef} className="h-48 bg-white border-none" />
      </div>
    </div>
  );
}
