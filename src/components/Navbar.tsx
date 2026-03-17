import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Why Kiani", href: "/why-kiani", isHash: false },
  { label: "Earnings", href: "/earnings", isHash: false },
  { label: "How It Works", href: "/how-it-works", isHash: false },
  { label: "Success Stories", href: "/success-stories", isHash: false },
  { label: "Training", href: "/training", isHash: false },
  { label: "FAQ", href: "/#faq", isHash: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(7,9,15,0.95)] backdrop-blur-[20px] border-b border-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-[76px] max-w-[1200px] mx-auto px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-3.5">
            <img src={logo} alt="Kiani Life and Health logo" className="w-[42px] h-[42px] object-contain flex-shrink-0" />
            <div>
              <span className="font-serif text-[15px] font-bold text-t1 tracking-[0.04em] block leading-tight">Kiani Life & Health</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-t3 uppercase block">Careers · Join the Team</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) =>
              l.isHash ? (
                <a key={l.label} href={`/${l.href}`} className="text-[13px] font-medium tracking-[0.05em] text-t2 relative group transition-colors duration-300 hover:text-t1">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-right transition-transform duration-350 group-hover:scale-x-100 group-hover:origin-left" />
                </a>
              ) : (
                <Link key={l.label} to={l.href} className="text-[13px] font-medium tracking-[0.05em] text-t2 relative group transition-colors duration-300 hover:text-t1">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-right transition-transform duration-350 group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center">
            <a href="/#apply" className="group relative inline-flex items-center gap-2.5 px-9 py-[15px] bg-gold text-primary-foreground text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden">
              <span className="relative z-10">Book a Call</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span className="absolute inset-0 bg-[hsl(var(--gold-hi))] -translate-x-full transition-transform duration-400 group-hover:translate-x-0" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />
            </a>
          </div>

          <button className="lg:hidden flex flex-col gap-[5px] p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6 text-t2" /> : (
              <>
                <span className="block w-[22px] h-[1.5px] bg-[hsl(var(--t2))]" />
                <span className="block w-[22px] h-[1.5px] bg-[hsl(var(--t2))]" />
                <span className="block w-[22px] h-[1.5px] bg-[hsl(var(--t2))]" />
              </>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 bg-ink z-[999] flex flex-col justify-center px-6 gap-1">
          {navLinks.map((l) =>
            l.isHash ? (
              <a key={l.label} href={`/${l.href}`} onClick={() => setMobileOpen(false)} className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-t2 py-2.5 border-b border-[hsl(var(--input))] transition-all duration-300 hover:text-gold hover:pl-4">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)} className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-t2 py-2.5 border-b border-[hsl(var(--input))] transition-all duration-300 hover:text-gold hover:pl-4">
                {l.label}
              </Link>
            )
          )}
          <div className="absolute bottom-10 left-6 right-6 flex items-center justify-center">
            <a href="/#apply" onClick={() => setMobileOpen(false)} className="text-sm text-gold tracking-[0.08em] uppercase font-semibold">Book a Call →</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
