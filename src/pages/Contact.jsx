import { useState } from "react";

const faqs = [
  { q: "How do I cancel my booking?", a: "You can cancel from My Bookings section. Cancellations made 24hrs before departure get a full refund." },
  { q: "Can I change my travel date?", a: "Date change is available up to 12 hours before departure, subject to seat availability." },
  { q: "Is my payment secure?", a: "Yes, all payments are processed through encrypted and PCI-DSS compliant payment gateways." },
  { q: "What if my bus is late?", a: "You'll receive an SMS update. For delays over 2 hours, you're eligible for partial compensation." },
  { q: "How do I get my e-ticket?", a: "Your e-ticket is sent instantly to your registered email and phone number after a successful booking." },
  { q: "Can I book for someone else?", a: "Yes, you can enter any passenger's details during checkout. The ticket will be in their name." },
];

const contacts = [
  { icon: "ti-phone", label: "Phone", val: "+91 12345 67890", sub: "Mon–Sat, 9am–8pm", color: "from-emerald-400 to-teal-500" },
  { icon: "ti-mail", label: "Email", val: "support@zigzagbus.in", sub: "Reply within 24 hours", color: "from-primary to-blue-600" },
  { icon: "ti-map-pin", label: "Office", val: "123 Bus Stand Road, Agra", sub: "Uttar Pradesh 282001", color: "from-violet-500 to-purple-600" },
  { icon: "ti-message-circle", label: "Live Chat", val: "Available on website", sub: "Mon–Sun, 8am–10pm", color: "from-orange-400 to-rose-500" },
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
      <section className="relative bg-midnight overflow-hidden pt-40 pb-36 px-4 text-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block"></span>
            Support Online Now
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
            We're Here to <span className="text-primary italic">Help</span>
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Reach out through any channel — our team typically responds within a few hours.
          </p>
        </div>
      </section>

      {/* Floating contact cards */}
      <div className="container mx-auto px-4 sm:px-8 -mt-16 relative z-20 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map(({ icon, label, val, sub, color }) => (
            <div key={label} className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-black/5 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`ti ${icon} text-white text-xl`}></i>
              </div>
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
              <p className="font-bold text-midnight text-sm leading-snug">{val}</p>
              <p className="text-slate-400 text-xs font-medium mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form + Map */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Left — form */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center">
                  <i className="ti ti-circle-check-filled text-6xl text-green-500"></i>
                </div>
                <div>
                  <h3 className="font-syne text-2xl font-extrabold text-midnight mb-2">Message Sent!</h3>
                  <p className="text-slate-400 font-medium">We'll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="flex items-center gap-2 text-primary text-sm font-bold hover:underline mt-2"
                >
                  <i className="ti ti-arrow-left text-xs"></i> Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-4">
                    Send a Message
                  </span>
                  <h2 className="font-syne text-3xl font-extrabold text-midnight">How can we help?</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                    <label className={labelClass}>Topic</label>
                    <select className={inputClass} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                      <option value="">Select a topic</option>
                      {["Booking Issue", "Refund Request", "Technical Problem", "General Inquiry", "Partnership"].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea className={inputClass + " resize-none"} rows={5} placeholder="Describe your issue in detail..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                    Send Message <i className="ti ti-send text-sm"></i>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — info + social */}
          <div className="flex flex-col gap-6">
            {/* Office hours */}
            <div className="bg-midnight rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <i className="ti ti-clock text-primary text-lg"></i>
                  </div>
                  <h3 className="font-syne font-extrabold text-white text-lg">Support Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    ["Mon – Fri", "9:00 AM – 8:00 PM", true],
                    ["Saturday", "10:00 AM – 6:00 PM", true],
                    ["Sunday", "Closed", false],
                  ].map(([day, hours, open]) => (
                    <div key={day} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <span className="text-white/60 text-sm font-semibold">{day}</span>
                      <span className={`text-sm font-bold ${open ? "text-white" : "text-white/30"}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ti-bolt", val: "< 2 hrs", label: "Avg. Response", color: "text-amber-400" },
                { icon: "ti-mood-happy", val: "98%", label: "Satisfaction", color: "text-green-400" },
                { icon: "ti-ticket", val: "500+", label: "Issues Resolved / Day", color: "text-primary" },
                { icon: "ti-language", val: "5+", label: "Languages Supported", color: "text-violet-400" },
              ].map(({ icon, val, label, color }) => (
                <div key={label} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center hover:shadow-md transition-all">
                  <i className={`ti ${icon} text-2xl ${color} block mb-2`}></i>
                  <p className="font-syne text-2xl font-extrabold text-midnight">{val}</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: "ti-brand-twitter", label: "Twitter", color: "hover:bg-sky-500" },
                  { icon: "ti-brand-instagram", label: "Instagram", color: "hover:bg-pink-500" },
                  { icon: "ti-brand-facebook", label: "Facebook", color: "hover:bg-blue-600" },
                  { icon: "ti-brand-youtube", label: "YouTube", color: "hover:bg-red-500" },
                ].map((s) => (
                  <a key={s.label} href="#!" aria-label={s.label}
                    className={`w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white ${s.color} hover:border-transparent transition-all duration-300`}>
                    <i className={`ti ${s.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6">
              FAQ
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-midnight">Common Questions</h2>
            <p className="text-slate-400 mt-3 font-medium">Can't find your answer? Reach out directly.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-primary/20 shadow-lg shadow-primary/5" : "border-slate-100 shadow-sm"}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition"
                >
                  <span className="font-bold text-midnight text-sm">{f.q}</span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"}`}>
                    <i className={`ti ti-chevron-down text-sm transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}></i>
                  </div>
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

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full scale-150"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-syne text-4xl font-extrabold text-white mb-3">Still need help?</h2>
          <p className="text-white/50 mb-8 font-medium">Our support team is just a message away.</p>
          <a href="mailto:support@zigzagbus.in" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition shadow-xl shadow-primary/30 uppercase tracking-widest text-sm hover:-translate-y-0.5">
            <i className="ti ti-mail text-lg"></i> Email Support
          </a>
        </div>
      </section>

    </div>
  );
}
