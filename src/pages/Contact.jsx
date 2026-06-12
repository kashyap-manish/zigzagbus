import { useState } from "react";

const faqs = [
  { q: "How do I cancel my booking?", a: "You can cancel from My Bookings section. Cancellations made 24hrs before departure get a full refund." },
  { q: "Can I change my travel date?", a: "Date change is available up to 12 hours before departure, subject to seat availability." },
  { q: "Is my payment secure?", a: "Yes, all payments are processed through encrypted and PCI-DSS compliant payment gateways." },
  { q: "What if my bus is late?", a: "You'll receive an SMS update. For delays over 2 hours, you're eligible for partial compensation." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#2887ff]";

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2887ff] to-[#1a5fcc] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
        <p className="text-blue-100 max-w-md mx-auto">Have a question or need help? We're here for you 24/7.</p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Info */}
          <div>
            <h2 className="text-xl font-extrabold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                ["📞", "Phone", "+91 12345 67890", "Mon–Sat, 9am–8pm"],
                ["✉️", "Email", "support@zigzagbus.in", "Reply within 24 hours"],
                ["📍", "Office", "123 Bus Stand Road", "Agra, Uttar Pradesh 282001"],
                ["💬", "Live Chat", "Available on website", "Mon–Sun, 8am–10pm"],
              ].map(([icon, label, val, sub]) => (
                <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl shrink-0">{icon}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</p>
                    <p className="font-semibold text-gray-800 text-sm">{val}</p>
                    <p className="text-gray-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-5 text-[#2887ff] text-sm font-semibold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-extrabold text-gray-800 mb-2">Send a Message</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">NAME</label>
                    <input className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">EMAIL</label>
                    <input type="email" className={inputClass} placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">SUBJECT</label>
                  <select className={inputClass} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                    <option value="">Select a topic</option>
                    {["Booking Issue", "Refund Request", "Technical Problem", "General Inquiry"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">MESSAGE</label>
                  <textarea className={inputClass + " resize-none"} rows={5} placeholder="Describe your issue..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="w-full bg-[#2887ff] text-white py-3 rounded-full font-bold hover:bg-[#2476da] transition">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center font-semibold text-gray-800 text-sm hover:bg-gray-50 transition"
                >
                  {f.q}
                  <span className={`text-[#2887ff] transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-500 text-sm border-t bg-gray-50">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
