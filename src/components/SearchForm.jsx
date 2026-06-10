import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { cities } from "../data/mockData";

export default function SearchForm({ compact = false }) {
  const { search, setSearch } = useBooking();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    from: search.from || "",
    to: search.to || "",
    date: search.date || "",
    passengers: search.passengers || 1,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(form);
    navigate("/search");
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2887ff]";

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 ${compact ? "" : "max-w-4xl mx-auto"}`}>
      {!compact && <h2 className="text-xl font-bold text-gray-800 mb-4">Find Your Bus</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">FROM</label>
          <select className={inputClass} value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} required>
            <option value="">Select city</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">TO</label>
          <select className={inputClass} value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} required>
            <option value="">Select city</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">DATE</label>
          <input type="date" className={inputClass} value={form.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 block">PASSENGERS</label>
          <input type="number" min={1} max={10} className={inputClass} value={form.passengers} onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })} />
        </div>
      </div>
      <button type="submit" className="mt-4 w-full bg-[#2887ff] text-white font-bold py-3 rounded-xl hover:bg-[#2476da] transition text-sm tracking-wide">
        🔍 SEARCH BUSES
      </button>
    </form>
  );
}
