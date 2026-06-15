import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { destinations } from "../data/mockData";

const stats = [
  { value: "500+", label: "Active Routes", icon: "ti-route" },
  { value: "1.2M", label: "Happy Travelers", icon: "ti-mood-happy" },
  { value: "98%", label: "On-Time Rate", icon: "ti-clock-check" },
  { value: "4.9★", label: "User Rating", icon: "ti-star-filled" },
];

const features = [
  { icon: "ti-armchair", title: "First-Class Comfort", desc: "Ergonomic recliner seats, ample legroom, and personal climate control on every ride.", color: "from-primary to-blue-700" },
  { icon: "ti-wifi", title: "Free WiFi & Charging", desc: "Stay connected with high-speed WiFi and USB charging points at every seat.", color: "from-violet-500 to-purple-700" },
  { icon: "ti-shield-check", title: "Safe & Verified", desc: "All operators are background-checked, GPS-tracked, and safety-certified.", color: "from-emerald-500 to-teal-600" },
  { icon: "ti-map-pin", title: "Live Tracking", desc: "Track your bus in real-time on a live map. Know exactly where your ride is.", color: "from-amber-400 to-orange-500" },
  { icon: "ti-ticket", title: "Instant E-Ticket", desc: "Book in under 2 minutes. Your e-ticket arrives instantly on SMS and email.", color: "from-rose-400 to-pink-600" },
  { icon: "ti-wallet", title: "Best Price Guarantee", desc: "We match prices across operators so you always get the best deal possible.", color: "from-cyan-400 to-sky-600" },
];

const steps = [
  { step: "01", icon: "ti-search", title: "Search Your Route", desc: "Enter your origin, destination, travel date, and number of passengers." },
  { step: "02", icon: "ti-armchair", title: "Choose Your Seat", desc: "Pick your preferred seat from an interactive seat map with live availability." },
  { step: "03", icon: "ti-credit-card", title: "Pay Securely", desc: "Pay via UPI, card, or net banking through our encrypted payment gateway." },
  { step: "04", icon: "ti-circle-check", title: "Board & Travel", desc: "Show your e-ticket QR code at the boarding point and enjoy the ride." },
];

const testimonials = [
  { name: "Priya Sharma", location: "Delhi → Agra", avatar: "https://i.pravatar.cc/100?u=31", rating: 5, text: "Booked for my family trip in minutes. The AC sleeper was incredibly comfortable and arrived right on time. Will always use ZigZagBus!" },
  { name: "Rahul Verma", location: "Mumbai → Pune", avatar: "https://i.pravatar.cc/100?u=32", rating: 5, text: "Tracked my bus live the entire route. The WiFi worked perfectly. Best bus booking experience I've had in India." },
  { name: "Sneha Joshi", location: "Bangalore → Chennai", avatar: "https://i.pravatar.cc/100?u=33", rating: 5, text: "Used the student discount code and saved ₹200. Seats were clean, staff was polite. Highly recommend ZigZagBus." },
];

