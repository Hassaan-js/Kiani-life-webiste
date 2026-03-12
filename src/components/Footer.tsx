import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Coverage: ["Life Insurance", "Health Insurance", "Medicare Plans", "Retirement Planning", "Supplemental"],
  Company: ["About Us", "Our Process", "Testimonials", "Blog", "Contact"],
  Resources: ["Free Quote", "Medicare Guide", "IUL Explained", "Insurance FAQ", "Privacy Policy"],
};

const Footer = () => (
  <footer className="bg-[#050608] pt-20 pb-9 border-t border-subtle">
    <div className="wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-14 mb-9 border-b border-[hsl(var(--input))]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-[38px] h-[38px] border border-gold flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-[15px] font-bold text-t1 tracking-[0.04em] block leading-tight">Kiani Life & Health</span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-t3 uppercase block">Insurance & Retirement</span>
            </div>
          </div>
          <p className="text-sm font-light text-t3 leading-relaxed max-w-[300px] mb-6">
            Licensed, independent insurance agency helping Florida families protect what matters most. Free, unbiased guidance across 15+ carriers.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href="tel:8442983473" className="flex items-center gap-2.5 text-[13px] text-t3 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" /> 844.298.3473
            </a>
            <a href="mailto:corporate@kianilifeandhealth.com" className="flex items-center gap-2.5 text-[13px] text-t3 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" /> corporate@kianilifeandhealth.com
            </a>
            <span className="flex items-center gap-2.5 text-[13px] text-t3">
              <MapPin className="w-4 h-4 flex-shrink-0" /> 1235 Providence Blvd, Deltona, FL
            </span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-t3 mb-5">{title}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-light text-[rgba(255,255,255,0.25)] hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3.5">
        <span className="text-[11px] font-medium tracking-[0.06em] text-t3">
          © {new Date().getFullYear()} Kiani Life & Health. All rights reserved.
        </span>
        <div className="flex gap-5">
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="text-[11px] font-medium tracking-[0.06em] text-t3 hover:text-gold transition-colors">Disclosures</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
