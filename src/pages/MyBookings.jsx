import { useBooking } from "../context/BookingContext";
import { Link, useNavigate } from "react-router-dom";

export default function MyBookings() {
  const { bookings, user } = useBooking();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <i className="ti ti-lock text-5xl text-primary"></i>
        </div>
        <h2 className="font-syne text-3xl font-extrabold text-midnight mb-3">Login Required</h2>
        <p className="text-slate-400 font-medium mb-8 max-w-xs">Please sign in to access your booking history and manage your trips.</p>
        <div className="flex gap-3">
          <Link to="/login" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
            Sign In
          </Link>
          <Link to="/register" className="border border-slate-200 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition text-sm">
            Register
          </Link>
        </div>
      </div>
    );
  }

  const totalSpent = bookings.reduce((sum, b) => sum + (b.total || 0), 0);
  const totalSeats = bookings.reduce((sum, b) => sum + (b.seats?.length || 0), 0);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-midnight pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-2">Welcome back</p>
              <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                {user.name}'s <span className="text-primary italic">Trips</span>
              </h1>
            </div>
            <Link to="/search" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-bold transition shadow-lg shadow-primary/30 text-sm uppercase tracking-widest shrink-0">
              <i className="ti ti-plus"></i> New Booking
            </Link>
          </div>

          {/* Summary stats */}
          {bookings.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { icon: "ti-ticket", val: bookings.length, label: "Total Trips" },
                { icon: "ti-armchair", val: totalSeats, label: "Seats Booked" },
                { icon: "ti-wallet", val: `₹${totalSpent}`, label: "Total Spent" },
              ].map(({ icon, val, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <i className={`ti ${icon} text-primary text-xl block mb-2`}></i>
                  <p className="font-syne text-2xl font-extrabold text-white">{val}</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bookings */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {bookings.length === 0 ? (
          <div className="text-center py-28 bg-white rounded-3xl border border-slate-100 shadow-lg">
            <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
              <i className="ti ti-ticket-off text-5xl text-slate-300"></i>
            </div>
            <h3 className="font-syne text-2xl font-bold text-midnight mb-2">No trips yet</h3>
            <p className="text-slate-400 mb-8 font-medium max-w-xs mx-auto">Your booking history will appear here once you make your first booking.</p>
            <Link to="/search" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
              <i className="ti ti-search"></i> Find a Bus
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((b, idx) => (
              <div key={b.id} className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">

                {/* Card top bar */}
                <div className="bg-midnight px-6 sm:px-8 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center">
                      <i className="ti ti-bus text-primary text-sm"></i>
                    </div>
                    <div>
                      <p className="text-white font-syne font-bold text-sm">{b.busData?.operator}</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{b.busData?.type}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-[10px] font-extrabold px-4 py-2 rounded-full border border-green-500/20 uppercase tracking-widest">
                    <i className="ti ti-circle-check-filled"></i> Confirmed
                  </span>
                </div>

                {/* Ticket body */}
                <div className="p-6 sm:p-8">
                  {/* Route */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-center">
                      <p className="font-syne text-2xl font-extrabold text-midnight">{b.busData?.from}</p>
                      <p className="text-slate-400 text-xs font-semibold mt-1">Origin</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center px-4">
                      <div className="flex items-center gap-2 w-full">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="flex-1 border-t-2 border-dashed border-slate-200 relative">
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary/10 rounded-full px-3 py-1">
                            <i className="ti ti-bus text-primary text-sm"></i>
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                      </div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-5">{b.search?.date}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-syne text-2xl font-extrabold text-midnight">{b.busData?.to}</p>
                      <p className="text-slate-400 text-xs font-semibold mt-1">Destination</p>
                    </div>
                  </div>

                  {/* Dashed divider with notch */}
                  <div className="relative -mx-6 sm:-mx-8 flex items-center mb-6">
                    <div className="w-5 h-10 bg-slate-50 rounded-r-full border border-slate-100 border-l-0 shrink-0"></div>
                    <div className="flex-1 border-t-2 border-dashed border-slate-100"></div>
                    <div className="w-5 h-10 bg-slate-50 rounded-l-full border border-slate-100 border-r-0 shrink-0"></div>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: "ti-armchair", label: "Seats", val: b.seats?.join(", ") },
                      { icon: "ti-user", label: "Passenger", val: b.passengers?.name },
                      { icon: "ti-phone", label: "Contact", val: b.passengers?.phone || "—" },
                      { icon: "ti-wallet", label: "Amount", val: `₹${b.total}`, highlight: true },
                    ].map(({ icon, label, val, highlight }) => (
                      <div key={label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                        <div className="flex items-center gap-1.5 mb-2">
                          <i className={`ti ${icon} text-slate-400 text-xs`}></i>
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{label}</p>
                        </div>
                        <p className={`font-bold text-sm truncate ${highlight ? "text-primary font-syne text-lg" : "text-midnight"}`}>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-semibold">
                    Booking ID: <span className="text-midnight font-bold">#{b.id}</span>
                  </span>
                  <button
                    onClick={() => navigate(`/track?id=${b.id}`)}
                    className="flex items-center gap-2 text-xs bg-midnight text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary transition-all shadow-md group-hover:bg-primary"
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
