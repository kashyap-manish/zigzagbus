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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 sm:p-5 border border-gray-100">
      {/* Top row: operator + price */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-bold text-gray-800 text-base sm:text-lg truncate">{bus.operator}</span>
            <span className="text-xs bg-blue-100 text-[#2887ff] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">{bus.type}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {"★".repeat(Math.floor(bus.rating))}
            <span className="text-gray-500 ml-1 text-xs">{bus.rating}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xl sm:text-2xl font-extrabold text-[#2887ff]">₹{bus.price}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      {/* Timing row */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 py-3 px-2 bg-gray-50 rounded-xl mb-3">
        <div className="text-center">
          <p className="text-lg sm:text-xl font-bold text-gray-800">{bus.departure}</p>
          <p className="text-xs text-gray-500">{bus.from}</p>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs">
          <div className="text-[10px] mb-0.5">{bus.duration}</div>
          <div className="border-t border-dashed border-gray-300 relative">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-base">🚌</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg sm:text-xl font-bold text-gray-800">{bus.arrival}</p>
          <p className="text-xs text-gray-500">{bus.to}</p>
        </div>
      </div>

      {/* Amenities */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {bus.amenities.map((a) => (
          <span key={a} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{a}</span>
        ))}
      </div>

      {/* Bottom row: seats + button */}
      <div className="flex items-center justify-between gap-3">
        <p className={`text-xs font-semibold ${available < 10 ? "text-red-500" : "text-green-600"}`}>
          {available} seats available
        </p>
        <button
          onClick={handleSelect}
          className="bg-[#2887ff] text-white px-5 py-2 rounded-full font-bold hover:bg-[#2476da] transition text-sm whitespace-nowrap"
        >
          Select Seats
        </button>
      </div>
    </div>
  );
}
