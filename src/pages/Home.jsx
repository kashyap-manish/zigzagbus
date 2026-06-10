import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { destinations } from "../data/mockData";

const features = [
  { icon: "🎟️", title: "Easy Booking", desc: "Book your seat in just a few clicks. No queues, no hassle." },
  { icon: "💺", title: "Choose Your Seat", desc: "Pick the exact seat you want with our interactive seat map." },
  { icon: "🛡️", title: "Safe & Reliable", desc: "Verified operators and secure payments for every journey." },
  { icon: "💰", title: "Best Prices", desc: "Compare operators and find the best deal for your trip." },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "12k+", label: "Happy Travellers" },
  { value: "500+", label: "Routes Covered" },
  { value: "4.8", label: "Average Rating" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2887ff] to-[#1a5fcc] text-white py-12 sm:py-20 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
          <p className="uppercase tracking-widest text-blue-200 font-semibold text-xs sm:text-sm mb-3">Your Journey Starts Here</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Where Every Bus Ride <br />
            <span className="text-yellow-300">Feels Magical!</span>
          </h1>
          <p className="text-blue-100 text-sm sm:text-lg max-w-xl mx-auto">
            Book bus tickets across India with ease. Choose your seat, travel comfortably.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <SearchForm />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 sm:py-12 px-2 sm:px-4 border-b">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2887ff]">{s.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 px-2 sm:px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Bus Travel, the Easy Way!</h2>
          <p className="text-center text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">Effortless planning for your next adventure</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition text-center">
                <div className="text-3xl sm:text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{f.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 sm:py-16 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Popular Destinations</h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">Discover the most loved destinations across India</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {destinations.map((d) => (
              <div key={d.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4 flex justify-between items-start bg-white">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">{d.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{d.location}</p>
                  </div>
                  <span className="bg-[#2887ff] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">⭐ {d.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2887ff] py-12 sm:py-16 px-2 sm:px-4 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready for Your Next Adventure?</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm sm:text-base">Join thousands of travellers who book with ZigZagBus every day.</p>
        <Link to="/search" className="bg-white text-[#2887ff] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
          Book Now →
        </Link>
      </section>
    </div>
  );
}
