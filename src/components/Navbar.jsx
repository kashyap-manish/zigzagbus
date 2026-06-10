import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useBooking();
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Search Buses", to: "/search" },
    { label: "My Bookings", to: "/bookings" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-[#2887ff]">
          🚌 ZigZagBus
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-semibold transition ${isActive(l.to) ? "text-[#2887ff]" : "text-gray-700 hover:text-[#2887ff]"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-full border border-[#2887ff] text-[#2887ff] font-semibold hover:bg-[#2887ff] hover:text-white transition text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded-full border border-[#2887ff] text-[#2887ff] font-semibold hover:bg-[#2887ff] hover:text-white transition text-sm">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-full bg-[#2887ff] text-white font-semibold hover:bg-[#2476da] transition text-sm">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#2887ff] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2887ff] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2887ff] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 font-semibold rounded-lg transition ${isActive(l.to) ? "text-[#2887ff] bg-blue-50" : "text-gray-700 hover:text-[#2887ff] hover:bg-gray-50"}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t mt-2 pt-3 flex flex-col gap-2">
            {user ? (
              <>
                <p className="text-sm text-gray-500 px-2">Hi, {user.name}</p>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="w-full py-3 rounded-full border border-red-400 text-red-500 font-semibold text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="w-full py-3 text-center rounded-full border border-[#2887ff] text-[#2887ff] font-semibold text-sm">
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="w-full py-3 text-center rounded-full bg-[#2887ff] text-white font-semibold text-sm">
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
