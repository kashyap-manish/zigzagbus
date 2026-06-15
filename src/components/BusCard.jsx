import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function BusCard({ bus }) {
  const { setSelectedBus, setSelectedSeats } = useBooking();
  const navigate = useNavigate();

  function handleSelect() {
    setSelectedBus(bus);
    setSelectedSeats([]);
    navigate("/seats");
  }

  const available = bus.totalSeats - bus.bookedSeats.length;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-syne text-xl font-bold text-midnight">{bus.operator}</span>
              <span className="text-[10px] bg-primary/10 text-primary font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">{bus.type}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {Array.from({ length: Math.floor(bus.rating) }).map((_, i) => (
                <i key={i} className="ti ti-star-filled text-sm"></i>
              ))}
              <span className="text-slate-400 text-xs ml-1 font-semibold">{bus.rating}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-syne text-3xl font-extrabold text-primary">₹{bus.price}</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">per person</p>
          </div>
        </div>

        {/* Timing row */}
        <div className="flex items-center justify-between gap-4 bg-slate-50 rounded-2xl px-6 py-5 mb-6">
          <div className="text-center">
            <p className="font-syne text-2xl font-bold text-midnight">{bus.departure}</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{bus.from}</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-2 text-slate-300">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bus.duration}</p>
            <div className="w-full flex items-center gap-2">
              <div className="flex-1 border-t-2 border-dashed border-slate-200"></div>
              <i className="ti ti-bus text-primary text-xl"></i>
              <div className="flex-1 border-t-2 border-dashed border-slate-200"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-syne text-2xl font-bold text-midnight">{bus.arrival}</p>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{bus.to}</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {bus.amenities.map((a) => (
            <span key={a} className="text-xs bg-white border border-slate-100 text-slate-500 font-semibold px-3 py-1 rounded-full shadow-sm">
              {a}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-4 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${available < 10 ? "bg-red-400" : "bg-green-400"}`}></div>
            <p className={`text-sm font-bold ${available < 10 ? "text-red-500" : "text-green-600"}`}>
              {available} seats left
            </p>
          </div>
          <button
            onClick={handleSelect}
            className="bg-midnight hover:bg-primary text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-primary/30 text-sm uppercase tracking-widest active:scale-95"
          >
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
}
