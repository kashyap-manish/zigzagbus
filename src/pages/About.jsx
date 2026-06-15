const stats = [
  { icon: "ti-route", val: "500+", label: "Routes" },
  { icon: "ti-mood-happy", val: "12k+", label: "Travellers" },
  { icon: "ti-star-filled", val: "4.8", label: "Rating" },
  { icon: "ti-building", val: "15+", label: "Cities" },
];

const values = [
  { icon: "ti-shield-check", title: "Safety First", desc: "Every operator is verified and every bus is regularly inspected before listing." },
  { icon: "ti-receipt", title: "Zero Hidden Fees", desc: "The price you see is the price you pay. No surprises at checkout." },
  { icon: "ti-headset", title: "24/7 Support", desc: "Our team is available round the clock to help with your journey." },
  { icon: "ti-bolt", title: "Instant Booking", desc: "Book your seat in under 2 minutes from anywhere in India." },
  { icon: "ti-map-pin", title: "Live Tracking", desc: "Track your bus in real-time so you're never left waiting." },
  { icon: "ti-leaf", title: "Eco Conscious", desc: "Promoting shared bus travel to reduce carbon footprint across India." },
];

const milestones = [
  { year: "2015", event: "ZigZagBus founded in Agra with 10 routes", icon: "ti-flag" },
  { year: "2017", event: "Expanded to 100+ routes across North India", icon: "ti-map" },
  { year: "2020", event: "Launched online seat selection & e-ticketing", icon: "ti-ticket" },
  { year: "2023", event: "Crossed 10,000+ happy travellers milestone", icon: "ti-confetti" },
  { year: "2025", event: "500+ routes connecting all of India", icon: "ti-rocket" },
];

const team = [
  { name: "Ravi Sharma", role: "Founder & CEO", icon: "ti-crown", color: "from-blue-500 to-primary" },
  { name: "Priya Gupta", role: "Head of Operations", icon: "ti-settings", color: "from-violet-500 to-purple-600" },
  { name: "Aakash Verma", role: "Lead Developer", icon: "ti-code", color: "from-emerald-500 to-teal-600" },
  { name: "Sneha Joshi", role: "Customer Success", icon: "ti-headset", color: "from-orange-400 to-rose-500" },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-40 pb-32 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full -translate-x-1/4"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-bus text-primary"></i> Our Story
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            Connecting India,<br /><span className="text-primary italic">One Bus at a Time</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Since 2015, ZigZagBus has been on a mission to make bus travel across India simple, transparent, and accessible for every kind of traveller.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["500+ Routes", "12k+ Travellers", "4.8★ Rating"].map((tag) => (
              <span key={tag} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-8 relative -mt-14 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon, val, label }) => (
            <div key={label} className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-slate-100 p-8 text-center hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`ti ${icon} text-primary text-xl`}></i>
              </div>
              <p className="font-syne text-4xl font-extrabold text-midnight">{val}</p>
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">
              Why We Exist
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight mb-6 leading-tight">
              Built for the <span className="text-primary italic">everyday</span> traveller
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 font-medium text-lg">
              ZigZagBus was born out of a simple frustration — booking a bus in India meant long queues, no seat choice, and zero pricing transparency.
            </p>
            <p className="text-slate-500 leading-relaxed font-medium">
              We built a platform that puts the traveller first. Choose your seat, compare prices, and book in under 2 minutes — from anywhere.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] rotate-3"></div>
            <div className="relative bg-slate-50 rounded-[40px] p-10 border border-slate-100 space-y-5">
              {["Transparent pricing with no hidden fees", "Real-time seat availability", "24/7 customer support", "Instant e-ticket via SMS & email", "Verified bus operators only"].map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                    <i className="ti ti-check text-white text-sm"></i>
                  </div>
                  <p className="text-slate-700 font-semibold text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-midnight">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">
              What We Stand For
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <i className={`ti ${icon} text-primary text-xl group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">
              Since 2015
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-8 group">
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary group-hover:border-primary group-hover:shadow-primary/30 transition-all duration-300">
                    <i className={`ti ${m.icon} text-primary text-lg group-hover:text-white transition-colors`}></i>
                  </div>
                  <div className="bg-white rounded-3xl border border-slate-100 p-6 flex-1 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">{m.year}</span>
                    <p className="font-syne font-bold text-midnight text-lg mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">
              The People
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight">Meet the Team</h2>
            <p className="text-slate-400 mt-4 font-medium max-w-md mx-auto">The passionate people behind ZigZagBus who make every journey better.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="group text-center bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${t.color} rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <i className={`ti ${t.icon} text-white text-3xl`}></i>
                </div>
                <h4 className="font-syne font-extrabold text-midnight">{t.name}</h4>
                <p className="text-slate-400 text-xs mt-1 font-semibold">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-150"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to travel <span className="text-primary italic">smarter?</span>
          </h2>
          <p className="text-white/50 mb-10 font-medium text-lg">Join 12,000+ travellers who book with ZigZagBus every month.</p>
          <a href="/search" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-widest">
            <i className="ti ti-search text-lg"></i> Search Buses
          </a>
        </div>
      </section>

    </div>
  );
}
