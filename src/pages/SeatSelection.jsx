import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function SeatSelection() {
  const { selectedBus, selectedSeats, setSelectedSeats, search } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedBus) navigate("/search");
  }, [selectedBus, navigate]);

  if (!selectedBus) return null;

  const totalSeats = selectedBus.totalSeats;
  const booked = selectedBus.bookedSeats;
  const maxSeats = search.passengers || 1;

  function toggleSeat(num) {
    if (booked.includes(num)) return;
    if (selectedSeats.includes(num)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== num));
    } else {
      if (selectedSeats.length >= maxSeats) return;
      setSelectedSeats([...selectedSeats, num]);
    }
  }

  function getSeatStatus(num) {
    if (booked.includes(num)) return "booked";
    if (selectedSeats.includes(num)) return "selected";
    return "available";
  }

  const seatClass = {
    booked: "bg-red-400 text-white cursor-not-allowed",
    selected: "bg-[#2887ff] text-white cursor-pointer ring-2 ring-blue-300",
    available: "bg-gray-100 text-gray-700 hover:bg-blue-100 cursor-pointer border border-gray-300",
  };

  const rows = [];
  for (let i = 1; i <= totalSeats; i += 4) {
    rows.push([i, i + 1, null, i + 2, i + 3].filter((x) => x === null || x <= totalSeats));
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate("/search")} className="text-[#2887ff] text-sm font-semibold mb-5 flex items-center gap-1">
          ← Back to results
        </button>

        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{selectedBus.operator}</h2>
          <p className="text-gray-500 text-xs sm:text-sm">{selectedBus.from} → {selectedBus.to} · {selectedBus.departure} - {selectedBus.arrival} · {selectedBus.type}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-4">
          <h3 className="font-bold text-gray-700 mb-4 text-sm sm:text-base">Select Seats (max {maxSeats})</h3>

          {/* Legend */}
          <div className="flex gap-3 sm:gap-4 mb-5 text-xs sm:text-sm flex-wrap">
            {[["bg-gray-100 border border-gray-300", "Available"], ["bg-[#2887ff]", "Selected"], ["bg-red-400", "Booked"]].map(([cls, label]) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded ${cls}`} />
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-400 text-xs mb-4 border-b pb-3">🚌 Front of Bus</div>

          {/* Seat grid */}
          <div className="space-y-2 overflow-x-auto pb-2">
            {rows.map((row, ri) => (
              <div key={ri} className="flex gap-2 justify-center items-center min-w-max mx-auto">
                {row.map((seat, si) =>
                  seat === null ? (
                    <div key="aisle" className="w-4 sm:w-6" />
                  ) : (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-xs font-bold transition ${seatClass[getSeatStatus(seat)]}`}
                    >
                      {seat}
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                Selected: <span className="font-bold text-gray-800">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Total: <span className="text-xl font-extrabold text-[#2887ff]">₹{selectedBus.price * selectedSeats.length}</span>
              </p>
            </div>
            <button
              disabled={selectedSeats.length === 0}
              onClick={() => navigate("/checkout")}
              className="w-full sm:w-auto bg-[#2887ff] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2476da] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
