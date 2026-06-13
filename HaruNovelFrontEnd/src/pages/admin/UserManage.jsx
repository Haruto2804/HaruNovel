import React, { useState, useEffect } from "react";

// --- MOCK DATA ---
const statsData = [
  {
    id: 1,
    label: "Total Users",
    value: "12,842",
    icon: "groups",
    color: "text-teal-700 bg-teal-50",
  },
  {
    id: 2,
    label: "Active Now",
    value: "1,405",
    icon: "bolt",
    color: "text-amber-600 bg-amber-50",
  },
  {
    id: 3,
    label: "Authors",
    value: "342",
    icon: "history_edu",
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: 4,
    label: "Banned",
    value: "12",
    icon: "block",
    color: "text-red-600 bg-red-50",
  },
];

const mockUsers = [
  {
    id: "U-001",
    name: "Julian Sterling",
    email: "j.sterling@example.com",
    initials: "JS",
    avatar: null,
    role: "Author",
    status: "Active",
    joinDate: "Oct 12, 2023",
  },
  {
    id: "U-002",
    name: "Elena Vance",
    email: "elena.v@library.net",
    initials: "EV",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2bNr8Jf-_IP-PsqKn38sEoPSqwAdl4qdwbUI2uSSnlR9TxLq4sIO9zowKLRAwNLEtkWAwJRvY0Tlb7Gi9ofBJq1-fFEXKf4J4Qgv20ab8ohA9K45miN1pMmTuy77kPrWm2yOas0EJH2ppuqVMqTwU3XtFWo4H7WbI4v0E9VeF8e2khRG5nqG6ocXxPOmiJxhuW1u4z9aaouJPxAHxzWLYzAwQ6qD8KSPM1SJl6NMkARKlIWhFbSPVBZ3QBPr8YlJCIxoyi6GKROk",
    role: "Reader",
    status: "Active",
    joinDate: "Jan 04, 2024",
  },
  {
    id: "U-003",
    name: "Marcus Reed",
    email: "m.reed@corp.com",
    initials: "MR",
    avatar: null,
    role: "Banned",
    status: "Banned",
    joinDate: "Nov 28, 2023",
  },
  {
    id: "U-004",
    name: "Adrian Thorne",
    email: "thorne_writing@gmail.com",
    initials: "AT",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArhzYrU2W78Rk3ShIxibRb-8hrOAY3SwZOG2um1b8xVaH-OWsiZXpDDBS8XuXPxuxPOGIaOyYu2Ue9CpVUg4EMxa6YOogT4WLtEqxvmDoBVDr_tHGohMIP_64yudHbct95_g6oiTDI0AawDMD456x5SqwznWfPEgjWhn5veVwdQ8DORTkT-eUBDDncEXi2LQIyqp_a-fINa1SnfjjkbHCz7Jsb80IStZ1r2QWD6E9rzGeaozfZcNtYYOO1moaRnPLwFNAIWko1Zp8",
    role: "Admin",
    status: "Active",
    joinDate: "Feb 15, 2024",
  },
];

const UserManage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  // --- LOGIC LỌC NGƯỜI DÙNG ---
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // --- HÀM XỬ LÝ TOAST THÔNG BÁO ---
  const handleAction = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // --- HÀM RENDER MÀU SẮC ROLE ---
  const getRoleStyle = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Author":
        return "bg-teal-50 text-teal-700 border-teal-200";
      case "Reader":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Banned":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto font-['Inter'] relative min-h-full">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900 mb-2">
            User Management
          </h2>
          <p className="text-slate-500 text-[14px] max-w-2xl font-medium">
            Review and manage all registered users within the HaruNovel
            ecosystem. You can adjust roles, toggle account statuses, and
            monitor engagement metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white text-slate-600 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              filter_list
            </span>
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-xl font-bold text-[13px] hover:bg-teal-800 transition-all shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export CSV
          </button>
        </div>
      </div>

      {/* ANALYTICS OVERVIEW GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <p className="font-bold text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="font-['Playfair_Display'] text-[28px] font-bold text-slate-900 leading-none">
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-xl ${stat.color}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Search Bar Container */}
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-[13px] font-medium text-slate-700 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">User Details</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/80 transition-colors duration-150 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-xl object-cover shadow-sm border border-slate-200"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 shadow-sm border border-slate-200">
                            {user.initials}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-[14px] text-slate-900 group-hover:text-teal-700 transition-colors">
                            {user.name}
                          </p>
                          <p className="font-medium text-[12px] text-slate-500 mt-0.5">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-md text-[11px] font-bold border ${getRoleStyle(user.role)}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-teal-500" : "bg-red-500"}`}
                        ></span>
                        <span
                          className={`font-bold text-[12px] ${user.status === "Active" ? "text-teal-700" : "text-red-600"}`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-[13px] text-slate-500">
                      {user.joinDate}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a href="/admin/users/edit">
                          <button
                            onClick={() =>
                              handleAction(`Role updated for ${user.name}`)
                            }
                            className="p-2 hover:bg-teal-50 rounded-lg text-slate-400 hover:text-teal-600 transition-colors active:scale-95"
                            title="Edit Role"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              edit
                            </span>
                          </button>
                        </a>
                        <button
                          onClick={() =>
                            handleAction(
                              user.status === "Active"
                                ? `User ${user.name} has been banned.`
                                : `User ${user.name} access restored.`,
                            )
                          }
                          className={`p-2 rounded-lg transition-colors active:scale-95 ${user.status === "Active" ? "text-slate-400 hover:bg-red-50 hover:text-red-600" : "text-slate-400 hover:bg-teal-50 hover:text-teal-600"}`}
                          title={
                            user.status === "Active"
                              ? "Ban User"
                              : "Restore User"
                          }
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            {user.status === "Active"
                              ? "block"
                              : "settings_backup_restore"}
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    <span className="material-symbols-outlined text-[40px] opacity-50 mb-2">
                      person_off
                    </span>
                    <p className="font-medium text-[14px]">
                      No users found matching your search.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="font-medium text-[12px] text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-700">
              1 - {filteredUsers.length}
            </span>{" "}
            of 12,842 users
          </p>
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-200 disabled:opacity-50 text-slate-500 transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-teal-700 text-white rounded-lg font-bold text-[13px] shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded-lg font-bold text-[13px] text-slate-600 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded-lg font-bold text-[13px] text-slate-600 transition-colors">
              3
            </button>
            <span className="px-1 text-slate-400 font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded-lg font-bold text-[13px] text-slate-600 transition-colors">
              3211
            </button>
            <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTEXTUAL TOAST NOTIFICATION */}
      <div
        className={`fixed bottom-8 right-8 bg-slate-800 text-white px-6 py-3.5 rounded-xl shadow-xl flex items-center gap-3 transition-all duration-300 transform ${
          toastMessage
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <span className="material-symbols-outlined text-teal-400">
          check_circle
        </span>
        <p className="font-bold text-[13px]">{toastMessage}</p>
      </div>
    </div>
  );
};

export default UserManage;
