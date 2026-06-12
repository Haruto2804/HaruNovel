import React from "react";

const Header = ({
  readingProgress,
  showHeader,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsSettingsOpen,
}) => {
  return (
    <>
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-1 z-60 bg-black/10 dark:bg-white/10">
        <div
          className="h-full bg-teal-400 shadow-[0_0_8px_rgba(79,219,200,0.6)] transition-all duration-100 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* STICKY MAIN HEADER */}
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b bg-(--theme-header-bg) border-(--theme-border) transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between items-center h-20 px-4 md:px-12 max-w-300 mx-auto">
          <div className="flex items-center gap-6 lg:gap-8">
            <a
              className="font-['Playfair_Display'] text-[32px] font-bold tracking-tighter hover:scale-105 transition-transform duration-300 text-[var(--theme-primary)]"
              href="/"
            >
              HaruNovel
            </a>

            <div className="hidden md:flex items-center gap-6 ml-4 lg:ml-8 font-['Inter']">
              <a
                className="font-bold border-b-2 pb-1 text-(--theme-text) border-(--theme-primary) transition-colors duration-200"
                href="#"
              >
                Browse
              </a>
              <a
                className="font-medium opacity-70 hover:opacity-100 text-(--theme-text) transition-opacity duration-200"
                href="#"
              >
                My Library
              </a>
              <a
                className="font-medium opacity-70 hover:opacity-100 text-(--theme-text) transition-opacity duration-200"
                href="#"
              >
                New Releases
              </a>
              <a
                className="font-medium opacity-70 hover:opacity-100 text-(--theme-text) transition-opacity duration-200"
                href="#"
              >
                Community
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 font-['Inter']">
            <div className="hidden md:flex items-center px-4 py-2 rounded-full border focus-within:shadow-md transition-all bg-[var(--theme-ui-bg)] border-[var(--theme-border)] focus-within:border-[var(--theme-primary)]">
              <span className="material-symbols-outlined mr-2 select-none text-(--theme-text) opacity-70">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-[14px] font-semibold w-48 lg:w-64 outline-none text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-50"
                placeholder="Search..."
                type="text"
              />
            </div>

            <div className="flex items-center gap-3 lg:gap-4 text-(--theme-text)">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-1.5 rounded-full hover:bg-(--theme-ui-bg) transition-all active:scale-95"
                title="Reading Settings"
              >
                <span className="material-symbols-outlined">settings</span>
              </button>
              <button className="hidden sm:block p-1.5 rounded-full hover:bg-[var(--theme-ui-bg)] transition-all active:scale-95">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="hidden sm:block p-1.5 rounded-full hover:bg-[var(--theme-ui-bg)] transition-all active:scale-95">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 rounded-full hover:bg-[var(--theme-ui-bg)] transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">
                  {isMobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE NAVIGATION MENU */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-lg transition-all duration-300 ease-in-out font-['Inter'] origin-top bg-[var(--theme-header-bg)] border-[var(--theme-border)] ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-95 invisible"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4 text-[var(--theme-text)]">
            <div className="flex items-center px-4 py-2 rounded-full border bg-[var(--theme-ui-bg)] border-[var(--theme-border)]">
              <span className="material-symbols-outlined mr-2 select-none opacity-70">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-[14px] w-full outline-none text-[var(--theme-text)] placeholder:text-[var(--theme-text)] placeholder:opacity-50"
                placeholder="Search..."
                type="text"
              />
            </div>
            <a
              className="font-bold py-2 border-b border-[var(--theme-border)] text-[var(--theme-primary)]"
              href="#"
            >
              Browse
            </a>
            <a
              className="font-medium py-2 border-b border-[var(--theme-border)] opacity-80 hover:opacity-100"
              href="#"
            >
              My Library
            </a>
            <a
              className="font-medium py-2 border-b border-[var(--theme-border)] opacity-80 hover:opacity-100"
              href="#"
            >
              New Releases
            </a>
            <a
              className="font-medium py-2 opacity-80 hover:opacity-100"
              href="#"
            >
              Community
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
