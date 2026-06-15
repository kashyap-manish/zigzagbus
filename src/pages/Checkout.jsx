import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400";
const labelClass = "text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2";

export default function Checkout() {
  const { selectedBus, selectedSeats, search, confirmBooking } = useBooking();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [payment, setPayment] = useState({ method: "card", cardNumber: "", expiry: "", cvv: "" });
  const [booking, setBooking] = useState(null);
  const [payError, setPayError] = useState("");
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    if (!selectedBus || selectedSeats.length === 0) navigate("/search");
  }, [selectedBus, selectedSeats, navigate]);

  if (!selectedBus || selectedSeats.length === 0) return null;

  const total = selectedBus.price * selectedSeats.length;

  async function handlePaymentSubmit(e) {
    e.preventDefault();
    setPayError("");
    setPaying(true);
    try {
      const b = await confirmBooking(form);
      setBooking(b);
      setStep(3);
    } catch (err) {
      setPayError(err.message);
    } finally {
      setPaying(false);
    }
  }

  if (step === 3 && booking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-24 pb-12">
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ti ti-circle-check-filled text-5xl text-green-500"></i>
          </div>
          <h2 className="font-syne text-3xl font-extrabold text-midnight mb-2">Booking Confirmed!</h2>
          <p className="text-slate-400 mb-8 font-medium">Your ticket has been booked successfully.</p>

          <div className="bg-slate-50 rounded-2xl p-5 text-left text-sm space-y-3 mb-8 border border-slate-100">
            {[
              ["Booking ID", `#${booking.id}`],
              ["Operator", booking.busData?.operator],
              ["Route", `${booking.busData?.from} → ${booking.busData?.to}`],
              ["Date", booking.search?.date],
              ["Seats", booking.seats.join(", ")],
              ["Passenger", booking.passengers.name],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between">
                <span className="text-slate-400 font-semibold">{label}</span>
                <span className="font-bold text-midnight">{val}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-slate-200 pt-3 mt-1">
              <span className="text-slate-400 font-semibold">Total Paid</span>
              <span className="font-syne font-extrabold text-primary text-lg">₹{booking.total}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={() => navigate("/bookings")} className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
              View My Bookings
            </button>
            <button onClick={() => navigate(`/track?id=${booking.id}`)} className="w-full bg-midnight text-white py-4 rounded-2xl font-bold hover:opacity-90 transition uppercase tracking-widest text-sm">
              Track Bus
            </button>
            <button onClick={() => navigate("/")} className="w-full border border-slate-200 text-slate-600 py-4 rounded-2xl font-bold hover:border-primary/30 transition uppercase tracking-widest text-sm">
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          {["Passenger Details", "Payment"].map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-200 text-slate-400"}`}>
                {step > i + 1 ? <i className="ti ti-check text-sm"></i> : i + 1}
              </div>
              <span className={`text-sm font-bold transition-colors ${step === i + 1 ? "text-midnight" : "text-slate-300"}`}>{s}</span>
              {i < 1 && <div className="w-12 h-0.5 bg-slate-200 rounded"></div>}
            </div>
          ))}
        </div>

        {/* Trip Summary */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 mb-6">
          <h3 className="font-syne font-bold text-midnight mb-5 text-lg">Trip Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-500">
              <span className="font-semibold">{selectedBus.operator} · {selectedBus.type}</span>
              <span className="font-semibold">{selectedBus.departure} – {selectedBus.arrival}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span className="font-semibold">{selectedBus.from} → {selectedBus.to}</span>
              <span className="font-semibold">{search.date}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span className="font-semibold">Seats: {selectedSeats.join(", ")}</span>
              <span className="font-semibold">₹{selectedBus.price} × {selectedSeats.length}</span>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-5 pt-5 flex justify-between items-center">
            <span className="font-bold text-midnight">Total</span>
            <span className="font-syne text-2xl font-extrabold text-primary">₹{total}</span>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 space-y-5">
            <h3 className="font-syne text-xl font-bold text-midnight">Passenger Details</h3>
            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "Enter full name" },
              { label: "Email Address", key: "email", type: "email", placeholder: "Enter email" },
              { label: "Phone Number", key: "phone", type: "tel", placeholder: "Enter phone number" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input type={type} className={inputClass} placeholder={placeholder} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required />
              </div>
            ))}
            <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm mt-2">
              Continue to Payment →
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handlePaymentSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 space-y-5">
            <h3 className="font-syne text-xl font-bold text-midnight">Payment</h3>

            <div className="grid grid-cols-3 gap-3">
              {[["card", "ti-credit-card", "Card"], ["upi", "ti-qrcode", "UPI"], ["netbanking", "ti-building-bank", "Net Banking"]].map(([val, icon, label]) => (
                <button type="button" key={val} onClick={() => setPayment({ ...payment, method: val })}
                  className={`py-3 rounded-2xl text-xs font-bold border-2 transition-all flex flex-col items-center gap-1.5 ${payment.method === val ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "border-slate-200 text-slate-500 hover:border-primary/30 bg-slate-50"}`}>
                  <i className={`ti ${icon} text-xl`}></i> {label}
                </button>
              ))}
            </div>

            {payment.method === "card" && (
              <>
                <div>
                  <label className={labelClass}>Card Number</label>
                  <input className={inputClass} placeholder="1234 5678 9012 3456" maxLength={19} value={payment.cardNumber} onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Expiry</label>
                    <input className={inputClass} placeholder="MM/YY" maxLength={5} value={payment.expiry} onChange={(e) => setPayment({ ...payment, expiry: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>CVV</label>
                    <input className={inputClass} placeholder="•••" maxLength={3} type="password" value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} required />
                  </div>
                </div>
              </>
            )}
            {payment.method === "upi" && (
              <div>
                <label className={labelClass}>UPI ID</label>
                <input className={inputClass} placeholder="yourname@upi" required />
              </div>
            )}
            {payment.method === "netbanking" && (
              <div>
                <label className={labelClass}>Select Bank</label>
                <select className={inputClass} required>
                  <option value="">Choose bank</option>
                  {["SBI", "HDFC", "ICICI", "Axis", "Kotak"].map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            )}

            {payError && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-500 text-sm rounded-2xl p-4">
                <i className="ti ti-alert-circle text-lg shrink-0"></i> {payError}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border-2 border-slate-200 text-slate-600 py-4 rounded-2xl font-bold hover:border-primary/30 transition uppercase tracking-widest text-sm">
                ← Back
              </button>
              <button type="submit" disabled={paying} className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition disabled:opacity-50 shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                {paying ? "Processing..." : `Pay ₹${total}`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
