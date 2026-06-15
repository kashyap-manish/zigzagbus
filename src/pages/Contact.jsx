import { useState } from "react";

const faqs = [
  { q: "How do I cancel my booking?", a: "You can cancel from My Bookings section. Cancellations made 24hrs before departure get a full refund." },
  { q: "Can I change my travel date?", a: "Date change is available up to 12 hours before departure, subject to seat availability." },
  { q: "Is my payment secure?", a: "Yes, all payments are processed through encrypted and PCI-DSS compliant payment gateways." },
  { q: "What if my bus is late?", a: "You'll receive an SMS update. For delays over 2 hours, you're eligible for partial compensation." },
];

const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400";
const labelClass = "text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-36 pb-24 px-4 text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/3"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-headset text-primary"></i> 24/7 Support
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            Contact <span className="text-primary italic">Us</span>
          </h1>
          <p className="text-white/50 text-lg font-medium">Have a question or need help? We're here for you.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>
            <h2 className="font-syne text-3xl font-extrabold text-midnight mb-8">Get in Touch</h2>
            <div className="space-y-4">
              {[
                ["ti-phone", "Phone", "+91 12345 67890", "Mon–Sat, 9am–8pm"],
                ["ti-mail", "Email", "support@zigzagbus.in", "Reply within 24 hours"],
                ["ti-map-pin", "Office", "123 Bus Stand Road, Agra", "Uttar Pradesh 282001"],
                ["ti-message-circle", "Live Chat", "Available on website", "Mon–Sun, 8am–10pm"],
              ].map(([icon, label, val, sub]) => (
                <div key={label} className="flex items-start gap-5 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <i className={`ti ${icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="font-bold text-midnight text-sm">{val}</p>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ti ti-circle-check-filled text-5xl text-green-500"></i>
                </div>
                <h3 className="font-syne text-2xl font-extrabold text-midnight mb-2">Message Sent!</h3>
                <p className="text-slate-400 font-medium mb-6">We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-primary text-sm font-bold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-syne text-2xl font-extrabold text-midnight mb-2">Send a Message</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" className={inputClass} placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Subject</label>
                  <select className={inputClass} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                    <option value="">Select a topic</option>
                    {["Booking Issue", "Refund Request", "Technical Problem", "General Inquiry"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea className={inputClass + " resize-none"} rows={5} placeholder="Describe your issue..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-primary mb-6 rounded-full mx-auto"></div>
            <h2 className="font-syne text-4xl font-extrabold text-midnight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-primary/20 shadow-lg shadow-primary/5" : "border-slate-100"}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-midnight text-sm hover:bg-slate-50/50 transition"
                >
                  {f.q}
                  <i className={`ti ti-chevron-down text-primary text-base transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
