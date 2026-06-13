import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // GIẢ LẬP GỌI API
    try {
      // const response = await api.post("/auth/login", { identifier, password });
      // localStorage.setItem("token", response.data.token);

      console.log("Đăng nhập với:", { identifier, password, remember });

      setTimeout(() => {
        setLoading(false);
        // Tạm thời cho phép chuyển hướng thẳng vào admin để test
        navigate("/admin");
      }, 1500);
    } catch (error) {
      console.error("Lỗi đăng nhập", error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden font-['Inter'] bg-slate-50 text-slate-800">
      {/* LEFT SIDE: ATMOSPHERIC VISUAL */}
      <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-teal-900 overflow-hidden items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByIZ4KTPx-P2siqsjLEkVJsf2lFqHGCN_w5sAhh-uMN0aoahoUlQxb-Lbgh3ZioZGx9KZ9k1nQ8RQHejhiyL0VYiy6LTUi-wQDIGoy83U6H8RNx-9hPpWdPTzOvgQB4qqav1ubV-ErLa4lHEKnkeWCKzhsNG-rw2l3jWlcbKnuiysMXDQqIjZ_6AkxvEkkRQ51Bx7LNOpOfGURyyYh0AsgCtGbCwrjwQAUFNzaYQxUY6Eywx0BCxlJ_SJRAlyYmmSSZVKFl3cOgpM"
            alt="Atmospheric Library"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
        </div>

        {/* Brand Identity on Image */}
        <div className="relative z-10 p-12 text-white max-w-lg">
          <h1 className="font-['Playfair_Display'] text-[40px] md:text-[48px] font-bold mb-4 text-teal-100">
            HaruNovel
          </h1>
          <p className="text-[18px] text-teal-100/80 italic leading-relaxed">
            "Every book is a portal, and every reader a traveler. Return to your
            sanctuary of stories and continue the journey."
          </p>
          <div className="mt-12 flex gap-4">
            <div className="w-12 h-1 bg-teal-400 rounded-full"></div>
            <div className="w-4 h-1 bg-teal-400/30 rounded-full"></div>
            <div className="w-4 h-1 bg-teal-400/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE: LOGIN FORM */}
      <section className="flex-1 bg-white flex items-center justify-center p-6 md:p-12 relative shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-10">
        {/* Mobile Header */}
        <div className="absolute top-8 left-6 md:hidden">
          <span className="font-['Playfair_Display'] text-[24px] font-bold text-teal-800">
            HaruNovel
          </span>
        </div>

        <div className="w-full max-w-[440px]">
          <header className="mb-10">
            <h2 className="font-['Playfair_Display'] text-[32px] font-bold text-teal-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-[16px] text-slate-500 font-medium">
              Please enter your details to access your library.
            </p>
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username/Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="identifier"
                className="text-[12px] font-bold text-slate-500 uppercase tracking-wider"
              >
                Username or Email
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  person
                </span>
                <input
                  id="identifier"
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter your email or username"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-[12px] font-bold text-slate-500 uppercase tracking-wider"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[13px] font-bold text-teal-700 hover:text-teal-800 hover:underline transition-all"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors">
                  lock
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-800 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-teal-700 transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-5 h-5 text-teal-600 border-slate-300 rounded focus:ring-teal-600 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-3 text-[14px] font-medium text-slate-600 cursor-pointer select-none"
              >
                Keep me signed in
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-teal-800 text-white font-bold text-[14px] rounded-xl shadow-md hover:bg-teal-900 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="relative py-2 flex items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                OR
              </span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 rounded-xl font-bold text-[14px] text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors active:scale-95"
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
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 rounded-xl font-bold text-[14px] text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.59-.84 1.61.06 2.82.73 3.59 1.85-3.24 1.89-2.72 6.01.27 7.23-.62 1.51-1.46 3.01-2.53 3.95zM12.03 7.25c-.02-2.23 1.76-4.07 3.9-4.25.26 2.25-2.04 4.41-3.9 4.25z"
                  ></path>
                </svg>
                Apple
              </button>
            </div>
          </form>

          <footer className="mt-10 text-center">
            <p className="text-[14px] text-slate-500 font-medium">
              Don't have an account?
              <Link
                to="/register"
                className="font-bold text-teal-700 hover:text-teal-800 hover:underline ml-1.5 transition-colors"
              >
                Create Account
              </Link>
            </p>
          </footer>
        </div>

        {/* Minimalist Legal Footer */}
        <div className="absolute bottom-6 w-full text-center left-0 px-6">
          <nav className="flex justify-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link
              to="/privacy"
              className="hover:text-teal-700 transition-colors"
            >
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-teal-700 transition-colors">
              Terms
            </Link>
            <Link to="/help" className="hover:text-teal-700 transition-colors">
              Help
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Login;
