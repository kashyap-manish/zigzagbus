import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const AMENITY_ICONS = {
  "WiFi": "ti-wifi",
  "Charging Point": "ti-plug",
  "Water Bottle": "ti-bottle",
  "Blanket": "ti-bed",
  "Snacks": "ti-cookie",
};

const TYPE_COLORS = {
  "AC Sleeper": "bg-violet-50 text-violet-600 border-violet-100",
  "AC Seater": "bg-sky-50 text-sky-600 border-sky-100",
  "Non-AC Seater": "bg-slate-100 text-slate-600 border-slate-200",
};

export default function BusCard({ bus }) {
  const { setSelectedBus, setSelectedSeats } = useBooking();
  const navigate = useNavigate();

  function handleSelect() {
    setSelectedBus(bus);
    setSelectedSeats([]);
    navigate("/seats");
  }

  const available = bus.totalSeats - bus.bookedSeats.length;
  const availablePct = Math.round((available / bus.totalSeats) * 100);
  const isLow = available < 10;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">

      {/* Top accent bar for low availability */}
      {isLow && (
        <div className="bg-red-500 text-white text-[10px] font-extrabold uppercase tracking-widest text-center py-1.5 flex items-center justify-center gap-1.5">
          <i className="ti ti-flame text-xs"></i> Only {available} seats left — Book fast!
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-syne text-xl font-extrabold text-midnight">{bus.operator}</h3>
              <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest border ${TYPE_COLORS[bus.type] || "bg-primary/10 text-primary border-primary/20"}`}>
                {bus.type}
              </span>
            </div>
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className={`ti ti-star${i < Math.floor(bus.rating) ? "-filled" : ""} text-xs ${i < Math.floor(bus.rating) ? "text-amber-400" : "text-slate-200"}`}></i>
              ))}
              <span className="text-slate-400 text-xs ml-1.5 font-bold">{bus.rating} / 5</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-syne text-4xl font-extrabold text-primary leading-none">₹{bus.price}</p>
            <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mt-1">per seat</p>
          </div>
        </div>

        {/* Timing row */}
        <div className="flex items-center justify-between gap-3 bg-slate-50 rounded-2xl px-5 sm:px-8 py-5 mb-6 border border-slate-100">
          <div className="text-center">
            <p className="font-syne text-3xl font-extrabold text-midnight">{bus.departure}</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{bus.from}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-2 px-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest bg-white border border-slate-100 px-3 py-1 rounded-full">{bus.duration}</span>
            <div className="w-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
              <div className="flex-1 border-t-2 border-dashed border-slate-200"></div>
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <i className="ti ti-bus text-white text-sm"></i>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-syne text-3xl font-extrabold text-midnight">{bus.arrival}</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{bus.to}</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {bus.amenities.map((a) => (
            <span key={a} className="flex items-center gap-1.5 text-xs bg-slate-50 border border-slate-100 text-slate-500 font-semibold px-3 py-1.5 rounded-xl">
              <i className={`ti ${AMENITY_ICONS[a] || "ti-check"} text-primary text-xs`}></i>
              {a}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-4 pt-5 border-t border-slate-100">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isLow ? "bg-red-400 animate-pulse" : "bg-green-400"}`}></div>
              <p className={`text-sm font-bold ${isLow ? "text-red-500" : "text-green-600"}`}>
                {available} seats available
              </p>
            </div>
            {/* Seat fill bar */}
            <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${isLow ? "bg-red-400" : "bg-green-400"}`}
                style={{ width: `${availablePct}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={handleSelect}
            className="flex items-center gap-2 bg-midnight group-hover:bg-primary text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-primary/30 text-sm uppercase tracking-widest active:scale-95"
          >
            Select Seats <i className="ti ti-arrow-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
