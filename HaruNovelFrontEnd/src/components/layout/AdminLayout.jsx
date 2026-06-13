import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  // State quản lý việc ẩn/hiện sidebar trên thiết bị di động
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-['Inter']">
      {/* SIDEBAR COMPONENT (Nhận state và hàm đóng/mở) */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* KHU VỰC NỘI DUNG BÊN PHẢI */}
      {/* md:ml-64: Trượt nội dung sang phải 64px trên màn hình lớn. Màn hình nhỏ thì full (ml-0) */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 transition-all duration-300">
        {/* TOP ADMIN HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex justify-between items-center px-4 md:px-8 shadow-sm">
          {/* Nút Hamburger cho Mobile (Chỉ hiện trên màn hình nhỏ) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 -ml-2 mr-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <div className="w-full max-w-md relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search novels, users..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-[13px] font-semibold text-slate-700 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-slate-500 hover:bg-slate-100 hover:text-teal-600 rounded-full transition-colors relative active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* NỘI DUNG THAY ĐỔI THEO ROUTE (Dashboard sẽ render ở đây) */}
        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
