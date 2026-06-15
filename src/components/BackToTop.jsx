import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-midnight hover:bg-primary text-white rounded-2xl shadow-xl shadow-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-1 active:scale-90"
      aria-label="Back to top"
    >
      <i className="ti ti-arrow-up text-lg"></i>
    </button>
  );
}
