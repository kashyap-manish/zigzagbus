import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400";
const labelClass = "text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2";

export default function Register() {
  const { register } = useBooking();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) return setError("Passwords do not match.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    setError("");
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate("/bookings");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-midnight p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[80px] rounded-full"></div>
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20">
            <i className="ti ti-bus"></i>
          </div>
          <span className="font-syne text-2xl font-extrabold text-white">ZigZagBus</span>
        </Link>
        <div className="relative z-10 space-y-6">
          <h2 className="font-syne text-5xl font-extrabold text-white leading-tight">
            Start Your <br /><span className="text-primary italic">Journey.</span>
          </h2>
          <p className="text-white/50 text-lg font-medium max-w-xs">
            Create your account and unlock premium bus travel across India.
          </p>
          <div className="space-y-3 pt-2">
            {["Instant e-ticket on your phone", "Choose & save your seats", "Real-time bus tracking"].map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <i className="ti ti-check text-primary text-xs font-bold"></i>
                </div>
                <span className="text-white/60 text-sm font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white/20 text-xs font-semibold relative z-10">© {new Date().getFullYear()} ZigZagBus</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <i className="ti ti-bus text-lg"></i>
            </div>
            <span className="font-syne text-xl font-extrabold text-midnight">ZigZagBus</span>
          </div>

          <h1 className="font-syne text-3xl font-extrabold text-midnight mb-1">Create Account</h1>
          <p className="text-slate-400 text-sm font-medium mb-8">Join ZigZagBus today — it's free.</p>

          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-500 text-sm rounded-2xl p-4 mb-6">
              <i className="ti ti-alert-circle text-lg shrink-0"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "Your name" },
              { label: "Email Address", key: "email", type: "email", placeholder: "you@example.com" },
              { label: "Password", key: "password", type: "password", placeholder: "Min. 6 characters" },
              { label: "Confirm Password", key: "confirm", type: "password", placeholder: "Repeat password" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input type={type} className={inputClass} placeholder={placeholder} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required />
              </div>
            ))}
            <button type="submit" disabled={loading} className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition disabled:opacity-60 shadow-lg shadow-primary/20 uppercase tracking-widest text-sm mt-2">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
