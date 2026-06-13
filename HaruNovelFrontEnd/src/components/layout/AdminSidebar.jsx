import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/admin", icon: "dashboard" },
    {
      id: "novels",
      label: "Novel Management",
      path: "/admin/novels",
      icon: "library_books",
    },
    {
      id: "chapters",
      label: "Chapter Management",
      path: "/admin/chapters",
      icon: "menu_book",
    },
    {
      id: "categories",
      label: "Category Management",
      path: "/admin/categories",
      icon: "category",
    },
    {
      id: "users",
      label: "User Management",
      path: "/admin/users",
      icon: "group",
    },
  ];

  return (
    <>
      {/* LỚP PHỦ MỜ (OVERLAY) CHO MOBILE */}
      {/* Click vào vùng mờ này sẽ đóng sidebar */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* THANH SIDEBAR CHÍNH */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col py-6 px-4 z-50 font-['Inter'] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* BRAND LOGO & CLOSE BUTTON (MOBILE) */}
        <div className="mb-10 px-2 flex items-center justify-between">
          <div>
            <h1 className="font-['Playfair_Display'] text-[24px] font-bold text-slate-900 tracking-tight">
              HaruNovel
            </h1>
            <p className="text-[11px] font-bold text-teal-600 uppercase tracking-widest mt-0.5">
              Admin Console
            </p>
          </div>
          {/* Nút đóng Sidebar chỉ hiện trên mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto custom-scrollbar pr-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)} // Bấm vào menu thì tự đóng Sidebar trên mobile
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-[14px] transition-all duration-200 ${
                  isActive
                    ? "bg-teal-50 text-teal-700 border-r-4 border-teal-600 shadow-sm shadow-teal-100/50"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 border-r-4 border-transparent"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${isActive ? "text-teal-600" : ""}`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* BOTTOM SECTION */}
        <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
          {/* Quick Action Button */}
          <a href="/admin/novels/create">
            <button className="w-full py-3 px-4 bg-teal-700 text-white font-bold text-[13px] rounded-xl shadow-md hover:bg-teal-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Create New Novel
            </button>
          </a>

          {/* Settings & Logout */}
          <div className="space-y-1">
            <Link
              to="/admin/settings"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-[13px] text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
              Settings
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-[13px] text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                logout
              </span>
              Log Out
            </button>
          </div>

          {/* Admin Profile Mini */}
          <div className="flex items-center gap-3 px-2 pt-4 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border-2 border-slate-200 overflow-hidden group-hover:border-teal-500 transition-colors shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_dSxhsshe-tCrdLDgkXLJHXbffk9rtAnmnOo-hOi9TiLangFgSiuAL5y8-m8buBi6dAbf0hzDT_t4F4DzqWGdPMseGUKIu22-SjlTUmV7is-3lpz3dW953KOmzeXypQVrYUy81iwKgb813oQxFtHE2xVjifSmpV3rlLN67Uci8BoQ5zRFCKuW04CS7FvooSOoHWZrxOsfzCyCm19UAvOAqkJnyn0FY5V1MU5EDU6-s77r1Kuo0rRrDCUrz9yamcCk9dZ2DeXHYaU"
                alt="Admin Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-[13px] text-slate-800 truncate group-hover:text-teal-700 transition-colors">
                Admin User
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
