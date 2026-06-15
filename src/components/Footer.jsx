import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/20">
            <i className="ti ti-bus"></i>
          </div>
          <span className="font-syne text-2xl font-extrabold text-midnight tracking-tight">ZigZagBus</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-400 font-semibold text-sm">
          <Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link>
          <Link to="/faq" className="hover:text-primary transition-colors duration-200">FAQ</Link>
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: "ti-brand-twitter", href: "#!" },
            { icon: "ti-brand-instagram", href: "#!" },
            { icon: "ti-brand-facebook", href: "#!" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href} 
              className="w-11 h-11 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className={`${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 mt-16 text-center pt-10 border-t border-slate-50">
        <p className="text-slate-300 text-xs font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} ZigZagBus. Premium Transit Solutions.
        </p>
      </div>
    </footer>
  );
}
