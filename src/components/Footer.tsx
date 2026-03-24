import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[#050608] pt-20 pb-9 border-t border-subtle">
    <div className="wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-14 mb-9 border-b border-[hsl(var(--input))]">
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <img src={logo} alt="Kiani Life and Health logo" className="w-[38px] h-[38px] object-contain flex-shrink-0" />
            <div>
              <span className="font-serif text-[15px] font-bold text-t1 tracking-[0.04em] block leading-tight">Kiani Life & Health</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-t3 uppercase block">Careers & Recruiting</span>
            </div>
          </div>
          <p className="text-sm font-light text-t3 leading-relaxed max-w-[300px] mb-6">
            Building the next generation of insurance professionals. Join an agency that invests in your success from day one.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href="tel:8442983473" className="flex items-center gap-2.5 text-[13px] text-t3 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" /> 844.298.3473
            </a>
            <a href="mailto:careers@kianilifeandhealth.com" className="flex items-center gap-2.5 text-[13px] text-t3 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" /> careers@kianilifeandhealth.com
            </a>
            <span className="flex items-center gap-2.5 text-[13px] text-t3">
              <MapPin className="w-4 h-4 flex-shrink-0" /> 1235 Providence Blvd, Deltona, FL
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-t3 mb-5">Opportunity</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/why-kiani" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Why Us</Link></li>
            <li><Link to="/earnings" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Earning Potential</Link></li>
            <li><Link to="/how-it-works" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">How It Works</Link></li>
            <li><Link to="/success-stories" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Success Stories</Link></li>
            <li><a href="https://calendly.com/kiani-life-and-health/30min" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Book a Call</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-t3 mb-5">Learn More</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/commissions" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Commissions</Link></li>
            <li><Link to="/training" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Training System</Link></li>
            <li><Link to="/leads" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Lead System</Link></li>
            <li><Link to="/career-growth" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Career Path</Link></li>
            <li><Link to="/bonuses" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Bonuses</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-t3 mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="/#team" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Meet the Team</a></li>
            <li><Link to="/partners" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Partners</Link></li>
            <li><a href="/#faq" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3.5">
        <span className="text-[11px] font-medium tracking-[0.06em] text-t3">
          © {new Date().getFullYear()} Kiani Life & Health. All rights reserved.
        </span>
        <div className="flex gap-5">
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Income Disclaimer</a>
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
