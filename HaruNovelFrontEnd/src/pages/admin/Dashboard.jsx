import React from "react";

// --- MOCK DATA ---
const kpiData = [
  {
    id: 1,
    title: "Total Users",
    value: "42,892",
    change: "+12.5%",
    isIncrease: true,
    icon: "person",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    id: 2,
    title: "Total Novels",
    value: "8,421",
    change: "+4.2%",
    isIncrease: true,
    icon: "book_5",
    iconColor: "text-teal-600 bg-teal-100",
  },
  {
    id: 3,
    title: "Daily Readers",
    value: "15,640",
    change: "-1.8%",
    isIncrease: false,
    icon: "monitoring",
    iconColor: "text-amber-600 bg-amber-100",
  },
  {
    id: 4,
    title: "Revenue (MDT)",
    value: "$52,190.00",
    change: "+22.1%",
    isIncrease: true,
    icon: "payments",
    iconColor: "text-indigo-600 bg-indigo-100",
  },
];

const chartBars = [
  40, 55, 45, 70, 65, 85, 60, 75, 50, 90, 80, 65, 55, 40, 60, 75, 85, 95, 70,
  55, 45, 65, 80, 75, 60, 90, 100, 85, 70, 95,
];

const systemAlerts = [
  {
    id: 1,
    title: "Novel Flagged",
    desc: '"Shadow Realm" flagged for content violation.',
    time: "2 mins ago",
    icon: "report",
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
  },
  {
    id: 2,
    title: "Payout Completed",
    desc: "October author revenue distributions processed.",
    time: "1 hour ago",
    icon: "check_circle",
    color: "text-teal-600",
    bg: "hover:bg-slate-50 border-transparent",
  },
  {
    id: 3,
    title: "New Author Application",
    desc: 'Julian V. submitted an application for "High Fantasy".',
    time: "4 hours ago",
    icon: "person_add",
    color: "text-blue-500",
    bg: "hover:bg-slate-50 border-transparent",
  },
  {
    id: 4,
    title: "System Update",
    desc: "Database maintenance scheduled for 02:00 UTC.",
    time: "8 hours ago",
    icon: "update",
    color: "text-slate-500",
    bg: "hover:bg-slate-50 border-transparent",
  },
];

const recentActions = [
  {
    id: 1,
    admin: "Elena L.",
    initials: "EL",
    avatarBg: "bg-teal-100 text-teal-700",
    action: "Approved Chapter",
    target: "The Gilded Cage - Ch 42",
    date: "Oct 29, 14:21",
    status: "Success",
    statusColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 2,
    admin: "Mark K.",
    initials: "MK",
    avatarBg: "bg-blue-100 text-blue-700",
    action: "Banned User",
    target: "reader_9921",
    date: "Oct 29, 11:05",
    status: "Completed",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    id: 3,
    admin: "Sarah A.",
    initials: "SA",
    avatarBg: "bg-amber-100 text-amber-700",
    action: "Updated Category",
    target: "Wuxia Classic",
    date: "Oct 28, 18:45",
    status: "Success",
    statusColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 4,
    admin: "James D.",
    initials: "JD",
    avatarBg: "bg-slate-200 text-slate-700",
    action: "Modified Settings",
    target: "Global Commission Rate",
    date: "Oct 28, 12:30",
    status: "Pending Review",
    statusColor: "bg-amber-100 text-amber-700",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto font-['Inter']">
      {/* PAGE HEADER */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900">
            System Overview
          </h2>
          <p className="text-slate-500 font-medium text-[15px]">
            Real-time performance metrics for HaruNovel ecosystem.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-[13px] text-slate-600 flex items-center gap-2 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            Last 30 Days
          </button>
          <button className="px-4 py-2.5 bg-teal-700 text-white rounded-xl font-bold text-[13px] flex items-center gap-2 hover:bg-teal-800 transition-colors shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export PDF
          </button>
        </div>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {kpiData.map((kpi) => (
          <div
            key={kpi.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-teal-500/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${kpi.iconColor}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>
              <span
                className={`font-bold text-[12px] px-2.5 py-1 rounded-full ${
                  kpi.isIncrease
                    ? "bg-teal-50 text-teal-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {kpi.change}
              </span>
            </div>
            <p className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-1">
              {kpi.title}
            </p>
            <h3 className="font-['Playfair_Display'] text-[28px] font-bold text-slate-900">
              {kpi.value}
            </h3>
          </div>
        ))}
      </div>

      {/* CHARTS & LISTS BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Main Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900">
                Reading Activity
              </h4>
              <p className="text-slate-500 font-medium text-[13px]">
                Engagement levels across the platform
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                <span className="text-[12px] font-bold text-slate-500">
                  Chapters Read
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-200"></span>
                <span className="text-[12px] font-bold text-slate-500">
                  Comments
                </span>
              </div>
            </div>
          </div>

          {/* Simulated Bar Graph */}
          <div className="relative flex-grow min-h-[250px] w-full bg-slate-50/50 rounded-xl flex items-end justify-between px-4 pb-8 pt-8 overflow-hidden border border-slate-100">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 py-8 pointer-events-none opacity-50">
              <div className="border-t border-slate-200 w-full"></div>
              <div className="border-t border-slate-200 w-full"></div>
              <div className="border-t border-slate-200 w-full"></div>
            </div>
            {/* Bars */}
            <div className="flex items-end gap-1 w-full h-full relative z-10">
              {chartBars.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-teal-600/20 hover:bg-teal-600 transition-colors rounded-t-sm cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`Value: ${height}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400">
            <span>OCT 01</span>
            <span>OCT 08</span>
            <span>OCT 15</span>
            <span>OCT 22</span>
            <span>OCT 30</span>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900">
              System Alerts
            </h4>
            <button className="text-teal-700 hover:underline font-bold text-[13px]">
              View All
            </button>
          </div>
          <div className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {systemAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start gap-4 p-3.5 rounded-xl transition-all cursor-default border ${alert.bg}`}
              >
                <div className="mt-1">
                  <span
                    className={`material-symbols-outlined text-[20px] ${alert.color}`}
                  >
                    {alert.icon}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-slate-900">
                    {alert.title}
                  </p>
                  <p className="text-[12px] text-slate-500 mb-1.5">
                    {alert.desc}
                  </p>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {alert.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECENT ACTIONS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h4 className="font-['Playfair_Display'] text-[20px] font-bold text-slate-900">
            Recent Management Actions
          </h4>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors active:scale-95">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors active:scale-95">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-wider">
                  Administrator
                </th>
                <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 font-bold text-[12px] text-slate-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentActions.map((action) => (
                <tr
                  key={action.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${action.avatarBg}`}
                      >
                        {action.initials}
                      </div>
                      <span className="text-[14px] font-bold text-slate-800">
                        {action.admin}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[14px] font-medium text-slate-700">
                    {action.action}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-slate-500 italic">
                    {action.target}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-500">
                    {action.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${action.statusColor}`}
                    >
                      {action.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center">
          <button className="text-teal-700 font-bold text-[13px] flex items-center gap-1 hover:gap-2 transition-all active:scale-95">
            Load More Activities
            <span className="material-symbols-outlined text-[18px]">
              keyboard_arrow_down
            </span>
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pt-4 pb-8 text-center text-slate-400">
        <p className="font-semibold text-[12px]">
          © 2024 HaruNovel Admin Dashboard • Version 2.4.0-build.88
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
