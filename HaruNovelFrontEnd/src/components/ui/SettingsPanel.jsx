import React from "react";

const SettingsPanel = ({
  isSettingsOpen,
  setIsSettingsOpen,
  fontFamily,
  setFontFamily,
  textSize,
  setTextSize,
  theme,
  setTheme,
  themes,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isSettingsOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Lớp phủ mờ (Overlay) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsSettingsOpen(false)}
      ></div>

      {/* Nội dung bảng Settings */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white text-slate-900 shadow-2xl p-8 transform transition-transform duration-300 ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-['Playfair_Display'] font-bold text-[24px] text-slate-900">
            Reading Settings
          </h2>
          <button
            className="p-2 hover:bg-slate-100 rounded-full active:scale-95 text-slate-600"
            onClick={() => setIsSettingsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-8">
          {/* Typography */}
          <div>
            <label className="font-['Inter'] font-semibold text-[14px] text-slate-500 block mb-4">
              Typography
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFontFamily("Lora")}
                className={`p-4 border-2 rounded-xl text-left transition-colors ${
                  fontFamily === "Lora"
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:border-teal-300 text-slate-700"
                }`}
              >
                <span className="font-['Lora'] block text-lg font-medium">
                  Lora
                </span>
                <span className="text-xs opacity-70">Classic Serif</span>
              </button>
              <button
                onClick={() => setFontFamily("Inter")}
                className={`p-4 border-2 rounded-xl text-left transition-colors ${
                  fontFamily === "Inter"
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:border-teal-300 text-slate-700"
                }`}
              >
                <span className="font-['Inter'] block text-lg font-medium">
                  Inter
                </span>
                <span className="text-xs opacity-70">Modern Sans</span>
              </button>
            </div>
          </div>

          {/* Text Size */}
          <div>
            <label className="font-['Inter'] font-semibold text-[14px] text-slate-500 block mb-4">
              Text Size
            </label>
            <div className="flex items-center justify-between bg-slate-100 p-2 rounded-full text-slate-800">
              <button
                onClick={() => setTextSize((prev) => Math.max(14, prev - 2))}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-200 rounded-full active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">text_decrease</span>
              </button>
              <span className="font-bold">{textSize}px</span>
              <button
                onClick={() => setTextSize((prev) => Math.min(32, prev + 2))}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-200 rounded-full active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">text_increase</span>
              </button>
            </div>
          </div>

          {/* Themes */}
          <div>
            <label className="font-['Inter'] font-semibold text-[14px] text-slate-500 block mb-4">
              Background
            </label>
            <div className="flex gap-4">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t)}
                  className={`w-12 h-12 rounded-full border border-slate-300 shadow-sm transition-all hover:scale-110 ${
                    t.buttonClass
                  } ${
                    theme.id === t.id
                      ? "ring-offset-2 ring-2 ring-teal-500 border-transparent"
                      : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
