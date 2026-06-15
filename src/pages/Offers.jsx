import { useState } from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  { code: "FIRST50", title: "First Booking Offer", desc: "Get 50% off on your very first ZigZagBus booking.", discount: "50% OFF", validity: "31 Dec 2025", badge: "New User", badgeIcon: "ti-gift", color: "from-violet-500 to-purple-700" },
  { code: "MONSOON30", title: "Monsoon Special", desc: "Travel during monsoon season and save 30% on all AC buses.", discount: "30% OFF", validity: "30 Sep 2025", badge: "Seasonal", badgeIcon: "ti-cloud-rain", color: "from-sky-400 to-primary" },
  { code: "WEEKEND20", title: "Weekend Getaway", desc: "Book for weekends and enjoy flat 20% off on all routes.", discount: "20% OFF", validity: "31 Dec 2025", badge: "Weekend", badgeIcon: "ti-beach", color: "from-emerald-400 to-green-600" },
  { code: "GROUP15", title: "Group Travel", desc: "Travelling with 4+ passengers? Get 15% off the total fare.", discount: "15% OFF", validity: "31 Dec 2025", badge: "Group", badgeIcon: "ti-users", color: "from-orange-400 to-orange-600" },
  { code: "STUDENT25", title: "Student Discount", desc: "Valid student ID? Enjoy 25% off on non-AC and AC seater buses.", discount: "25% OFF", validity: "31 Mar 2026", badge: "Student", badgeIcon: "ti-school", color: "from-pink-400 to-rose-600" },
  { code: "EARLYBIRD", title: "Early Bird Deal", desc: "Book 7 days in advance and save flat ₹100 on your booking.", discount: "₹100 OFF", validity: "31 Dec 2025", badge: "Early Bird", badgeIcon: "ti-sun", color: "from-amber-400 to-yellow-500" },
];

function OfferCard({ offer }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
      <div className={`bg-gradient-to-br ${offer.color} p-7 relative overflow-hidden`}>
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
        <div className="flex items-center gap-2 mb-4">
          <i className={`ti ${offer.badgeIcon} text-white/80 text-sm`}></i>
          <span className="text-[10px] font-extrabold text-white/80 uppercase tracking-widest">{offer.badge}</span>
        </div>
        <h3 className="font-syne text-xl font-extrabold text-white mb-1">{offer.title}</h3>
        <p className="font-syne text-4xl font-extrabold text-white">{offer.discount}</p>
      </div>
      <div className="p-6">
        <p className="text-slate-500 text-sm font-medium mb-5 leading-relaxed">{offer.desc}</p>
        <div className="flex items-center justify-between bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl px-5 py-3 mb-4">
          <span className="font-syne font-extrabold text-midnight tracking-widest text-sm">{offer.code}</span>
          <button onClick={copy} className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${copied ? "text-green-500" : "text-primary hover:text-primary-dark"}`}>
            {copied ? <span className="flex items-center gap-1"><i className="ti ti-check"></i> Copied</span> : "Copy"}
          </button>
        </div>
        <p className="text-slate-400 text-xs font-semibold flex items-center gap-1.5">
          <i className="ti ti-calendar text-slate-300"></i> Valid till: {offer.validity}
        </p>
      </div>
    </div>
  );
}

export default function Offers() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-36 pb-24 px-4 text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/3"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span> Limited Time Deals
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            Offers & <span className="text-primary italic">Discounts</span>
          </h1>
          <p className="text-white/50 text-lg font-medium">
            Save big on your next journey. Copy a promo code and apply at checkout.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o) => <OfferCard key={o.code} offer={o} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-syne text-4xl font-extrabold text-midnight mb-3">Ready to Save?</h2>
          <p className="text-slate-400 mb-8 font-medium">Copy a promo code above and use it when booking your bus.</p>
          <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-xl shadow-primary/20 uppercase tracking-widest text-sm active:scale-95">
            Search Buses <i className="ti ti-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
