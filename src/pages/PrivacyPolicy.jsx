const sections = [
  {
    id: "information",
    icon: "ti-database",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you register or book a ticket, we collect your name, email address, phone number, and payment details necessary to complete your transaction.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect information about how you interact with our platform — including pages visited, search queries, device type, browser, and IP address — to improve our services.",
      },
      {
        subtitle: "Location Data",
        text: "With your permission, we may collect real-time location data to provide live bus tracking and suggest nearby boarding points.",
      },
    ],
  },
  {
    id: "usage",
    icon: "ti-settings",
    title: "How We Use Your Information",
    content: [
      { subtitle: "Booking & Ticketing", text: "To process reservations, send e-tickets, and provide booking confirmations via email and SMS." },
      { subtitle: "Customer Support", text: "To respond to your queries, resolve disputes, and improve our support experience." },
      { subtitle: "Personalization", text: "To show relevant offers, route suggestions, and travel recommendations based on your history." },
      { subtitle: "Security & Fraud Prevention", text: "To detect suspicious activity, prevent unauthorized access, and protect user accounts." },
    ],
  },
  {
    id: "sharing",
    icon: "ti-share",
    title: "Information Sharing",
    content: [
      { subtitle: "Bus Operators", text: "We share your name, contact details, and seat information with bus operators solely to facilitate your journey." },
      { subtitle: "Payment Processors", text: "Payment data is securely transmitted to PCI-DSS compliant third-party processors. We do not store full card details." },
      { subtitle: "No Sale of Data", text: "We do not sell, rent, or trade your personal information to any third party for marketing purposes." },
    ],
  },
  {
    id: "cookies",
    icon: "ti-cookie",
    title: "Cookies & Tracking",
    content: [
      { subtitle: "Essential Cookies", text: "Required for core functionality like login sessions and booking flow. These cannot be disabled." },
      { subtitle: "Analytics Cookies", text: "Help us understand how visitors use the site. You can opt out via your browser settings." },
      { subtitle: "Preference Cookies", text: "Remember your settings such as language and search preferences for a better experience." },
    ],
  },
  {
    id: "security",
    icon: "ti-shield-check",
    title: "Data Security",
    content: [
      { subtitle: "Encryption", text: "All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption." },
      { subtitle: "Access Control", text: "Only authorized employees with a legitimate business need can access personal data." },
      { subtitle: "Breach Response", text: "In the event of a data breach, we will notify affected users within 72 hours as required by applicable law." },
    ],
  },
  {
    id: "rights",
    icon: "ti-user-check",
    title: "Your Rights",
    content: [
      { subtitle: "Access & Portability", text: "You may request a copy of all personal data we hold about you at any time." },
      { subtitle: "Correction", text: "You can update your profile information directly from your account settings." },
      { subtitle: "Deletion", text: "You may request deletion of your account and associated data by contacting support@zigzagbus.in." },
      { subtitle: "Opt-Out", text: "You can unsubscribe from marketing emails at any time using the unsubscribe link in any email." },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-midnight overflow-hidden pt-40 pb-28 px-4 text-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
            <i className="ti ti-shield-check text-primary"></i> Your Privacy Matters
          </div>
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-md mx-auto leading-relaxed">
            We are committed to protecting your personal data. This policy explains what we collect, why, and how we use it.
          </p>
          <p className="text-white/30 text-sm font-semibold mt-6">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Sticky sidebar nav */}
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

          {/* Sections */}
          <div className="flex-1 space-y-12">
            {/* Intro */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                This Privacy Policy applies to <span className="font-bold text-midnight">ZigZagBus</span> and its services. By using our platform, you agree to the collection and use of information as described below. We never sell your data and we only collect what is necessary to provide you with a great travel experience.
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <i className={`ti ${s.icon} text-primary text-xl`}></i>
                  </div>
                  <h2 className="font-syne text-2xl font-extrabold text-midnight">{s.title}</h2>
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

            {/* Contact */}
            <div className="bg-midnight rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h2 className="font-syne text-xl font-extrabold text-white mb-2">Questions about this policy?</h2>
                <p className="text-white/50 text-sm font-medium mb-5">Contact our Privacy Team directly.</p>
                <a href="mailto:privacy@zigzagbus.in" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-bold text-sm transition shadow-lg shadow-primary/30">
                  <i className="ti ti-mail"></i> privacy@zigzagbus.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