const popularRoutes = [
  { from: "Delhi", to: "Agra", duration: "4h", price: 200, tag: "Most Popular" },
  { from: "Mumbai", to: "Pune", duration: "3.5h", price: 280, tag: "Daily Buses" },
  { from: "Bangalore", to: "Chennai", duration: "8h", price: 820, tag: "Night Sleeper" },
  { from: "Delhi", to: "Dehradun", duration: "8h", price: 750, tag: "Weekend Special" },
  { from: "Jaipur", to: "Delhi", duration: "6.5h", price: 600, tag: "Fast Route" },
  { from: "Varanasi", to: "Lucknow", duration: "4h", price: 380, tag: "Trending" },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-midnight flex items-center">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

        <div className="container mx-auto px-4 sm:px-8 relative z-10 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block"></span>
                500+ Routes Across India
              </div>

              <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Travel Smarter,<br />
                <span className="text-primary italic">Live Better.</span>
              </h1>

              <p className="text-white/55 text-lg max-w-lg leading-relaxed font-medium">
                Book bus tickets in seconds, choose your seat, track your ride live, and travel in comfort — all from one platform.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                {["No Hidden Fees", "Instant E-Ticket", "Free Cancellation*"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <i className="ti ti-check text-primary text-xs"></i> {t}
                  </span>
                ))}
              </div>

              {/* Search form */}
              <div className="w-full">
                <SearchForm />
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative hidden lg:block">
              {/* Main image */}
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&w=900&q=80&fit=crop"
                  alt="Modern luxury bus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent"></div>

                {/* Rating badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <i className="ti ti-star-filled text-amber-400 text-lg"></i>
                  <span className="font-syne font-extrabold text-midnight">4.9/5</span>
                  <span className="text-slate-400 text-xs font-semibold">Rating</span>
                </div>

                {/* Live tracking badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-midnight/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <i className="ti ti-map-pin text-primary text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-xs font-bold">Live Bus Tracking</p>
                      <p className="text-white/40 text-[10px] font-semibold">Delhi → Agra · ETA 45 min</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block"></span>
                      <span className="text-green-400 text-[10px] font-bold">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card — users */}
              <div className="absolute -left-12 top-1/3 bg-white rounded-3xl shadow-2xl p-5 flex items-center gap-4 border border-slate-100">
                <div className="flex -space-x-3">
                  {[41, 42, 43, 44].map((n) => (
                    <img key={n} src={`https://i.pravatar.cc/60?u=${n}`} className="w-10 h-10 rounded-full border-2 border-white shadow" alt="" />
                  ))}
                </div>
                <div>
                  <p className="font-syne font-extrabold text-midnight text-sm">1.2M+ Travelers</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Trust ZigZagBus</p>
                </div>
              </div>

              {/* Floating card — next departure */}
              <div className="absolute -right-8 top-12 bg-white rounded-3xl shadow-2xl p-5 border border-slate-100 min-w-[180px]">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Next Departure</p>
                <p className="font-syne text-2xl font-extrabold text-midnight">06:00 AM</p>
                <p className="text-primary text-xs font-bold mt-1">Delhi → Agra</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  <span className="text-green-600 text-[10px] font-bold">12 seats left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="container mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-black/5 p-6 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <i className={`ti ${icon} text-primary text-xl group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <p className="font-syne text-3xl sm:text-4xl font-extrabold text-midnight">{value}</p>
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">Simple Process</span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-midnight leading-tight">
              Book in <span className="text-primary italic">4 Easy Steps</span>
            </h2>
            <p className="text-slate-400 mt-4 font-medium max-w-md mx-auto">From search to boarding — the entire process takes under 2 minutes.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-slate-200 z-10"></div>
                )}
                <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <i className={`ti ${s.icon} text-primary text-2xl group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <span className="font-syne text-4xl font-extrabold text-slate-100">{s.step}</span>
                  </div>
                  <h3 className="font-syne font-extrabold text-midnight text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES BENTO GRID ── */}
      <section className="py-24 px-4 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">Why ZigZagBus</span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Everything You <span className="text-primary italic">Need</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc, color }) => (
              <div key={title} className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`ti ${icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-syne font-extrabold text-white text-xl mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="py-28 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">Top Routes</span>
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight leading-tight">
                Popular <span className="text-primary italic">Destinations</span>
              </h2>
            </div>
            <Link to="/search" className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-primary border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white px-6 py-3 rounded-2xl transition-all duration-300">
              View All Routes <i className="ti ti-arrow-right text-sm"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularRoutes.map(({ from, to, duration, price, tag }) => (
              <Link to="/search" key={`${from}-${to}`}
                className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Tag + duration */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-widest">{tag}</span>
                  <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                    <i className="ti ti-clock text-xs"></i> {duration}
                  </span>
                </div>

                {/* Route — stacked on mobile, row on sm+ */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                  <div className="flex-1 min-w-0">
                    <p className="font-syne text-xl font-extrabold text-midnight truncate">{from}</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Origin</p>
                  </div>

                  {/* Arrow on mobile, dashed line on sm+ */}
                  <div className="flex sm:flex-1 items-center gap-2">
                    <div className="flex sm:hidden items-center gap-2 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <i className="ti ti-bus text-primary text-base"></i>
                      <i className="ti ti-arrow-right text-slate-300 text-sm"></i>
                    </div>
                    <div className="hidden sm:flex flex-1 items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <div className="flex-1 border-t-2 border-dashed border-slate-200 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <i className="ti ti-bus text-primary text-sm"></i>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 sm:text-right">
                    <p className="font-syne text-xl font-extrabold text-midnight truncate">{to}</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">Destination</p>
                  </div>
                </div>

                {/* Price + arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Starting from</span>
                    <p className="font-syne text-2xl font-extrabold text-primary">₹{price}</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-midnight group-hover:bg-primary flex items-center justify-center transition-colors duration-300 shadow-md">
                    <i className="ti ti-arrow-right text-white text-sm"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">Discover India</span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-midnight leading-tight">
              Trending <span className="text-primary italic">Places</span>
            </h2>
            <p className="text-slate-400 mt-4 font-medium max-w-md mx-auto">Explore top-rated destinations across India at unbeatable prices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((d, i) => (
              <Link to="/search" key={d.id}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-full min-h-[500px]" : "h-64"}`}>
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent"></div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <i className="ti ti-star-filled text-amber-400 text-xs"></i>
                    <span className="font-bold text-midnight text-xs">{d.rating}</span>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{d.location}</p>
                    <h3 className="font-syne text-2xl font-extrabold text-white mb-3">{d.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs font-semibold flex items-center gap-1.5">
                        <i className="ti ti-bus text-primary text-xs"></i> Daily buses available
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                        <i className="ti ti-arrow-right text-white text-sm"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">Traveler Stories</span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-midnight leading-tight">
              Loved by <span className="text-primary italic">Millions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="ti ti-star-filled text-amber-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-2xl object-cover" />
                  <div>
                    <p className="font-bold text-midnight text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs font-semibold flex items-center gap-1 mt-0.5">
                      <i className="ti ti-route text-primary text-xs"></i> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-10 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-midnight rounded-[40px] overflow-hidden p-12 sm:p-20 text-center">
            {/* Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/15 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
                <i className="ti ti-rocket text-primary"></i> Start Your Journey Today
              </div>
              <h2 className="font-syne text-4xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
                Your Next Adventure <br className="hidden sm:block" />
                <span className="text-primary italic">Starts Here.</span>
              </h2>
              <p className="text-white/50 text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                Join 1.2 million travelers who trust ZigZagBus for safe, affordable, and comfortable journeys across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/search"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-widest"
                >
                  <i className="ti ti-search text-lg"></i> Search Buses Now
                </Link>
                <Link to="/register"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold transition-all hover:-translate-y-0.5 text-sm uppercase tracking-widest"
                >
                  <i className="ti ti-user-plus text-lg"></i> Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
