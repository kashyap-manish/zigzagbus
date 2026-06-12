import { useBooking } from "../context/BookingContext";
import { Link, useNavigate } from "react-router-dom";

export default function MyBookings() {
  const { bookings, user } = useBooking();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Required</h2>
        <p className="text-gray-500 mb-6">Please login to view your bookings.</p>
        <Link to="/login" className="bg-[#2887ff] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2476da] transition">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎟️</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-6">Start by searching for a bus.</p>
            <Link to="/search" className="bg-[#2887ff] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2476da] transition">
              Search Buses
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="bg-white rounded-2xl shadow-md p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{b.busData?.operator}</h3>
                    <p className="text-gray-500 text-sm">{b.busData?.type}</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Confirmed</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs">ROUTE</p>
                    <p className="font-semibold">{b.busData?.from} → {b.busData?.to}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">DATE</p>
                    <p className="font-semibold">{b.search?.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">SEATS</p>
                    <p className="font-semibold">{b.seats.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">AMOUNT</p>
                    <p className="font-extrabold text-[#2887ff]">₹{b.total}</p>
                  </div>
                </div>
                <div className="border-t mt-3 pt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Booking ID: #{b.id} · Passenger: {b.passengers.name}</span>
                  <button
                    onClick={() => navigate(`/track?id=${b.id}`)}
                    className="text-xs bg-[#2887ff] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#2476da] transition"
                  >
                    🗺️ Track Bus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
