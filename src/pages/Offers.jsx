import { useState } from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  { code: "FIRST50", title: "First Booking Offer", desc: "Get 50% off on your very first ZigZagBus booking. No conditions applied.", discount: "50% OFF", validity: "31 Dec 2025", badge: "New User", badgeIcon: "ti-gift", color: "from-violet-500 to-purple-700", category: "new", featured: true },
  { code: "MONSOON30", title: "Monsoon Special", desc: "Travel during monsoon season and save 30% on all AC buses.", discount: "30% OFF", validity: "30 Sep 2025", badge: "Seasonal", badgeIcon: "ti-cloud-rain", color: "from-sky-400 to-primary", category: "seasonal" },
  { code: "WEEKEND20", title: "Weekend Getaway", desc: "Book for weekends and enjoy flat 20% off on all routes.", discount: "20% OFF", validity: "31 Dec 2025", badge: "Weekend", badgeIcon: "ti-beach", color: "from-emerald-400 to-green-600", category: "weekend" },
  { code: "GROUP15", title: "Group Travel", desc: "Travelling with 4+ passengers? Get 15% off the total fare.", discount: "15% OFF", validity: "31 Dec 2025", badge: "Group", badgeIcon: "ti-users", color: "from-orange-400 to-orange-600", category: "group" },
  { code: "STUDENT25", title: "Student Discount", desc: "Valid student ID? Enjoy 25% off on non-AC and AC seater buses.", discount: "25% OFF", validity: "31 Mar 2026", badge: "Student", badgeIcon: "ti-school", color: "from-pink-400 to-rose-600", category: "student" },
  { code: "EARLYBIRD", title: "Early Bird Deal", desc: "Book 7 days in advance and save flat ₹100 on your booking.", discount: "₹100 OFF", validity: "31 Dec 2025", badge: "Early Bird", badgeIcon: "ti-sun", color: "from-amber-400 to-yellow-500", category: "seasonal" },
];

const categories = [
  { key: "all", label: "All Offers", icon: "ti-tag" },
  { key: "new", label: "New User", icon: "ti-gift" },
  { key: "seasonal", label: "Seasonal", icon: "ti-cloud-rain" },
  { key: "weekend", label: "Weekend", icon: "ti-beach" },
  { key: "group", label: "Group", icon: "ti-users" },
  { key: "student", label: "Student", icon: "ti-school" },
];

function OfferCard({ offer }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Gradient top */}
      <div className={`bg-gradient-to-br ${offer.color} p-7 relative overflow-hidden`}>
        <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 bg-white/15 rounded-full px-3 py-1.5">
              <i className={`ti ${offer.badgeIcon} text-white text-xs`}></i>
              <span className="text-[10px] font-extrabold text-white uppercase tracking-widest">{offer.badge}</span>
            </div>
            {offer.featured && (
              <span className="bg-white/20 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1">
                <i className="ti ti-star-filled text-yellow-300 text-xs"></i> Featured
              </span>
            )}
          </div>
          <p className="font-syne text-5xl font-extrabold text-white leading-none mb-2">{offer.discount}</p>
          <h3 className="font-syne text-lg font-bold text-white/90">{offer.title}</h3>
        </div>
      </div>

      {/* Notch divider */}
      <div className="relative flex items-center -my-0">
        <div className="w-5 h-10 bg-slate-50 rounded-r-full border border-slate-100 border-l-0 shrink-0"></div>
        <div className="flex-1 border-t-2 border-dashed border-slate-100"></div>
        <div className="w-5 h-10 bg-slate-50 rounded-l-full border border-slate-100 border-r-0 shrink-0"></div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-slate-500 text-sm font-medium mb-5 leading-relaxed flex-1">{offer.desc}</p>

        {/* Code box */}
        <div className="flex items-center justify-between bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl px-5 py-3.5 mb-4 group">
          <span className="font-syne font-extrabold text-midnight tracking-[0.2em] text-sm">{offer.code}</span>
          <button
            onClick={copy}
            className={`flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-xl transition-all ${
              copied
                ? "bg-green-500 text-white"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
            }`}
          >
            <i className={`ti ${copied ? "ti-check" : "ti-copy"} text-sm`}></i>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-slate-400 text-xs font-semibold flex items-center gap-1.5">
          <i className="ti ti-calendar-event text-slate-300"></i>
          Valid till <span className="text-midnight font-bold">{offer.validity}</span>
        </p>
      </div>
    </div>
  );
}

export default function Offers() {
  const navigate = useNavigate();
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? offers : offers.filter((o) => o.category === active);
  const featured = offers.find((o) => o.featured);

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-40 pb-28 px-4 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block"></span>
            Limited Time Deals
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            Exclusive <span className="text-primary italic">Offers</span>
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-md mx-auto">
            Copy a promo code and apply it at checkout to unlock your savings instantly.
          </p>
        </div>
      </section>

      {/* Featured Deal Banner */}
      {featured && (
        <div className="container mx-auto px-4 sm:px-8 -mt-10 relative z-20 max-w-5xl">
          <div className={`bg-gradient-to-r ${featured.color} rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-purple-500/20 overflow-hidden relative`}>
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <i className="ti ti-star-filled text-yellow-300"></i>
                <span className="text-white/70 text-xs font-extrabold uppercase tracking-widest">Featured Deal</span>
              </div>
              <h2 className="font-syne text-3xl font-extrabold text-white mb-1">{featured.title}</h2>
              <p className="text-white/70 text-sm font-medium max-w-sm">{featured.desc}</p>
            </div>
            <div className="relative z-10 flex flex-col items-center sm:items-end gap-4 shrink-0">
              <p className="font-syne text-6xl font-extrabold text-white">{featured.discount}</p>
              <FeaturedCopyButton code={featured.code} />
            </div>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                  active === c.key
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary"
                }`}
              >
                <i className={`ti ${c.icon} text-sm`}></i>
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((o) => <OfferCard key={o.code} offer={o} />)}
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-midnight rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <i className="ti ti-share text-primary text-lg"></i>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Refer & Earn</span>
              </div>
              <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
                Share ZigZagBus, <span className="text-primary italic">Earn ₹200</span>
              </h2>
              <p className="text-white/50 font-medium text-sm leading-relaxed">
                Invite a friend to book their first trip with ZigZagBus and earn ₹200 wallet credits when they complete their journey.
              </p>
            </div>
            <button
              onClick={() => navigate("/search")}
              className="relative z-10 shrink-0 inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/30 uppercase tracking-widest text-sm hover:-translate-y-0.5"
            >
              <i className="ti ti-gift text-lg"></i> Start Referring
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <i className="ti ti-search text-primary text-2xl"></i>
          </div>
          <h2 className="font-syne text-4xl font-extrabold text-midnight mb-3">Ready to Save?</h2>
          <p className="text-slate-400 mb-8 font-medium">Copy a promo code above and use it when booking your bus.</p>
          <button
            onClick={() => navigate("/search")}
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-xl shadow-primary/20 uppercase tracking-widest text-sm active:scale-95"
          >
            Search Buses <i className="ti ti-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

function FeaturedCopyButton({ code }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={copy}
      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
        copied ? "bg-green-500 text-white" : "bg-white text-midnight hover:bg-white/90"
      }`}
    >
      <i className={`ti ${copied ? "ti-check" : "ti-copy"}`}></i>
      {copied ? "Copied!" : code}
    </button>
  );
}
