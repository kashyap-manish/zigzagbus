const sections = [
  {
    id: "acceptance",
    icon: "ti-file-check",
    title: "Acceptance of Terms",
    content: [
      { subtitle: "Agreement", text: "By accessing or using ZigZagBus, you confirm that you are at least 18 years old and agree to be bound by these Terms of Service and our Privacy Policy." },
      { subtitle: "Updates", text: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms." },
    ],
  },
  {
    id: "account",
    icon: "ti-user-circle",
    title: "User Accounts",
    content: [
      { subtitle: "Registration", text: "You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the confidentiality of your credentials." },
      { subtitle: "Account Security", text: "You are fully responsible for all activity that occurs under your account. Notify us immediately at support@zigzagbus.in if you suspect unauthorized access." },
      { subtitle: "Termination", text: "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse our platform." },
    ],
  },
  {
    id: "booking",
    icon: "ti-ticket",
    title: "Booking & Payments",
    content: [
      { subtitle: "Booking Confirmation", text: "A booking is confirmed only after successful payment and receipt of an e-ticket via email/SMS. Availability is subject to change until payment is complete." },
      { subtitle: "Pricing", text: "All prices are displayed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. Prices may vary based on demand." },
      { subtitle: "Payment Methods", text: "We accept all major credit/debit cards, UPI, net banking, and wallets. All transactions are encrypted and processed by secure third-party gateways." },
      { subtitle: "Failed Transactions", text: "In case of a payment failure where money is deducted, the amount will be automatically refunded within 5–7 business days." },
    ],
  },
  {
    id: "cancellation",
    icon: "ti-calendar-x",
    title: "Cancellation & Refunds",
    content: [
      { subtitle: "Cancellation by User", text: "Cancellations made more than 24 hours before departure are eligible for a full refund. Cancellations within 24 hours are non-refundable." },
      { subtitle: "Cancellation by Operator", text: "If a bus is cancelled by the operator, you will receive a full refund within 3–5 business days, plus a 10% goodwill credit." },
      { subtitle: "No-Show Policy", text: "Failure to board at the designated time and stop is considered a no-show and is non-refundable." },
      { subtitle: "Refund Processing", text: "Approved refunds are processed to the original payment method within 5–7 business days." },
    ],
  },
  {
    id: "conduct",
    icon: "ti-shield",
    title: "User Conduct",
    content: [
      { subtitle: "Prohibited Activities", text: "You may not use ZigZagBus to commit fraud, create fake bookings, resell tickets without authorization, or engage in any activity that disrupts our services." },
      { subtitle: "Accurate Information", text: "You agree to provide truthful passenger information. Misrepresentation may result in denied boarding with no refund." },
      { subtitle: "Respectful Use", text: "Harassment of staff, drivers, or other passengers — whether online or in-person — will result in immediate account termination." },
    ],
  },
  {
    id: "liability",
    icon: "ti-alert-triangle",
    title: "Limitation of Liability",
    content: [
      { subtitle: "Platform Role", text: "ZigZagBus is a technology platform that connects travellers with bus operators. We are not a bus operator and are not liable for delays, accidents, or service quality of operators." },
      { subtitle: "Force Majeure", text: "We are not liable for failures caused by events beyond our control including natural disasters, strikes, government restrictions, or network outages." },
      { subtitle: "Maximum Liability", text: "Our total liability in any dispute shall not exceed the amount paid for the specific booking in question." },
    ],
  },
  {
    id: "intellectual",
    icon: "ti-copyright",
    title: "Intellectual Property",
    content: [
      { subtitle: "Ownership", text: "All content on ZigZagBus — including logos, text, graphics, and software — is the exclusive property of ZigZagBus and protected by copyright law." },
      { subtitle: "Restrictions", text: "You may not reproduce, distribute, or create derivative works from our content without prior written permission." },
    ],
  },
  {
    id: "governing",
    icon: "ti-building-bank",
    title: "Governing Law",
    content: [
      { subtitle: "Jurisdiction", text: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Agra, Uttar Pradesh." },
      { subtitle: "Dispute Resolution", text: "We encourage resolving disputes amicably. Contact support@zigzagbus.in before initiating any legal proceedings." },
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-40 pb-28 px-4 text-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-file-text text-primary"></i> Legal Agreement
          </div>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-md mx-auto leading-relaxed">
            Please read these terms carefully before using ZigZagBus. They govern your use of our platform and services.
          </p>
          <p className="text-white/30 text-sm font-semibold mt-6">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24 bg-slate-50 rounded-3xl border border-slate-100 p-5 space-y-1">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 px-2">Sections</p>
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-primary hover:bg-white transition-all duration-200">
                  <i className={`ti ${s.icon} text-sm`}></i>
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-12">
            {/* Intro */}
            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <i className="ti ti-info-circle text-amber-500 text-lg"></i>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and <span className="font-bold text-midnight">ZigZagBus</span>. By creating an account or making a booking, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
              </div>
            </div>

            {sections.map((s, idx) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <i className={`ti ${s.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">Section {idx + 1}</span>
                    <h2 className="font-syne text-2xl font-extrabold text-midnight">{s.title}</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  {s.content.map((c) => (
                    <div key={c.subtitle} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/10 hover:shadow-sm transition-all">
                      <h3 className="font-bold text-midnight text-sm mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                        {c.subtitle}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact block */}
            <div className="bg-midnight rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h2 className="font-syne text-xl font-extrabold text-white mb-2">Have questions about these terms?</h2>
                <p className="text-white/50 text-sm font-medium mb-5">Our legal team is happy to clarify anything.</p>
                <a href="mailto:legal@zigzagbus.in" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-bold text-sm transition shadow-lg shadow-primary/30">
                  <i className="ti ti-mail"></i> legal@zigzagbus.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
