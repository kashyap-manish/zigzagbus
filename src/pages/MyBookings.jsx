import { useBooking } from "../context/BookingContext";
import { Link, useNavigate } from "react-router-dom";

export default function MyBookings() {
  const { bookings, user } = useBooking();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ti ti-lock text-4xl text-primary"></i>
        </div>
        <h2 className="font-syne text-3xl font-extrabold text-midnight mb-2">Login Required</h2>
        <p className="text-slate-400 font-medium mb-8">Please login to view your bookings.</p>
        <Link to="/login" className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="font-syne text-4xl font-extrabold text-midnight mb-1">My Bookings</h1>
          <p className="text-slate-400 font-medium">Hi <span className="text-primary font-bold">{user.name}</span>, here are your trips.</p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-lg">
            <i className="ti ti-ticket text-6xl text-slate-200 block mb-4"></i>
            <h3 className="font-syne text-2xl font-bold text-midnight mb-2">No bookings yet</h3>
            <p className="text-slate-400 mb-8 font-medium">Start by searching for a bus.</p>
            <Link to="/search" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
              <i className="ti ti-search"></i> Search Buses
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((b) => (
              <div key={b.id} className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-syne text-xl font-bold text-midnight mb-1">{b.busData?.operator}</h3>
                      <span className="text-[10px] bg-primary/10 text-primary font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">{b.busData?.type}</span>
                    </div>
                    <span className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-extrabold px-4 py-2 rounded-full border border-green-100">
                      <i className="ti ti-circle-check-filled"></i> Confirmed
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                      ["Route", `${b.busData?.from} → ${b.busData?.to}`, "ti-route"],
                      ["Date", b.search?.date, "ti-calendar"],
                      ["Seats", b.seats.join(", "), "ti-armchair"],
                      ["Amount", `₹${b.total}`, "ti-wallet"],
                    ].map(([label, val, icon]) => (
                      <div key={label} className="bg-slate-50 rounded-2xl p-4">
                        <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                          <i className={`ti ${icon} text-xs`}></i>
                          <p className="text-[10px] font-extrabold uppercase tracking-widest">{label}</p>
                        </div>
                        <p className={`font-bold text-sm ${label === "Amount" ? "text-primary font-syne text-lg" : "text-midnight"}`}>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <span className="text-xs text-slate-400 font-semibold">
                    ID: #{b.id} &nbsp;·&nbsp; Passenger: {b.passengers.name}
                  </span>
                  <button
                    onClick={() => navigate(`/track?id=${b.id}`)}
                    className="flex items-center gap-2 text-xs bg-midnight text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary transition-all shadow-md"
                  >
                    <i className="ti ti-map-pin"></i> Track Bus
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
