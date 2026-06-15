import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { destinations } from "../data/mockData";

const features = [
  { icon: "ti-armchair", title: "First-Class Comfort", desc: "Ergonomic seating with adjustable recliners, ample legroom, and personal climate control for every passenger.", large: true },
  { icon: "ti-ticket", title: "E-Ticket System", desc: "No more paper. Your smartphone is your ticket. Fast boarding via QR scanning at every terminal." },
  { icon: "ti-shield-check", title: "Safety First", desc: "Advanced safety systems, real-time GPS tracking, and highly trained captains for a secure journey." },
  { icon: "ti-wallet", title: "Best Value Pricing", desc: "Premium service shouldn't mean premium prices. We offer competitive rates and frequent loyalty rewards.", dark: true, large: true },
];

const stats = [
  { value: "500+", label: "Active Routes" },
  { value: "1.2M", label: "Happy Travelers" },
  { value: "98%", label: "On-Time Rate" },
  { value: "4.9/5", label: "User Rating" },
];

export default function Home() {
  return (
    <div className="bg-white selection:bg-primary/30 selection:text-midnight">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-midnight overflow-hidden flex items-center pt-24 pb-12 sm:py-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 py-12 lg:py-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              Premium Long Distance Travel
            </div>
            
            <h1 className="font-syne text-5xl sm:text-8xl font-extrabold text-white leading-[1.05] tracking-tight text-glow">
              Redefining <br />
              <span className="text-primary italic">the Journey.</span>
            </h1>
            
            <p className="text-white/60 text-lg sm:text-xl max-w-lg leading-relaxed font-medium">
              Experience the pinnacle of high-speed transit with ZigZagBus. Aerodynamic comfort, punctual schedules, and premium service at your fingertips.
            </p>

            <div className="w-full max-w-2xl">
              <SearchForm />
            </div>
          </div>

          <div className="relative hidden lg:block pr-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent blur-[80px] -z-10 animate-pulse"></div>
            <div className="relative w-full aspect-square blob-mask overflow-hidden group shadow-2xl shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1616388969587-8196f32388b4?auto=format&w=1200&q=80&fit=crop" 
                alt="Modern luxury coach bus" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]" 
              />
            </div>
            
            <div className="absolute -bottom-4 -left-12 glass p-8 rounded-3xl shadow-3xl animate-bounce-slow">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <i className="ti ti-shield-check text-3xl"></i>
                </div>
                <div>
                  <p className="text-white text-base font-bold">100% Secure</p>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Verified Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-8 relative -mt-16 sm:-mt-20 z-20">
        <div className="bg-white rounded-[50px] shadow-3xl shadow-black/5 p-10 sm:p-14 flex flex-wrap lg:flex-nowrap justify-around items-center gap-12 border border-slate-100/50 backdrop-blur-sm">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center px-10 lg:border-r border-slate-100 last:border-0 flex-1 min-w-[180px] group">
              <h3 className="font-syne text-5xl font-bold text-midnight mb-2 group-hover:text-primary transition-colors duration-300">{s.value}</h3>
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-[0.2em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 sm:py-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-20 sm:mb-24 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
            <h2 className="font-syne text-5xl sm:text-7xl font-extrabold text-midnight mb-6 leading-tight">
              The Premium <br className="hidden sm:block" /> <span className="text-primary italic">Standard.</span>
            </h2>
            <p className="text-slate-400 max-w-lg text-lg font-medium">Everything we do is designed to make your travel as seamless as the vehicles we operate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {features.map((f, idx) => (
              <div 
                key={idx} 
                className={`${
                  f.large ? 'lg:col-span-2' : ''
                } ${
                  f.dark ? 'bg-midnight text-white' : 'bg-slate-50 border border-slate-100'
                } rounded-[50px] p-10 sm:p-16 relative overflow-hidden group hover:shadow-3xl transition-all duration-700 hover:-translate-y-1.5`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="max-w-md">
                    <div className={`w-16 h-16 rounded-2xl ${f.dark ? 'bg-white/10' : 'bg-white shadow-xl shadow-black/5'} flex items-center justify-center text-primary mb-12 group-hover:rotate-6 transition-transform duration-500`}>
                      <i className={`ti ${f.icon} text-4xl`}></i>
                    </div>
                    <h4 className={`font-syne text-3xl sm:text-4xl font-bold mb-6 tracking-tight ${f.dark ? 'text-white' : 'text-midnight'}`}>{f.title}</h4>
                    <p className={`leading-relaxed font-medium ${f.dark ? 'text-white/50' : 'text-slate-500'} ${f.large ? 'text-xl' : 'text-sm sm:text-base'}`}>{f.desc}</p>
                  </div>
                  
                  {f.large && !f.dark && (
                    <div className="mt-12 sm:mt-16">
                      <a href="#!" className="inline-flex items-center gap-3 text-primary text-lg font-extrabold group-hover:gap-6 transition-all duration-300">
                        Explore Comfort <i className="ti ti-arrow-right text-xl"></i>
                      </a>
                    </div>
                  )}
                  
                  {f.dark && (
                    <div className="mt-12 sm:mt-16 flex items-center gap-8">
                      <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(n => (
                          <img key={n} src={`https://i.pravatar.cc/100?u=${n+10}`} className="w-12 h-12 rounded-full border-4 border-midnight shadow-lg" alt="User" />
                        ))}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-white text-sm font-bold block">15,000+</span>
                        <span className="text-white/30 text-[10px] font-bold uppercase tracking-wider">New members joined</span>
                      </div>
                    </div>
                  )}
                </div>
                {f.large && !f.dark && (
                  <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors duration-700"></div>
                )}
                {f.dark && (
                  <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-32 sm:py-40 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest mb-6">Trending Routes</div>
              <h2 className="font-syne text-5xl sm:text-7xl font-extrabold text-midnight mb-6 tracking-tight leading-none">
                Popular <span className="text-primary italic">Destinations.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium">Discover top-rated cities across the country, curated for the modern traveler looking for both adventure and luxury.</p>
            </div>
            <div className="flex gap-5">
              <button className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center bg-white hover:bg-primary hover:border-primary hover:text-white hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 text-slate-400 active:scale-90">
                <i className="ti ti-chevron-left text-2xl"></i>
              </button>
              <button className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center bg-white hover:bg-primary hover:border-primary hover:text-white hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 text-slate-400 active:scale-90">
                <i className="ti ti-chevron-right text-2xl"></i>
              </button>
            </div>
          </div>

          <div className="flex gap-10 overflow-x-auto no-scrollbar pb-16 -mx-4 sm:-mx-8 px-4 sm:px-8 snap-x snap-mandatory">
            {destinations.map((d) => (
              <div key={d.id} className="min-w-[340px] sm:min-w-[440px] group snap-start">
                <div className="bg-white rounded-[50px] overflow-hidden shadow-2xl shadow-black/5 border border-slate-100 h-full flex flex-col transition-all duration-700 hover:shadow-3xl hover:shadow-primary/10 hover:-translate-y-3 text-left">
                  <div className="h-[340px] overflow-hidden relative">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                    <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-2xl flex items-center gap-2.5 font-black text-sm text-midnight shadow-2xl">
                      <i className="ti ti-star-filled text-yellow-400 text-base"></i> {d.rating}
                    </div>
                  </div>
                  <div className="p-10 sm:p-12 flex-1 relative">
                    <div className="absolute top-0 left-0 w-full h-14 -translate-y-[95%] bg-white dest-card-wave"></div>
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <h5 className="font-syne text-3xl font-bold text-midnight tracking-tight">{d.name}</h5>
                        <p className="text-slate-400 text-sm font-bold flex items-center gap-2 mt-3 uppercase tracking-widest">
                          <i className="ti ti-clock-filled text-primary"></i> 8h Journey
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black text-slate-300 uppercase block mb-1.5 tracking-[0.2em]">From</span>
                        <span className="text-3xl font-black text-primary">₹899</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-base font-medium leading-relaxed mb-12">Experience the magical blend of culture and comfort in {d.name}. Premium routes now open for booking.</p>
                    <Link to="/search" className="block w-full py-5 text-center rounded-3xl bg-midnight text-white font-bold hover:bg-primary transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-primary/30 text-lg uppercase tracking-widest">
                      Book Seat
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-8 pb-40">
        <div className="relative rounded-[70px] bg-gradient-to-br from-midnight via-[#0a1128] to-primary p-12 sm:p-32 overflow-hidden text-center shadow-4xl shadow-primary/20">
          <img src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/lorc/concentric-crescents.svg" className="absolute -top-10 -left-10 w-64 h-64 opacity-10 blur-md animate-pulse text-white" alt="" />
          <img src="https://cdn.jsdelivr.net/npm/game-icons-transparent@latest/svgs/lorc/waves.svg" className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 text-white rotate-12" alt="" />
          
          <div className="relative z-10 space-y-12">
            <h2 className="font-syne text-5xl sm:text-8xl font-extrabold text-white leading-[1] tracking-tighter">
              Ready for Your <br className="hidden sm:block" /> <span className="text-ice text-glow italic">Big Adventure?</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg sm:text-2xl leading-relaxed font-medium">
              Join 1.2M+ travelers who trust ZigZagBus for their premium journeys. Aerodynamic comfort, real-time tracking, and unbeatable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/search" className="bg-white text-midnight font-bold px-12 sm:px-14 py-5 sm:py-6 rounded-[30px] hover:shadow-4xl hover:shadow-white/30 transition-all hover:scale-105 active:scale-95 text-lg sm:text-xl uppercase tracking-widest">
                Book Now
              </Link>
              <button className="bg-white/5 text-white border-2 border-white/10 font-bold px-12 sm:px-14 py-5 sm:py-6 rounded-[30px] backdrop-blur-2xl hover:bg-white/15 transition-all hover:scale-105 active:scale-95 text-lg sm:text-xl uppercase tracking-widest">
                Get App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
