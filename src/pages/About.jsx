const team = [
  { name: "Ravi Sharma", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Priya Gupta", role: "Head of Operations", emoji: "👩‍💼" },
  { name: "Aakash Verma", role: "Lead Developer", emoji: "👨‍💻" },
  { name: "Sneha Joshi", role: "Customer Success", emoji: "👩‍💻" },
];

const milestones = [
  { year: "2015", event: "ZigZagBus founded in Agra with 10 routes" },
  { year: "2017", event: "Expanded to 100+ routes across North India" },
  { year: "2020", event: "Launched online seat selection feature" },
  { year: "2023", event: "Crossed 10,000+ happy travellers milestone" },
  { year: "2025", event: "500+ routes across all of India" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2887ff] to-[#1a5fcc] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About ZigZagBus</h1>
        <p className="text-blue-100 max-w-xl mx-auto text-base sm:text-lg">
          We're on a mission to make bus travel across India simple, affordable, and comfortable for everyone.
        </p>
      </section>

      {/* Mission */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ZigZagBus was born out of a simple frustration — booking a bus ticket in India was too complicated. Long queues, no seat choices, and zero transparency on pricing.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We built a platform that puts the traveller first. Choose your seat, compare prices, and book in minutes — from anywhere in India.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["🚌", "500+", "Routes"], ["😊", "12k+", "Travellers"], ["⭐", "4.8", "Rating"], ["🏙️", "15+", "Cities"]].map(([icon, val, label]) => (
              <div key={label} className="bg-blue-50 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-1">{icon}</div>
                <p className="text-2xl font-extrabold text-[#2887ff]">{val}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-10 text-center">Our Journey</h2>
          <div className="relative border-l-2 border-[#2887ff] pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-[#2887ff] border-4 border-white" />
                <span className="text-xs font-bold text-[#2887ff] uppercase tracking-widest">{m.year}</span>
                <p className="text-gray-700 font-semibold mt-0.5">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-10 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition">
                <div className="text-5xl mb-3">{t.emoji}</div>
                <h4 className="font-bold text-gray-800 text-sm">{t.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
