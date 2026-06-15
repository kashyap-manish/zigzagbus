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
    booked: "bg-red-100 text-red-400 border-red-200 cursor-not-allowed",
    selected: "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105",
    available: "bg-slate-50 text-slate-600 border-slate-200 hover:border-primary/50 hover:bg-primary/5 cursor-pointer",
  };

  const rows = [];
  for (let i = 1; i <= totalSeats; i += 4) {
    rows.push([i, i + 1, null, i + 2, i + 3].filter((x) => x === null || x <= totalSeats));
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/search")}
          className="flex items-center gap-2 text-slate-500 hover:text-primary font-semibold mb-8 transition-colors text-sm"
        >
          <i className="ti ti-arrow-left"></i> Back to results
        </button>

        {/* Bus info */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-syne text-2xl font-bold text-midnight mb-1">{selectedBus.operator}</h2>
              <p className="text-slate-400 text-sm font-semibold">
                {selectedBus.from} → {selectedBus.to} &nbsp;·&nbsp; {selectedBus.departure} – {selectedBus.arrival} &nbsp;·&nbsp; {selectedBus.type}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-syne text-3xl font-extrabold text-primary">₹{selectedBus.price}</p>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">per seat</p>
            </div>
          </div>
        </div>

        {/* Seat map */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-syne text-lg font-bold text-midnight">Select Seats
              <span className="ml-2 text-sm text-slate-400 font-semibold">(max {maxSeats})</span>
            </h3>
            <div className="flex gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-50 border border-slate-200 inline-block"></span>Available</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-primary inline-block"></span>Selected</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-red-100 border border-red-200 inline-block"></span>Booked</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 pb-5 border-b border-slate-100">
            <i className="ti ti-bus text-primary text-lg"></i> Front of Bus
          </div>

          <div className="space-y-2.5 overflow-x-auto pb-2">
            {rows.map((row, ri) => (
              <div key={ri} className="flex gap-2.5 justify-center items-center min-w-max mx-auto">
                {row.map((seat, si) =>
                  seat === null ? (
                    <div key="aisle" className="w-6 sm:w-8" />
                  ) : (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-xs font-bold border-2 transition-all duration-200 ${seatClass[getSeatStatus(seat)]}`}
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
        <div className="bg-midnight rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Selected Seats</p>
            <p className="text-white font-bold text-lg">
              {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None selected"}
            </p>
            <p className="text-white/40 text-sm mt-1">
              Total: <span className="font-syne text-2xl font-extrabold text-primary ml-1">₹{selectedBus.price * selectedSeats.length}</span>
            </p>
          </div>
          <button
            disabled={selectedSeats.length === 0}
            onClick={() => navigate("/checkout")}
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-primary/30 text-sm uppercase tracking-widest active:scale-95"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
