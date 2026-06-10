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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2887ff] py-6 px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <SearchForm compact />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-4 py-8">
        {search.from && search.to && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {search.from} → {search.to}
            </h1>
            <p className="text-gray-500 text-sm">
              {search.date || "Any date"} · {search.passengers} passenger(s) · {results.length} buses found
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {BUS_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                  filter === t ? "bg-[#2887ff] text-white" : "bg-white text-gray-600 border hover:border-[#2887ff]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#2887ff]"
          >
            <option value="price">Sort: Price (Low to High)</option>
            <option value="rating">Sort: Rating (High to Low)</option>
            <option value="departure">Sort: Departure Time</option>
          </select>
        </div>

        {loading && <div className="text-center py-20 text-gray-500">Searching buses...</div>}
        {error && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">{error}</h3>
            {error.toLowerCase().includes("token") || error.toLowerCase().includes("unauthorized") ? (
              <Link to="/login" className="mt-3 inline-block bg-[#2887ff] text-white px-6 py-2 rounded-full font-bold hover:bg-[#2476da] transition">
                Login to Search
              </Link>
            ) : null}
          </div>
        )}
        {!loading && !error && results.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚌</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No buses found</h3>
            <p className="text-gray-500">Try different cities or remove filters.</p>
          </div>
        )}
        {!loading && !error && results.length > 0 && (
          <div className="flex flex-col gap-4">
            {results.map((bus) => <BusCard key={bus.id} bus={bus} />)}
          </div>
        )}
      </div>
    </div>
  );
}
