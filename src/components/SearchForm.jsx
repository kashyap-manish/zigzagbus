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

  const containerClass = compact 
    ? "bg-white p-6 rounded-2xl shadow-xl space-y-4" 
    : "glass p-6 sm:p-10 rounded-[40px] shadow-2xl space-y-6 sm:space-y-8 w-full transition-all duration-500 hover:shadow-primary/5";

  const labelClass = compact 
    ? "text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] ml-1"
    : "text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ml-1";

  const inputClass = compact
    ? "w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 text-slate-900 focus:outline-none focus:border-primary/30 transition-all appearance-none text-sm"
    : "w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all appearance-none [color-scheme:dark] text-base";

  const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl transition-transform group-focus-within:scale-110";

  return (
    <form onSubmit={handleSubmit} className={containerClass}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-3 group">
          <label className={labelClass}>From</label>
          <div className="relative">
            <i className={`ti ti-map-pin ${iconClass}`}></i>
            <select 
              className={inputClass}
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              required
            >
              <option value="" className={compact ? "" : "bg-midnight text-white/50"}>Select Origin</option>
              {cities.map((c) => <option key={c} value={c} className={compact ? "" : "bg-midnight"}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-3 group">
          <label className={labelClass}>To</label>
          <div className="relative">
            <i className={`ti ti-map-pin-filled ${iconClass}`}></i>
            <select 
              className={inputClass}
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              required
            >
              <option value="" className={compact ? "" : "bg-midnight text-white/50"}>Select Destination</option>
              {cities.map((c) => <option key={c} value={c} className={compact ? "" : "bg-midnight"}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="space-y-3 group">
          <label className={labelClass}>Departure Date</label>
          <div className="relative">
            <i className={`ti ti-calendar ${iconClass}`}></i>
            <input 
              type="date" 
              className={inputClass}
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-3 group">
          <label className={labelClass}>Passengers</label>
          <div className="relative">
            <i className={`ti ti-users ${iconClass}`}></i>
            <select 
              className={inputClass}
              value={form.passengers}
              onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })}
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n} className={compact ? "" : "bg-midnight"}>{n} Passenger{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-end">
          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 text-lg uppercase tracking-widest"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
