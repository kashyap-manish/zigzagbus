import { useState, useEffect, useMemo } from "react";
import { useBooking } from "../context/BookingContext";
import { searchBuses } from "../services/api";
import BusCard from "../components/BusCard";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import { buses as mockBuses } from "../data/mockData";

const BUS_TYPES = ["All", "AC Sleeper", "AC Seater", "Non-AC Seater"];

const AMENITY_ICONS = {
  "WiFi": "ti-wifi",
  "Charging Point": "ti-plug",
  "Water Bottle": "ti-bottle",
  "Blanket": "ti-bed",
  "Snacks": "ti-cookie",
};

export default function SearchResults() {
  const { search } = useBooking();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("price");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!search.from || !search.to) return;
    setLoading(true);
    setError("");
    searchBuses(search.from, search.to, search.date)
      .then(setBuses)
      .catch(() => {
        const fallback = mockBuses.filter((b) => b.from === search.from && b.to === search.to);
        setBuses(fallback);
      })
      .finally(() => setLoading(false));
  }, [search.from, search.to, search.date]);

  const allAmenities = useMemo(() => [...new Set(buses.flatMap((b) => b.amenities))], [buses]);

  const results = useMemo(() => {
    let list = buses.filter((b) => {
      if (filter !== "All" && b.type !== filter) return false;
      if (b.price > maxPrice) return false;
      if (selectedAmenities.length && !selectedAmenities.every((a) => b.amenities.includes(a))) return false;
      return true;
    });
    if (sortBy === "price") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else if (sortBy === "departure") list = [...list].sort((a, b) => a.departure.localeCompare(b.departure));
    return list;
  }, [buses, filter, sortBy, maxPrice, selectedAmenities]);

  const toggleAmenity = (a) =>
    setSelectedAmenities((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);

  const activeFilters = (filter !== "All" ? 1 : 0) + selectedAmenities.length + (maxPrice < 2000 ? 1 : 0);

  const Sidebar = () => (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-8 sticky top-24">
      <div>
        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Bus Type</p>
        <div className="space-y-2">
          {BUS_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                filter === t ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {t}
              {filter === t && <i className="ti ti-check text-sm"></i>}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Max Price</p>
          <span className="font-syne font-extrabold text-primary text-sm">₹{maxPrice}</span>
        </div>
        <input
          type="range" min={100} max={2000} step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-slate-400 font-semibold mt-1">
          <span>₹100</span><span>₹2000</span>
        </div>
      </div>

      {allAmenities.length > 0 && (
        <div>
          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Amenities</p>
          <div className="space-y-2">
            {allAmenities.map((a) => (
              <button
                key={a}
                onClick={() => toggleAmenity(a)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  selectedAmenities.includes(a) ? "bg-primary/10 text-primary border border-primary/20" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                <i className={`ti ${AMENITY_ICONS[a] || "ti-check"} text-sm`}></i>
                {a}
                {selectedAmenities.includes(a) && <i className="ti ti-check ml-auto text-sm"></i>}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeFilters > 0 && (
        <button
          onClick={() => { setFilter("All"); setSelectedAmenities([]); setMaxPrice(2000); }}
          className="w-full py-3 rounded-2xl border border-red-100 text-red-400 text-sm font-bold hover:bg-red-50 transition-all"
        >
          <i className="ti ti-x mr-2"></i> Clear Filters ({activeFilters})
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-midnight pt-24 pb-14 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full translate-x-1/3"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <SearchForm compact />
          {search.from && search.to && (
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-3">
                <span className="font-syne text-2xl font-extrabold text-white">{search.from}</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-12 border-t border-dashed border-white/30"></div>
                  <i className="ti ti-bus text-primary text-sm"></i>
                  <div className="w-12 border-t border-dashed border-white/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                </div>
                <span className="font-syne text-2xl font-extrabold text-white">{search.to}</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-sm font-semibold">
                {search.date && <span className="flex items-center gap-1.5"><i className="ti ti-calendar text-xs"></i>{search.date}</span>}
                <span className="flex items-center gap-1.5"><i className="ti ti-users text-xs"></i>{search.passengers} passenger(s)</span>
                {!loading && <span className="text-primary font-bold">{results.length} buses found</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex gap-8">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <Sidebar />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">

            {/* Sort + mobile filter bar */}
            <div className="flex items-center justify-between gap-3 mb-6 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl hover:border-primary/30 transition"
                >
                  <i className="ti ti-adjustments-horizontal"></i>
                  Filters {activeFilters > 0 && <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-extrabold flex items-center justify-center">{activeFilters}</span>}
                </button>
                {!loading && (
                  <p className="text-sm text-slate-400 font-semibold hidden sm:block">
                    Showing <span className="text-midnight font-bold">{results.length}</span> results
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <i className="ti ti-arrows-sort text-slate-400 text-sm"></i>
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
            </div>

            {/* Mobile sidebar drawer */}
            {sidebarOpen && (
              <div className="lg:hidden mb-6">
                <Sidebar />
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="text-center py-32">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                <p className="text-slate-400 font-semibold">Searching buses...</p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <i className="ti ti-alert-circle text-5xl text-red-300 mb-4 block"></i>
                <h3 className="text-xl font-bold text-midnight mb-2">{error}</h3>
                {(error.toLowerCase().includes("token") || error.toLowerCase().includes("unauthorized")) && (
                  <Link to="/login" className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20">
                    Login to Search
                  </Link>
                )}
              </div>
            )}

            {/* No results */}
            {!loading && !error && results.length === 0 && (
              <div className="text-center py-28 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
                  <i className="ti ti-bus-off text-4xl text-slate-300"></i>
                </div>
                <h3 className="font-syne text-2xl font-bold text-midnight mb-2">No buses found</h3>
                <p className="text-slate-400 font-medium mb-6">Try different cities or adjust your filters.</p>
                {activeFilters > 0 && (
                  <button
                    onClick={() => { setFilter("All"); setSelectedAmenities([]); setMaxPrice(2000); }}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-dark transition text-sm"
                  >
                    <i className="ti ti-x"></i> Clear Filters
                  </button>
                )}
              </div>
            )}

            {/* Results */}
            {!loading && !error && results.length > 0 && (
              <div className="flex flex-col gap-5">
                {results.map((bus) => <BusCard key={bus.id} bus={bus} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
