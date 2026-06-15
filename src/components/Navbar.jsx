import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useBooking();
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Search", to: "/search" },
    { label: "Offers", to: "/offers" },
    { label: "Bookings", to: "/bookings" },
    { label: "About", to: "/about" },
  ];

  const isActive = (to) => location.pathname === to;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white py-3 shadow-sm border-b border-slate-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <i className="ti ti-bus"></i>
          </div>
          <span className={`font-syne text-2xl font-extrabold tracking-tight ${
            scrolled || !isHome ? "text-midnight" : "text-white"
          }`}>
            ZigZagBus
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-semibold transition-all hover:text-primary relative group ${
                  isActive(l.to) ? "text-primary" : scrolled || !isHome ? "text-slate-600" : "text-white/80"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${isActive(l.to) ? "scale-x-100" : ""}`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className={`text-sm ${scrolled || !isHome ? "text-slate-400" : "text-white/50"}`}>Hi, <span className={`font-medium ${scrolled || !isHome ? "text-midnight" : "text-white"}`}>{user.name}</span></span>
              <Link
                to="http://localhost:5173/dashboard"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                  scrolled || !isHome ? "bg-primary/10 text-primary hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <i className="ti ti-layout-dashboard text-sm"></i> Dashboard
              </Link>
              <button
                onClick={logout}
                className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all active:scale-95 ${
                  scrolled || !isHome ? "border-slate-200 text-slate-600 hover:bg-slate-50" : "border-white/10 text-white hover:bg-white/5"
                }`}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className={`px-6 py-2.5 text-sm font-bold transition-colors ${
                scrolled || !isHome ? "text-slate-600 hover:text-midnight" : "text-white/80 hover:text-white"
              }`}>
                Login
              </Link>
              <Link to="/register" className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled || !isHome ? "text-midnight" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`ti ti-${open ? 'x' : 'menu-2'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-0 bg-midnight p-8 flex flex-col z-[60] animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-12">
            <span className="font-syne text-2xl font-extrabold text-white">ZigZagBus</span>
            <button onClick={() => setOpen(false)} className="text-white p-2">
              <i className="ti ti-x text-3xl"></i>
            </button>
          </div>
          
          <div className="flex-1 space-y-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block text-3xl font-syne font-bold ${
                  isActive(l.to) ? "text-primary" : "text-white/60"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            {user ? (
              <div className="space-y-3">
                <Link
                  to="http://localhost:5173/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20"
                >
                  <i className="ti ti-layout-dashboard"></i> Dashboard
                </Link>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="w-full py-4 rounded-2xl border border-red-500/50 text-red-500 font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="block w-full py-5 text-center text-white font-bold border border-white/10 rounded-2xl">
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="block w-full py-5 text-center bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
