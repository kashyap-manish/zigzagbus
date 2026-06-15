const team = [
  { name: "Ravi Sharma", role: "Founder & CEO", icon: "ti-crown" },
  { name: "Priya Gupta", role: "Head of Operations", icon: "ti-settings" },
  { name: "Aakash Verma", role: "Lead Developer", icon: "ti-code" },
  { name: "Sneha Joshi", role: "Customer Success", icon: "ti-headset" },
];

const milestones = [
  { year: "2015", event: "ZigZagBus founded in Agra with 10 routes" },
  { year: "2017", event: "Expanded to 100+ routes across North India" },
  { year: "2020", event: "Launched online seat selection feature" },
  { year: "2023", event: "Crossed 10,000+ happy travellers milestone" },
  { year: "2025", event: "500+ routes across all of India" },
];

const stats = [["ti-route", "500+", "Routes"], ["ti-mood-happy", "12k+", "Travellers"], ["ti-star-filled", "4.8", "Rating"], ["ti-building", "15+", "Cities"]];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-36 pb-24 px-4 text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/3"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-bus text-primary"></i> Our Story
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            About <span className="text-primary italic">ZigZagBus</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            On a mission to make bus travel across India simple, affordable, and comfortable for everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-8 relative -mt-12 z-20">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-black/5 border border-slate-100 p-8 sm:p-12 flex flex-wrap justify-around gap-8">
          {stats.map(([icon, val, label]) => (
            <div key={label} className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <i className={`ti ${icon} text-primary text-2xl`}></i>
              </div>
              <p className="font-syne text-4xl font-extrabold text-midnight mb-1">{val}</p>
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight mb-6 leading-tight">
              Our <span className="text-primary italic">Mission</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4 font-medium">
              ZigZagBus was born out of a simple frustration — booking a bus ticket in India was too complicated. Long queues, no seat choices, and zero transparency on pricing.
            </p>
            <p className="text-slate-500 leading-relaxed font-medium">
              We built a platform that puts the traveller first. Choose your seat, compare prices, and book in minutes — from anywhere in India.
            </p>
          </div>
          <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
            <div className="space-y-5">
              {["Transparent pricing with no hidden fees", "Real-time seat availability", "24/7 customer support", "Instant e-ticket via SMS & email"].map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ti ti-check text-primary text-sm font-bold"></i>
                  </div>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mb-6 rounded-full mx-auto"></div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight">Our Journey</h2>
          </div>
          <div className="relative border-l-2 border-primary/20 pl-10 space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                <div className="absolute -left-[45px] w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">{m.year}</span>
                <p className="text-midnight font-bold text-lg mt-1">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mb-6 rounded-full mx-auto"></div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <i className={`ti ${t.icon} text-primary text-2xl group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="font-syne font-bold text-midnight text-sm">{t.name}</h4>
                <p className="text-slate-400 text-xs mt-1 font-semibold">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
