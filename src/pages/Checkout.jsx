import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export default function Checkout() {
  const { selectedBus, selectedSeats, search, confirmBooking } = useBooking();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: passenger details, 2: payment, 3: confirmed
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

  function handlePassengerSubmit(e) {
    e.preventDefault();
    setStep(2);
  }

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

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#2887ff]";

  if (step === 3 && booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-6">Your ticket has been booked successfully.</p>

          <div className="bg-gray-50 rounded-xl p-4 text-left text-sm space-y-2 mb-6">
            <p><span className="text-gray-500">Booking ID:</span> <span className="font-bold">#{booking.id}</span></p>
            <p><span className="text-gray-500">Operator:</span> <span className="font-bold">{booking.busData?.operator}</span></p>
            <p><span className="text-gray-500">Route:</span> <span className="font-bold">{booking.busData?.from} → {booking.busData?.to}</span></p>
            <p><span className="text-gray-500">Date:</span> <span className="font-bold">{booking.search?.date}</span></p>
            <p><span className="text-gray-500">Seats:</span> <span className="font-bold">{booking.seats.join(", ")}</span></p>
            <p><span className="text-gray-500">Passenger:</span> <span className="font-bold">{booking.passengers.name}</span></p>
            <p><span className="text-gray-500">Total Paid:</span> <span className="font-extrabold text-[#2887ff] text-base">₹{booking.total}</span></p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => navigate("/bookings")} className="flex-1 bg-[#2887ff] text-white py-2 rounded-full font-bold hover:bg-[#2476da] transition text-sm">
              View My Bookings
            </button>
            <button onClick={() => navigate(`/track?id=${booking.id}`)} className="flex-1 bg-green-500 text-white py-2 rounded-full font-bold hover:bg-green-600 transition text-sm">
              🗺️ Track Bus
            </button>
            <button onClick={() => navigate("/")} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full font-semibold hover:border-[#2887ff] transition text-sm">
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {["Passenger Details", "Payment"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-[#2887ff] text-white" : "bg-gray-200 text-gray-500"}`}>
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-sm font-semibold ${step === i + 1 ? "text-[#2887ff]" : "text-gray-400"}`}>{s}</span>
              {i < 1 && <span className="text-gray-300 mx-1">──</span>}
            </div>
          ))}
        </div>

        {/* Trip Summary */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6 text-sm">
          <h3 className="font-bold text-gray-700 mb-3">Trip Summary</h3>
          <div className="flex justify-between text-gray-600 mb-1">
            <span>{selectedBus.operator} · {selectedBus.type}</span>
            <span>{selectedBus.departure} - {selectedBus.arrival}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-1">
            <span>{selectedBus.from} → {selectedBus.to}</span>
            <span>{search.date}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-1">
            <span>Seats: {selectedSeats.join(", ")}</span>
            <span>₹{selectedBus.price} × {selectedSeats.length}</span>
          </div>
          <div className="border-t mt-3 pt-3 flex justify-between font-extrabold text-gray-800">
            <span>Total</span>
            <span className="text-[#2887ff] text-lg">₹{total}</span>
          </div>
        </div>

        {/* Step 1: Passenger Details */}
        {step === 1 && (
          <form onSubmit={handlePassengerSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="font-bold text-gray-800 text-lg">Passenger Details</h3>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">FULL NAME</label>
              <input className={inputClass} placeholder="Enter full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">EMAIL</label>
              <input type="email" className={inputClass} placeholder="Enter email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">PHONE</label>
              <input type="tel" className={inputClass} placeholder="Enter phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            </div>
            <button type="submit" className="w-full bg-[#2887ff] text-white py-3 rounded-full font-bold hover:bg-[#2476da] transition">
              Continue to Payment →
            </button>
          </form>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <form onSubmit={handlePaymentSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h3 className="font-bold text-gray-800 text-lg">Payment</h3>

            <div className="flex gap-3">
              {[["card", "💳 Card"], ["upi", "📱 UPI"], ["netbanking", "🏦 Net Banking"]].map(([val, label]) => (
                <button type="button" key={val} onClick={() => setPayment({ ...payment, method: val })}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition ${payment.method === val ? "bg-[#2887ff] text-white border-[#2887ff]" : "border-gray-300 text-gray-600 hover:border-[#2887ff]"}`}>
                  {label}
                </button>
              ))}
            </div>

            {payment.method === "card" && (
              <>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">CARD NUMBER</label>
                  <input className={inputClass} placeholder="1234 5678 9012 3456" maxLength={19} value={payment.cardNumber} onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })} required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">EXPIRY</label>
                    <input className={inputClass} placeholder="MM/YY" maxLength={5} value={payment.expiry} onChange={(e) => setPayment({ ...payment, expiry: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">CVV</label>
                    <input className={inputClass} placeholder="•••" maxLength={3} type="password" value={payment.cvv} onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} required />
                  </div>
                </div>
              </>
            )}

            {payment.method === "upi" && (
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">UPI ID</label>
                <input className={inputClass} placeholder="yourname@upi" required />
              </div>
            )}

            {payment.method === "netbanking" && (
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">SELECT BANK</label>
                <select className={inputClass} required>
                  <option value="">Choose bank</option>
                  {["SBI", "HDFC", "ICICI", "Axis", "Kotak"].map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            )}

            {payError && <p className="text-red-500 text-sm bg-red-50 rounded-lg p-3">{payError}</p>}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:border-[#2887ff] transition">
                ← Back
              </button>
              <button type="submit" disabled={paying} className="flex-1 bg-[#2887ff] text-white py-3 rounded-full font-bold hover:bg-[#2476da] transition disabled:opacity-60">
                {paying ? "Processing..." : `Pay ₹${total}`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
