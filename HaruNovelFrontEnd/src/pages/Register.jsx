import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // --- STATES QUẢN LÝ FORM ---
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [agreements, setAgreements] = useState({
    newsletter: false,
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setAgreements({ ...agreements, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreements.terms) {
      alert("Please accept the Terms of Service to continue.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    // GIẢ LẬP GỌI API ĐĂNG KÝ
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      console.log("Dữ liệu đăng ký:", formData);

      // Chuyển hướng về trang Login sau 2 giây
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row font-['Inter'] bg-slate-50 text-slate-800">
      {/* LEFT SECTION: ATMOSPHERIC VISUAL */}
      <section className="hidden md:flex relative w-1/2 lg:w-3/5 h-screen overflow-hidden bg-teal-900 items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYCiSQUTuv9rGsMh_pf_4uxHmxTtW955BgoDScNo9OnoMEr9Lo1prbWZX7SUUDG7wIov-s_GyNnppzip--4XGdqDmb1rrZhDp8nkt8ruspAVcqkofUVZC0W5_YoREs3oI-SbaQBPGprK4ARAMykPziCGHHu254VZ9HqOoOnNKy4f2z93mrkuqrnkIIqUidKyIavAjJC-5r-tKM1-NRyhFDxT_y9MNE_RUXL83p5bDQOjq6kJ0XI0EqzwTIhiAjrGyEleD6-4mUtXs"
            alt="Ancient Library"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
        </div>

        {/* Brand Identity on Image */}
        <div className="relative z-10 p-12 text-white max-w-lg flex flex-col justify-end h-full w-full pb-24">
          <h2 className="font-['Playfair_Display'] text-[40px] md:text-[48px] font-bold mb-4 text-teal-100">
            HaruNovel
          </h2>
          <p className="text-[18px] text-teal-100/80 leading-relaxed italic">
            "A library is not a luxury but one of the necessities of life."
          </p>
          <div className="mt-8 w-24 h-1 bg-teal-400 rounded-full"></div>
        </div>
      </section>

      {/* RIGHT SECTION: REGISTRATION FORM */}
      <section className="flex-1 bg-white flex items-center justify-center p-6 md:p-12 overflow-y-auto relative shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-10">
        <div className="w-full max-w-[480px] space-y-8 py-8">
          {/* Branding Mobile Only */}
          <div className="md:hidden flex flex-col items-center mb-8">
            <h1 className="font-['Playfair_Display'] text-[32px] font-bold text-teal-800">
              HaruNovel
            </h1>
            <p className="text-[12px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
              Digital Sanctuary
            </p>
          </div>

          {/* Header */}
          <header className="space-y-2">
            <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-slate-900">
              Begin Your Journey
            </h2>
            <p className="text-[15px] font-medium text-slate-500">
              Create an account to save your library and sync progress across
              all devices.
            </p>
          </header>

          {/* Social Registration */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-slate-200 rounded-xl font-bold text-[14px] text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                ></path>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-slate-200 rounded-xl font-bold text-[14px] text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                account_balance
              </span>
              SSO
            </button>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-[12px] font-bold text-slate-400 uppercase tracking-widest">
              Or register with email
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2 group">
              <label
                htmlFor="fullname"
                className="block text-[13px] font-bold text-slate-600"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  person
                </span>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Elias Thorne"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2 group">
              <label
                htmlFor="email"
                className="block text-[13px] font-bold text-slate-600"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  mail
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="reader@harunovel.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-2 group">
              <label
                htmlFor="username"
                className="block text-[13px] font-bold text-slate-600"
              >
                Username
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  alternate_email
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="bibliophile_99"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 group">
              <label
                htmlFor="password"
                className="block text-[13px] font-bold text-slate-600"
              >
                Create Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  lock
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength="6"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2 group">
              <label
                htmlFor="confirmPassword"
                className="block text-[13px] font-bold text-slate-600"
              >
                Confirm Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  lock_reset
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-[15px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Terms & Privacy */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={agreements.newsletter}
                    onChange={handleCheckbox}
                    className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-600 cursor-pointer"
                  />
                </div>
                <label
                  htmlFor="newsletter"
                  className="text-[14px] font-medium text-slate-500 cursor-pointer select-none"
                >
                  I want to receive news and updates via email.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={handleCheckbox}
                    className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-600 cursor-pointer"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="text-[14px] font-medium text-slate-500 cursor-pointer select-none"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-teal-700 font-bold hover:underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-teal-700 font-bold hover:underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:cursor-not-allowed ${
                success
                  ? "bg-green-600 text-white"
                  : "bg-teal-800 text-white hover:bg-teal-900 hover:shadow-lg hover:shadow-teal-900/20"
              }`}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">
                    progress_activity
                  </span>
                  Processing...
                </>
              ) : success ? (
                <>
                  Account Created!
                  <span className="material-symbols-outlined text-[20px]">
                    check_circle
                  </span>
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <footer className="pt-6 mt-6 text-center border-t border-slate-200">
            <p className="text-[14px] font-medium text-slate-500">
              Already have an account?
              <Link
                to="/login"
                className="text-teal-700 font-bold hover:underline ml-1.5 transition-all"
              >
                Login
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Register;
