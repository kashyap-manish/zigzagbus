import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    key: "booking",
    icon: "ti-ticket",
    label: "Booking",
    color: "from-primary to-blue-600",
    faqs: [
      { q: "How do I book a bus ticket?", a: "Search for your route on our Search page, choose a bus, select your seats, fill in passenger details, and complete payment. Your e-ticket will be sent instantly." },
      { q: "Can I book tickets for someone else?", a: "Yes. Enter the passenger's name and contact details during checkout. The ticket will be issued in their name." },
      { q: "Is there a booking fee?", a: "No hidden booking fees. The price shown is the final amount you pay, inclusive of all applicable taxes." },
      { q: "How many seats can I book at once?", a: "You can book up to 6 seats in a single transaction. For group bookings of 7+, contact our support team." },
    ],
  },
  {
    key: "payment",
    icon: "ti-wallet",
    label: "Payment",
    color: "from-emerald-400 to-teal-600",
    faqs: [
      { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe." },
      { q: "Is my payment information secure?", a: "Yes. All transactions are encrypted using TLS and processed by PCI-DSS compliant payment gateways. We never store your card details." },
      { q: "What happens if my payment fails?", a: "If money is deducted but the booking fails, the amount is automatically refunded within 5–7 business days to the original payment method." },
      { q: "Can I pay in installments?", a: "Currently we do not support installment payments. The full amount must be paid at the time of booking." },
    ],
  },
  {
    key: "cancellation",
    icon: "ti-calendar-x",
    label: "Cancellations",
    color: "from-rose-400 to-red-600",
    faqs: [
      { q: "How do I cancel my booking?", a: "Go to My Bookings, find your trip, and click Cancel. Cancellations made 24+ hours before departure receive a full refund." },
      { q: "What is the cancellation policy?", a: "Cancellations more than 24 hours before departure: full refund. Within 24 hours: non-refundable. No-shows: non-refundable." },
      { q: "How long does a refund take?", a: "Approved refunds are processed within 5–7 business days to the original payment method." },
      { q: "Can I reschedule instead of cancelling?", a: "Date changes are available up to 12 hours before departure, subject to seat availability on the new date." },
    ],
  },
  {
    key: "travel",
    icon: "ti-bus",
    label: "Travel",
    color: "from-violet-500 to-purple-600",
    faqs: [
      { q: "How do I track my bus?", a: "Use the Live Tracking page and enter your booking ID. You can see your bus location in real-time on a map." },
      { q: "What if my bus is delayed?", a: "You'll receive an SMS and email notification. For delays over 2 hours, you may be eligible for partial compensation." },
      { q: "Where do I board the bus?", a: "The boarding point is listed on your e-ticket. Arrive at least 15 minutes before departure." },
      { q: "What luggage is allowed?", a: "Each passenger is allowed one piece of check-in luggage (up to 15kg) and one small carry-on bag free of charge." },
    ],
  },
  {
    key: "account",
    icon: "ti-user-circle",
    label: "Account",
    color: "from-amber-400 to-orange-500",
    faqs: [
      { q: "How do I create an account?", a: "Click Register on the top right, fill in your name, email, and password, and you're good to go." },
      { q: "I forgot my password. What do I do?", a: "Click 'Forgot Password' on the login page and enter your email. A reset link will be sent within a few minutes." },
      { q: "Can I change my email address?", a: "Yes. Go to your account settings and update your email. A verification link will be sent to the new address." },
      { q: "How do I delete my account?", a: "Email us at support@zigzagbus.in with your registered email and we will process the deletion within 7 business days." },
    ],
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-primary/20 shadow-lg shadow-primary/5" : "border-slate-100"}`}>
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition bg-white"
      >
        <span className="font-bold text-midnight text-sm">{faq.q}</span>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-400"}`}>
          <i className={`ti ti-chevron-down text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-4 text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-100 bg-slate-50/50">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("booking");
  const [openIndex, setOpenIndex] = useState(null);

  const current = categories.find((c) => c.key === activeCategory);

  function handleCategoryChange(key) {
    setActiveCategory(key);
    setOpenIndex(null);
  }

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-40 pb-28 px-4 text-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-help-circle text-primary"></i> Help Center
          </div>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Find quick answers to the most common questions about bookings, payments, travel, and more.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <div className="container mx-auto px-4 sm:px-8 -mt-10 relative z-20 max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => handleCategoryChange(c.key)}
              className={`flex flex-col items-center gap-3 p-5 rounded-3xl border transition-all duration-300 ${
                activeCategory === c.key
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/30 -translate-y-1"
                  : "bg-white border-slate-100 text-slate-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${activeCategory === c.key ? "bg-white/20" : `bg-gradient-to-br ${c.color} opacity-90`}`}>
                <i className={`ti ${c.icon} text-white text-lg`}></i>
              </div>
              <span className={`text-xs font-extrabold uppercase tracking-widest ${activeCategory === c.key ? "text-white" : "text-slate-500"}`}>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ accordion */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className={`w-12 h-12 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center shadow-lg`}>
              <i className={`ti ${current.icon} text-white text-xl`}></i>
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{current.faqs.length} questions</p>
              <h2 className="font-syne text-2xl font-extrabold text-midnight">{current.label}</h2>
            </div>
          </div>

          <div className="space-y-3">
            {current.faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-midnight rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="font-syne text-3xl font-extrabold text-white mb-2">Still have questions?</h2>
              <p className="text-white/50 font-medium text-sm max-w-sm">Our support team is available 7 days a week to help you out.</p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-4 rounded-2xl font-bold transition shadow-xl shadow-primary/30 text-sm uppercase tracking-widest">
                <i className="ti ti-message-circle"></i> Contact Us
              </Link>
              <a href="mailto:support@zigzagbus.in" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-7 py-4 rounded-2xl font-bold transition text-sm uppercase tracking-widest">
                <i className="ti ti-mail"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
