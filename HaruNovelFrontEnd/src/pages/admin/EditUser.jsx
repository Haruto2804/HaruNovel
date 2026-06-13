import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditUser = () => {
  // --- STATES ---
  const [role, setRole] = useState("author"); // reader, author, admin
  const [status, setStatus] = useState("Active"); // Active, Banned, Suspended
  const [formData, setFormData] = useState({
    displayName: "Julian Thorne",
    username: "jthor_reads",
    email: "julian.thorne@lumina-ink.com",
  });

  const logs = [
    {
      id: 1,
      icon: "history_edu",
      text: 'Published new chapter "The Shadow Waltz"',
      meta: "Today at 14:22",
    },
    {
      id: 2,
      icon: "login",
      text: "User logged in from macOS Safari",
      meta: "Yesterday at 09:15",
    },
    {
      id: 3,
      icon: "password",
      text: "Security alert: Multiple failed login attempts",
      meta: "Dec 14, 2023",
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto font-['Inter']">
      {/* HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <nav className="flex items-center gap-2 text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-2">
            <Link
              to="/admin/users"
              className="hover:text-teal-700 transition-colors"
            >
              Users
            </Link>
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="text-teal-700">Edit User Profile</span>
          </nav>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900">
            {formData.displayName}
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all active:scale-95">
            Discard Changes
          </button>
          <button className="px-6 py-2.5 bg-teal-700 text-white rounded-xl font-bold text-[13px] hover:bg-teal-800 shadow-sm active:scale-95 transition-all">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: SUMMARY & SECURITY */}
        <section className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Gg1GF81NfvrB6BVnDUT91Jo2ydU1hLjzt7gM7LMOSVTrbf9bqcJs576iL2JF89_xwLdrTqBVo1D25NH-L8ZLhYUxBb5LAdH96moFSwx0SJSiGbevlPWWhT9kdjS3B64-AFAwV8A9O6iA4X-5PzcZ_RPjSYIXABO5KANzExYGqXUYk0IVRas0WelxBc9gF7YmrF3UTvWC5BcLEJgjGhaiLfmADRLlaRyMA94w-ytGC_AF1dvMEJ96wKVrxlz8MsJCQ0mZ2zfV8iw"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-[20px] text-slate-900">
              {formData.displayName}
            </h3>
            <p className="text-slate-500 font-medium text-[14px]">
              {formData.username}
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded-full">
                Author
              </span>
              <span className="px-3 py-1 bg-teal-50 text-teal-700 text-[11px] font-bold uppercase tracking-wider rounded-full">
                Verified
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-[12px] uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-teal-600">
                security
              </span>{" "}
              Security
            </h4>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-[14px] font-medium text-slate-700">
                Reset Password{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-red-50 text-[14px] font-medium text-red-600">
                Disable MFA{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT: MAIN SETTINGS */}
        <section className="lg:col-span-8 space-y-6">
          {/* Account Settings */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900">
              Account Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Display Name
                </label>
                <input
                  value={formData.displayName}
                  onChange={(e) =>
                    setFormData({ ...formData, displayName: e.target.value })
                  }
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-3 text-[14px] font-semibold"
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Username
                </label>
                <input
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-3 text-[14px] font-semibold"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-slate-50 border-slate-200 rounded-xl p-3 text-[14px] font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Roles Selection */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-6">
              Roles & Permissions
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {["reader", "author", "admin"].map((r) => (
                <label
                  key={r}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${role === r ? "border-teal-600 bg-teal-50" : "border-slate-100"}`}
                >
                  <input
                    type="radio"
                    name="role"
                    className="hidden"
                    checked={role === r}
                    onChange={() => setRole(r)}
                  />
                  <p className="font-bold capitalize text-slate-800">{r}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-6">
              Account Status
            </h3>
            <div className="flex gap-4">
              {["Active", "Suspended", "Banned"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-6 py-3 rounded-full font-bold text-[13px] border ${status === s ? "bg-teal-700 text-white" : "bg-slate-50 text-slate-500"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900 mb-6">
              Recent Activity Log
            </h3>
            <div className="space-y-4">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <span className="material-symbols-outlined text-slate-400">
                    {log.icon}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-slate-800">
                      {log.text}
                    </p>
                    <p className="text-[11px] text-slate-400 font-bold uppercase">
                      {log.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditUser;
