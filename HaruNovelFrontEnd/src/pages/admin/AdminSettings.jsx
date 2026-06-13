import React, { useState } from "react";

const AdminSettings = () => {
  // --- STATES QUẢN LÝ DỮ LIỆU FORM ---
  const [username, setUsername] = useState("AureliusReader");
  const [email, setEmail] = useState("aurelius.lexicon@library.com");

  // --- STATES QUẢN LÝ CÁC NÚT GẠT (TOGGLES) ---
  const [emailNotif, setEmailNotif] = useState(true);
  const [browserNotif, setBrowserNotif] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <main className="flex-grow flex flex-col items-center px-4 md:px-0 py-12 font-['Inter']">
      <div className="w-full max-w-[720px]">
        {/* PAGE HEADER */}
        <header className="mb-16 text-center">
          <h1 className="font-['Playfair_Display'] text-[32px] md:text-[40px] font-bold text-[var(--theme-primary)] mb-2">
            Settings
          </h1>
          <p className="text-[16px] text-[var(--theme-text)] opacity-70">
            Tailor your literary sanctuary to your preferences.
          </p>
        </header>

        {/* ACCOUNT SETTINGS SECTION */}
        <section>
          <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] mb-8">
            Account Settings
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[var(--theme-text)] opacity-80">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[var(--theme-ui-bg)] border border-[var(--theme-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--theme-primary)] focus:ring-1 focus:ring-[var(--theme-primary)] transition-colors text-[16px] text-[var(--theme-text)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-[var(--theme-text)] opacity-80">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--theme-ui-bg)] border border-[var(--theme-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--theme-primary)] focus:ring-1 focus:ring-[var(--theme-primary)] transition-colors text-[16px] text-[var(--theme-text)]"
              />
            </div>

            <div className="pt-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-[var(--theme-bg)] transition-all duration-300 rounded-xl text-[14px] font-bold active:scale-95">
                <span className="material-symbols-outlined text-[20px]">
                  lock_reset
                </span>
                Change Password
              </button>
            </div>
          </div>
        </section>

        {/* ZEN DIVIDER */}
        <div
          className="h-px my-12"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--theme-border), transparent)",
          }}
        ></div>

        {/* NOTIFICATION PREFERENCES SECTION */}
        <section>
          <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] mb-8">
            Notification Preferences
          </h2>
          <div className="space-y-8">
            {/* Email Notifications Toggle */}
            <div className="flex justify-between items-center group">
              <div className="flex flex-col pr-4">
                <span className="text-[18px] text-[var(--theme-text)] font-medium">
                  Email Notifications
                </span>
                <span className="text-[14px] text-[var(--theme-text)] opacity-60 mt-1">
                  Receive daily digest of followed series
                </span>
              </div>
              <button
                role="switch"
                aria-checked={emailNotif}
                onClick={() => setEmailNotif(!emailNotif)}
                className={`relative inline-flex h-7 w-14 flex-shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:ring-offset-2 ${
                  emailNotif
                    ? "bg-[var(--theme-primary)]"
                    : "bg-[var(--theme-border)]"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-[var(--theme-bg)] shadow-sm transition duration-300 ${
                    emailNotif ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Browser Notifications Toggle */}
            <div className="flex justify-between items-center group">
              <div className="flex flex-col pr-4">
                <span className="text-[18px] text-[var(--theme-text)] font-medium">
                  Browser Notifications
                </span>
                <span className="text-[14px] text-[var(--theme-text)] opacity-60 mt-1">
                  Get alerts for new chapter releases
                </span>
              </div>
              <button
                role="switch"
                aria-checked={browserNotif}
                onClick={() => setBrowserNotif(!browserNotif)}
                className={`relative inline-flex h-7 w-14 flex-shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:ring-offset-2 ${
                  browserNotif
                    ? "bg-[var(--theme-primary)]"
                    : "bg-[var(--theme-border)]"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-[var(--theme-bg)] shadow-sm transition duration-300 ${
                    browserNotif ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* ZEN DIVIDER */}
        <div
          className="h-px my-12"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--theme-border), transparent)",
          }}
        ></div>

        {/* ACCOUNT PRIVACY SECTION */}
        <section>
          <h2 className="font-['Playfair_Display'] text-[24px] font-bold text-[var(--theme-primary)] mb-8">
            Account Privacy
          </h2>
          <div className="flex justify-between items-center group p-6 rounded-2xl bg-[var(--theme-ui-bg)] border border-[var(--theme-border)] transition-colors duration-300 hover:border-[var(--theme-primary)]/50">
            <div className="flex flex-col pr-4">
              <span className="text-[18px] text-[var(--theme-text)] font-medium">
                Public Profile
              </span>
              <span className="text-[14px] text-[var(--theme-text)] opacity-60 mt-1">
                Allow others to see your library and reviews
              </span>
            </div>
            <button
              role="switch"
              aria-checked={publicProfile}
              onClick={() => setPublicProfile(!publicProfile)}
              className={`relative inline-flex h-7 w-14 flex-shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] focus:ring-offset-2 ${
                publicProfile
                  ? "bg-[var(--theme-primary)]"
                  : "bg-[var(--theme-border)]"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-[var(--theme-bg)] shadow-sm transition duration-300 ${
                  publicProfile ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </section>

        {/* ZEN DIVIDER */}
        <div
          className="h-px my-12"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--theme-border), transparent)",
          }}
        ></div>

        {/* DANGER ZONE SECTION */}
        <section className="mb-12 text-center">
          <button className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-200 text-[14px] font-bold opacity-80 hover:opacity-100 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">
              delete_forever
            </span>
            Delete Account
          </button>
          <p className="mt-3 text-[14px] text-[var(--theme-text)] opacity-50 italic font-medium">
            This action is irreversible and will remove all reading progress.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AdminSettings;
