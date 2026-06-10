import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

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

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2887ff]";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-gray-800">Create Account 🚌</h1>
          <p className="text-gray-500 text-sm mt-1">Join ZigZagBus today</p>
        </div>

        {error && <p className="text-red-500 text-sm bg-red-50 rounded-lg p-3 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "FULL NAME", key: "name", type: "text", placeholder: "Your name" },
            { label: "EMAIL", key: "email", type: "email", placeholder: "you@example.com" },
            { label: "PASSWORD", key: "password", type: "password", placeholder: "••••••••" },
            { label: "CONFIRM PASSWORD", key: "confirm", type: "password", placeholder: "••••••••" },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key}>
              <label className="text-xs font-semibold text-gray-500 block mb-1">{label}</label>
              <input type={type} className={inputClass} placeholder={placeholder} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required />
            </div>
          ))}
          <button type="submit" disabled={loading} className="w-full bg-[#2887ff] text-white py-3 rounded-full font-bold hover:bg-[#2476da] transition disabled:opacity-60">
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#2887ff] font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
