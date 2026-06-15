import { useState, useEffect, useMemo } from "react";
import { useBooking } from "../context/BookingContext";
import { searchBuses } from "../services/api";
import BusCard from "../components/BusCard";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import { buses as mockBuses } from "../data/mockData";

const BUS_TYPES = ["All", "AC Sleeper", "AC Seater", "Non-AC Seater"];

export default function SearchResults() {
  const { search } = useBooking();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("price");

  useEffect(() => {
    if (!search.from || !search.to) return;
    setLoading(true);
    setError("");
    searchBuses(search.from, search.to, search.date)
      .then(setBuses)
      .catch(() => {
        const fallback = mockBuses.filter(
          (b) => b.from === search.from && b.to === search.to
        );
        setBuses(fallback);
      })
      .finally(() => setLoading(false));
  }, [search.from, search.to, search.date]);

  const results = useMemo(() => {
    let list = buses.filter((b) => filter === "All" || b.type === filter);
    if (sortBy === "price") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else if (sortBy === "departure") list = [...list].sort((a, b) => a.departure.localeCompare(b.departure));
    return list;
  }, [buses, filter, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-midnight pt-24 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <SearchForm compact />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {search.from && search.to && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-syne text-3xl font-extrabold text-midnight">
                {search.from}
              </h1>
              <i className="ti ti-arrow-right text-primary text-2xl"></i>
              <h1 className="font-syne text-3xl font-extrabold text-midnight">
                {search.to}
              </h1>
            </div>
            <p className="text-slate-400 text-sm font-semibold">
              {search.date || "Any date"} &middot; {search.passengers} passenger(s) &middot;{" "}
              <span className="text-primary font-bold">{results.length} buses found</span>
            </p>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {BUS_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all ${
                  filter === t
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 text-slate-500 border border-slate-100 hover:border-primary/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-bold border border-slate-100 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:border-primary/30 text-slate-600 uppercase tracking-wider"
          >
            <option value="price">Price: Low to High</option>
            <option value="rating">Rating: High to Low</option>
            <option value="departure">Departure Time</option>
          </select>
        </div>

        {/* States */}
        {loading && (
          <div className="text-center py-32">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-slate-400 font-semibold">Searching buses...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100">
            <i className="ti ti-lock text-5xl text-slate-300 mb-4 block"></i>
            <h3 className="text-xl font-bold text-midnight mb-2">{error}</h3>
            {(error.toLowerCase().includes("token") || error.toLowerCase().includes("unauthorized")) && (
              <Link to="/login" className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20">
                Login to Search
              </Link>
            )}
          </div>
        )}

        {!loading && !error && results.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100">
            <i className="ti ti-bus-off text-6xl text-slate-200 mb-4 block"></i>
            <h3 className="font-syne text-2xl font-bold text-midnight mb-2">No buses found</h3>
            <p className="text-slate-400 font-medium">Try different cities or remove filters.</p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="flex flex-col gap-5">
            {results.map((bus) => <BusCard key={bus.id} bus={bus} />)}
          </div>
        )}
      </div>
    </div>
  );
}
