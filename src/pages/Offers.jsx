import { useState } from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  {
    code: "FIRST50",
    title: "First Booking Offer",
    desc: "Get 50% off on your very first ZigZagBus booking.",
    discount: "50% OFF",
    validity: "31 Dec 2025",
    color: "from-purple-500 to-purple-700",
    badge: "🎉 New User",
  },
  {
    code: "MONSOON30",
    title: "Monsoon Special",
    desc: "Travel during monsoon season and save 30% on all AC buses.",
    discount: "30% OFF",
    validity: "30 Sep 2025",
    color: "from-blue-400 to-[#2887ff]",
    badge: "🌧️ Seasonal",
  },
  {
    code: "WEEKEND20",
    title: "Weekend Getaway",
    desc: "Book for weekends and enjoy flat 20% off on all routes.",
    discount: "20% OFF",
    validity: "31 Dec 2025",
    color: "from-green-400 to-green-600",
    badge: "🏖️ Weekend",
  },
  {
    code: "GROUP15",
    title: "Group Travel",
    desc: "Travelling with 4+ passengers? Get 15% off the total fare.",
    discount: "15% OFF",
    validity: "31 Dec 2025",
    color: "from-orange-400 to-orange-600",
    badge: "👨‍👩‍👧‍👦 Group",
  },
  {
    code: "STUDENT25",
    title: "Student Discount",
    desc: "Valid student ID? Enjoy 25% off on non-AC and AC seater buses.",
    discount: "25% OFF",
    validity: "31 Mar 2026",
    color: "from-pink-400 to-pink-600",
    badge: "🎓 Student",
  },
  {
    code: "EARLYBIRD",
    title: "Early Bird Deal",
    desc: "Book 7 days in advance and save flat ₹100 on your booking.",
    discount: "₹100 OFF",
    validity: "31 Dec 2025",
    color: "from-yellow-400 to-yellow-600",
    badge: "🌅 Early Bird",
  },
];

function OfferCard({ offer }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className={`bg-gradient-to-r ${offer.color} text-white p-5`}>
        <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">{offer.badge}</span>
        <h3 className="text-lg font-extrabold mt-3">{offer.title}</h3>
        <p className="text-3xl font-extrabold mt-1">{offer.discount}</p>
      </div>
      <div className="p-5">
        <p className="text-gray-500 text-sm mb-4">{offer.desc}</p>
        <div className="flex items-center justify-between border border-dashed border-gray-300 rounded-xl px-4 py-2 bg-gray-50 mb-4">
          <span className="font-bold text-gray-800 tracking-widest text-sm">{offer.code}</span>
          <button onClick={copy} className="text-[#2887ff] text-xs font-bold hover:underline">
            {copied ? "✅ Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-gray-400 text-xs">Valid till: {offer.validity}</p>
      </div>
    </div>
  );
}

export default function Offers() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2887ff] to-[#1a5fcc] text-white py-16 px-4 text-center">
        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Limited Time Deals</p>
        <h1 className="text-4xl font-extrabold mb-3">Offers & Discounts</h1>
        <p className="text-blue-100 max-w-md mx-auto">Save big on your next bus journey. Copy a promo code and apply at checkout.</p>
      </section>

      {/* Offers Grid */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {offers.map((o) => <OfferCard key={o.code} offer={o} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Ready to Save?</h2>
        <p className="text-gray-500 mb-6 text-sm">Copy a promo code above and use it when searching for your bus.</p>
        <button onClick={() => navigate("/")} className="bg-[#2887ff] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2476da] transition">
          Search Buses →
        </button>
      </section>
    </div>
  );
}
