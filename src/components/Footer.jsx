import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 sm:pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-extrabold text-white mb-3">🚌 ZigZagBus</h2>
          <p className="text-sm text-gray-400">Your trusted bus travel partner. Book tickets, choose seats, and travel comfortably across India.</p>
          <div className="flex gap-3 mt-4">
            {["📘", "📸", "▶️"].map((icon, i) => (
              <a key={i} href="#!" className="bg-[#2887ff] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#2476da] transition text-sm">{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["Home", "/"], ["Search Buses", "/search"], ["Offers", "/offers"], ["My Bookings", "/bookings"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-[#2887ff] transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 12345 67890</li>
            <li>✉️ info@zigzagbus.in</li>
            <li>📍 Agra, India</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-gray-800 border border-gray-600 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2887ff]" />
            <button className="bg-[#2887ff] text-white py-2 rounded font-semibold hover:bg-[#2476da] transition text-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4 px-2 sm:px-4">
        © 2025 ZigZagBus. All rights reserved.
      </div>
    </footer>
  );
}
